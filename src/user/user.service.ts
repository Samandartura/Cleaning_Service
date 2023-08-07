import { Injectable } from '@nestjs/common';
import { BadRequestException, ForbiddenException, UnauthorizedException } from '@nestjs/common/exceptions';
import { response, Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.model';
import * as bcrypt from "bcrypt"
import {v4 as uuidv4} from "uuid"
import { Identifier, Op} from "sequelize"
// import { FindUserDto } from './dto/finduset.dto';
import { InjectModel } from '@nestjs/sequelize';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private readonly userRepo:typeof User,
  private readonly jwtService:JwtService){}
 
  async createUser(createUserDto:CreateUserDto): Promise<User>{ 
  const user = await this.userRepo.create(createUserDto)
  return user;
  }  


  async registration(createUserDto:CreateUserDto,res:Response){
    const user = await this.userRepo.findOne({
      where:{username: createUserDto.username},
    });
    if(user){
      throw new BadRequestException("User already exists!")
    }
    if(createUserDto.password !== createUserDto.confirm_password){
      throw new BadRequestException("Password is not match")
    }

    const hashed_password = await bcrypt.hash(createUserDto.password, 7);
    const newUser = await this.userRepo.create({
      ...createUserDto,
      hashed_password:hashed_password,
    });
    const tokens = await this.getTokens(newUser);

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token,7);
    const uniqueKey: string = uuidv4();
    const updateUser = await this.userRepo.update(
      {
        hashed_refresh_token:hashed_refresh_token,
        activation_link:uniqueKey,
      },
      {where:{id:newUser.id},returning:true},
    );
    res.cookie("refresh_token",tokens.refresh_token,{
      maxAge: 15*24*60*60*1000,
      httpOnly:true
    });
    
    const response = {
      message: "User registireted",
      user:updateUser[1][0],
      tokens,
    };
    return response;
    
  }

  async getTokens(user:User){
    const jwtPayload = {
      id:user.id,
    };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwtPayload,{
        secret:process.env.ACCESS_TOKEN_KEY,
        expiresIn:process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(jwtPayload,{
        secret:process.env.REFRESH_TOKEN_KEY,
        expiresIn:process.env.REFRESH_TOKEN_TIME
      }),
    ]);
    return {
      access_token:accessToken,
      refresh_token:refreshToken,
    }
  };



  async login(loginUserDto:LoginUserDto, res:Response){
    const {email, password} = loginUserDto;
    const user = await this.userRepo.findOne({where: {email}})
    if(!user){
      throw new UnauthorizedException("User not registration")
    }

    const isMatchPass = await bcrypt.compare(password,user.hashed_password)
    if(!isMatchPass){
      throw new UnauthorizedException("User not registration")
 
    }
    const tokens = await this.getTokens(user);

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token,7);
    // const uniqueKey: string = uuidv4();
    const updateUser = await this.userRepo.update(
      {hashed_refresh_token:hashed_refresh_token},
      {where: {id: user.id}, returning: true}
    );
    res.cookie("refresh_token",tokens.refresh_token,{
      maxAge: 15*24*60*60*1000,
      httpOnly:true
    });
    const response = {
      message: "User logged in ",
      user:updateUser[1][0],
      tokens,
    };
    return response;
    }

    async getAllUsers(): Promise<User[]>{
      return await this.userRepo.findAll();
    }

    async getUserById(id: number): Promise<User>{
      const user=await this.userRepo.findByPk(id);
      console.log(user);
      
      if(!user){
        throw new UnauthorizedException("user not found")
      }
      return user;
    }

    async getUserByEmail(id): Promise<User>{
      return await this.userRepo.findByPk(id);
    }

  async deleteUserById(id): Promise<number>{
      return await this.userRepo.destroy(id);
    }


    async logout(refreshToken: string, res: Response) {
    const userData = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY,
    });
    if (!userData) {
      throw new BadRequestException('usernpt foud');
    }
    const updatedUser = await this.userRepo.update(
      { hashed_refresh_token: null },
      { where: { id: userData.id }, returning: true },
    );

    res.clearCookie('refresh_token');
    const response = {
      message: 'User logged out successfully',
      user: updatedUser[1][0],
    };

    return response;
  }

}
 

  
  

// //   async refreshToken(user_id: number, refreshToken:string, res:response);
// //   const decodedToken = this.jwtService.decode(refreshToken)
// //   if(user_id != decodedToken["id"]){
// //     throw new BadRequestException("user not found")
// //   }
// //   const user = await this.userRepo.findOne({where: id = {user_id}})
// //   if(!user){
// //     throw new BadRequestException
// //   }
// }
//   findAll(findUserDto:FindUserDto) {
//     const where ={}
//     if(findUserDto.first_name){
//       where["first_name"] = {
//         [Op.like]: `%${findUserDto.first_name}%`,
//       }
//     }

//     if(findUserDto.last_name){
//        where["last_name"] = {
//         [Op.like]: `%${findUserDto.last_name}%`,
//       }
//     }

//     if(findUserDto.username){
//        where["username"] = {
//         [Op.like]: `%${findUserDto.username}%`,
//       }
//     }

//     if(findUserDto.birthday_begin && findUserDto.birthday_end){
//        where[Op.and] = {
//         birthday: {
//           [Op.between]:[findUserDto.birthday_begin,findUserDto.birthday_end]
//         }
//       }
//     }
//     else if(findUserDto.birthday_begin){
//        where["birthday"] = {
//         [Op.like]: `%${findUserDto.birthday_begin}%`,
//       }
//     }
//     else if(findUserDto.birthday_end){
//        where["birthday"] = {
//         [Op.like]: `%${findUserDto.birthday_end}%`,
//       }
//     }
//   }
