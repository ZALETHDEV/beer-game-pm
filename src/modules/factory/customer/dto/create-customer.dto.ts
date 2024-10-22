import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty({ example: 'John Doe', description: 'The name of the customer' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '1234567890', description: 'The identification number of the customer' })
  @IsString()
  @IsNotEmpty()
  nit: string;

  @ApiProperty({ example: '123 Main St', description: 'The address of the customer' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ example: '555-1234', description: 'The phone number of the customer' })
  @IsString()
  @IsNotEmpty()
  phone: string;
}
