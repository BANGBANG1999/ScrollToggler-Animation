
if(window.innerWidth < 768){
  const tnslider = tns({
    container: ".slider",
    slideBy: 1,
    mouseDrag: true,
    navPosition: "bottom",
    controls: false
  })
}





//scroll magic
var controller = new ScrollMagic.Controller()

//For Page number: 1
var ourScene100 = new ScrollMagic.Scene({
  triggerElement: ".firstPageLeft",
  triggerHook: "onEnter"
}).setClassToggle(".firstPageLeft", "fade-in").addTo(controller)

var ourScene99 = new ScrollMagic.Scene({
  triggerElement: ".firstPageRight",
  triggerHook: "onEnter"
}).setClassToggle(".firstPageRight", "fade-in").addTo(controller)

var ourScene98 = new ScrollMagic.Scene({
  triggerElement: ".abc",
  triggerHook: "onEnter"
}).setClassToggle(".abc", "fade-in").addTo(controller)

var ourScene98 = new ScrollMagic.Scene({
  triggerElement: ".abc_paragraph",
  triggerHook: "onEnter"
}).setClassToggle(".abc_paragraph", "fade-in").addTo(controller)

var ourScene98 = new ScrollMagic.Scene({
  triggerElement: ".uxStrategy",
  triggerHook: "onEnter"
}).setClassToggle(".uxStrategy", "fade-in").addTo(controller)

var ourScene98 = new ScrollMagic.Scene({
  triggerElement: ".Redifining",
  triggerHook: "onEnter"
}).setClassToggle(".Redifining", "fade-in").addTo(controller)

var ourScene98 = new ScrollMagic.Scene({
  triggerElement: ".ui_design",
  triggerHook: "onEnter"
}).setClassToggle(".ui_design", "fade-in").addTo(controller)


//For page number: 3
var ourScene1 = new ScrollMagic.Scene({
  triggerElement: ".firstPic_thirdPage",
  triggerHook: "onEnter"
}).setClassToggle(".firstPic_thirdPage", "fade-in").addTo(controller)


var ourScene2 = new ScrollMagic.Scene({
  triggerElement: ".secondPic_thirdPage",
  triggerHook: 'onEnter'
}).setClassToggle(".secondPic_thirdPage", "fade-in").addTo(controller)

var ourScene4 = new ScrollMagic.Scene({
  triggerElement: ".blockchain",
  triggerHook: 'onEnter'
}).setClassToggle(".blockchain", "fade-in").addTo(controller)

var ourScene5 = new ScrollMagic.Scene({
  triggerElement: ".abc_thirdPage",
  triggerHook: 'onEnter'
}).setClassToggle(".abc_thirdPage", "abc-rotate").addTo(controller)

var ourScene6 = new ScrollMagic.Scene({
  triggerElement: ".abc_thirdPage",
  triggerHook: 'onEnter'
}).setClassToggle(".abc_paragraph_thirdPage", "paragraph-rotate").addTo(controller)

var ourScene7 = new ScrollMagic.Scene({
  triggerElement: ".theNextBig",
  triggerHook: 'onEnter'
}).setClassToggle(".theNextBig", "big-rotate").addTo(controller)

var ourScene8 = new ScrollMagic.Scene({
  triggerElement: ".revolution",
  triggerHook: 'onEnter'
}).setClassToggle(".revolution", "revolution-rotate").addTo(controller)


// Animation for scrolling up
var ourScene1Reverse = new ScrollMagic.Scene({
  triggerElement: ".firstPic_thirdPage",
  triggerHook: "onLeave", // Trigger when leaving the element
  reverse: false, // Reverse the animation when scrolling up
}).setClassToggle(".firstPic_thirdPage", "fade-in").addTo(controller);

var ourScene2Reverse = new ScrollMagic.Scene({
  triggerElement: ".secondPic_thirdPage",
  triggerHook: "onLeave",
  reverse: false,
}).setClassToggle(".secondPic_thirdPage", "fade-in").addTo(controller);

var ourScene4Reverse = new ScrollMagic.Scene({
  triggerElement: ".blockchain",
  triggerHook: "onLeave",
  reverse: false,
}).setClassToggle(".blockchain", "fade-in").addTo(controller);

var ourScene5Reverse = new ScrollMagic.Scene({
  triggerElement: ".abc_thirdPage",
  triggerHook: 'onLeave',
  reverse: false,
}).setClassToggle(".abc_thirdPage", "abc-rotate").addTo(controller);

var ourScene6Reverse = new ScrollMagic.Scene({
  triggerElement: ".abc_thirdPage",
  triggerHook: 'onLeave',
  reverse: false,
}).setClassToggle(".abc_paragraph_thirdPage", "paragraph-rotate").addTo(controller);

var ourScene7Reverse = new ScrollMagic.Scene({
  triggerElement: ".theNextBig",
  triggerHook: 'onLeave',
  reverse: false,
}).setClassToggle(".theNextBig", "big-rotate").addTo(controller);

var ourScene8Reverse = new ScrollMagic.Scene({
  triggerElement: ".revolution",
  triggerHook: 'onLeave',
  reverse: false,
}).setClassToggle(".revolution", "revolution-rotate").addTo(controller);


//For page number: 2
var ourScene9 = new ScrollMagic.Scene({
  triggerElement: ".fitness1",
  triggerHook: "onEnter"
}).setClassToggle(".fitness1", "fade-in").addTo(controller)

var ourScene10 = new ScrollMagic.Scene({
  triggerElement: ".fitness2",
  triggerHook: "onEnter"
}).setClassToggle(".fitness2", "fade-in").addTo(controller)

