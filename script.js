// All ways of winning
const checkWin = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
// push ou je fou le bordel deadline 12:30
let count = 0;

document.addEventListener('DOMContentLoaded', () => {
    const arrayOfButton = document.getElementsByTagName("button");
    Array.from(arrayOfButton).forEach(button => {
        const onclick = () => {
            console.log(count++);
            button.innerText = "X"
            button.removeEventListener('click', onclick)
        }
        button.addEventListener('click', onclick);
    });
});
