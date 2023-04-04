let secretWord = "PESSEGO";
let hint = "Fruit";



let playGame = confirm("Would you kindly play this game?");

if (playGame){

    let lettersGuessed = "";
    let word = "_";

    while (word.includes("_")){
        
        word = "";
        let playerInput = prompt("Please enter a letter");

        if (playerInput){
            playerInput = playerInput.trim().toUpperCase().slice(0, 1);
            console.log(playerInput);

            if (secretWord.includes(playerInput)){

                lettersGuessed += playerInput;
                for (let j = 0; j < secretWord.length; j++){
                    if (lettersGuessed.includes(secretWord[j])){
                        word += secretWord[j];
                    }
                    else {
                        word += "_";
                    }
                }
                console.log(lettersGuessed);
                confirm(word);
            }
        }
        else {
            break;
        }
    }

}
else {
    alert("OK");
}



/* 
let playAgain = confirm ("Play Again?");
playAgain? location.reload() : alert("Ok, thanks for playing."); */