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
    
    
    function preloader_animation(){
        setTimeout(function(){
        TweenMax.to(ball, 0.5,{scale:13, ease:ExpoScaleEase.config(1, 2)});
        TweenMax.to(ball2, 0.5,{scale:13, ease:ExpoScaleEase.config(1, 2)});
        TweenMax.to(ball3, 0.5,{scale:23, ease:ExpoScaleEase.config(1, 2)});
        TweenMax.to(ball4, 0.5,{scale:13, ease:ExpoScaleEase.config(1, 2)});
        TweenMax.to(ball5, 0.5,{scale:13, ease:ExpoScaleEase.config(1, 2)});
        ball.style.display = "inline";
        ball2.style.display = "inline";
        ball3.style.display = "inline";
        ball4.style.display = "inline";
        ball5.style.display = "inline";
        }, 4000);
        setTimeout(function(){
            preloader.style.display = "none";
        }, 4500);
        setTimeout(function(){
            TweenMax.from(hd, .5, { ease: Power1.easeOut, y: -20});
            TweenMax.from(title, .5, { ease: Power1.easeOut, y: -20});
            TweenMax.from(ti, .5, { ease: Power1.easeOut, y: 20});
        }, 4601);
    }
    
    
    


function blow(){
    if (!sessionStorage.getItem( 'doNotShow' )) {
        sessionStorage.setItem( 'doNotShow', true );
        preloader_animation();   
        setTimeout(function(){
            tm
            .to("#line2", 1.5, {y: '-100%'})
            .staggerTo(".circle" ,3 , {scale: 20, opacity: 1}, 0.1,'+=.3', destroy_circle);
        
        },4610)
    } else {
        preloader.style.display = "none";
        TweenMax.from(hd, .5, { ease: Power1.easeOut, y: -20});
        TweenMax.from(title, .5, { ease: Power1.easeOut, y: -20});
        TweenMax.from(ti, .5, { ease: Power1.easeOut, y: 20});
        tm
        .to("#line2", 1.5, {y: '-100%'})
        .staggerTo(".circle" ,3 , {scale: 20, opacity: 1}, 0.1,'+=.3', destroy_circle);
    }
    
}
   
function destroy_circle(){
    var o = document.getElementsByClassName('circle');
    for(i = 0; i <= o.length - 1; i++){
        o[i].style.display = "none";
    }
}
    

    
  

window.onload = blow();





