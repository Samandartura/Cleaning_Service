import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger"
// import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from "cookie-parser";
import { ValidationPipe } from './pipes/validation.pipe';
// import { ValidationPipe } from '@nestjs/common';

async function start() {
  try {
     const config = new DocumentBuilder()
      .setTitle('cleaning service')
      .setDescription('mini project')
      .setVersion('1.0.0')
      .addTag('NodeJS, Nestjs, postgrres')
      .build();
    const PORT = process.env.PORT || 3030;
    const app = await NestFactory.create(AppModule)
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("/docs",app, document);
    app.use(cookieParser());
    app.setGlobalPrefix("api");
    app.useGlobalPipes(new ValidationPipe());

    await app.listen(PORT, ()=>{
      console.log(`Server ${PORT}-da ishga tushdi`);
    })
  
  } catch (error) {
    console.log(error);
  } 
}
start();


