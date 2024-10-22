import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category])], // Asegúrate de que la entidad esté incluida
  providers: [CategoryService],
  controllers: [CategoryController],
  exports: [CategoryService], // Exporta si necesitas usar en otros módulos
})
export class CategoryModule {}
