import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { UsersTypesModule } from './modules/users_types/users_types.module';
import { UsersModule } from './modules/users/users.module';
import { Order } from './modules/orders/entities/order.entity';
import { Product } from './modules/products/entities/product.entity';
import { User } from './modules/users/entities/user.entity';
import { UserType } from './modules/users_types/entities/users_type.entity';

@Module({
  imports: [    
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'beergamepm',
    entities: [Order,Product,User,UserType],
    synchronize: false,
  }), ProductsModule, OrdersModule, UsersModule, UsersTypesModule],
})
export class AppModule {}
