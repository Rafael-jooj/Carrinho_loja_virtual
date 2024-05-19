import styled from 'styled-components';

export const ProductContainer = styled.footer`
  background-color: #FFFFFF;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  color: #111111;
  border-radius: 5px;
  overflow: hidden;
`;

export const Text = styled.p`
  color: #111111;
`;

export const DescContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap:10px;
  padding: 5px 10px;
  text-align: start;
`

export const Price = styled.div`
  background-color: #373737;
  color: #FFFFFF;
  border-radius: 5px;
  padding: 5px 5px;
  font-size: 14px;
`

export const Description = styled.p`
  font-size: 14px;
  text-align: start;
  padding: 5px 10px;
  opacity: 0.5;
`

export const Buy = styled.div`
  backgound-color: #0F52BA;
  color: #FFFFFF;
  padding: 5px 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`