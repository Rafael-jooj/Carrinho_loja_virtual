import React from 'react';
import { MainProducts } from './styles';
import { useQuery } from 'react-query';
import Product from '../product';
import ProductSkeleton from '../product/product-skeleton';

interface ProductData {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
}

interface ApiResponse {
    products: ProductData[];
    count: number;
}

const fetchProducts = async (): Promise<ProductData[]> => {
    const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC');
    if (!response.ok) {
        console.error('Network response was not ok', response.statusText);
        throw new Error('Network response was not ok');
    }
    const data: ApiResponse = await response.json();
    return data.products;
};

const Products = () => {
    const { data, isLoading, isError, error } = useQuery<ProductData[], Error>('products', fetchProducts);

    if (isLoading) {
        return (
          <MainProducts>
            {[...Array(8)].map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </MainProducts>
        );
    }
    if (isError) {
        console.error('Error fetching data', error);
        return <div>Error fetching data</div>;
    }

    return (
        <MainProducts>
            {data?.map((product) => (
                <Product key={product.id} data={product} />
            ))}
        </MainProducts>
    );
};

export default Products;
