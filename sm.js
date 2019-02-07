var controller = new ScrollMagic.Controller();
var materi = document.getElementById("scrollIntoView");
materi.addEventListener('click', function(){
  var element = document.getElementById('Materi');
element.scrollIntoView({behavior: "smooth", block: "start"});
});

var tm = new TimelineMax()




tm
  .to("#line2", 1.5, {y: '-100%'})
  .to("#line1", 1.5, {x: '-100%'})
  .staggerTo(".circle" ,3 , {scale: 20, opacity: 1}, 0.1);


new ScrollMagic.Scene({
  triggerElement: '#wave-trigger',
  triggerHook: 0
})
.setClassToggle(".circle", "not-visible")
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
.addTo(controller);

// for(i = 1; i <= 5; i++){
//   new ScrollMagic.Scene({
//     triggerElement: '#horizontal-wrapper',
//     duration: "400%",
//     triggerHook: 0
//   })
//   .setPin("#horizontal")
//   .addTo(controller);
// }


















