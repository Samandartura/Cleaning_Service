import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ServiceAttrs{
  name:string;
}
@Table({tableName:"service"})
export class Service extends Model<Service,ServiceAttrs>{
   @ApiProperty({example:1, description:""})
  @Column({
    type:DataType.INTEGER,
    autoIncrement:true,
    primaryKey:true
  })
  id: number;

  @ApiProperty({example:"service nomi",description:"service"})
  @Column({
    type:DataType.STRING,  
    unique:true   
  })
   name: string;
}
