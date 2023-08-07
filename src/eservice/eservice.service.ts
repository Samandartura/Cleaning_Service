import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEmployeeServiceDto } from './dto/create-eservice.dto';
import { UpdateEmployeeServiceDto } from './dto/update-eservice.dto';
import { EService } from './models/eservice.model';

@Injectable()
export class EmployeeServicesService {
    constructor(@InjectModel(EService) private readonly employee_ServiceRepo:typeof EService){}

   async create(createEmployee_ServiceDto: CreateEmployeeServiceDto):Promise<EService> {
    return await this.employee_ServiceRepo.create(createEmployee_ServiceDto)
  }

  async findAll():Promise<EService[]> {
    return await this.employee_ServiceRepo.findAll();
  }

  async findOne(id: number):Promise<EService> {
    return await this.employee_ServiceRepo.findByPk(id)
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeServiceDto):Promise<EService> {
    const employee = await this.employee_ServiceRepo.update(updateEmployeeDto,{
      where:{id}, returning: true
    })
    return employee[1][0].dataValues
  }

  async remove(id):Promise<number> {
    return await this.employee_ServiceRepo.destroy(id)
  }
}

