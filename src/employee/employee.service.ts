import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './models/employee.model';

@Injectable()
export class EmployeeService {
  constructor(@InjectModel(Employee) private readonly employeeRepo:typeof Employee){}

  async create(createEmployeeDto: CreateEmployeeDto):Promise<Employee> {
    return await this.employeeRepo.create(createEmployeeDto)
  }

  async findAll():Promise<Employee[]> {
    return await this,this.employeeRepo.findAll();
  }

  async findOne(id: number):Promise<Employee> {
    return await this.employeeRepo.findByPk(id)
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto):Promise<Employee> {
    const employee = await this.employeeRepo.update(updateEmployeeDto,{
      where:{id}, returning: true
    })
    return employee[1][0].dataValues
  }

  async remove(id):Promise<number> {
    return await this.employeeRepo.destroy(id)
  }
}
