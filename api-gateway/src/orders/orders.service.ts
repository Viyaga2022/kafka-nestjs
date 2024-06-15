import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';

@Injectable()
export class OrdersService implements OnModuleInit {
    @Client({
        transport: Transport.KAFKA,
        options: {
            client: {
                brokers: ['127.0.0.1:9092']
            },
            consumer: {
                groupId: 'api-gateway-orders-consumer',
                sessionTimeout: 30000,
                heartbeatInterval: 10000,
                rebalanceTimeout: 60000,
            }
        }
    })

    client: ClientKafka

    async onModuleInit() {
        this.client.subscribeToResponseOf('create_order')
        this.client.subscribeToResponseOf('get_all_orders')
        await this.client.connect()
    }

    createOrder(orderData: any) {
        return this.client.send('create_order', orderData)
    }

    getAllOrders() {
        console.log('api-orders-service');
        return this.client.send('get_all_orders', {})
    }
}
