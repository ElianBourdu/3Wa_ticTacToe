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
    console.log(arrayOfButton)
    arrayOfButton.forEach(button => {
        const onclick = () => {
            button.removeEventListener('click', onclick);
            count++;
            console.log(count);
            if (count % 2 === 0) {
                // even
                button.innerText = "o";
            }
            else if (count % 2 === 1) {
                // odd
                button.innerText = "x";
            }

            // check if a player win after each click
            // const checkIfPlayerWin = (sign) => {
            //     for (let i = 0; i < checkWin.length; i++) {
            //         if (checkWin[i]) {

            //         }
            //     }
            // };
        };
        button.addEventListener('click', onclick);
    });
});
