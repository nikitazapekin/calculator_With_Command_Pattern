

import { useEffect, useState } from "react";
/*
class CalculatorOperations {
  arrayOfBracketEcpression: String[]=[]
  arrayOfBracketNumbers: String[]=[]
  static operation(subExpression: string){
const regex = /([-+/])/g;
const tokens = subExpression.split(regex).filter(Boolean);
console.log("TOKENS" +tokens)
let i = 1;
while (i < tokens.length) {
  if (tokens[i] === '+') {
    const sum = Number(tokens[i - 1]) + Number(tokens[i + 1]);
    tokens.splice(i - 1, 3, String(sum));
    i -= 2; 
  }
  if (tokens[i] === '-') {
    const sum = Number(tokens[i - 1]) - Number(tokens[i + 1]);
    tokens.splice(i - 1, 3, String(sum));
    i -= 2; 
  }
  i += 2; 
}
console.log("Modified TOKENS: " + tokens);
return tokens.join('')

  } 
 static calculatePartOfExpression(expression: string, operation: string) {
  let indexOfLastPlus = expression.lastIndexOf(operation)
console.log("EXPRESS"+expression)
let  arrayOfPriorityEcpression: String[]=[]
let isBracket: boolean  = false
let regex = /(\d+|\+|\(|\))/g;
let result = expression.match(regex);
console.log(result);
let countOfBrackets=0;

console.log("RES" +result)
let indexesOfLeftBrackets: Number[]= []
let indexesOfRightBrackets: Number[]= []
 
result.forEach((item, index)=> {
  let expressionInBracket;
  if(item=="("){
    countOfBrackets++
    indexesOfLeftBrackets.push(index)
    for(let i=index; i<result.length; i++){
if(result[i]=='(' )  {
  countOfBrackets++
}
if(result[i]==')'){
  countOfBrackets--
}
if(countOfBrackets==0){
  console.log("SCOPE"+result.splice(index, i))
}
    }
  }

  if(item==")"){
     indexesOfRightBrackets.push(index)
   }

  })
  console.log(indexesOfLeftBrackets)
console.log(indexesOfRightBrackets)


  
}
} */



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
 }                                                                  // польская запись готова
//   alert(polishString);
 stackId = -1;                                                      // Начинаем считать по польской записи
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
  if( !['+', '-', '*', '/', '=', 'C', '✖'].includes(symbol)){
    this.currentExpression += symbol;
    
  }
}
  } 
   
  sumAction() {
   this.currentResult= calculation(this.currentExpression);
  }
}
const calculator = new Calculator()
export const useCalculate = () => {
const [currentExpression, setCurrentExpression] = useState<string>("");
 const [currentResult, setCurrentResult] = useState<number>(0);
 const [selectedSymbol, setSelectedSymbol] = useState<string>("");
 useEffect(()=> {
calculator.setExpression(selectedSymbol)
setCurrentExpression(calculator.currentExpression)
//switch(selectedSymbol){
 
 calculator.sumAction()  
 console.log("RESULT" +calculator.currentResult)
 }, [selectedSymbol])
 
return {setSelectedSymbol, 
  currentExpression, 
  selectedSymbol, isError: calculator.isError}

};
