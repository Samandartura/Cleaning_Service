import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface SkillAttrs{
  name:string;
  service_id:number;
  price:number;
}
@Table({tableName:"skill"})
export class Skill extends Model<Skill,SkillAttrs>{
   @ApiProperty({example:1, description:""})
  @Column({
    type:DataType.INTEGER,
    autoIncrement:true,
    primaryKey:true
  })
  id: number;

  @ApiProperty({example:"skill nomi",description:"skill"})
  @Column({
    type:DataType.STRING,  
    unique:true   
  })
   name: string;

  @ApiProperty({example:"service id",description:"skill"})
  @Column({
    type:DataType.INTEGER,  
    unique:true   
  })
   service_id: string;

   @ApiProperty({example:"skill narxi",description:"skill"})
  @Column({
    type:DataType.INTEGER,  
    unique:true   
  })
   price: number;
}
