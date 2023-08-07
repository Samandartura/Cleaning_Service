import { ApiProperty } from "@nestjs/swagger";
import { Model } from "sequelize";
import { Column, DataType, Table } from "sequelize-typescript";

interface employee_serviceAttrs{
  employee_id:number;
  service_id:number;
  price:number
}

@Table({tableName:"Employee_Service"})
export class EService extends Model<EService,employee_serviceAttrs> {

  @ApiProperty({example:1, description:""})
  @Column({
    type:DataType.INTEGER,
    autoIncrement:true,
    primaryKey:true
  })
  id: number;

  @ApiProperty({example:"employee id", description:""})
  @Column({
    type:DataType.INTEGER,
  })
  employee_id:number;

   @ApiProperty({example:"service id", description:""})
  @Column({
    type:DataType.INTEGER,
  })
  service_id:number;

  @ApiProperty({example:"price", description:""})
  @Column({
    type:DataType.DECIMAL,
  })
  price:number

}

