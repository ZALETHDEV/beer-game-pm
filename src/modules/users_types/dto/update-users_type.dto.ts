import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserTypeDto {
    @ApiProperty({ description: 'Nombre del tipo de usuario' })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiProperty({ description: 'Descripción del tipo de usuario' })
    @IsOptional()
    @IsString()
    description?: string;
}
