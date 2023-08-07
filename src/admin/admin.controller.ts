import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './models/admin.model';

@ApiTags("Admins")
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}


  
  @ApiOperation({summary:"create admin"})
  @ApiResponse({status:201,type:Admin})
  @Post("create")
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  
  @ApiOperation({summary:"get all admin"})
  @ApiResponse({status:201,type:Admin})
  @Get("all")
  findAll() {
    return this.adminService.findAll();
  }

  @ApiOperation({summary:"get admin"})
  @ApiResponse({status:201,type:Admin})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

   @ApiOperation({summary:"update admin"})
  @ApiResponse({status:201,type:Admin})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

   @ApiOperation({summary:"destroy admin"})
  @ApiResponse({status:201,type:Admin})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
