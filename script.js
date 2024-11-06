function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3); 

    if (randomNumber === 0) {
        return "Камень";
    } else if (randomNumber === 1) {
        return "Ножницы";
    } else {
        return "Бумага";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase().trim();
    computerSelection = computerSelection.toLowerCase().trim();

    if (playerSelection === computerSelection) {
        return "Ничья!";
    } else if (
        (playerSelection === "камень" && computerSelection === "ножницы") ||
        (playerSelection === "ножницы" && computerSelection === "бумага") ||
        (playerSelection === "бумага" && computerSelection === "камень")
    ) {
        return "Вы выиграли!";
    } else {
        return "Вы проиграли!";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    const playerSelection1 = prompt(" Введите камень, ножницы или бумага:");
    const computerScore1 = getComputerChoice();
    const result1 = playRound(playerSelection1,computerScore1);
    console.log(`Раунд 1: ${result1}`);
    if (result1 === "Вы выиграли!") playerScore++;
    else if (result1 === "Вы проиграли!") computerScore++;
    else if (playerSelection1 === null) {
        console.log("Пользователь отменил ввод.");
    }

    const playerSelection2 = prompt("Введите камень, ножницы или бумага:");
    const computerSelection2 = getComputerChoice();
    const result2 = playRound(playerSelection2, computerSelection2);
    console.log(`Раунд 2: ${result2}`);
    if (result2 === "Вы выиграли!") playerScore++;
    else if (result2 === "Вы проиграли!") computerScore++;
    else if (playerSelection2 === null) {
        console.log("Пользователь отменил ввод.");
    }

    const playerSelection3 = prompt("Введите камень, ножницы или бумага:");
    const computerSelection3 = getComputerChoice();
    const result3 = playRound(playerSelection3, computerSelection3);
    console.log(`Раунд 3: ${result3}`);
    if (result3 === "Вы выиграли!") playerScore++;
    else if (result3 === "Вы проиграли!") computerScore++;
    else if (playerSelection3 === null) {
        console.log("Пользователь отменил ввод.");
    }

    const playerSelection4 = prompt("Введите камень, ножницы или бумага:");
    const computerSelection4 = getComputerChoice();
    const result4 = playRound(playerSelection4, computerSelection4);
    console.log(`Раунд 4: ${result4}`);
    if (result4 === "Вы выиграли!") playerScore++;
    else if (result4 === "Вы проиграли!") computerScore++;
    else if (playerSelection4 === null) {
        console.log("Пользователь отменил ввод.");
    }

    const playerSelection5 = prompt("Введите камень, ножницы или бумага:");
    const computerSelection5 = getComputerChoice();
    const result5 = playRound(playerSelection5, computerSelection5);
    console.log(`Раунд 5: ${result5}`);
    if (result5 === "Вы выиграли!") playerScore++;
    else if (result5 === "Вы проиграли!") computerScore++;
    else if (playerSelection5 === null) {
        console.log("Пользователь отменил ввод.");
    }

    if (playerScore > computerScore) {
        console.log("Вы выиграли игру!");
    } else if (playerScore < computerScore) {
        console.log("Вы проиграли игру!");
    } else {
        console.log("Игра закончилась ничьей!");  
    }
}

game()