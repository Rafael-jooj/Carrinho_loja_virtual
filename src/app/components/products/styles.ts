import styled from 'styled-components';

export const MainProducts = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, 240px);
    gap: 20px;
    padding: 5% 10%;
    justify-content: center;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, 280px);
    }
`