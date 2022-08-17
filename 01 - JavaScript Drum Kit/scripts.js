function playKey(e){
    let pressedAudio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!pressedAudio) return;
    else pressedAudio.play();
}


window.addEventListener("keydown", playKey)