const letterPath = {
  curviness: 2,
  autoRotate: true,
  values: [{ x: 500, y: 100 }, { x:30, y: 30 }]
};

const tween = new TimelineLite();

tween.add(
  TweenLite.to(".tLetter", 1, {
    bezier: letterPath,
    ease: Power1.easeInOut
    // directionalRotation: "270_cw"
  })
  //   TweenLite.to(".oLetter", 1, {
  //     bezier: letterPath,
  //     ease: Power1.easeInOut
  //   })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".animation",
  duration: 500,
  triggerHook: 0
})
  .setTween(tween)
  .addIndicators()
  .setPin(".animation")
  .addTo(controller);


  