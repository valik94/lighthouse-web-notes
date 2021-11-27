//Write a program that takes a single parameter from the command line, a number, and rolls that many six-sided dice.


const args = process.argv;
let num = args.slice(2);

const diceRoller = function(nums){
    for( let i = 1; i <= nums; i++) {
        let generatedNumber = Math.floor(Math.random()* 6) + 1;
        console.log(generatedNumber);
    }
    
}

diceRoller(22);