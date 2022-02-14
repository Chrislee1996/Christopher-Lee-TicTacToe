const playerOne = 'O'
const playerTwo = 'X'
let firstTurn = playerOne
const gameBoard = [["", "", "",
"", "", "",
"", "", ""
]]

const board = document.querySelector('#container')
const turnMessage = document.querySelector('#turnMessage')
const resetTheGame = document.querySelector('#resetTheGame')
const result = document.querySelector('#result')
const grid = document.querySelectorAll('.grid')



//create event listener that will display "something" when clicked
const gridClicked = (event) => {  
    //add something to our grid via click
    const grid = event.target
    console.log("this shows what grid is being clicked",grid)
    //create condition on turns and result of click
        //if clicked, need to display 'something'
        //switch to player2 after click
        //repeat and then switchn back to player1
     if (firstTurn === playerOne) {
        grid.innerText=playerOne
       gameBoard == playerOne
       firstTurn = playerTwo
       turnMessage.innerText= `Player 1 has played their O! It is now player's 2 turn`
    } else { 
        grid.innerText = playerTwo
       gameBoard == playerTwo
       firstTurn = playerOne
       turnMessage.innerText= `Player 2 has played X! It is now player's 1 turn`
    } 
    checkWin()
   checkDraw()
}   

const checkDraw = () => {
    let drawGame = false
    for (let i =0; i< grid.length;i++) {
        if (grid[i].innerText !== '') {
            continue 
         } else {
             return drawGame 
        }
    }
    return !drawGame
}


// create func to check for wins (Total opposite of DRY coding I'm sorry )
const checkWin = () => {
        if      (grid[0].innerText === "O" && grid[1].innerText === "O" &&  grid[2].innerText === "O") {document.getElementById('result').innerText = 'Player 1 wins'}
        else if (grid[3].innerText === "O" && grid[4].innerText === "O" && grid[5].innerText === "O") {document.getElementById('result').innerText = 'Player 1 wins'}
        else if (grid[6].innerText === "O" && grid[7].innerText === "O" && grid[8].innerText === "O") {document.getElementById('result').innerText = 'Player 1 wins'}
        else if (grid[0].innerText === "O"&& grid[3].innerText === "O" && grid[6].innerText === "O") {document.getElementById('result').innerText = 'Player 1 wins'}
        else if (grid[1].innerText === "O" && grid[4].innerText === "O" &&  grid[7].innerText === "O") {document.getElementById('result').innerText = 'Player 1 wins'}
        else if (grid[2].innerText === "O"  &&  grid[5].innerText === "O" &&grid[8].innerText === "O") {document.getElementById('result').innerText = 'Player 1 wins'}
        else if (grid[0].innerText === "O" && grid[4].innerText === "O" &&  grid[8].innerText === "O") {document.getElementById('result').innerText = 'Player 1 wins'}
        else if (grid[2].innerText === "O" && grid[4].innerText === "O" &&grid[6].innerText === "O") {document.getElementById('result').innerText = 'Player 1 wins'}
        else if  (grid[0].innerText === "X" &&grid[1].innerText === "X" && grid[2].innerText === "X") {document.getElementById('result').innerText = 'Player 2 wins'}
        else if (grid[3].innerText === "X" && grid[4].innerText === "X" && grid[5].innerText === "X") {document.getElementById('result').innerText = 'Player 2 wins'}
        else if (grid[6].innerText === "X" && grid[7].innerText === "X" &&grid[8].innerText === "X") {document.getElementById('result').innerText = 'Player 2 wins'}
        else if (grid[0].innerText === "X" && grid[3].innerText === "X" && grid[6].innerText === "X"){ document.getElementById('result').innerText = 'Player 2 wins'}
        else if (grid[1].innerText === "X" && grid[4].innerText === "X" && grid[7].innerText === "X") {document.getElementById('result').innerText = 'Player 2 wins'}
        else if (grid[2].innerText === "X" && grid[5].innerText === "X" &&grid[8].innerText === "X") {document.getElementById('result').innerText = 'Player 2 wins'}
        else if (grid[0].innerText === "X" && grid[4].innerText === "X" &&grid[8].innerText === "X") {document.getElementById('result').innerText = 'Player 2 wins'}
        else if (grid[2].innerText === "X" && grid[4].innerText === "X" &&grid[6].innerText === "X") {document.getElementById('result').innerText = 'Player 2 wins'}
        if (result.innerText ==='Player 2 wins' || result.innerText === 'Player 1 wins') {
            for (let i = grid.length-1; i > 0; i--) 
                grid[i].removeEventListener('click', gridClicked)
                turnMessage.innerText =''
    }
}

if(checkDraw()) {
    result.innerText = `It's a tie`
    turnMessage.innerText =''
}

//need to check for tie
//check if grids have innertext 
//if innertext, click 
//if innertext, tie




document.addEventListener('DOMContentLoaded', () => {
        //create event listener that for grid clicks 
    const gridElements = document.querySelectorAll('.grid').forEach(grid => grid.addEventListener('click', gridClicked, {once:true}))  
})



//need to create player variables
//create var for choices 
//create variable on how to get winner
// A user should be able to click on different squares to make a move.
// Every click will alternate between marking an X and O
// Upon marking of an individual cell, use JavaScript to add an X or O to the cell, according to whose turn it is.
// A cell should not be able to be replayed once marked.
// You should not be able to click remaining empty cells after the game is over.
// Add a reset button that will clear the contents of the board.
// Display a message to indicate which turn is about to be played.
// Detect draw conditions (ties/cat's game)
// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.
// Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.