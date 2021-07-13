document.addEventListener('DOMContentLoaded',()=>{ 

    let squares = document.querySelectorAll(".square");

    squares.forEach ((square)=> {
    square.addEventListener('click', handleClick);
    })

})

function handleClick(event){
    console.log(event.target);
    
    let square = event.target;
    let position = square.id;

    if (handMove(position)){
        setTimeout(() => {
    
            alert("O JOGO ACABOU - O VENCEDOR FOI " + playerTime)

        }, 50);
        
    };
    updateSquares();
};

function updateSquares() {
    
    let squares = document.querySelectorAll(".square");

    squares.forEach ((square)=> {
        let position = square.id;
        let symbol = board[position];

        if(symbol != ''){
            square.innerHTML = `<div class=${symbol}></div> `
        }


    })

}