import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Order } from './models/order.model';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

 
  @ApiOperation({summary:"create order"})
  @ApiResponse({status:201,type:Order})
  @Post("create")
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @ApiOperation({summary:"get orders"})
  @ApiResponse({status:201,type:Order})
  @Get("all")
  findAll() {
    return this.orderService.findAll();
  }
 
  @ApiOperation({summary:"get order"})
  @ApiResponse({status:201,type:Order})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }

  @ApiOperation({summary:"update order"})
  @ApiResponse({status:201,type:Order})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+id, updateOrderDto);
  }

  @ApiOperation({summary:"destroy order"})
  @ApiResponse({status:201,type:Order})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}
