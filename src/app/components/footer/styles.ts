import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #EEEEEE;
  padding: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
`;

export const Text = styled.p`
  color: #111111;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;