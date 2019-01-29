var controller = new ScrollMagic.Controller();

// // create a scene


new ScrollMagic.Scene({
    duration: "100%",
    triggerHook: 1   
  })
  .setTween('#left-content', {y: "-100%", ease: Linear.easeNone})
  .addIndicators()
  .addTo(controller);
new ScrollMagic.Scene({
    duration: "100%",
    triggerHook: 1   
  })
  .setTween('#mid-content', {y: "-30%", ease: Linear.easeNone})

  .addTo(controller);

new ScrollMagic.Scene({
    duration: "100%",
    triggerHook: 1   
  })
  .setTween('#right-content', {y: "-70%", ease: Linear.easeNone})
  .addIndicators()
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



