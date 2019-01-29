var controller = new ScrollMagic.Controller();
var materi = document.getElementById("scrollIntoView");

materi.addEventListener('click', function(){
  var element = document.getElementById('Materi');
element.scrollIntoView({behavior: "smooth", block: "start"});
})
// create a scene


new ScrollMagic.Scene({
    triggerElement: '#paralax',
    duration: "100%",
    triggerHook: 1
  })
  .setTween('#left-content', {y: "-20%", ease: Linear.easeNone})
  .addTo(controller);
//toDownWave5
new ScrollMagic.Scene({
  triggerElement: '#paralax',
  duration: "110%",
  triggerHook: 1
})
.setTween('#toDown', {y: "100%", ease: Linear.easeNone})

.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '#paralax',
    duration: "100%",
    triggerHook: 1   
  })
  .setTween('#mid-content', {y: "-80%", ease: Linear.easeNone})
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '#paralax',
    duration: "100%",
    triggerHook: 1   
  })
  .setTween('#right-content', {y: "-50%", ease: Linear.easeNone})
  .addTo(controller);


  // fade-in
  new ScrollMagic.Scene({
    triggerElement: '#Materi',
    triggerHook: .1   
  })
  .setTween('#text-reveal', { ease: Power1.easeOut, y: 0})
  .addTo(controller);

// // var load = new ScrollMagic.Scene({
// //     triggerHook: 0,
// //     triggerElement: "#transition_coming"
// // })
// // .setClassToggle("#sb", "show-flex")
// // .addIndicators({
// //     name: "load",
// //     colorTrigger: "red",
// //     colorTrigger: "red"
// // })
// // .addTo(controller);



