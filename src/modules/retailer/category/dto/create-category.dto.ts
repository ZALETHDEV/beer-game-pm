import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Electronics', description: 'The name of the category' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Devices', description: 'The type of the category' })
  @IsString()
  type: string;
}
