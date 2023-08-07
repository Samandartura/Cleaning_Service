import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { where } from 'sequelize';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './models/admin.model';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private readonly adminRepo: typeof Admin ){}

  async create(createAdminDto: CreateAdminDto):Promise<Admin> {
    return await this.adminRepo.create(createAdminDto )
  }

  async findAll():Promise<Admin[]>  {
    return await this.adminRepo.findAll();
  }

  async findOne(id: number):Promise<Admin>  {
    return await this.adminRepo.findByPk(id)
  }

  async update(id: number, updateAdminDto: UpdateAdminDto):Promise<Admin>  {
    const admin = await this.adminRepo.update(updateAdminDto,{
      where:{id}, returning:true})
    return admin[1][0].dataValues
  }

  async remove(id):Promise<number>  {
    return await this.adminRepo.destroy(id)
  }
}
