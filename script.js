let meScore=0;
let compScore=0;
function rock(){
    const computerChoice=Math.random();
    let res='';
    if (computerChoice==0 || computerChoice<1/3){
        res="Tie";
        document.getElementById('computerimg').src='rock.png';
    }
    else if(computerChoice==1/3 || computerChoice<2/3){
        res="Computer Wins";
        document.getElementById('computerimg').src='paper.png';
        compScore+=+1;
        document.getElementById('computerScore').value=`${compScore}`;
    }
    else{
        res="Player Wins";
        document.getElementById('computerimg').src='scissor.png';
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
        document.getElementById('computerimg').src='rock.png';
        meScore+=+1;
        document.getElementById('playerScore').value=`${meScore}`;
    }
    else if(computerChoice==1/3 || computerChoice<2/3){
        res="Tie";
        document.getElementById('computerimg').src='paper.png';
    }
    else{
        res="Computer Wins";
        document.getElementById('computerimg').src='scissor.png';
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
        document.getElementById('computerimg').src='rock.png';
        compScore+=+1;
        document.getElementById('computerScore').value=`${compScore}`;
    }
    else if(computerChoice==1/3 || computerChoice<2/3){
        res="Player Wins";
        document.getElementById('computerimg').src='paper.png';
        meScore+=+1;
        document.getElementById('playerScore').value=`${meScore}`;
    }
    else{
        res="Tie";
        document.getElementById('computerimg').src='scissor.png';
    }
    document.getElementById('showResult').value=`${res}`;
};
function changeName(){
    let value=document.getElementById('playerName').value;
    document.getElementById('PLAYER').textContent=`${value}`;
}
function reset(){
    document.getElementById('showResult').value=''
    document.getElementById('playerScore').value='0'
    document.getElementById('computerScore').value='0'
    meScore=0;
    compScore=0
    document.getElementById('computerimg').src=''

};