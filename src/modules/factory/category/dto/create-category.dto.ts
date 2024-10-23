import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Box', description: 'The name of the category' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Box', description: 'The type of the category' })
  @IsString()
  type: string;
}
