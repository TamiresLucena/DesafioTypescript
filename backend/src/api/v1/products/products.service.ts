import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel() private readonly knex: Knex) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const products = await this.knex.table('products').insert({
        name: createProductDto.name,
        price: createProductDto.price,
        brand: createProductDto.brand,
        image: createProductDto.image,
      });

      return { products };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    const products = await this.knex.table('products');
    return { products };
  }

  async findOne(productId: number) {
    if (!productId) {
      throw new NotFoundException(`Product ${productId} does not exist`);
    }
    const products = await this.knex.table('products').where('id', productId);
    return { products };
  }

  async update(productId: number, updateProductDto: UpdateProductDto) {
    try {
      const products = await this.knex
        .table('products')
        .where('id', productId)
        .update({
          name: updateProductDto.name,
          price: updateProductDto.price,
          brand: updateProductDto.brand,
          image: updateProductDto.image,
          updated_at: this.knex.fn.now(),
        });

      return { products };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async remove(productId: number) {
    if (!productId) {
      throw new NotFoundException(`Product ${productId} does not exist`);
    }
    const products = await this.knex
      .table('products')
      .where('id', productId)
      .del();
    return { products };
  }
}
