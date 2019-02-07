var data = [
    {
        question: "Pernyataan-pernyataan di bawah ini yang berkaitan dengan hipotesa Maxwell tentang gelombang elektromagnetik adalah ...",
        answerA: "Muatan listrik menimbulkan medan magnet",
        answerB: "Arus listrik menimbulkan medan listrik",
        answerC: "Perubahan medan magnet menimbulkan hambatan",
        answerD: "Perubahan medan listrik menimbulkan medan magnet",
        answerE: "Medan magnet menimbulkan arus listrik",
        correct: "A"
    },
    {
        question: "Sinar yang dipengaruhi oleh medan magnet dan medan listrik seperti dibawah. <br/>(1) sinar – X  (3) sinar gamma <br/>(2)sinar Laser  (4) sinar katoda <br/><br/>Pernyataan yang benar adalah ....",
        answerA: "Muatan listrik menimbulkan medan magnet",
        answerB: "Arus listrik menimbulkan medan listrik",
        answerC: "Perubahan medan magnet menimbulkan hambatan",
        answerD: "Perubahan medan listrik menimbulkan medan magnet",
        answerE: "Medan magnet menimbulkan arus listrik",
        correct: "A"
    },
    {
        question: "Di bawah ini merupakan sifat-sifat gelombang elektromagnetik, kecuali ....",
        answerA: "kecepatannya tak tergantung pada jenis medium",
        answerB: "dapat mengalami peristiwa pemantulan",
        answerC: "kecepatan tertinggi terjadi di ruang hampa",
        answerD: "dapat mengalami peristiwa polarisasi",
        answerE: "dapat merambat di ruang hampa",
        correct: "A"
    },
    {
        question: "Yang termasuk gelombang elektromagnetik adalah ....",
        answerA: "kecepatannya tak tergantung pada jenis medium",
        answerB: "dapat dipolarisasikan tetapi tidak dapat berinterferensi",
        answerC: "dapat berinterferensi dan difraksi",
        answerD: "dapat dibelokkan dalam medan listrik maupun medan magnet",
        answerE: "memerlukan medium untuk perambatannya",
        correct: "A"
    },
    {
        question: "Urutan spektrum gelombang elektromagnetik yang benar untuk frekuensi besar ke frekuensi kecil adalah ....",
        answerA: "gelombang radar, cahaya hijau,cahaya biru, gelombang radio",
        answerB: "sinar-X, sinar gamma, cahaya biru, cahaya hijau",
        answerC: "cahaya biru, cahaya hijau, sinar infra merah, gelombang radar ",
        answerD: "cahaya hijau, cahaya biru, sinarX, sinar gamma",
        answerE: "sinar inframerah, sinar ultra violet, cahaya hijau, cahaya biru",
        correct: "A"
    },
    {
        question: "Yang fotonya mempunyai energi terbesar dari yang berikut adalah ….",
        answerA: "sinar merah",
        answerB: "sinar ungu",
        answerC: "sinar gamma",
        answerD: "sinar-X",
        answerE: "gelombang radio",
        correct: "A"
    },
    {
        question: "Suatu stasiun radio FM menyiarkan siarannya pada 100 MHz. Keadaan ini juga memiliki arti bahwa radio tersebut memancarkan gelombang dengan panjang gelombang sebesar…",
        answerA: "300 m ",
        answerB: "30 m ",
        answerC: "3 m",
        answerD: "15 m",
        answerE: "1,5 m",
        correct: "A"
    },
    {
        question: "Seorang pelaut mengukur kedalaman laut dari atas kapalnya dengan mengirim gelombang elektromagnetik sampan ke dasar laut. Ternyata gelombang elektromagnetik itu kembali setelah selang waktu 5 s. Kedalaman laut tersebut adalah ....",
        answerA: "1500 m ",
        answerB: "750 m",
        answerC: "150 m",
        answerD: "75 m",
        answerE: "7,5 m",
        correct: "A"
    }
]

