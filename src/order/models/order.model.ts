import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface OrderAtrrs{
  employee_id:number;
  service_id:number;
  user_id:number;
  user_comment:string;
  start_time:Date;
  end_time:Date;
}
@Table({tableName:"orders"})
export class Order extends Model<Order,OrderAtrrs>{
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

  @ApiProperty({example:"user id", description:""})
  @Column({
    type:DataType.INTEGER,
  })
  user_id:number;


  @ApiProperty({example:"user comment", description:""})
  @Column({
    type:DataType.STRING,
  })
  user_comment:string;

    @ApiProperty({example:"start time", description:""})
  @Column({
    type:DataType.DATE,
  })
  start_time:Date;


    @ApiProperty({example:"start time", description:""})
  @Column({
    type:DataType.DATE,
  })
  end_time:Date;

 
}
