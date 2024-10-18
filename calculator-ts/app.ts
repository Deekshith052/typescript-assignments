import * as readline from 'readline';
import { add } from './add';
import { sub } from './sub';
import { multiply } from './multiply';
import { divide } from './divide';

let n1:number;
let n2:number;
let ch:number;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function question(query: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            resolve(answer);
        });
    });
}

async function calculate(){
    while(true){
        console.log("1.addition \n 2.subtraction \n 3.multiply \n 4.divide \n 5.exit\n");    
        ch=parseInt(await question("enter your choice: "));
        if(ch===5){
            process.exit();
        }
        n1=parseFloat( await question("enter first number: "));
        n2=parseFloat( await question("enter second number: "));
        
        switch(ch){
            case 1: console.log(add(n1,n2));
            break;
            case 2: console.log(sub(n1,n2));
            break;
            case 3:console.log(multiply(n1,n2));
            break;
            case 4:console.log(divide(n1,n2));
            break;
            default: console.log("incorrect choice");
        }
    }
}

calculate()


