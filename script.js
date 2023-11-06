
var odidoButton = document.querySelector(".odido");
var audio = new Audio("./audio/odido.mp3");
var odidoStatus = false;

odidoButton.addEventListener("click", odidoTime);

function odidoTime(){
     if (odidoStatus === false) {

        audio.play();

        odidoStatus = true;

    } else {

        audio.pause();

        odidoStatus = false;

    }
}   