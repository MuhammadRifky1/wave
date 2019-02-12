
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
    if (soundSwitch.audio == true) {
        sound.play(); // Play sound
    }
}


// TweenMax.staggerFrom(".fade-in", 1, {y: -25, alpha: 0, ease: Bounce.easeOut}, .3);

// new TimelineMax()
//     .to(".prev-page-btn", .1, 
//     {scale: 2, ease: Power2.easeOut})
//     .to(".prev-page-btn", .5, 
//     {scale: .8, ease: Power2.easeOut})
//     .to(".next-page-btn", .1, 
//     {scale: 2, ease: Power2.easeOut})
//     .to(".next-page-btn", .5, 
//     {scale: .8, ease: Power2.easeOut})
//     .to("#sound-materi", .1, 
//     {scale: 2, ease: Power2.easeOut})
//     .to("#sound-materi", .5, 
//     {scale: 1, ease: Power2.easeOut, onComplete: audioSet});

    

    

// startQuiz.addEventListener('click', function(){
//     startQuiz.style.display = "none";
//     playAudio(bg);
// })

// var ans = document.getElementsByClassName("answer");


//     for (var i = 0; i < ans.length; i++) {
//         ans[i].addEventListener('mouseenter', function(){
//             playSound(buttonClick);        
//         })
//     }



// soundBtn.addEventListener('click', function(){
    
    
//     if (globals.audio == true) {
//         Object.assign(globals, { audio: false });
//         soundBtn.style.opacity = ".5";
//         playAudio(bg);
//     }else {
//         Object.assign(globals, { audio: true });
//         playAudio(bg);
//         soundBtn.style.opacity = "1";
        
//     }
// })

var agree = document.getElementById('agree-btn');
var disagree = document.getElementById('disagree-btn');

agree.addEventListener('click', function(){
    console.log(123)
    document.getElementsByClassName('modal-content-container')[0].style.display = "none";
})
disagree.addEventListener('click', function(){
    document.getElementsByClassName('modal-content-container')[0].style.display = "none";
})




