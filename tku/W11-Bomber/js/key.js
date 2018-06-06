var ansCode = Math.floor(Math.random()*99+1);
console.log("ansCode = "+ansCode);

function setSmoke(counter){
    switch(counter){
        case 1:
            document.img1.src = "img/smoke.png";
            break;
        case 2:
            document.img1.src = "img/smoke.png";
            break;
        case 3:
            document.img1.src = "img/smoke.png";
            break;
        case 4:
            document.img1.src = "img/smoke.png";
            break;
        case 5:
            document.img1.src = "img/smoke.png";
            break;
        case 6:
            document.img1.src = "img/smoke.png";
            break;    
    }
}

function doGuess(){
    guessNum =code.value
    console.log("guessNum = "+guessNum);
    if(guessNum == ansCode){
        alert("恭喜答對了!"+" 總共猜了"+(counter+1)+"次\n再試一次!");
        restart;
    }else{
        if(guessNum > ansCode){
            maxCode = guessNum;
        }else{
            minCode = guessNum;
        }
        alert(minCode +" ~ "+maxCode);
    }
}

function restart(){
    ansCode = Math.floor(Math.random()*99+1);
    guessNum = 0;
    counter = 0;
    minCode = 1;
    maxCode = 99;
    code.value = "";
}

