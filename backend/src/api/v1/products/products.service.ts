import {
  CACHE_MANAGER,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Cache } from 'cache-manager';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel() private readonly knex: Knex,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const [product] = await this.knex
      .table('products')
      .insert({
        name: createProductDto.name,
        price: createProductDto.price,
        brand: createProductDto.brand,
        image: createProductDto.image,
      })
      .returning('*');
    await this.cacheManager.set(product.id.toString(), product);
    return { product };
  }

  async findAll() {
    const products = await this.knex.table('products');
    return { products };
  }

  async findOne(productId: number) {
    const value = await this.cacheManager.get(productId.toString());
    if (value) return { product: value };

    const product = await this.knex
      .table('products')
      .where('id', productId)
      .first();
    if (!product) throw new NotFoundException();

    await this.cacheManager.set(productId.toString(), product);

    return { product };
  }

  async update(productId: number, updateProductDto: UpdateProductDto) {
    const [product] = await this.knex
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
    if (!product) throw new NotFoundException();

    await this.cacheManager.set(productId.toString(), product);

    return { product };
  }

  async remove(productId: number) {
    const [product] = await this.knex
      .table('products')
      .where('id', productId)
      .del()
      .returning('*');

    if (!product) throw new NotFoundException();

    await this.cacheManager.del(productId.toString());

    return { product };
  }
}
