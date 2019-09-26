// returns a random number between a given range
// the min is inclusive, the max is exclusive
// so the default args for this generate a random num between 1 and 10
function randomNum(min=1, max=11) {
    return Math.round(Math.random() * (max - min) + min);
}

const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown']
export default function generateRandomColor(colorsArr=colors) {
    return colorsArr[randomNum(0, colorsArr.length)]  
} 



