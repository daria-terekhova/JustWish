import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Just Wish')
    .setDescription('API description')
    .setVersion('1.0')
    .build();
  
  SwaggerModule.setup('api/swagger', app, SwaggerModule.createDocument(app, config));
  
  app.setGlobalPrefix('api');

  await app.listen(3000);
}
bootstrap();
