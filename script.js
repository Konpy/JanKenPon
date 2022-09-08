function compChoice (){
    var choices = Array('rock','paper','scissors')
    const option = Math.floor(Math.random()*choices.length);
    console.log(option)
    return choices[option];
}
function game(){
    let userChoice = prompt("Select a target for battle");
    let lowerUser = userChoice.toLowerCase();
    let comp = compChoice();

    if (lowerUser == comp){
        console.log("We have the same thing");
    }
    else{
        console.log("Not same")
    }
}
