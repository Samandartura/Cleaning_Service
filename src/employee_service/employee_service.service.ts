import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEmployeeServiceDto } from './dto/create-employee_service.dto';
import { UpdateEmployeeServiceDto } from './dto/update-employee_service.dto';
import { Employee_Service } from './models/employee_service.model';

@Injectable()
export class EmployeeServicesService {
    constructor(@InjectModel(Employee_Service) private readonly employee_ServiceRepo:typeof Employee_Service){}

   async create(createEmployee_ServiceDto: CreateEmployeeServiceDto):Promise<Employee_Service> {
    return await this.employee_ServiceRepo.create(createEmployee_ServiceDto)
  }

  async findAll():Promise<Employee_Service[]> {
    return await this.employee_ServiceRepo.findAll();
  }

  async findOne(id: number):Promise<Employee_Service> {
    return await this.employee_ServiceRepo.findByPk(id)
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeServiceDto):Promise<Employee_Service> {
    const employee = await this.employee_ServiceRepo.update(updateEmployeeDto,{
      where:{id}, returning: true
    })
    return employee[1][0].dataValues
  }

  async remove(id):Promise<number> {
    return await this.employee_ServiceRepo.destroy(id)
  }
}

