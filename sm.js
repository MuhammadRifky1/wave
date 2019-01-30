var controller = new ScrollMagic.Controller();
var materi = document.getElementById("scrollIntoView");
var tm = new TimelineMax()


var circle = tm.staggerTo(".circle",3, {scale: 20, onComplete: destroy_circle}, 0.3);
var circle_alpha = TweenMax.staggerFrom(".circle",1.5, { alpha:0 }, 0.3);
function destroy_circle(){
  for(i = 0; i < 7; i++){
      document.getElementsByClassName("circle")[i].style.display = "none";

  }
  
    setTimeout(function(){
      tm.restart();
      for(i = 0; i < 7; i++){
      document.getElementsByClassName("circle")[i].style.display = "inline-block";
      }
    },1000)

  
}



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




new ScrollMagic.Scene({
  triggerElement: '#header',
  offset: 100,
  triggerHook: 0,
  duration: "50%",
})
.setTween(circle)
.addIndicators()
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



