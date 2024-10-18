export function divide(n1:number, n2:number):(number|string){
    if (n2===0){
        return "division by zero is not possible";
    }
    else{
        return n1/n2;
    }
}