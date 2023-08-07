import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './models/service.model';

@Injectable()
export class ServicesService {
  constructor(@InjectModel(Service) private readonly serviceRepo:typeof Service,
  private readonly jwtService:JwtService){}
  
  async create(createServiceDto: CreateServiceDto) {
    return await this.serviceRepo.create(createServiceDto)
  }

  async findAll():Promise<Service[]> {
    return await this.serviceRepo.findAll();
  }

  async findOne(id: number):Promise<Service> {
    return await this.serviceRepo.findByPk(id);
  }

  async update(id: number, updateServiceDto: UpdateServiceDto):Promise<Service> {
    const service = await this.serviceRepo.update(updateServiceDto,{
      where:{id}, returning:true
    });
    return service[1][0].dataValues;
  }

  async remove(id):Promise<number> {
    return this.serviceRepo.destroy(id);
  }
}
