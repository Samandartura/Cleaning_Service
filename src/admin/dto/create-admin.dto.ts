export class CreateAdminDto {
  username:string;
  phone_number:string;
  email:string;
  hashed_password:string;
  is_active:boolean;
  is_owner:boolean;
}
