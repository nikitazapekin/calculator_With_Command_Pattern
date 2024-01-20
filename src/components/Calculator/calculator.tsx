import React, { useEffect, useState } from 'react';
import { calcBtns } from '../../utils/calculatorButtons';
import { CalculatorDisplay, CalculatorDisplayEcquations, CalculatorKey, CalculatorKeys, CalculatorWrapper, HistoryButton } from "./calculatorStyles";
import { useCalculate } from '../../hooks/useCalculate';
import Modal from '../modal/modal';
const Calculator = () => {
    const {setSelectedSymbol, currentExpression, selectedSymbol, isError}=useCalculate()
    const [onClose, setOnClose] = useState<boolean>(false)
    const [strokeToDisplay, setStrokeToDisplay] = useState("")
  const handleClick= (event: React.MouseEvent<HTMLDivElement, MouseEvent>)=> {
    const target = event.target as HTMLDivElement;
    setSelectedSymbol(target.textContent);     
  }
  useEffect(()=> {
setStrokeToDisplay(currentExpression)
  }, [currentExpression])
  const handleClickOpen=()=> {
    console.log("is Click")
setOnClose(true)
  }
  useEffect(()=> {
    console.log("onClose" +onClose)
  }, [onClose])
  return (
    <CalculatorWrapper>
      <CalculatorDisplay>
        <CalculatorDisplayEcquations
          disabled={true}
      value={strokeToDisplay}
        />
          </CalculatorDisplay>
<HistoryButton onClick={ handleClickOpen}>
  History
</HistoryButton>
      <CalculatorKeys>
        {calcBtns.map((item, index) => (
          <CalculatorKey key={index} onClick={(event)=> handleClick(event)}>
            {item}
          </CalculatorKey>
        ))}
      </CalculatorKeys>
      <Modal onClose={onClose} setOnClose={setOnClose} >
        </Modal>
    </CalculatorWrapper>
  );
};

export default Calculator;
