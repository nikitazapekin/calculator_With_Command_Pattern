export function calculation(buffString: string) {
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
            case "^":
              while (stackId >= 0) {
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
  
               case "^":
                stackId--;
                polishStack[stackId] = polishStack[stackId] ** polishStack[stackId + 1];
                break;
  
           default:
               stackId++;
               polishStack[stackId] = parseFloat(polishString[stringId]);
       }
   }
   return polishStack[stackId];
  }