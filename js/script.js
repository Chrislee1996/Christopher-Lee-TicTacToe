// A user should be able to click on different squares to make a move.
    //need to add event listener for click on our grid 
// A cell should not be able to be replayed once marked.
    // use if statement to log error if grid is already marked 
// You should not be able to click remaining empty cells after the game is over.
    // use if statement to log error if no more grids are availab.e 
// Add a reset button that will clear the contents of the board.
    //need to add event listener for click to clean board 
// Display a message to indicate which turn is about to be played.
// Detect draw conditions (ties/cat's game)
    //need to create an if statement that causes a tie if no more grids are availabe
// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.
    //create coniditon where if 3 of an x or o is met, game is over 
// Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.
//need to create a click handler that will add either a circle or x once clicked 
    //use event
// Upon marking of an individual cell, use JavaScript to add an X or O to the cell, according to whose turn it is.
    //need to create div for game choices 
    // need to add game choices to css to show on webpage
// Every click will alternate between marking an X and O
    // need to make if statement to make sure if one is done, then go to next
    //also need to make a for loop so once it is compeleted, we cycle through the options until condition is met
//add eventlistener to document


const grid = document.querySelector('#grid')
const turnMessage = document.querySelector('#turnMessage')
const resetTheGame = document.querySelector('#resetTheGame')
const results = document.querySelector('#results')

//create an array for the grid rows 
const gridRows = ['','','',
'','','',
'','','']

//create a function that will display choices when clicked
const choiceList = () => {
    console.log('this shows me that a grid has been clicked via the console log')
//remove any shapes already in grid before start
while (grid.firstChild) {
    grid.removeChild(grid.firstChild)
}
const circle = document.createElement('div')
circle.classList.add('circle')
grid.appendChild(circle)
const notCircle = document.createElement('div')
notCircle.classList.add('notCircle')
grid.appendChild(notCircle)
}

//if there is already a shape in a grid, no more can enter
const gridLimit = () => {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild)
    }
}

//create eventlistener to document
//create event listener when a grid is clicked, to show player action
document.addEventListener('DOMContentLoaded', () => {
    grid.addEventListener('click', choiceList)
    choiceList()
    gridLimit()
})





//create a function that will display o when clicked
// const choiceCircle = () => {
//     console.log('this shows me that a grid has been clicked via the console log')
//         //if there are any shapes in grid before load - remove them
//     while (grid.firstChild) {
//         grid.removeChild(grid.firstChild)
//     }
//     //generate a div every click 
//     const circle = document.createElement('div')
//     //loop the grid rows so we can click on every grid 
//     //make that div a circle
//     circle.classList.add('circle')
//     //append the circle into the grid
//     grid.appendChild(circle)
// }

// //create a function that will display another shape (can't create an x!) when clicked
// const choiceSquare = () => {
//     console.log('this shows me that a grid has been clicked via the console log')
//     //if there are any shapes in grid before load - remove them
//     while (grid.firstChild) {
//         grid.removeChild(grid.firstChild)
//     }
//     //generate a div every click 
//     const notCircle = document.createElement('div')
//     //loop the grid rows so we can click on every grid 
//     //make that div a circle
//     notCircle.classList.add('notCircle')
//     //append the circle into the grid
//     grid.appendChild(notCircle)
// }