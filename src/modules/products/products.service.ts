import { HttpException, HttpStatus, Injectable, Inject } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { v4 } from 'uuid'
import { UpdateProductDto } from './dto/update-product.dto';


@Injectable()
export class ProductsService {
    private productRepository: Repository<Product>;
    constructor(
        @Inject(DataSource) private readonly dataSource: DataSource,
  )
     {
        this.productRepository = this.dataSource.getRepository(Product);
      }

    getAllProducts(): Promise<Product[]> {
        return this.productRepository.find();
    }

    async getProductById(id: string): Promise<{ statusCode: number, message: string, data: Product }> {
        const product = await this.productRepository.findOne(
            { where: { id } }
        );
        if (!product)
            throw new HttpException('Product not found or missing', HttpStatus.NOT_FOUND);
        return {
            data: product,
            statusCode: HttpStatus.OK,
            message: 'Product retrieved successfully'
        }
    }


    async createProduct(productName: string, quantity: number, price: number, storageCostPerWeek: number, manufacturingCost: number, ordersPerWeek: number): Promise<{ statusCode: number, message: string, data: Product }> {
        const product = this.productRepository.create({
            id: v4(),
            productName,
            quantity,
            price,
            storageCostPerWeek,
            manufacturingCost,
            ordersPerWeek
        });
        Object.values(product).forEach(value => {
            if (value === undefined || value === null) {
                throw new HttpException('All fields are required', HttpStatus.BAD_REQUEST);
            }
        });

        return {
            data: await this.productRepository.save(product),
            statusCode: HttpStatus.CREATED,
            message: 'Product created successfully'
        }
    }

    async updateProduct(id: string, updatedFields: UpdateProductDto): Promise<{ statusCode: number, message: string, updateProduct: Product }> {
        const product = await this.productRepository.findOne({ where: { id } });
        if (!product)
            throw new HttpException('Product not found', HttpStatus.NOT_FOUND);

        Object.assign(product, updatedFields);

        return {
            updateProduct: await this.productRepository.save(product),
            statusCode: HttpStatus.OK,
            message: 'Product updated successfully'
        }
    }

    // Filtra los productos y devuelve los distitos al id que se le pasa
    /* deleteproduct(id: string) {
        this.products = this.products.filter(task => task.id !== id)
    } */

    async deleteProduct(id: string): Promise<{ statusCode: number, message: string, data: Product }> {
        const product = await this.productRepository.findOne({ where: { id } });
        if (!product)
            throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
        await this.productRepository.remove(product);

        return {
            statusCode: HttpStatus.OK,
            message: 'Product deleted successfully',
            data: product
        };

    }

}
