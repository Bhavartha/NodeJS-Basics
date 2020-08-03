const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

let num1 = Math.floor(Math.random()*10);
let num2 = Math.ceil(Math.random()*10);
let ans = num1+num2;

rl.question(`What is ${num1}+${num2}\n`,(ip)=>{
    if(ip.trim()== ans){
        rl.close();
    }
    else{
        rl.setPrompt('Incorrect. Please try again\n');
        rl.prompt();
        rl.on('line',(ip)=>{
            if(ip.trim()== ans){
                rl.close();
            }
            else{
                rl.setPrompt('Incorrect. Please try again\n');
                rl.prompt();
            }
        });
                
    }
});

rl.on('close',()=>console.log('Correct'));