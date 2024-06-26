import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['127.0.0.1:9092']
      },
      consumer: {
        groupId: 'auth-consumer',
        sessionTimeout: 30000,
        heartbeatInterval: 10000,
        rebalanceTimeout: 60000,
      }
    }
  });
  await app.listen();
}
bootstrap();
