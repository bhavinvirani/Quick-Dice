function ref(){
    var random_dice_1  = "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";
    var random_dice_2  = "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";

    // console.log(random_dice_1)
    // console.log(random_dice_2)

    document.getElementById("img1").setAttribute("src",random_dice_1)
    document.getElementById("img2").setAttribute("src",random_dice_2)

    // x = "";
    if(random_dice_1 > random_dice_2){
        // x += "Player 1 Win";
        document.querySelector("h1").innerHTML = "🚩Player 1 Win"
    }else if(random_dice_1 < random_dice_2){
        // x += "Player 2 Win";
        document.querySelector("h1").innerHTML = "Player 2 Win🚩"
    }else{
        // x += "Draw!!!";
        document.querySelector("h1").innerHTML = "Draw!!!"
    }
    // document.getElementById("title").innerHTML = x;
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32 || e.keyCode == 13){
        ref();
        // Location.relode();
    }
}



