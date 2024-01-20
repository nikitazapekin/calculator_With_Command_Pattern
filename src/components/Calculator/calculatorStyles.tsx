import styled from "styled-components"
export const CalculatorWrapper= styled.div`
width: 90%;
height: 90vh;
position: relative;
top: 20px;
background-color: grey;
z-index:111;
margin: 0 auto
`
export const CalculatorDisplay= styled.div`
width: 100%;
height: 20vh;
background-color: black;
position: relative;
z-index:112;
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto
`
export const CalculatorDisplayEcquations= styled.input`
width: 90%;
height: 12vh;
background-color: green;
position: absolute;
font-size: 40px;
user-select: none;
z-index:112;
margin: 0 auto
`


export const CalculatorKeys= styled.div`
max-width: 100%;
height: auto;
background-color: orange;
left: 50%;
transform: translateX(-50%)
position:absolute;
height:auto;
 padding: 20px;
 display: grid;
 grid-template-rows: repeat(5,120px);
 grid-template-columns: repeat(4, 110px);
 justify-content: space-between;
 
`
export const CalculatorKey= styled.div`
width: 100px;
height: 100px;
border-radius: 50%;
color: #fff;
background-color: brown;
font-size: 60px;
font-weight: 900;
display: flex;
cursor: pointer;
justify-content: center;
align-items: center;
 line-height: 100px

`