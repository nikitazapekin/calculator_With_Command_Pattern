import styled from "styled-components"
export const StyledModal= styled.div` 
color: #fff;
font-size: 32px;
position: absolute;
background-color:orange;
width: 500px;
height: 500px;
z-index: 4544;
 top: 200px;
 left: 50%;
 transform: translateX(-50%);
 
 overflow-y: scroll;
cursor: pointer;
`
export const StyledModalElement= styled.div` 
color: #fff;
font-size: 32px;
bachground-color: black;
width: 100;
height: 60px;
z-index: 444;
top: 0;
right: 0;
padding-right: 20px;
transform: translateY(-20px);
cursor: pointer;
`
export const OverlayStylesModal= styled.div` 
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, .7);
z-index: 1000;
`

export const ModalButton= styled.button` 
 width: 100%;
 height: 70px;
 position: absolute;
 bottom: 0;
 color: #fff;
 font-size: 32px;
 cursor: pointer;
 background-color: purple;

`