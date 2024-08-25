import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
  UseGuards
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  CreateProductDto,
  FiltersProductsDto,
  UpdateProductDto,
} from './product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from '../users/roles.enum';
import { AuthGuard } from '../auth/guards/auth.guard';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'Get products', description: 'Get all products' })
  @ApiResponse({ status: 200, description: 'Products retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Products not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  getProducts(@Query() params?: FiltersProductsDto) {
    return this.productsService.getProducts(params);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get product', description: 'Get product using product ID' })
  @ApiResponse({ status: 200, description: 'Product retrieved successfully' })
  @ApiResponse({ status: 400, description: 'Invalid product ID' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  getProductById(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsService.getProductById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Add product', description: 'Add new product' })
  @ApiResponse({ status: 200, description: 'Product added successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({ type: [CreateProductDto] })
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  @UseInterceptors(FileInterceptor('file'))
  createProduct(
    @Body() product: CreateProductDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: 200000,
            message: 'Supera el peso máximo permitido (no mayor a 200kb)',
          }),
          new FileTypeValidator({
            fileType: /(jpg|jpeg|png|webp|svg|gif)/,
          }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.productsService.createProduct(product, file);
  }

  @Put()
  @ApiOperation({ summary: 'Update product', description: 'Update product using product ID' })
  @ApiResponse({ status: 200, description: 'Product updated successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiBody({ type: [UpdateProductDto] })
  @UseGuards(AuthGuard)
  updateProduct(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() product: UpdateProductDto,
  ) {
    return this.productsService.updateProduct(id, product);
  }

  @Delete()
  @ApiOperation({ summary: 'Delete product', description: 'Delete product using product ID' })
  @ApiResponse({ status: 200, description: 'Product deleted successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  deleteProduct(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsService.deleteProduct(id);
  }
}
