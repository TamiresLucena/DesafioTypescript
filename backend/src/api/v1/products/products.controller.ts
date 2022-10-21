import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('api/v1/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({ summary: 'Create product' })
  @ApiResponse({ status: 201, description: 'Created product' })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Returns all products' })
  @ApiResponse({
    status: 200,
    description: 'Found products',
    type: CreateProductDto,
    isArray: true,
  })
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':productId')
  @ApiOperation({ summary: 'Returns product by ID' })
  @ApiResponse({
    status: 200,
    description: 'Found product',
    type: CreateProductDto,
  })
  findOne(@Param('productId') productId: string) {
    return this.productsService.findOne(+productId);
  }

  @Patch(':productId')
  @ApiOperation({ summary: 'Update product by ID' })
  @ApiResponse({
    status: 200,
    description: 'Updated product',
    type: CreateProductDto,
  })
  update(
    @Param('productId') productId: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(+productId, updateProductDto);
  }

  @Delete(':productId')
  @ApiOperation({ summary: 'Delete product by ID' })
  @ApiResponse({ status: 204, description: 'Deleted product' })
  remove(@Param('productId') productId: string) {
    return this.productsService.remove(+productId);
  }
}
