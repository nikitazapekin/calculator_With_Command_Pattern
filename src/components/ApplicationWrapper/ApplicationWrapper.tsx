import styled from 'styled-components';
interface ApplicationWrapperProps {
    background: string;
    color: string
  }

export const ApplicationWrapper = styled.div<ApplicationWrapperProps >`

width: 100wv;
max-width: 100%;
min-height: 100vh;
background-color:  ${(props) => props.background};
color: ${props=>props.color}
`;
