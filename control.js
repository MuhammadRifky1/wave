var ball = document.getElementById('ball'),
    ball2 = document.getElementById('ball2'),
    preloader = document.getElementById('overlay');




var tm = TweenMax.from(ball2, 1.8,{ ease: Bounce.easeOut, y: -400, repeat: -1});
         TweenMax.from(ball, 1.5,{ ease: Bounce.easeOut, y: -400, repeat: -1, repeatDelay: .3});


function blow(){
    setTimeout(function(){
        tm.kill();
        ball.style.display = "none";
        TweenMax.to(ball2, 1,{scale: 45, alpha: 1});
        DestroyPreloader();
    }, 1800)
}



function DestroyPreloader(){
    setTimeout(function(){
        preloader.style.display = 'none';
    }, 1000)
}

window.onload = blow();