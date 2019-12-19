const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

const allHoles = document.getElementsByClassName('hole');
for (hole in allHoles) {
  allHoles[hole].onclick = clickFunction;
};

function checkWin() {
    if (dead.textContent == 10) {
        alert('You win!!!');
        dead.textContent = 0;
        lost.textContent = 0;
    } else if (lost.textContent == 5) {
        alert('Game over...');
        dead.textContent = 0;
        lost.textContent = 0;
    };
};

function clickFunction() {
    if (this.className.includes('hole hole_has-mole')) {
        dead.textContent++;
        checkWin();
    } else {
        lost.textContent++;
        checkWin();
    };
}