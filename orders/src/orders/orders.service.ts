import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
    private orders = []

    createOrder(orderData: any) {
        this.orders.push(orderData)
        return orderData
    }

    getAllOrders() {
        console.log('microservice-service');
        return this.orders
    }
}
