var choices = ["rock", "paper", "scissors"];

var player_img = document.querySelector(".player > img");
var computer_img = document.querySelector(".computer > img");

function process(player_choice) {
    var random = Math.floor(Math.random() * 3);  
    var computer_choice = choices[random];
    
    var player_src = "./images/" + player_choice + ".jpg";
    var computer_src = "./images/" + computer_choice + ".jpg";

    player_img.setAttribute("src", player_src);
    computer_img.setAttribute("src", computer_src);
    
    var result;
    if (player_choice == computer_choice) {
        result = "It's A Draw";
    } else if ((player_choice == "rock" && computer_choice == "paper") || 
               (player_choice == "paper" && computer_choice == "scissors") || 
               (player_choice == "scissors" && computer_choice == "rock")) {
        result = "Player Lost";
    } else {
        result = "Player Won!!";
    }
    
    var final = document.querySelector("h3");
    final.textContent = result;
}

var buttons = document.querySelectorAll(".buttons button");
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        var text = this.innerHTML.toLowerCase();
        process(text);
    });
});


