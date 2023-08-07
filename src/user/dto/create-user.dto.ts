import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsStrongPassword, MinLength } from "class-validator";




export class CreateUserDto {
  @ApiProperty({example:"userni ismi", description:"foydalanuvchi"})
  @IsNotEmpty()
  @IsString()
  first_name: string;
  
  @ApiProperty({example:"userni familiyasi",description:"Foydalanuvchi"})
  @IsNotEmpty()
  @IsString()
  last_name : string;

  @ApiProperty({example:"samandar",description:"Foydalanuvchi"})
  @IsNotEmpty()
  @IsString()
  username:string;

  @ApiProperty({example:"userni telefoni",description:"Foydalanuvchi"})
  // @IsNotEmpty()
  @IsPhoneNumber()
  phone_number:string;

  @ApiProperty({example:"password",description:"Foydalanuvchi"})
  // @IsNotEmpty()
  @IsString()
  // @MinLength(6)
  password:string;

  @ApiProperty({example:"confirm password",description:"Foydalanuvchi"})
  // @IsNotEmpty()
  @IsString()
  // @MinLength(6)
  // @IsStrongPassword()
  confirm_password:string;

  @ApiProperty({example:"userni emaili",description:"Foydalanuvchi"})
  @IsNotEmpty()
  @IsEmail() 
  email:string;

  @ApiProperty({example:"userni manzili",description:"Foydalanuvchi"})
  @IsNotEmpty()
  @IsString()
  location:string;

}
