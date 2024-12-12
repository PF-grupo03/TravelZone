import { Body, Controller, Get, Param, ParseUUIDPipe, Post, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CreateOrderDto } from './orders.dto';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
    constructor (private readonly orderService: OrdersService) {}

    @Post()
    @ApiOperation({ summary: 'Add a new order', description: 'Create a new order for the current user' })
    @ApiResponse({ status: 201, description: 'Order created successfully' })
    @ApiResponse({ status: 400, description: 'Bad request' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    @ApiBody({ type: [CreateOrderDto] })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    addOrder(@Body() order: CreateOrderDto) {
        const { userId, products} = order;
        return this.orderService.addOrder(userId, products);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get an order by ID', description: 'Gets the details of a specific order by its ID' })
    @ApiResponse({ status: 200, description: 'Order retrieved successfully' })
    @ApiResponse({ status: 400, description: 'Bad request' })
    @ApiResponse({ status: 404, description: 'Order not found' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    getOrder(@Param('id', ParseUUIDPipe) id: string) {
        return this.orderService.getOrder(id);
    }
}
