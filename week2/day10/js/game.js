let score = 0; //점수
let time = 30;//시간
let gameInterval; //inverval id

let mole = document.getElementById("mole")//두더지
let scoreSpan = document.getElementById("score");//점수
let timeSpan = document.getElementById("time"); // 시간
function randomPosition(){
    let x = Math.floor(Math.random() * 500);
    let y = Math.floor(Math.random() * 500);
    mole.style.left = x + "px";
    // javascript 템플릿 리터럴
    mole.style.top = `${y}px`;
    
}

function showMole () {
    randomPosition();
    mole.style.display = "block";
    setTimeout(hideMole, 1000);
}
function hideMole(){
    mole.style.display = "none";
}
    
    mole.addEventListener('click', function(){
        score++;
        scoreSpan.innerText = score;
        hideMole();
    });

  gameInterval = setInterval(showMole, 2000);

  //시간 감소
  let timeInterval = setInterval(function(){
      if(time > 0){
          time--;
      }
    timeSpan.innerText = time;
    if(time == 0){
        clearInterval(gameInterval) // 두더지 나타남 중지
        clearInterval(timeInterval) // 시간 감소 중지
        alert(`게임 오버!! 당신의 점수는 ${score}점 입니다.`)
    }
  }, 1000);