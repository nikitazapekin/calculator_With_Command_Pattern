import styled from 'styled-components';
interface StyledNavBarProps {
    background: string;
    color: string;
    
  }

export const StyledNavbar = styled.nav<StyledNavBarProps>`
width: 100%;
height: 60px;
background-color: ${(props) => props.background}
`;
