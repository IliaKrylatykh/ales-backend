import { ApiProperty } from '@nestjs/swagger';

export class GetProductResponse {
  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the product'
  })
  id: number;

  @ApiProperty({
    example: '2021-07-21T17:32:28Z',
    description: 'Creation date of the product'
  })
  createdAt: string;

  @ApiProperty({
    example: '2021-07-21T17:32:28Z',
    description: 'Last update date of the product'
  })
  updatedAt: string;

  @ApiProperty({
    example: 'High Performance Laptop',
    description: 'Name of the product'
  })
  name: string;

  @ApiProperty({
    example: 'high-performance-laptop',
    description: 'Slug of the product'
  })
  slug: string;

  @ApiProperty({
    example:
      'This high performance laptop is perfect for gaming and professional software.',
    description: 'Description of the product'
  })
  description: string;

  @ApiProperty({ example: 1499, description: 'Price of the product' })
  price: number;

  @ApiProperty({
    example: ['image1.jpg', 'image2.jpg'],
    description: 'List of images associated with the product',
    type: [String]
  })
  images: string[];

  @ApiProperty({
    example: 5,
    description: 'Product type id'
  })
  typeId: number;

  @ApiProperty({
    example: 5,
    description: 'The category ID to which the product belongs'
  })
  categoryIds: number[];

  @ApiProperty({
    example: 10,
    nullable: true,
    description: 'User ID of the product owner, can be null'
  })
  userId: number | null;
}

export class GetProductsResponse {
  @ApiProperty({
    type: [GetProductResponse],
    description: 'Array of product responses'
  })
  products: GetProductResponse[];

  @ApiProperty({ example: 5, description: 'Total number of products returned' })
  length: number;
}
