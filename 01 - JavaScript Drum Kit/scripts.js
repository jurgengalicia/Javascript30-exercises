function playKey(e){
    const pressedAudio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const pressedKey = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!pressedAudio) return;

    pressedAudio.currentTime = 0;
    pressedAudio.play();

    pressedKey.classList.add("playing");
}

function removeTransition(e){
    if(e.propertyName !== "transform") return;
    console.log(e.propertyName);
    this.classList.remove("playing")
}


window.addEventListener("keydown", playKey)

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend",removeTransition))