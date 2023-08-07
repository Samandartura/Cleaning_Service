import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserAttrs{
  first_name: string;
  last_name : string;
  username:string;
  phone_number:string;
  hashed_password:string;
  email:string;
  location:string;
  hashed_refresh_token:string;
}

@Table({tableName:"users"})
export class User extends  Model<User,UserAttrs>{
  @ApiProperty({example:1, description:""})
  @Column({
    type:DataType.INTEGER,
    autoIncrement:true,
    primaryKey:true
  })
  id: number;

  @ApiProperty({example:"userni ismi",description:"Foydalanuvchi"})
  @Column({
    type:DataType.STRING,  
    unique:true   
  })
   first_name: string;

  @ApiProperty({example:"userni familyasi",description:"Foydalanuvchi"})
  @Column({
    type:DataType.STRING, 
    unique:true   
  })
  last_name : string;


  @ApiProperty({example:"userni username",description:"Foydalanuvchi"})
  @Column({
    type:DataType.STRING, 
    // unique:true    
  })
  username:string;

  @ApiProperty({example:"userni telefoni",description:"Foydalanuvchi"})
  @Column({
    type:DataType.STRING, 
  })
  phone_number:string;


  @ApiProperty({example:"token",description:"Foydalanuvchi"})
  @Column({
    type:DataType.STRING, 
  })
  hashed_password:string;

  @ApiProperty({example:"samandar77turayev@gmail.com",description:"Foydalanuvchi"})
  @Column({
    type:DataType.STRING, 
  })
  email:string;


  @ApiProperty({example:"userni manzili",description:"Foydalanuvchi"})
  @Column({
    type:DataType.STRING,    
  })
  location:string;

  @ApiProperty({example:"userni telefoni",description:"Foydalanuvchi"})
  @Column({
    type:DataType.STRING,    
  })
  hashed_refresh_token:string;

  @Column({
    type:DataType.STRING
  })
  activation_link: string;

}