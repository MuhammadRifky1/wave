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
})

// Gelombang Elektromagnetik
new ScrollMagic.Scene({
  triggerElement: '#header',
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




// paralax
new ScrollMagic.Scene({
    triggerElement: '#paralax',
    duration: "100%",
    triggerHook: 1
  })
  .setTween('#left-content', {y: "-20%", ease: Linear.easeNone})
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

// text-reveal
new ScrollMagic.Scene({
  triggerElement: '#Materi',
  triggerHook: .1   
})
.setTween('#text-reveal', { ease: Power1.easeOut, y: 0})
.addTo(controller);

//wave
new ScrollMagic.Scene({
  triggerElement: '#paralax',
  duration: "110%",
  triggerHook: 1
})
.setTween('#toDown', {y: "100%", ease: Linear.easeNone})
.addTo(controller);

// new ScrollMagic.Scene({
//   triggerElement: '#arrd',
//   triggerHook: "onLeave"
// })
// .setClassToggle('.container-quiz', "visible")
// .addIndicators()
// .addTo(controller);

// new ScrollMagic.Scene({
//   triggerElement: '#arrd',
//   triggerHook: "onLeave"
// })
// .setTween()
// .addIndicators()
// .addTo(controller);

TweenMax.from(".container-quiz", 3, {y: "-100%"});


















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



