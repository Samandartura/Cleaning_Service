import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response,Request } from 'express';
import { User } from './models/user.model';

import { LoginUserDto } from './dto/login-user.dto';
// import { CookieGetter } from '../decorators/cookieGetter.decorator';
// import { FindUserDto } from './dto/finduset.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CookieGetter } from '../decorators/cookieGetter.decorators';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { Roles } from '../decorators/roles-auth.decorator';


@ApiTags("Users")
@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  
  @ApiOperation({summary:"register user"})
  @ApiResponse({status:201,type:User})
  // @UseGuards(JwtAuthGuard)
  // @Roles('ADMIN')
  @Post("signup")
  registration(   
    @Body() createUserDto:CreateUserDto,
    @Res({passthrough:true}) res:Response
  ){
    return this.usersService.registration(createUserDto, res)
  }

  @ApiOperation({summary:"login user"})
  @ApiResponse({status:201,type:User})
  @HttpCode(HttpStatus.OK)
  @Post("login")
  Login(
    @Body() loginUserDto:LoginUserDto,
    @Res({passthrough:true}) res:Response
  ){
    return this.usersService.login(loginUserDto, res)
  }

 
  @ApiOperation({summary:"get user"})
  @ApiResponse({status:201,type:User})
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @Get("all")
  async gettAllUser():Promise<User[]>{
    return this.usersService.getAllUsers();
  }

  @ApiOperation({summary:"get user"})
  @ApiResponse({status:201,type:User})
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    
    return this.usersService.getUserById(+id);
  }

  @ApiOperation({summary:"logout user"})
  @ApiResponse({status:201,type:User})
  @HttpCode(HttpStatus.OK)
  @Post("singout")
  Logout(
    @CookieGetter("refresh_token") refreshToken:string,
    @Res({passthrough:true}) res:Response
  ){
    return this.usersService.logout(refreshToken, res)
  }
}
  




//   @Post(":id/refresh")
//   refresh(
//     @Param("id" ) id:string,
//     @CookieGetter("refresh_token") refreshToken:string,
//     @Res({passthrough:true}) res:Response,
//   ){
//     return this.usersService.refreshToken(+id,refreshToken,res)
//   }



