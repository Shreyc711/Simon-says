let gameSeq = []; //this array will take game generated sequence.
let userSeq = []; //this array will take user generated sequence.

let btns = ["yellow","red","purple","blue"] //all the btn colors that we wrote inside style.css  

let started  = false; //game status false == not started
let level = 0; //current level
let h2 = document.querySelector("h2"); //selected h2 wit dom

document.addEventListener('keypress', function (){ //this function looks for keypresses and run below code.
    if(started === false){ //run this code if the game started is == true.
        console.log("game started")
        started = true;  //once keypressed game started status will turn true.
        levelUp();
       
    }
});

function btnflash(btn){    //btn flash function to make button flash.
    btn.classList.add("flash");  //we made flash classlist in style.css and this line passes that class to btn

    setTimeout(function (){ //this timeout function will decide how long btn will turn white/flash.
        btn.classList.remove("flash") //once flashed remove flash class.so we can make it flash again
    },250)
};

function userflash(btn){    //btn flash function to make button flash.
    btn.classList.add("userflash");  //we made flash classlist in style.css and this line passes that class to btn

    setTimeout(function (){ //this timeout function will decide how long btn will turn white/flash.
        btn.classList.remove("userflash") //once flashed remove flash class.so we can make it flash again
    },250)
};

function levelUp(){ 
    userSeq=[];
    level++; //this function will add level number in variable level which we declared zero.

    h2.innerText = `Level ${level}` //and then it will display this text instead of heading.
    

    let randindx = Math.floor(Math.random() * 3) //this line generates random number * 3/ or as long as our btns variable which is [0,1,2,3] long.


    let randColor = btns[randindx]; //randcolor variable is assigned to code which merges btns variable with randoindex. suppose randindex = 2 and btns =["yellow","red","purple","blue"]. "purple will be selected."

    let randbtn = document.querySelector(`.${randColor}`)  //this randbtn variable  selectes randcolor class
    btnflash(randbtn) //we passed randbtn value to btnflash function

  gameSeq.push(randColor)
  console.log(gameSeq)



 
};



function checkAns(idx){
    //console.log(`current level is:${level}`)

    

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000)   //having issues around this function
        }
        
        
    } else {
        h2.innerText = "game over "
        reset();
    }

};

function btnpress(){
    let btn = this;
    
    userflash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq)
    checkAns();
};




let allbtn = document.querySelectorAll('.boxes');

for(btn of allbtn){
    btn.addEventListener('click',btnpress)
};



function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

};