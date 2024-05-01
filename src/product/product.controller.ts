import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetProductsResponse, ProductResponse } from './types';
import { ProductDto } from './dto/product.dto';

@ApiTags('Products')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOkResponse({ type: ProductResponse })
  @HttpCode(200)
  @Post()
  create(@Body() dto: ProductDto) {
    return this.productService.create(dto);
  }

  @ApiOkResponse({ type: GetProductsResponse })
  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @ApiOkResponse({ type: ProductResponse })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.productService.findById(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
  //   return this.productService.update(+id, updateProductDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productService.remove(+id);
  // }
}
