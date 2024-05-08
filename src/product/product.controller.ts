import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetProductsResponse, GetProductResponse } from './types';

@ApiTags('Products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOkResponse({ type: GetProductsResponse })
  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @ApiOkResponse({ type: GetProductResponse })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findById(+id);
  }
}
