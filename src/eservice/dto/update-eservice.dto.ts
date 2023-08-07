import { PartialType } from '@nestjs/swagger';
import { CreateEmployeeServiceDto } from './create-eservice.dto';

export class UpdateEmployeeServiceDto extends PartialType(CreateEmployeeServiceDto) {}
