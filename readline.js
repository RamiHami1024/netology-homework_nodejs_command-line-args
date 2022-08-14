#!/usr/bin/env node

// Task #2

const readline = require('readline')
const rl = readline.createInterface({ input, output });
const number = Math.floor(Math.random() * 100);
let guess = 0;
let counter = 0;
console.log(number);

rl.question('Загадано число в диапазоне от 0 до 100: ', (answer) => {
    guess = Number(answer);

    if (guess > number) {
        console.log('Меньше')
    } else if (guess < number) {
        console.log('Больше')
    } else {
        console.log('Вы угадали')
        rl.close()
    }

    rl.on('line', (answer) => {
        guess = Number(answer);

        if (guess > number) {
        console.log('Меньше')
        } else if (guess < number) {
            console.log('Больше')
        } else {
            console.log('Вы угадали')
            rl.close()
        }
    })
});

