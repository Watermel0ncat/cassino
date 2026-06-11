let money = 1000;

function updateMoney() {
    document.getElementById("money").innerHTML =
        `Balance: $${money}`;
}

function getBet() {
    let bet = Number(prompt("Enter bet amount"));

    if (bet <= 0 || bet > money || isNaN(bet))
        return null;

    return bet;
}

function win(amount) {
    money += amount;
    updateMoney();
}

function lose(amount) {
    money -= amount;
    updateMoney();
}

function show(text) {
    document.getElementById("output").innerHTML = text;
}

// Coin Flip
function coinFlip() {

    let bet = getBet();
    if (!bet) return;

    let guess = prompt("heads or tails").toLowerCase();

    let result =
        Math.random() < .5 ? "heads" : "tails";

    if (guess === result) {
        win(bet);
        show(`Coin landed ${result}. You won $${bet}`);
    } else {
        lose(bet);
        show(`Coin landed ${result}. You lost.`);
    }
}

// Dice Roll
function diceRoll() {

    let bet = getBet();
    if (!bet) return;

    let guess = Number(prompt("Guess 1-6"));

    let roll = Math.floor(Math.random()*6)+1;

    if (guess === roll) {
        win(bet*5);
        show(`Rolled ${roll}. Jackpot!`);
    } else {
        lose(bet);
        show(`Rolled ${roll}.`);
    }
}

// High Card
function highCard() {

    let bet = getBet();
    if (!bet) return;

    let player =
        Math.floor(Math.random()*13)+1;

    let dealer =
        Math.floor(Math.random()*13)+1;

    if (player > dealer) {
        win(bet);
        show(`You:${player} Dealer:${dealer}<br>You win!`);
    } else if (player < dealer) {
        lose(bet);
        show(`You:${player} Dealer:${dealer}<br>You lose!`);
    } else {
        show("Tie");
    }
}

// Lucky Number
function luckyNumber() {

    let bet = getBet();
    if (!bet) return;

    let guess = Number(prompt("Pick 1-10"));

    let num =
        Math.floor(Math.random()*10)+1;

    if (guess === num) {
        win(bet*8);
        show(`Lucky number was ${num}!`);
    } else {
        lose(bet);
        show(`Lucky number was ${num}`);
    }
}

// Slots
function slots() {

    let bet = getBet();
    if (!bet) return;

    let symbols =
        ["🍒","🍋","⭐","7"];

    let s1 =
        symbols[Math.floor(Math.random()*4)];
    let s2 =
        symbols[Math.floor(Math.random()*4)];
    let s3 =
        symbols[Math.floor(Math.random()*4)];

    if (s1===s2 && s2===s3) {
        win(bet*10);
    } else {
        lose(bet);
    }

    show(`${s1} ${s2} ${s3}`);
}

// Roulette
function roulette() {

    let bet = getBet();
    if (!bet) return;

    let guess =
        prompt("red or black").toLowerCase();

    let result =
        Math.random()<0.5 ? "red" : "black";

    if (guess===result) {
        win(bet);
    } else {
        lose(bet);
    }

    show(`Result: ${result}`);
}

// Craps
function craps() {

    let bet = getBet();
    if (!bet) return;

    let d1 =
        Math.floor(Math.random()*6)+1;

    let d2 =
        Math.floor(Math.random()*6)+1;

    let total = d1+d2;

    if (total === 7 || total === 11) {
        win(bet*2);
        show(`Rolled ${total}. Natural!`);
    }
    else if (
        total === 2 ||
        total === 3 ||
        total === 12
    ) {
        lose(bet);
        show(`Rolled ${total}. Craps!`);
    }
    else {
        show(`Point established: ${total}`);
    }
}

// Color Guess
function colorGame() {

    let bet = getBet();
    if (!bet) return;

    let colors =
        ["red","blue","green","yellow"];

    let guess =
        prompt("Pick a color");

    let result =
        colors[Math.floor(Math.random()*4)];

    if (guess===result) {
        win(bet*3);
    } else {
        lose(bet);
    }

    show(`Color was ${result}`);
}

// Even/Odd
function evenOdd() {

    let bet = getBet();
    if (!bet) return;

    let guess =
        prompt("even or odd").toLowerCase();

    let num =
        Math.floor(Math.random()*100)+1;

    let result =
        num%2===0 ? "even" : "odd";

    if (guess===result) {
        win(bet);
    } else {
        lose(bet);
    }

    show(`Number: ${num}`);
}

// Plinko
function plinko() {

    let bet = getBet();
    if (!bet) return;

    let multipliers =
        [0,0.5,1,2,5,10];

    let multi =
        multipliers[
            Math.floor(
                Math.random()*multipliers.length
            )
        ];

    let winnings =
        Math.floor(bet*multi);

    money += winnings - bet;

    updateMoney();

    show(
        `Ball landed in ${multi}x slot.<br>
        Winnings: $${winnings}`
    );
}
