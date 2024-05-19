import React from 'react';
import { ProductContainer, DescContainer, Description, Price, Buy } from './styles';
import { FiShoppingBag } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface ProductData {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
}

interface ProductProps {
    data: ProductData;
}

const Product = ({ data } : ProductProps) => {

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingProductIndex = cart.findIndex((item: any) => item.id === data.id);

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...data, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <ProductContainer
      as={motion.div}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <img src={data.photo} alt={data.name} width={'80%'} />
      <DescContainer>
        <span>{data.name}</span>
        <Price>R${data.price}</Price>
      </DescContainer>
      <Description>{data.description}</Description>
      <Buy onClick={handleAddToCart} style={{ backgroundColor: 'blue', width: '100%' }}>
        <FiShoppingBag size={16} />
        <span>Comprar</span>
      </Buy>
    </ProductContainer>
  );
};

export default Product;
