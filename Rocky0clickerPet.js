// 1.  set clickCount 0, 
// 2. set fatigueTimer
// 3. set reset fatigue timer function
// 4. create click-Rocky function
// 5. in click-rocky fucntion, reset fatigue timer,
//  increment clickcount, roll dice for random event: if math.random()<0.2,call ShowRockyDialouge function,
// >0,2 but < 0.5 call ShowRockyOnClickReaction
//  call function click restartclickintervaltime
// 6. if fatiguetimer exceeds 180 seconds, change current rocky image to sitting-rockygif
// 7. if fatiguetimer exceeds 600 seconds, disable clickrocky function, call rocky-sleep function
// 8. set  varible spamclicks to 0
// 9. check, whilst running clickintervaltime,
//  if detect click-rocky function called, increment spamclick by one.
//  else, call reset spamclicks function
// 10. check, if spamclick > 10, roll dice for Math.random() < 0.3, call rocky-angry function,
//  then call reset spamclicks function,
//  call reset fatigue timer
// 11. create showRockyDialougefunction, pick random dialouge from array of strings, 
// display string in rocky dialouge div, set timeout to clear div after 10 seconds
// 12. create show RockyOnclickReaction function, roll dice for random event: if Math.random() > 0.6 play random noise,
//   roll dice again for random event: randomise change rocky image to chosen emote
// 13. ** create rocky-angry function, set rocky image to
// 14. create rocky-sleep function, disbale rocky-click function, call showinbetweenanimation function, call showRockydialouge function,
//  but display the phrase he says to say he's tired,
//  set rocky image to src rocky-sleeping gif 
// 16. create setupRocky function, resetfatigue timer to 0, reset clickintervaltimer, set all varibles regarding rocky img to false
//  except for idle,
//  reset fatigue timer function (+ more stuff i cant rememebr rn)
// 17. create InitialWakeup function, set rocky image to wakeup and produce/excute series of image changes,
//  call func show rocky dialouge,changing rockytextbox div, change isinitialwake-uprun? to false
// 18. create showinbetweenanimation function, check for all values of rocky img being true,
//  once true determine which inbetween animation is nessecary and play it
// 19. set varibles for Currentrockyimg, true/false



let clickCount = 0
let fatiguetimer
let sitTimer
let clickintervaltimer
let rockycurrentstate = "standingidle"

setInterval(assessbackgroundfidget,150)

 function assessbackgroundfidget(){

    if(rockycurrentstate == "sleeping") return;
    if(rockycurrentstate == "angry") return;

    if (rockycurrentstate == "standingidle"){

    }

    else if (rockycurrentstate == "sittingidle"){

    }
    }

function callinbetweenanimation(){
    // put all the switch statements for the animation insbetweens and play them accordingly
    
}

function resetfatiguetimer(){
    clearTimeout(fatiguetimer)
    setTimeout(rockySleep,6000)
    fatiguetimer = setTimeout()


}

function resetclickintervaltime(){
    clearTimeout(clickintervaltimer)
    setTimeout(clickRocky,100)
    clickintervaltimer = setTimeout()
}

function clickRocky(){
    if (rockycurrentstate == "sleeping") return;
    resetfatiguetimer()
    clickCount++

    if (rockycurrentstate == "standingidle") {
     
        let roll = Math.random();
    if (roll < 0.2){
        showRockyDialouge()
    }
    else if (roll < 0.5){
        showRockyOnclickreaction()
    }
     }

     if (rockycurrentstate == "sittingidle"){
         callinbetweenanimation()

     }
    

    
}

function callinbetweenanimation(){

}

function showRockyDialouge(){

}

function showRockyOnclickreaction(){

}