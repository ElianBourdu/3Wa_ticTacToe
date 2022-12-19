// All ways of winning
const checkWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let count = 0;

document.addEventListener('DOMContentLoaded', () => {
    const arrayOfButton = Array.from(document.getElementsByTagName("button"));
    console.log(arrayOfButton);
    arrayOfButton.forEach(button => {
        const onclick = () => {
            button.removeEventListener('click', onclick);
            
            // check if a player win after each click
            const checkIfPlayerWin = (sign) => {
                for (let i = 0; i < checkWin.length; i++) {
                    console.log(`${i}: ${arrayOfButton[i].innerHTML}`)
                    if (arrayOfButton[checkWin[i][0]].innerHTML === sign && arrayOfButton[checkWin[i][1]].innerHTML === sign && arrayOfButton[checkWin[i][2]].innerHTML === sign) {
                        if (sign === "o") {
                            console.log("player 1 won");
                        }
                        else if (sign === "x") {
                            console.log("player 2 won");
                        }
                    }
                }
            };
            
            // handling each value assigned regarding which player clicked
            if (count % 2 === 0) {
                // even
                button.innerText = "o";
                console.log("joueur 1")
                checkIfPlayerWin("o");
            }
            else if (count % 2 === 1) {
                // odd
                button.innerText = "x";
                console.log("joueur 2")
                checkIfPlayerWin("x");
            }
            count++;
            console.log(count);
        };
        button.addEventListener('click', onclick);
    });
});
