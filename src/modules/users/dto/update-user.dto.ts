import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
    @ApiProperty({ description: 'Nombre completo del usuario' })
    @IsOptional()
    @IsString()
    full_name?: string;

    @ApiProperty({ description: 'Correo electrónico del usuario' })
    @IsOptional()
    @IsEmail()
    email?: string;

    @ApiProperty({ description: 'Contraseña del usuario' })
    @IsOptional()
    @IsString()
    password?: string;

    @ApiProperty({ description: 'ID del tipo de usuario' })
    @IsOptional()
    @IsNumber()
    user_type_id?: number;
}
