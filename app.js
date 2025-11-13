function getComputerChoice() {
    const randNum = Math.random();
    if (randNum <= 0.32) {
        return "Rock"
    } else if (randNum <= 0.65) {
        return "Paper"
    } else {
        return "Scissors"
    }
}
console.log(getComputerChoice())