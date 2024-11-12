import { rollTheDice } from './rollTheDice.js';

export function animateDice(sides, resultElement) {
    let rolls = 10;
    let intervalTime = 50;

    const interval = setInterval(() => {
        resultElement.textContent = rollTheDice(sides).toString();
        rolls--;
        if (rolls <= 0) {
            clearInterval(interval);
            resultElement.textContent = rollTheDice(sides).toString();
        }
    }, intervalTime);
}
