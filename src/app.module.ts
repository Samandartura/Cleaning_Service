import { Module } from '@nestjs/common';
import {ConfigModule } from "@nestjs/config"
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/models/user.model';
import { UserModule } from './user/user.module';
import { ServicesModule } from './services/services.module';
import { OrderModule } from './order/order.module';
import { EmployeeModule } from './employee/employee.module';
import { AdminModule } from './admin/admin.module';
// import { ESModule } from './employee_service/employee_service.module';
import { SkillsModule } from './skills/skills.module';
import { Admin } from './admin/models/admin.model';
import { Employee } from './employee/models/employee.model';
import { Order } from './order/models/order.model';
import { Skill } from './skills/models/skill.model';
import { Service } from './services/models/service.model';
import { Employee_Service } from './employee_service/models/employee_service.model';
import { EService } from './eservice/models/eservice.model';


@Module({ 
  imports: [
    ConfigModule.forRoot({envFilePath: `.env`,isGlobal:true,}),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,   
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [ User,Admin,Employee,Order,Skill,Service ],
      autoLoadModels: true,
      logging:false
    }),
    UserModule,
    ServicesModule,
    OrderModule,
    EmployeeModule,
    AdminModule,
    // ESModule,
    SkillsModule,
    // ESModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
