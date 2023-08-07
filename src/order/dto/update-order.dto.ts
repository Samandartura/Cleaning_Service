import { PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  employee_id?:number;
  service_id?:number;
  user_id?:number;
  user_comment?:string;
  start_time?:Date;
  end_time?:Date;
}
