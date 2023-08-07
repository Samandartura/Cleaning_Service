import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './models/order.model';

@Injectable()
export class OrderService {
 constructor(@InjectModel(Order) private readonly orderRepo:typeof Order){}

  async create(createEmployeeDto: CreateOrderDto):Promise<Order> {
    return await this.orderRepo.create(createEmployeeDto)
  }

  async findAll():Promise<Order[]> {
    return await this,this.orderRepo.findAll();
  }

  async findOne(id: number):Promise<Order> {
    return await this.orderRepo.findByPk(id)
  }

  async update(id: number, updateOrderDto: UpdateOrderDto):Promise<Order> {
    const employee = await this.orderRepo.update(updateOrderDto,{
      where:{id}, returning: true
    })
    return employee[1][0].dataValues
  }

  async remove(id):Promise<number> {
    return await this.orderRepo.destroy(id)
  }
}
