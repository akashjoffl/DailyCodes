/* ======= Code To Express ======= */
/* ========= Daily Codes ========= */

function dailyCode(n) {
    if (n<=1) {
        return 1;
    } else {
        return n*dailyCode(n-1);
    }
}

// Guess the output!
console.log(dailyCode(3)); 
console.log(dailyCode(4)); 
