let timer =60;
let HitNumber=0;
let Score =0;



function IncreseScore(){
    Score += 10;
    document.querySelector(".Score").textContent = Score;
}


function GetHitNumber(){
     HitNumber = Math.floor(Math.random()*10)
    document.querySelector(".Hit").textContent=HitNumber;
}


function Make_Bubble(){
    let group= "";

for(let i=1;i<199;i++){
    let number = Math.floor(Math.random()*10);
    group += `<div id="Bubble">${number}</div>`;
   
}

document.querySelector("#Pbtm").innerHTML  = group;
}

function RunTimer(){

    const timeInterval = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(".timer").textContent=timer;
        }
        else{
            clearInterval(timeInterval);
document.querySelector("#Pbtm").innerHTML =`<<h1>Game Over</h1>`;

        }

      
    },1000)
}

document.querySelector("#Pbtm").
addEventListener("click",function(details){
   let ClickNumber = Number(details.target.textContent);

   if(ClickNumber === HitNumber){
    IncreseScore();
    Make_Bubble();
    GetHitNumber();
   }

})



GetHitNumber();
RunTimer();
Make_Bubble();