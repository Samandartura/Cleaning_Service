import { Module } from '@nestjs/common';
import { EmployeeServicesService } from './eservice.service';
import { ESController } from './eservice.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { EService } from './models/eservice.model';

@Module({
  imports: [
    SequelizeModule.forFeature([EService]),
    JwtModule.register({}),
  ],
  controllers: [ESController],
  providers: [EmployeeServicesService]
})
export class ESModule {}
