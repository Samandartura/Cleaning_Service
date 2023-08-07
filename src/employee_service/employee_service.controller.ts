import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { EmployeeServicesService } from './employee_service.service';
import { CreateEmployeeServiceDto } from './dto/create-employee_service.dto';
import { UpdateEmployeeServiceDto } from './dto/update-employee_service.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Employee_Service } from './models/employee_service.model';

@Controller('employee-service')
export class ESController {
  constructor(private readonly eSService: EmployeeServicesService) {}

  @ApiOperation({summary:"create employee_servise"})
  @ApiResponse({status:201,type:Employee_Service})
  @Post("create")
  create(@Body() createEmployeeServiceDto: CreateEmployeeServiceDto) {
    return this.eSService.create(createEmployeeServiceDto);
  }

  @ApiOperation({summary:"get employee_servise"})
  @ApiResponse({status:201,type:Employee_Service})
  @Get("all")
  findAll() {
    return this.eSService.findAll();
  }

  @ApiOperation({summary:"get employee_Service"})
  @ApiResponse({status:201,type:Employee_Service})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eSService.findOne(+id);
  }

  @ApiOperation({summary:"update employee_Service"})
  @ApiResponse({status:201,type:Employee_Service})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateEmployeeServiceDto: UpdateEmployeeServiceDto) {
    return this.eSService.update(+id, updateEmployeeServiceDto);
  }

  @ApiOperation({summary:"destroy employee_Service"})
  @ApiResponse({status:201,type:Employee_Service})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eSService.remove(+id);
  }
}
