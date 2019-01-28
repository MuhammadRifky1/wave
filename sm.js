var controller = new ScrollMagic.Controller();

// create a scene
var wipeAnimation = new TimelineMax()
    .from("#sb", 1,   {x: "100%"})
var pinTitle = new ScrollMagic.Scene({
        triggerHook: 'onLeave',
        triggerElement: '#title-section',
        duration: '200%'
    })
    .setPin("#title-section")
    .addIndicators()
    .addTo(controller);

var pinSb = new ScrollMagic.Scene({
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setPin("#sb", {pushFollowers: false})
    .setTween(wipeAnimation)
    .addIndicators()
    .addTo(controller);

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



