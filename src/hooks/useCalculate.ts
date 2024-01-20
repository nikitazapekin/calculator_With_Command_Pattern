import { useAppDispatch } from "../hooks/redux";
import { useEffect, useState } from "react";
import { AddExpressionToHistory } from "../store/action-creators/history-actionCreator";
function control(testString: string) { 
  testString = testString.replace(/\++/g, "+");
  testString = testString.replace(/\--/g, "+");
  testString = testString.replace(/\.\./g, ".");
  testString = testString.replace(/[+-][-+]/g, "-");
  return testString;
}
function calculation(buffString: string) {
  buffString = buffString.replace(/([^[0-9.]{1})/g, " $1 ").trim();  
  buffString = buffString.replace(/ {1,}/g, " ");            
  var buffArray = buffString.split(/\s/);                 
  var polishString = new Array;
  var polishStack = new Array;
  var stringId = -1;
  var stackId = -1;
  for (var i = 0; i < buffArray.length; i++) {               
      switch (buffArray[i]) {
         case "(":
             stackId++;
             polishStack[stackId] = buffArray[i];
             break;
         case ")":
             while (stackId >= 0 && polishStack[stackId] != "(") {
                 stringId++;
                 polishString[stringId] = polishStack[stackId];
                 stackId--;
             }
             stackId--;
             break;
       case "+":
           while (stackId >= 0 && (polishStack[stackId] == "+" || polishStack[stackId] == "-" || polishStack[stackId] == "*" || polishStack[stackId] == "/")) {
               stringId++;
               polishString[stringId] = polishStack[stackId];
               stackId--;
           }
           stackId++;
           polishStack[stackId] = buffArray[i];
           break;
       case "-":
           while (stackId >= 0 && (polishStack[stackId] == "+" || polishStack[stackId] == "-" || polishStack[stackId] == "*" || polishStack[stackId] == "/")) {
               stringId++;
               polishString[stringId] = polishStack[stackId];
               stackId--;
           }
           stackId++;
           polishStack[stackId] = buffArray[i];
           break;
       case "*":
           while (stackId >= 0 && (polishStack[stackId] == "*" || polishStack[stackId] == "/")) {
               stringId++;
               polishString[stringId] = polishStack[stackId];
               stackId--;
           }
           stackId++;
           polishStack[stackId] = buffArray[i];
          break;
      case "/":
          while (stackId >= 0 && (polishStack[stackId] == "*" || polishStack[stackId] == "/")) {
              stringId++;
              polishString[stringId] = polishStack[stackId];
              stackId--;
          }
          stackId++;
          polishStack[stackId] = buffArray[i];
          break;
      default:
          stringId++;
          polishString[stringId] = buffArray[i];
    }
 }
 while (stackId >= 0) {
     stringId++;
     polishString[stringId] = polishStack[stackId];
     stackId--;
 }                                                                 
 stackId = -1;               
 var stringIdMax = stringId;
 for (stringId = 0; stringId <= stringIdMax; stringId++ ) {
     switch (polishString[stringId]) {
         case "+":
             stackId--;
             polishStack[stackId] = polishStack[stackId] + polishStack[stackId + 1];
             break;
         case "-":
             stackId--;
             polishStack[stackId] = polishStack[stackId] - polishStack[stackId + 1];
             break;
         case "*":
             stackId--;
             polishStack[stackId] = polishStack[stackId] * polishStack[stackId + 1];
             break;
         case "/":
             stackId--;
             polishStack[stackId] = polishStack[stackId] / polishStack[stackId + 1];
             break;
         default:
             stackId++;
             polishStack[stackId] = parseFloat(polishString[stringId]);
     }
 }
 return polishStack[stackId];
}
export class Calculator {
  currentExpression: string = "";
  currentResult: number = 0;
  selectedSymbol: string = "";
 calculatingResults: String[]=[]
 isError: boolean=false;
setExpression(symbol: string) {
  if(this.currentExpression.length>0) {
  this.currentExpression += symbol;
}
if(this.currentExpression.length==0) {
  if( !['+', '*', '/', '=', 'C', '✖'].includes(symbol)){
    this.currentExpression += symbol;
  }
}
if(this.currentExpression.length>0 && symbol=="=") {
this.currentExpression=this.currentExpression+calculation(this.currentExpression.substring(0, this.currentExpression.length-1))
}
  } 
  sumAction() {
   this.currentResult= calculation(this.currentExpression);
  }
}
const calculator = new Calculator()
export const useCalculate = () => {
  const dispatch=useAppDispatch()
const [currentExpression, setCurrentExpression] = useState<string>("");
 const [currentResult, setCurrentResult] = useState<number>(0);
 const [selectedSymbol, setSelectedSymbol] = useState<string>("");
 useEffect(()=> {
calculator.setExpression(selectedSymbol)
setCurrentExpression(calculator.currentExpression)
 calculator.sumAction()   
 const expression=calculator.currentExpression
 dispatch(AddExpressionToHistory(expression))
}, [selectedSymbol])
useEffect(()=> {
 }, [calculator.calculatingResults])
return {setSelectedSymbol, 
  currentExpression, 
  selectedSymbol, isError: calculator.isError}

};


