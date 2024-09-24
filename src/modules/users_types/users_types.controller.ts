import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersTypesService } from './users_types.service';
import { CreateUserTypeDto } from './dto/create-users_type.dto';
import { UpdateUserTypeDto } from './dto/update-users_type.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserType } from './entities/users_type.entity';

@ApiTags('user-types')
@Controller('user-types')
export class UserTypeController {
    constructor(private readonly userTypeService: UsersTypesService) {}

    @ApiOperation({ summary: 'Crear un nuevo tipo de usuario' })
    @ApiResponse({ status: 201, description: 'Tipo de usuario creado exitosamente.', type: UserType })
    @ApiResponse({ status: 400, description: 'Error en la creación del tipo de usuario.' })
    @Post()
    create(@Body() createUserTypeDto: CreateUserTypeDto) {
        return this.userTypeService.create(createUserTypeDto);
    }

    @ApiOperation({ summary: 'Obtener todos los tipos de usuario' })
    @ApiResponse({ status: 200, description: 'Lista de tipos de usuario.', type: [UserType] })
    @Get()
    findAll() {
        return this.userTypeService.findAll();
    }

    @ApiOperation({ summary: 'Obtener un tipo de usuario por ID' })
    @ApiResponse({ status: 200, description: 'Tipo de usuario encontrado.', type: UserType })
    @ApiResponse({ status: 404, description: 'Tipo de usuario no encontrado.' })
    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.userTypeService.findOne(id);
    }

    @ApiOperation({ summary: 'Actualizar un tipo de usuario por ID' })
    @ApiResponse({ status: 200, description: 'Tipo de usuario actualizado exitosamente.', type: UserType })
    @ApiResponse({ status: 404, description: 'Tipo de usuario no encontrado.' })
    @Patch(':id')
    update(@Param('id') id: number, @Body() updateUserTypeDto: UpdateUserTypeDto) {
        return this.userTypeService.update(id, updateUserTypeDto);
    }

    @ApiOperation({ summary: 'Eliminar un tipo de usuario por ID' })
    @ApiResponse({ status: 204, description: 'Tipo de usuario eliminado exitosamente.' })
    @ApiResponse({ status: 404, description: 'Tipo de usuario no encontrado.' })
    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.userTypeService.remove(id);
    }
}
