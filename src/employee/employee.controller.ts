import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Employee } from './models/employee.model';

@ApiTags("Employees")
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @ApiOperation({summary:"create employee"})
  @ApiResponse({status:201,type:Employee})
  @Post("create")
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @ApiOperation({summary:"get employees"})
  @ApiResponse({status:201,type:Employee})
  @Get("all")
  findAll() {
    return this.employeeService.findAll();
  }

  @ApiOperation({summary:"get employee"})
  @ApiResponse({status:201,type:Employee})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(+id);
  }

  @ApiOperation({summary:"update employee"})
  @ApiResponse({status:201,type:Employee})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeService.update(+id, updateEmployeeDto);
  }

  @ApiOperation({summary:"destroy employee"})
  @ApiResponse({status:201,type:Employee})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.remove(+id);
  }
}
