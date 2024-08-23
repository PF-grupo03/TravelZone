import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
<<<<<<< HEAD
import { ApiTags } from '@nestjs/swagger';
=======
import { CreateProductDto, UpdateProductDto } from './product.dto';
>>>>>>> 68bd0ca9e415285698abae8b0e5b1008b0423431

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProductById(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsService.getProductById(id);
  }

  @Post()
  createProduct(@Body() product: CreateProductDto) {
    return this.productsService.createProduct(product)
  }

  @Put()
  updateProduct(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() product: UpdateProductDto,
  ) {
    return this.productsService.updateProduct(id, product);
  }
}
