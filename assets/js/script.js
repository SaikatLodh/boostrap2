{gsap.registerPlugin(ScrollTrigger);

    
    
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  
  locoScroll.on("scroll", ScrollTrigger.update);
  

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });
  
   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  

  ScrollTrigger.refresh();

}
  
  










var tl = gsap.timeline({
    repeat:-1

});

tl
.to(".ban-img img",{

    ease: Expo.easeInOut,
    width: "100%",
    stagger:4




},'a')

.to(".banner-text h1",{

    ease: Expo.easeInOut,
   top:0,
    stagger:4




},'a')

.to(".banner-text h1",{

    ease: Expo.easeInOut,
    delay:4,
   top:"-100%",
    stagger:4




},'a')

gsap.to(".page1-rap",{
    y:10,
    duration:1,
    delay:1,
    opacity:1,
    



})










  