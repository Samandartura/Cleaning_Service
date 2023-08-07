import { PartialType } from '@nestjs/swagger';
import { CreateAdminDto } from './create-admin.dto';

export class UpdateAdminDto extends PartialType(CreateAdminDto) {
  username?:string;
  phone_number?:string;
  email?:string;
  hashed_password?:string;
  is_active?:boolean;
  is_owner?:boolean;
}
