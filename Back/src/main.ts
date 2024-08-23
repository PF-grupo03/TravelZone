import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
<<<<<<< HEAD
=======



>>>>>>> 9d4686bb99a9b849a7dbb41db303ea245f72514c

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('Proyecto Final Grupo03 Travel Zone')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
  }));
<<<<<<< HEAD
  await app.listen(3006);
=======
  await app.listen(3000);
  console.log('connection to the server succesful');
  
>>>>>>> 9d4686bb99a9b849a7dbb41db303ea245f72514c
}
bootstrap();
