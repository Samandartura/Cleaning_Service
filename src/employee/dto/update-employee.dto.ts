import { PartialType } from '@nestjs/swagger';
import { CreateEmployeeDto } from './create-employee.dto';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {
   first_name?: string;
  last_name ?: string;
  username?:string;
  phone_number?:string;
  employee_mark?:number;
  is_idle?:boolean;
  email?:string;
}
