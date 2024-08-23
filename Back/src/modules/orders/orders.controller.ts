import { Body, Controller, Get, Param, ParseUUIDPipe, Post, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CreateOrderDto } from './orders.dto';

@Controller('orders')
export class OrdersController {
    constructor (private readonly orderService: OrdersService) {}

    @ApiOperation({ summary: 'Agregar una nueva orden', description: 'Crea una nueva orden para el usuario actual.' })
    @ApiBearerAuth()
    @Post()
    @UseGuards(AuthGuard)
    addOrder(@Body() order: CreateOrderDto) {
        const { userId, products} = order;
        return this.orderService.addOrder(userId, products);
    }

    @ApiOperation({ summary: 'Obtener una orden por ID', description: 'Obtiene los detalles de una orden específica por su ID.' })
    @ApiBearerAuth()
    @Get(':id')
    @UseGuards(AuthGuard)
    getOrder(@Param('id', ParseUUIDPipe) id: string) {
        return this.orderService.getOrder(id);
    }
}
