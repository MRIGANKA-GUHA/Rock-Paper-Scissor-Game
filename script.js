//Logic for the Game...

let meScore=0;
let compScore=0;
function rock(){
    const computerChoice=Math.random();
    let res='';
    if (computerChoice==0 || computerChoice<1/3){
        res="Tie";
        document.getElementById('computerimg').src='/Rock-Paper-Scissor-Game/Project Images/rock.png';
    }
    else if(computerChoice==1/3 || computerChoice<2/3){
        res="Computer Wins";
        document.getElementById('computerimg').src='/Rock-Paper-Scissor-Game/Project Images/paper.png';
        compScore+=+1;
        document.getElementById('computerScore').value=`${compScore}`;
    }
    else{
        res="Player Wins";
        document.getElementById('computerimg').src='/Rock-Paper-Scissor-Game/Project Images/scissor.png';
        meScore+=+1;
        document.getElementById('playerScore').value=`${meScore}`;
    }
    document.getElementById('showResult').value=`${res}`;
};
function paper(){
    const computerChoice=Math.random();
    let res='';
    if (computerChoice==0 || computerChoice<1/3){
        res="Player Wins";
        document.getElementById('computerimg').src='/Rock-Paper-Scissor-Game/Project Images/rock.png';
        meScore+=+1;
        document.getElementById('playerScore').value=`${meScore}`;
    }
    else if(computerChoice==1/3 || computerChoice<2/3){
        res="Tie";
        document.getElementById('computerimg').src='/Rock-Paper-Scissor-Game/Project Images/paper.png';
    }
    else{
        res="Computer Wins";
        document.getElementById('computerimg').src='/Rock-Paper-Scissor-Game/Project Images/scissor.png';
        compScore+=+1;
        document.getElementById('computerScore').value=`${compScore}`;
    }
    document.getElementById('showResult').value=`${res}`;
};
function scissor(){
    const computerChoice=Math.random();
    let res='';
    if (computerChoice==0 || computerChoice<1/3){
        res="Computer Wins";
        document.getElementById('computerimg').src='/Rock-Paper-Scissor-Game/Project Images/rock.png';
        compScore+=+1;
        document.getElementById('computerScore').value=`${compScore}`;
    }
    else if(computerChoice==1/3 || computerChoice<2/3){
        res="Player Wins";
        document.getElementById('computerimg').src='/Rock-Paper-Scissor-Game/Project Images/paper.png';
        meScore+=+1;
        document.getElementById('playerScore').value=`${meScore}`;
    }
    else{
        res="Tie";
        document.getElementById('computerimg').src='/Rock-Paper-Scissor-Game/Project Images/scissor.png';
    }
    document.getElementById('showResult').value=`${res}`;
};

// Showing the Name...

function changeName(){
    let value=document.getElementById('playerName').value;
    document.getElementById('PLAYER').textContent=`${value}`;
}

// Reset Function...

function reset(){
    document.getElementById('showResult').value=''
    document.getElementById('playerScore').value='0'
    document.getElementById('computerScore').value='0'
    meScore=0;
    compScore=0
    document.getElementById('computerimg').src=''

};

// Autoplay Func starting...

function getRandomCoice(){
    const choices=["rock","paper","scissor"];
    return choices[Math.floor(Math.random *choices.length)];
}
function play(choices){
    if (choices==="rock")
    {
        rock();
    }
    else if(choices==="scissor")
    {
        scissor();
    }
    else paper();
}
let isAutoPlaying= false;
let intervalId;
function autoPlay(){
    if (isAutoPlaying==false){                     
    intervalId=setInterval(function() {
        let playerChoice=getRandomCoice();
        play(playerChoice);
    }, 1000);
    isAutoPlaying=true;}
    else
    {
        clearInterval(intervalId);              //Stop Autoplay
        isAutoPlaying=false;
    }
}