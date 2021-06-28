const p1 = document.querySelector('#p1button');
const p2 = document.querySelector('#p2button');
const p1disp = document.querySelector('#p1disp');
const p2disp = document.querySelector('#p2disp');
const reset = document.querySelector('#reset');
const matchvalue = document.querySelector('#matchvalue');

var p1score = 0;
var p2score = 0;
var gamepoint = 5;
var isMatchOver = false;

p1.addEventListener('click', function () {
    if (!isMatchOver) {
        p1score++;
        p1disp.textContent = p1score;
        if (p1score === gamepoint) {
            isMatchOver = true;
            p1disp.style.color = 'green';
            p2disp.style.color = 'red';
        }
    }

})

p2.addEventListener('click', function () {
    if (!isMatchOver) {
        p2score++;
        p2disp.textContent = p2score;
        if (p2score === gamepoint) {
            isMatchOver = true;
            p2disp.style.color = 'green';
            p1disp.style.color = 'red';
        }
    }
})

reset.addEventListener('click', function () {
    p1score = 0;
    p2score = 0;
    p1disp.textContent = 0;
    p2disp.textContent = 0;
    p1disp.style.color = 'black';
    p2disp.style.color = 'black';
    isMatchOver = false;
})

matchvalue.addEventListener('change', function () {
    gamepoint = parseInt(this.value);
})