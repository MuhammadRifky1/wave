var ball = document.getElementById('circle1'),
    ball2 = document.getElementById('circle2'),
    ball3 = document.getElementById('circle3'),
    ball4 = document.getElementById('circle4'),
    ball5 = document.getElementById('circle5'),
    preloader = document.getElementById('sb'),
    ts = document.getElementById('title-section'),
    hd = document.getElementById('header'),
    title = document.getElementById('title-text'),
    ti = document.getElementById('tower-img');
    



    
    
    setTimeout(function wait_light(){
        TweenMax.to(ball, 0.5,{scale:10, ease:ExpoScaleEase.config(1, 2)});
        TweenMax.to(ball2, 0.5,{scale:10, ease:ExpoScaleEase.config(1, 2)});
        TweenMax.to(ball3, 0.5,{scale:20, ease:ExpoScaleEase.config(1, 2)});
        TweenMax.to(ball4, 0.5,{scale:10, ease:ExpoScaleEase.config(1, 2)});
        TweenMax.to(ball5, 0.5,{scale:10, ease:ExpoScaleEase.config(1, 2)});
        ball.style.display = "inline";
        ball2.style.display = "inline";
        ball3.style.display = "inline";
        ball4.style.display = "inline";
        ball5.style.display = "inline";
    }, 4000);

    
   function blow(){
        setTimeout(function(){
            preloader.style.display = "none";
        }, 4600);
        setTimeout(function(){
            TweenMax.from(hd, .5, { ease: Power1.easeOut, y: -20});
            TweenMax.from(title, .5, { ease: Power1.easeOut, y: -20});
            TweenMax.from(ti, .5, { ease: Power1.easeOut, y: 20});
        }, 4601);
   }
   
        
function destroyModal() {
    document.getElementById('modal').style.display = "none";
}
  
   





//window.onload = blow();



TweenMax.staggerTo(".waveline", 3, {})