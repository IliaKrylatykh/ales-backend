import { Injectable } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { ProductsDB } from '../../db';

@Injectable()
export class ProductService {
  private products: ProductDto[] = ProductsDB;

  findAll() {
    return this.products;
  }

  findById(id: number) {
    const product = this.products.find((product) => product.id === id);

    return product;
  }
}
