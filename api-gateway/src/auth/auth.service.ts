import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';

@Injectable()
export class AuthService implements OnModuleInit {
    @Client({
        transport: Transport.KAFKA,
        options: {
            client: {
                brokers: ['127.0.0.1:9092']
            },
            consumer: {
                groupId: 'api-gateway-consumer',
                sessionTimeout: 30000,
                heartbeatInterval: 10000,
                rebalanceTimeout: 60000,
            }
        }
    })

    client: ClientKafka

    async onModuleInit() {
        this.client.subscribeToResponseOf('create_user')
        this.client.subscribeToResponseOf('get_all_users')
        await this.client.connect()
    }

    createUser(userData: any) {
        return this.client.send('create_user', userData)
    }

    getAllUsers() {
        return this.client.send('get_all_users', {})
    }
}
