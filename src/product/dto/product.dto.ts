import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  ArrayMinSize,
  ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';

export class ProductDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  id: number;

  @ApiProperty({ example: 'string' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'string' })
  @IsString()
  slug: string;

  @ApiPropertyOptional({ example: 'string' })
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty({ example: ['string'] })
  @IsString({ each: true })
  @ArrayMinSize(1)
  images: string[];

  @ApiProperty({ example: 1 })
  @IsNumber()
  quantity: number;

  @ApiProperty({ example: [1] })
  @IsNumber()
  @ArrayMinSize(1)
  categoryIds: number[];

  @ApiPropertyOptional({
    type: 'object',
    example: {
      youtube: 'http://youtube.com/example',
      instagram: 'http://instagram.com/example'
    }
  })
  @ValidateNested()
  @Type(() => SocialLinksDto)
  @IsOptional()
  socialLinks?: SocialLinksDto;
}

class SocialLinksDto {
  @ApiPropertyOptional({ example: 'http://youtube.com/example' })
  @IsString()
  @IsOptional()
  youtube?: string;

  @ApiPropertyOptional({ example: 'http://instagram.com/example' })
  @IsString()
  @IsOptional()
  instagram?: string;
}
