import { Module } from '@nestjs/common';
import { EmployeeServicesService } from './employee_service.service';
import { ESController } from './employee_service.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { Employee_Service } from './models/employee_service.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Employee_Service]),
    JwtModule.register({}),
  ],
  controllers: [ESController],
  providers: [EmployeeServicesService]
})
export class ESModule1 {}
