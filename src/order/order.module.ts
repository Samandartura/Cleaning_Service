import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { Order } from './models/order.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Order]),
    JwtModule.register({}),
  ],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
