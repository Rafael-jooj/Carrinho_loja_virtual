import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderContainer = styled.header`
  background-color: #0F52BA;
  padding: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 70px;
  padding-right: 70px;

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

export const Cart = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    border-radius: 5px;
    color: #111111;
    padding: 5px 16px;
    cursor: pointer;
    font-size: 1em;
`;

export const DrawerContent = styled.div`
  background-color: #0F52BA;
  height: 100%;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DrawerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
`

export const Drawer = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  background: white;
  box-shadow: -4px 0 6px -1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 400px;

  @media (max-width: 768px) {
    width: 320px;
  }
`;

export const CartItens = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
  padding: 5px 30px;
  max-height: 700px;
  overflow-y: auto;

  @media (max-width: 768px) {
    max-height: 600px;
  }
`

export const ResponsiveImage = styled.img`
  width: 20%;
  height: 70%;

  @media (max-width: 768px) {
    width: 40%;
  }
`;

export const CartItem = styled.div`
  width: 100%;
  min-height: 90px;
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  color: #111111;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: 220px;
    padding: 20px 10px;
  }
`

export const QuantContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center
`

export const Price = styled.div`
  font-weight: bold;
`

export const Quant = styled.div`
  display: flex;
  flex-direction: row;
  border: solid 1px #c4c4c4;
  gap: 5px;
  border-radius: 5px;
  padding: 2px 5px;
  user-select: none;

  @media (max-width: 768px) {
    padding: 5px 15px;
    gap: 10px;
  }
`

export const Delete = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #111111;
  color: #FFFFFF;
  padding: 5px 5px;
  border-radius: 50%;
  display: flex;
`

export const CloseDrawer = styled.div`
  background-color: #111111;
  color: #FFFFFF;
  padding: 5px 5px;
  border-radius: 50%;
  display: flex;
`

export const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
  font-weight: bold;
`

export const CartFooter = styled.div`
  height: 70px;
  background-color: #111111;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
`