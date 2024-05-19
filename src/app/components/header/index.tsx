import React, { useState, useEffect } from 'react';
import { HeaderContainer, Logo, Cart, DrawerContent, DrawerTitle, Drawer, CartItens, CartItem, Price, Quant, Delete, CloseDrawer, Total, CartFooter, QuantContainer, ResponsiveImage } from './styles';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const drawerVariants = {
  open: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
  closed: { x: '100%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
};

const overlayVariants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);

  const loadCartItems = () => {
    const items = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(items);
  };

  //Calcular o valor total dos produtos
  const calculateTotal = (items: any[]) => {
    const totalAmount = items.reduce((acc, item) => acc + item.quantity * parseFloat(item.price), 0);
    setTotal(totalAmount);
  };

  useEffect(() => {
    loadCartItems();
  }, []);

  useEffect(() => {
    calculateTotal(cartItems);

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'cart') {
        loadCartItems();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [cartItems]);

  useEffect(() => {
    const interval = setInterval(() => {
      loadCartItems();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  //Atualizar quantidade dos itens do carrinho
  const updateCartItemQuantity = (index: number, quantity: number) => {
    const updatedCart = [...cartItems];
    if (quantity > 0) {
      updatedCart[index].quantity = quantity;
    } else {
      updatedCart.splice(index, 1);
    }
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  //Aumentar quantidade do item
  const incrementQuantity = (index: number) => {
    const item = cartItems[index];
    updateCartItemQuantity(index, item.quantity + 1);
  };

  //Diminuir quantidade do item
  const decrementQuantity = (index: number) => {
    const item = cartItems[index];
    updateCartItemQuantity(index, item.quantity - 1);
  };

  //Remover item do carrinho
  const removeCartItem = (index: number) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <>
      <HeaderContainer>
        <Logo>MKS <span style={{fontSize: "14px", fontWeight: 'normal'}}>Sistemas</span></Logo>
        <Cart onClick={toggleDrawer}>
          <FaShoppingCart />
          <span>{cartItems.length}</span>
        </Cart>
      </HeaderContainer>
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              onClick={toggleDrawer}
              style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 999 }}
            />
            <Drawer
              initial="closed"
              animate="open"
              exit="closed"
              variants={drawerVariants}
            >
              <DrawerContent>
                <DrawerTitle>
                  <h2>Carrinho de compras</h2>
                  <CloseDrawer>
                    <FaTimes onClick={toggleDrawer} style={{ cursor: 'pointer' }} />
                  </CloseDrawer>
                </DrawerTitle>
                <CartItens>
                  {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                      <CartItem key={index}>
                        <Delete>
                          <FaTimes onClick={() => removeCartItem(index)} style={{ cursor: 'pointer' }} />
                        </Delete>
                        <ResponsiveImage src={item.photo} alt={item.name} />
                        <p style={{fontSize: '14px'}}>{item.name}</p>
                        <QuantContainer>
                          <Quant>
                            <span style={{cursor: 'pointer'}} onClick={() => decrementQuantity(index)}> - </span>
                            <span>{item.quantity}</span>
                            <span style={{cursor: 'pointer'}} onClick={() => incrementQuantity(index)}>+</span>
                          </Quant>
                          <Price>R${item.price}</Price>
                        </QuantContainer>
                      </CartItem>
                    ))
                  ) : (
                    <p>Seu carrinho está vazio.</p>
                  )}
                </CartItens>
                <Total>
                  <span>Total:</span>
                  <span>R${total.toFixed(2)}</span>
                </Total>
                <CartFooter>
                  Finalizar Compra
                </CartFooter>
              </DrawerContent>
            </Drawer>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
