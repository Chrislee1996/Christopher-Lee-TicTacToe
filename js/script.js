const playerOne = 'O'
const playerTwo = 'X'
let firstTurn = playerOne
const gameBoard = [["", "", "",
"", "", "",
"", "", ""
]]

const winningBoard= [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6], 
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]]
const board = document.querySelector('#container')
const turnMessage = document.querySelector('#turnMessage')
const resetTheGame = document.querySelector('#resetTheGame')
const result = document.querySelector('#result')
let gameOver = false

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
    let gameWon = checkWin()

}

//create func to check for wins 
const checkWin = () =>{
for (let i =0; i <winningBoard.length;i++) {
    if (winningBoard[i][0] == winningBoard[i][1] && winningBoard[i][0] == winningBoard[i][2] && winningBoard[i][2] ==winningBoard[i][3] && winningBoard[i][0] !== '')
    document.getElementById('result').innerText='winner'
}
}
    

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