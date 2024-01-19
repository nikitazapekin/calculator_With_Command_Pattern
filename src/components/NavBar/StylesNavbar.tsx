import styled from 'styled-components';
interface StyledNavBarProps {
    background: string;
    color: string;
    
  }
export const StyledNavbar = styled.nav<StyledNavBarProps>`
width: 100%;
height: 70px;
background-color: ${(props) => props.background};

`;
export const StyledNavbarWrapper = styled.div`
width: 90%;
height: 70px;
display: flex;
justify-content: space-between;

`;
export const StyledNavBarItemImage= styled.div`
width: 70px;
height: 70px;
border-radius: 50%;
cursor: pointer;
display: flex;
align-items: center;
font-size: 34px;
font-family: Roboto;
margin-left: 30px;
img {
  width: 60px;
  border-radius: 50%;
  height: 60px;
}
`
export const StyledNavBarBlockText= styled.div`
display: flex;
gap: 20px;
justify-content: flex-end;
`
export const StyledNavBarItemText= styled.div`
line-height: 70px;
cursor: pointer;
font-size: 34px;
font-family: Roboto;
`
