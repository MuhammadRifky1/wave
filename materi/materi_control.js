// Audio
materiSound1 = new Audio('../mp3/dubbing/1.mp3');
materiSound2 = new Audio('../mp3/dubbing/2.mp3');
materiSound3 = new Audio('../mp3/dubbing/3.mp3');
materiSound4 = new Audio('../mp3/dubbing/4.mp3');
materiSound4_2 = new Audio('../mp3/dubbing/4_2.mp3');

const soundSwitch = {
    audio: true
}


function playSound(sound) {
    if (soundSwitch.audio) {
        sound.play(); // Play sound
    }else {
        sound.pause();
    }
        
}
    

function landAnimate(){
    TweenMax.staggerFrom("#fade-in", 1, {y: -25, alpha: 0, ease: Bounce.easeOut}, .3);

    new TimelineMax()
        .to(".prev-page-btn", .1, 
        {scale: 2, ease: Power2.easeOut})
        .to(".prev-page-btn", .5, 
        {scale: .8, ease: Power2.easeOut})
        .to(".next-page-btn", .1, 
        {scale: 2, ease: Power2.easeOut})
        .to(".next-page-btn", .5, 
        {scale: .8, ease: Power2.easeOut})
        .to("#sound-materi", .1, 
        {scale: 2, ease: Power2.easeOut})
        .to("#sound-materi", .5, 
        {scale: 1, ease: Power2.easeOut});

}

var soundMateri = document.getElementById('sound-materi');
var disagree = document.getElementById('disagree-btn');



function audioSet(sound){
    if (!soundSwitch.audio){
        Object.assign(soundSwitch, { audio: true });
    }
    document.getElementsByClassName('modal-content-container')[0].style.display = "none";
    playSound(sound);
    landAnimate();
    btnCheck();
}

function soundCheck(sound) {
    if (soundSwitch.audio){
        Object.assign(soundSwitch, { audio: false });
        playSound(sound);           
    }else{
        Object.assign(soundSwitch, { audio: true });   
        playSound(sound);
    }
    btnCheck();
}

function btnCheck(){
    if (!soundSwitch.audio){
        soundMateri.style.opacity = ".5"
    }else {
        soundMateri.style.opacity = "1"
    }
}

    

disagree.addEventListener('click', function(){
    document.getElementsByClassName('modal-content-container')[0].style.display = "none";
    landAnimate();
    Object.assign(soundSwitch, { audio: false });
    btnCheck();
})








