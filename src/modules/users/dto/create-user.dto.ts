import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ description: 'Nombre completo del usuario' })
    @IsNotEmpty()
    @IsString()
    full_name: string;

    @ApiProperty({ description: 'Correo electrónico del usuario' })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({ description: 'Contraseña del usuario' })
    @IsNotEmpty()
    @IsString()
    password: string;

    @ApiProperty({ description: 'ID del tipo de usuario' })
    @IsNotEmpty()
    @IsNumber()
    user_type_id: number;
}
