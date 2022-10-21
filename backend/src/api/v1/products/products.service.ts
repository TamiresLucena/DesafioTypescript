import { Injectable, NotFoundException } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel() private readonly knex: Knex) {}

  async create(createProductDto: CreateProductDto) {
    const products = await this.knex
      .table('products')
      .insert({
        name: createProductDto.name,
        price: createProductDto.price,
        brand: createProductDto.brand,
        image: createProductDto.image,
      })
      .returning('*');
    return { product: products[0] };
  }

  async findAll() {
    const products = await this.knex.table('products');
    return { products };
  }

  async findOne(productId: number) {
    const products = await this.knex
      .table('products')
      .where('id', productId)
      .first();
    if (!products) throw new NotFoundException();
    return { products };
  }

  async update(productId: number, updateProductDto: UpdateProductDto) {
    const products = await this.knex
      .table('products')
      .where('id', productId)
      .update({
        name: updateProductDto.name,
        price: updateProductDto.price,
        brand: updateProductDto.brand,
        image: updateProductDto.image,
        updated_at: this.knex.fn.now(),
      })
      .returning('*');
    if (products.length === 0) throw new NotFoundException();
    return { product: products[0] };
  }

  async remove(productId: number) {
    try {
      const products = await this.knex
        .table('products')
        .where('id', productId)
        .del();
      return { products };
    } catch (err) {
      throw new NotFoundException(err.message);
    }
  }
}