var questionParent = document.getElementById('question-container'),
    answerParent = document.getElementById('answer-container'),
    progress = document.getElementById('main-indicator'),
    bg = document.getElementById('gauge');

var lastQuestionIndex = data.length - 1;
var runningQuestionIndex = 0;
var score = 0;

function renderQuestion() {
    let q = data[runningQuestionIndex];
    questionParent.innerHTML =  "<h3>" + (runningQuestionIndex + 1) + ".</h3>"+ "<p>&nbsp;" + q.question + "</p>";
    answerParent.innerHTML = 
    "<div class='answer'  id='answer' onclick= " + " checkAnswer('A')" + ">" + q.answerA +"</div>"+
    "<div class='answer'  id='answer' onclick= " + " checkAnswer('B')" + ">" + q.answerB +"</div>"+
    "<div class='answer'  id='answer' onclick= " + " checkAnswer('C')" + ">" + q.answerC +"</div>"+
    "<div class='answer'  id='answer' onclick= " + " checkAnswer('D')" + ">" + q.answerD +"</div>"+
    "<div class='answer'  id='answer' onclick= " + " checkAnswer('E')" + ">" + q.answerE +"</div>";
}

function progressRender() {
    for(let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
      progress.innerHTML += "<div class='indicator' id="+ qIndex +"></div>"
    }
}

function answerIsCorrect(){
    document.getElementById(runningQuestionIndex).style.backgroundColor = '#0f0';
}

function answerIsWrong(){
    document.getElementById(runningQuestionIndex).style.backgroundColor = '#f00';

}


function checkAnswer(answer){
    if(data[runningQuestionIndex].correct == answer){
        score++;
        answerIsCorrect();
        playSound(featured);
    }else {
        answerIsWrong();
        playSound(wrong);
    }

    if(runningQuestionIndex < lastQuestionIndex){
        runningQuestionIndex++;
        renderQuestion();
    }
    else {
        checkResult();
    }
}

function checkResult() {
    document.getElementById('modal').style.display = "flex";
    document.getElementById('score').innerHTML = "You got " + score +" from "+ data.length +" question!"
}


renderQuestion();
progressRender();



// audio 
var soundBtn = document.getElementById('sound-btn'),
    startQuiz = document.getElementById('startQuiz');
    



const globals = {
    audio: true
}

// Audio
buttonClick = new Audio('mp3/Buttonclick.mp3');
featured = new Audio('mp3/featured.mp3');
slideSlow = new Audio('mp3/slideSlow.mp3');
wrong = new Audio('mp3/Wrong.mp3');
bg = new Audio('mp3/retrogameloop.mp3');

wrong.volume = 0.2;
// ## Create a function to play our sounds
function playSound(sound) {
    if (globals.audio == true) {

        sound.play(); // Play sound
    }
}

function playAudio(sound) {

   
        sound.loop = true;
        sound.volume = 0.1;
        sound.play(); 

        if(globals.audio == false){
            sound.pause();
        }

}




startQuiz.addEventListener('click', function(){
    startQuiz.style.display = "none";
    playAudio(bg);
})

var ans = document.getElementsByClassName("answer");


    for (var i = 0; i < ans.length; i++) {
        ans[i].addEventListener('mouseenter', function(){
            playSound(buttonClick);        
        })
    }



soundBtn.addEventListener('click', function(){
    
    
    if (globals.audio == true) {
        Object.assign(globals, { audio: false });
        soundBtn.style.opacity = ".5";
        playAudio(bg);
    }else {
        Object.assign(globals, { audio: true });
        playAudio(bg);
        soundBtn.style.opacity = "1";
        
    }
})

























// function checkAnswer(answer){
//     var ans = document.getElementById("answer");

//     var data = answer.getAttribute("data-correct");
    
//     if(data == "true"){
        
//         answer.classList.add("correct");
//     }else {
//         answer.classList.add("wrong");
//     }
    
// }


