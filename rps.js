let  you = document.getElementById("u")
let  pc = document.getElementById("c")
let result = document.getElementById("result")

let rockb = document.getElementById("rock")
let paperb = document.getElementById("paper")
let scissorb = document.getElementById("scissor")

let u1 = 0;
let p1=0;
let u = document.getElementById("turn")
let p = document.getElementById("pturn")

// let rock = ""C:\Web Dev\RockPaperScissor\rock.png""

// let paper = "https://cdn-icons-png.flaticon.com/128/12355/12355903.png"

// let scissor = "https://cdn-icons-png.flaticon.com/128/4958/4958040.png"

let rock = "rock.png"

let paper = "paper.png"

let scissor = "scissor.png"


let interval
let index=0;
let c;

let arr = ['r','p','s']
let arrimg = [rock,paper,scissor]

function spin(){
    index = (index + 1) % 3;
    p.src = arrimg[index];
}

function stopspin(x){
    clearInterval(interval);


    index = Math.floor(Math.random() * 3);
    c = arr[index];
    
    p.src = arrimg[index];
    if (c == x){
        result.innerHTML = "Tie";
    }
    else {
        if((x=='r' && c=="s") || (x=='s' && c=="p") || (x=='p' && c=="r") ){
            result.innerHTML = "You Win";
            u1 = u1 + 1;
            you.innerHTML = u1;
        }
        else{
            result.innerHTML = "Computer Wins";
            p1 = p1 + 1;
            pc.innerHTML = p1 ;
        }
    }
}


function score (x,n){
    u.src= arrimg[n];

    interval = setInterval(spin,100);

    setTimeout(stopspin,1000,x)
}

function rock1(){
    score('r',0);
}

function paper1(){
    score('p',1);
}

function scissor1(){
    score('s',2);
}


rockb.addEventListener("click",rock1);


paperb.addEventListener("click",paper1);


scissorb.addEventListener("click",scissor1);