import { Body, Controller } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @MessagePattern('create_order')
  createOrders(orderData: any) {
    return this.ordersService.createOrder(orderData)
  }

  @MessagePattern('get_all_orders')
  getAllOrders() {
    console.log('microservice-controller');
    return this.ordersService.getAllOrders()
  }
}
