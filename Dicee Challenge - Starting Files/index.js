var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;      //creates a random number
var randomImagenumber1 = "dice"+randomNumber1+".png";       //to select a random image , concanated "dice" with a random num from 1 to 6.
document.querySelector(".img1").setAttribute("src", "images/"+randomImagenumber1); // accesed image using its class then set its source attribute 
//now coding for 2nd image
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImagenumber2 = "dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src", "images/"+randomImagenumber2);
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").classList.toggle("h1-reasult");
    document.querySelector("h1").textContent="🚩 pLayer 1 Wins!";
    
}
else if (randomNumber2 > randomNumber1)
{
    document.querySelector("h1").textContent="Player 2 Wins! 🚩";
    document.querySelector("h1").classList.toggle("h1-reasult");
}
else{
    document.querySelector("h1").textContent="Draw!"
    document.querySelector("h1").classList.toggle("h1-reasult");
}


