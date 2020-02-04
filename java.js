let x = Math.floor(Math.random() * 100 + 1);
// console.log(x);

let boxs = [];

let round = 0;


function myFunction() {
    let inputNumber = document.getElementById('numbers').value;
    // console.log(inputNumber);



    if (inputNumber == "" ) {
        alert('plz input number')
        document.getElementById('numbers').focus();
        return false;
    } else if (inputNumber > 100 || inputNumber < 1) {
        alert('Plz input number between 1 to 100')
        document.getElementById('numbers').focus();
        return false;
    }

    if (inputNumber < x) {
        // console.log('Too low')
        boxs.push(inputNumber);
        round++;
        document.getElementById('numbers').value = '';
        document.getElementById("showRound").innerHTML = "You have " + (10 - round) + "  turn.";
        document.getElementById('TorF').style.backgroundColor = "red";
        document.getElementById('TorF').innerHTML = "Wrong!!"
        document.getElementById('lOrH').innerHTML = "Too low!!"
    } else if (inputNumber > x) {
        // console.log('Too heigh')
        boxs.push(inputNumber);
        round++;
        document.getElementById('numbers').value = '';
        document.getElementById("showRound").innerHTML = "You have " + (10 - round) + "  turn.";
        document.getElementById('TorF').style.backgroundColor = "red";
        document.getElementById('TorF').innerHTML = "Wrong!!"
        document.getElementById('lOrH').innerHTML = "Too Heigh!!"
    } else if(inputNumber==x){
        // console.log('you win')
        document.getElementById('buttonNewGame').style.visibility = "visible";
        document.getElementById('TorF').style.backgroundColor = "green";
        document.getElementById('TorF').innerHTML = "Congratulation!! You win!!"
        document.getElementById('buttonSub').disabled = true;
        document.getElementById("lOrH").innerHTML = "";

        return true;

    }else{
        alert('plz input number')
        document.getElementById('numbers').focus();
       
        return false;
    }

    // console.log(boxs) //check program

    if (round == 10) {
        console.log('You lose')
        document.getElementById("showRound").innerHTML = "";
        document.getElementById('TorF').innerHTML = "GAME OVER!!"
        document.getElementById('buttonSub').disabled = true;
        document.getElementById('buttonNewGame').style.visibility = "visible";

    }

    // console.log(round) //check program
    document.getElementById("showNumber").innerHTML = "Previous guesses : " + boxs;

}