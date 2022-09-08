/*pick between rock paper or scissors as a string*/
function compChoice (){
    var choices = Array('rock','paper','scissors')
    const option = Math.floor(Math.random()*choices.length);
    return choices[option];
}
/*For now this is fine. Itll need to be changed so it takes buttons as input instead*/ 
function userChoice(){
    let chosen = prompt("Select a target for battle");
    let lowerUser = chosen.toLowerCase();
    return lowerUser;
}
/*RPS game logic*/
function game(){
    var userScore = 0;
    var compScore = 0;

    for(let i = 0; i < 10; i++)
    {
        let user = userChoice();
        let comp = compChoice();   
        if (userScore === 5 || compScore === 5){break;}
        
        if (user === 'rock'){
            if (comp == 'scissors'){
                userScore += 1;
                document.getElementById("Output").innerHTML = "Won round";
                document.getElementById("MyScore").innerHTML = userScore;
                console.log("Won round");
                
            }
            else if (comp == 'paper'){
                console.log("Lost round");
                document.getElementById("Output").innerHTML = "Lost round";
                compScore += 1;
            }
            else{
                console.log("It's a tie");
            }
        }
        if (user === 'scissors'){
            if (comp == 'paper'){
                userScore += 1;
                console.log("Won round");
                document.getElementById("Output").innerHTML = "Won round";
                document.getElementById("MyScore").innerHTML = userScore;
                
            }
            else if (comp == 'rock'){
                console.log("Lost round");
                document.getElementById("Output").innerHTML = "Lost round";
                compScore += 1;
            }
            else{
                console.log("It's a tie");
            }     
        }
        if (user === 'paper'){
            if (comp == 'rock'){
                console.log("Won round");
                userScore += 1;
                document.getElementById("Output").innerHTML = "Won round";
                document.getElementById("MyScore").innerHTML = userScore;
                
            }
            else if (comp == 'scissors'){
                console.log("Lost round");
                document.getElementById("Output").innerHTML = "Lost round";
                compScore += 1;
                document.getElementById("CompScore").innerHTML = userScore;
            }
            else{
                console.log("It's a tie");
            }
        }  
        console.log(userScore);
    }
}
