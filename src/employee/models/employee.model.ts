import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface EmployeeAttrs{
  first_name: string;
  last_name : string;
  username:string;
  phone_number:string;
  employee_mark:number;
  is_idle:boolean;
  email:string;

}

@Table({tableName:"employees"})
export class Employee extends  Model<Employee,EmployeeAttrs>{
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


  @ApiProperty({example:"samandar77turayev@gmail.com",description:"Foydalanuvchi"})
  @Column({
    type:DataType.INTEGER, 
  })
  employee_mark:number;

    @ApiProperty({example:"samandar77turayev@gmail.com",description:"Foydalanuvchi"})
  @Column({
    type:DataType.BOOLEAN, 
  })
  is_idle:boolean;


  @ApiProperty({example:"samandar77turayev@gmail.com",description:"Foydalanuvchi"})
  @Column({
    type:DataType.STRING, 
  })
  email:string;




}