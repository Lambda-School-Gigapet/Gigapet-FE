// returns a random number between a given range
// the min is inclusive, the max is exclusive
// so the default args for this generate a random num between 1 and 10
export default function randomNum(min=1, max=11) {
    return Math.round(Math.random() * (max - min) + min);
}