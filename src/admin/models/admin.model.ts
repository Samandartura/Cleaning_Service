import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface AdminAttrs{
  username:string;
  phone_number:string;
  email:string;
  hashed_password:string;
  is_active:boolean;
  is_owner:boolean;
  
}

@Table({tableName:"admin"})
export class Admin extends  Model<Admin,AdminAttrs>{
  @ApiProperty({example:1, description:""})
  @Column({
    type:DataType.INTEGER,
    autoIncrement:true,
    primaryKey:true
  })
  id: number;

  @ApiProperty({example:"Admin username",description:"Foydalanuvchi"})
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
    type:DataType.BOOLEAN,    
  })
  is_active:boolean;

  @ApiProperty({example:"userni telefoni",description:"Foydalanuvchi"})
  @Column({
    type:DataType.BOOLEAN,    
  })
  is_owner:boolean;


}