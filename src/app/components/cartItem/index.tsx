import React from 'react';
import { ItemContainer } from './styles';

interface ProductData {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
    quantity: string;
}


const CartItem = () =>{
    <ItemContainer>
        <span></span>
    </ItemContainer>
}

export default CartItem;