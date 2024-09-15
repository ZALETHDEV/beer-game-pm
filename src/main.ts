import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('The Beer Game')
    .setDescription('The Beer Game API is a tool designed to simulate and manage the dynamics of a supply chain within the context of the classic business simulation game. It allows users to take on roles such as factories, distributors, wholesalers, and retailers, helping them make decisions about inventories, orders, and shipments. The API facilitates integration with external platforms by providing endpoints for tracking inventory, managing orders, and visualizing performance metrics, with the goal of optimizing product flow and minimizing costs throughout the supply chain.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();