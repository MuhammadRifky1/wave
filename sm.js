var controller = new ScrollMagic.Controller();
var materi = document.getElementById("scrollIntoView");
var tm = new TimelineMax()


var circle = tm.staggerTo(".circle",3, {scale: 20, onComplete: destroy_circle, opacity: 1}, 0.3);
function destroy_circle(){
  for(i = 0; i < 7; i++){
      document.getElementsByClassName("circle")[i].style.display = "none";

  }
  
    setTimeout(function(){
      tm.restart();
      for(i = 0; i < 7; i++){
      document.getElementsByClassName("circle")[i].style.display = "inline-block";
      }
    },500)

  
}



materi.addEventListener('click', function(){
  var element = document.getElementById('Materi');
element.scrollIntoView({behavior: "smooth", block: "start"});
});

// Gelombang Elektromagnetik
new ScrollMagic.Scene({
  triggerElement: '#title-text',
  offset: 100,
  triggerHook: 0.1,
  duration: "50%",
})
.setTween(circle)
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '#header',
  offset: 100,
  triggerHook: 0.1,
  duration: "90%"
})
.setClassToggle(".circle", "visible")
.addTo(controller);




//materi

var horizontalSlide = new TimelineMax()
    .to('#horizontal', 1, {x: '-20%'})
    .to('#horizontal', 1, {x: '-40%'})
    .to('#horizontal', 1, {x: '-60%'})
    .to('#horizontal', 1, {x: '-80%'});

new ScrollMagic.Scene({
  triggerElement: '#horizontal-wrapper',
  duration: "400%",
  triggerHook: 0
})
.setTween(horizontalSlide)
.setPin('#horizontal')
.addTo(controller);

var maskingMove = new TimelineMax()
    .to('#masking', 1, {x: '100%'})
    .to('#masking2', 1, {x: '100%'})
    .to('#masking3', 1, {x: '100%'})
    .to('#masking4', 1, {x: '100%'})
    .to('#masking5', 1, {x: '100%'})
    .to('#masking6', 1, {x: '100%'})
    .to('#masking7', 1, {x: '100%'})
    .to('#masking8', 1, {x: '100%'});


new ScrollMagic.Scene({
  triggerElement: '#horizontal-wrapper',
  duration: "450%"
})
.setTween(maskingMove)
.addIndicators()
.addTo(controller);

for(i = 1; i <= 5; i++){
  new ScrollMagic.Scene({
    triggerElement: '#horizontal-wrapper',
    duration: "400%",
    triggerHook: 0
  })
  .setPin("#horizontal'++'")
  .addTo(controller);
}











  


var items = document.querySelectorAll('.scrolling-text span'), length = items.length;
var duration = 0.07;
var tl = new TimelineMax({ paused:true, repeat: -1, delay: duration * 0.5, repeatDelay: 1 });
for (var i = 0; i < length; i += 1) {
    tl.from(items[i], duration, {autoAlpha:0, scale:2});
    tl.to(items[i], duration, {autoAlpha:1, scale:1,});
}
tl.play();

var tlm = new TimelineMax({ paused:true, repeat: -1, delay: duration * 0.5});
var items = document.querySelectorAll('.dotts'), length = items.length;
var duration = 0.07;
for (var i = 0; i < length; i += 1) {
  tl.from(items[i], duration, { autoAlpha:0, top:"-20px"});
  tl.to(items[i], duration, {autoAlpha:1, top:"0px"});
}
tlm.play();

TweenMax.to(".arrow-mask", 1.5, {top: '100%', ease: Power1.easeNone, repeat: -1, repeatDelay: .5});

new ScrollMagic.Scene({
  triggerElement: '#arrd',
  triggerHook: 0.3,
  duration: "100%"
})
.setPin('#arrd', {pushFollowers	: false})
.addTo(controller);


//quiz


// show quiz
new ScrollMagic.Scene({
  triggerElement: '#qw2',
  triggerHook: 0,
  reverse: false
})
.setClassToggle('.container-quiz', "visible")

.addTo(controller);

// animate quiz
var quiz = TweenMax.from("#quiz-show", 1, {y: '-100%', onComplete: show_footer});
new ScrollMagic.Scene({
  triggerElement: '#qw2',
  triggerHook: 0,
  reverse: false
})
.setTween(quiz)
.addTo(controller);


function show_footer() {
  document.getElementById('footer').style.display = "inline-block";
}

// broke quiz container 1

// new ScrollMagic.Scene({
//   triggerElement: '#qw2',
//   triggerHook: 0,
//   reverse: false
// })
// .setClassToggle('#qw1', "not-visible")
// .addIndicators()
// .addTo(controller);





// audio 

// const globals = {
//   audio: true
// }

// // Audio
// buttonClick = new Audio('mp3/Buttonclick.mp3');
// featured = new Audio('mp3/featured.mp3');
// slideSlow = new Audio('mp3/slideSlow.mp3');
// wrong = new Audio('mp3/Wrong.mp3');
// bg = new Audio('mp3/retrogameloop.mp3');

// // for button
// function playSound(sound) {
//   if (globals.audio) {

//       sound.play(); // Play sound
//   }
// }


// function playAudio(sound) {

//   sound.loop = true;
//   sound.volume = 0.7;
//   sound.play(); // Play sound

// }

// new ScrollMagic.Scene({
//   triggerElement: '#qw2',
//   triggerHook: .6
// })
// .on('start', function(){
//   playAudio(bg); 
// })
// .addTo(controller);

  


















// var load = new ScrollMagic.Scene({
//     triggerHook: 0,
//     triggerElement: "#transition_coming"
// })
// .setClassToggle("#sb", "show-flex")
// .addIndicators({
//     name: "load",
//     colorTrigger: "red",
//     colorTrigger: "red"
// })
// .addTo(controller);



