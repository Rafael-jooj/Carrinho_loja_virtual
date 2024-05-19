import React from 'react';
import { ProductContainer, DescContainer, Buy } from './styles';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const skeletonAnimation = keyframes`
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #f0f0f0;
  }
  100% {
    background-color: #e0e0e0;
  }
`;

const SkeletonBox = styled(motion.div)`
  border-radius: 4px;
  margin: 10px 10px;
  animation: ${skeletonAnimation} 1.5s ease-in-out infinite;
`;

const Description = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
`;

const SkeletonProduct = () => {
  return (
    <ProductContainer>
      <SkeletonBox style={{ height: '120px', width: '80%' }} />
      <Description>
        <SkeletonBox style={{ height: '20px', width: '60%' }} />
        <SkeletonBox style={{ height: '20px', width: '30%' }} />
      </Description>
      <SkeletonBox style={{ height: '60px', width: '90%' }} />
      <Buy style={{ backgroundColor: '#e0e0e0', width: '100%' }}>
        <SkeletonBox style={{ height: '20px', width: '100%' }} />
      </Buy>
    </ProductContainer>
  );
};

export default SkeletonProduct;
