

import React, { useEffect, useState } from 'react';
import { CalculatorDisplay, CalculatorDisplayEcquations, CalculatorKey, CalculatorKeys, CalculatorWrapper } from "./calculatorStyles";
import { useCalculate } from '../../hooks/useCalculate';
const Calculator = () => {
    const {setSelectedSymbol, currentExpression, selectedSymbol, isError}=useCalculate()
    const [strokeToDisplay, setStrokeToDisplay] = useState("")
  const calcBtns = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=', 'C', '✖', ')', '(', '^'];
  const handleClick= (event: React.MouseEvent<HTMLDivElement, MouseEvent>)=> {
    const target = event.target as HTMLDivElement;
    setSelectedSymbol(target.textContent);     
  }
  useEffect(()=> {
setStrokeToDisplay(currentExpression)
  }, [currentExpression])
  return (
    <CalculatorWrapper>
      <CalculatorDisplay>
        <CalculatorDisplayEcquations
          disabled={true}
        //  value={currentExpression}
      value={strokeToDisplay}
        />
      </CalculatorDisplay>
      <CalculatorKeys>
        {calcBtns.map((item, index) => (
          <CalculatorKey key={index} onClick={(event)=> handleClick(event)}>
            {item}
          </CalculatorKey>
        ))}
      </CalculatorKeys>
    </CalculatorWrapper>
  );
};

export default Calculator;

      /* useEffect(()=> {
           setStrokeToDisplay(prev=>prev+selectedSymbol)
         }, [selectedSymbol]) 
       //  }
       //}, [selectedSymbol, isError])  */