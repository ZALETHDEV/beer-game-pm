import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserTypeDto {
    @ApiProperty({ description: 'Nombre del tipo de usuario' })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ description: 'Descripción del tipo de usuario' })
    @IsNotEmpty()
    @IsString()
    description: string;
}
