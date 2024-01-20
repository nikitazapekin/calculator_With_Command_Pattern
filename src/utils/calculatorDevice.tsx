import { calculation } from "./calculation";
export interface CalculatorInterface {
  currentExpression: string;
  currentResult: number;
  isError: boolean;

  setExpression(expression: string): void;
  sumAction(): void;
  // Add other methods or properties if needed
}
export class Calculator  implements CalculatorInterface {
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
    if( !['+', '*', '/', '=', 'C', '✖', '^'].includes(symbol)){
      this.currentExpression += symbol;
    }
  }
  if(this.currentExpression.length>0 && symbol=="=") {
  this.currentExpression=this.currentExpression+calculation(this.currentExpression.substring(0, this.currentExpression.length-1))
  
  }
  if(symbol=='C'){
    this.currentExpression=""
  }
  if(symbol=='✖'){
    console.log("REEEEm")
    this.currentExpression = this.currentExpression.substring(0, this.currentExpression.length - 1);
  }
    } 
     
    sumAction() {
     this.currentResult= calculation(this.currentExpression);
    }
  }