var ourScene11 = new ScrollMagic.Scene({
  triggerElement: ".nasa",
  triggerHook: 'onEnter'
}).setClassToggle(".nasa", "nasa-rotate").addTo(controller)

var ourScene12 = new ScrollMagic.Scene({
  triggerElement: ".poweredByAdvance",
  triggerHook: 'onEnter'
}).setClassToggle(".poweredByAdvance", "poweredByAdvance-rotate").addTo(controller)

var ourScene13 = new ScrollMagic.Scene({
  triggerElement: ".algorithm_secondPage",
  triggerHook: 'onEnter'
}).setClassToggle(".algorithm_secondPage", "algorithm_secondPage-rotate").addTo(controller)

var ourScene14 = new ScrollMagic.Scene({
  triggerElement: ".abc_secondPage",
  triggerHook: 'onEnter'
}).setClassToggle(".abc_secondPage", "abc_secondPage-rotate").addTo(controller)

var ourScene15 = new ScrollMagic.Scene({
  triggerElement: ".abc_paragraph_secondPage",
  triggerHook: 'onEnter'
}).setClassToggle(".abc_paragraph_secondPage", "abc_paragraph_secondPage-rotate").addTo(controller)


//For page number: 4

var ourScene16 = new ScrollMagic.Scene({
  triggerElement: ".firstPic_fourthPage",
  triggerHook: 'onEnter'
}).setClassToggle(".firstPic_fourthPage", "firstPic_fourthPage-rotate").addTo(controller)

var ourScene17 = new ScrollMagic.Scene({
  triggerElement: ".secondPic_fourthPage",
  triggerHook: 'onEnter'
}).setClassToggle(".secondPic_fourthPage", "secondPic_fourthPage-rotate").addTo(controller)

var ourScene18 = new ScrollMagic.Scene({
  triggerElement: ".abc_fourthPage",
  triggerHook: 'onEnter'
}).setClassToggle(".abc_fourthPage", "abc_fourthPage-rotate").addTo(controller)

var ourScene19 = new ScrollMagic.Scene({
  triggerElement: ".abc_paragraph_fourthPage",
  triggerHook: 'onEnter'
}).setClassToggle(".abc_paragraph_fourthPage", "abc_paragraph_fourthPage-rotate").addTo(controller)

var ourScene20 = new ScrollMagic.Scene({
  triggerElement: ".downloads",
  triggerHook: 'onEnter'
}).setClassToggle(".downloads", "downloads-rotate").addTo(controller)

var ourScene21 = new ScrollMagic.Scene({
  triggerElement: ".revolution_fourthPage",
  triggerHook: 'onEnter'
}).setClassToggle(".revolution_fourthPage", "revolution_fourthPage-rotate").addTo(controller)


//For page number: 5

var ourScene22 = new ScrollMagic.Scene({
  triggerElement: ".firstPic_fifthPage",
  triggerHook: 'onEnter'
}).setClassToggle(".firstPic_fifthPage", "firstPic_fifthPage-rotate").addTo(controller)

var ourScene23 = new ScrollMagic.Scene({
  triggerElement: ".ERP",
  triggerHook: 'onEnter'
}).setClassToggle(".ERP", "ERP-rotate").addTo(controller)

var ourScene24 = new ScrollMagic.Scene({
  triggerElement: ".downloads_fifthPage",
  triggerHook: 'onEnter'
}).setClassToggle(".downloads_fifthPage", "downloads_fifthPage-rotate").addTo(controller)

var ourScene25 = new ScrollMagic.Scene({
  triggerElement: ".revolution_fifthPage",
  triggerHook: 'onEnter'
}).setClassToggle(".revolution_fifthPage", "revolution_fifthPage-rotate").addTo(controller)

var ourScene26 = new ScrollMagic.Scene({
  triggerElement: ".abc_fifthPage",
  triggerHook: 'onEnter'
}).setClassToggle(".abc_fifthPage", "abc_fifthPage-rotate").addTo(controller)

var ourScene27 = new ScrollMagic.Scene({
  triggerElement: ".abc_paragraph_fifthPage",
  triggerHook: 'onEnter'
}).setClassToggle(".abc_paragraph_fifthPage", "abc_paragraph_fifthPage-rotate").addTo(controller)









//SCOLL TRIGGER --- DIDNOT WORKED AS THE START AND END MARKER NOT MOVING, REMAINS STILL
// gsap.registerPlugin(ScrollTrigger);


// gsap.to(".fitness1", {
//   y: 400, 
//   duration: 2,
//   scrollTrigger: {
//     trigger: ".fitness1",
   
//     onEnter: () => {
//       gsap.to(".fitness2", {
//         y: -300, 
//         duration: 2,
//       });
//     },
//   },
// });

// const rotateAnimation = gsap.to(".nasa", {
//   rotationY: 360, 
//   duration: 2,
// });

// ScrollTrigger.create({
//   trigger: ".fitness1", 
//   animation: "reverse",
//   // toggleActions: "play none none none",

//   onEnter: () => {
//     rotateAnimation.play(); 
//   },
// });













































// var controller = new ScrollMagic.Controller()

// var ourScene = new ScrollMagic.Scene({
//   triggerElement: ".fitness2",
//   triggerHook: 1,
//   reverse : true
// }).setClassToggle(".fitness2", "fade-in").addTo(controller)

// var ourScene2 = new ScrollMagic.Scene({
//   triggerElement: ".fitness1",
//   // triggerHook: 1,
//   reverse: true
// }).setClassToggle(".fitness1", "fade-out").addTo(controller)

// var ourScene3 = new ScrollMagic.Scene({
//   triggerElement: "#section1",
//   triggerHook: 0.5,
//   reverse: true
// }).setClassToggle(".firstPageLeft", "fade-in").addTo(controller)


