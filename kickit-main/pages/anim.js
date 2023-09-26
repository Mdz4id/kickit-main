function circleMouseFollower(){
    window.addEventListener("mousemove",function(detas){
        document.querySelector("#minicircle").style.transform = `translate(${detas.clientX}px, ${detas.clientY}px)`;
    }) 
}
circleMouseFollower();

function firsPageAnim(){
    var tl=gsap.timeline();

    tl.from("#heads",{
        y: '-20',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    tl.from("#navi",{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        delay: -1
    
    })
    tl.to("#cover",{
        y: '10',
        duration: 1.4,
        ease: Expo.easeInOut,
        delay: -0.7,
        stagger: .1

    })
    
}

firsPageAnim();