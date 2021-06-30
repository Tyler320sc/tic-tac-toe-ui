// const {flatten, updateMatrix} = require('./batteries.js');

const getBoard = () => {
  const cell1 = document.querySelector('#cell-1');
  const cell2 = document.querySelector('#cell-2');
  const cell3 = document.querySelector('#cell-3');
  const cell4 = document.querySelector('#cell-4');
  const cell5 = document.querySelector('#cell-5');
  const cell6 = document.querySelector('#cell-6');
  const cell7 = document.querySelector('#cell-7');
  const cell8 = document.querySelector('#cell-8');
  const cell9 = document.querySelector('#cell-9');

  const map = val => {
    if (val === ' ' || val.charCodeAt(0) === 160) {
      return null;
    } else if (val === 'X') {
      return 'x';
    } else if (val === 'O') {
      return 'o';
    } else {
      return val;
    }
  }
  return  [
       [map(cell1.textContent), map(cell2.textContent), map(cell3.textContent)],
       [map(cell4.textContent), map(cell5.textContent), map(cell6.textContent)],
       [map(cell7.textContent), map(cell8.textContent), map(cell9.textContent)]
     ];
}

const cell1 = document.querySelector('#cell-1');
const cell2 = document.querySelector('#cell-2');
const cell3 = document.querySelector('#cell-3');
const cell4 = document.querySelector('#cell-4');
const cell5 = document.querySelector('#cell-5');
const cell6 = document.querySelector('#cell-6');
const cell7 = document.querySelector('#cell-7');
const cell8 = document.querySelector('#cell-8');
const cell9 = document.querySelector('#cell-9');

const allCells = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9];

const winner = board => { // checks x horizontal
  if (board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'x') {
    return 'x';
  } else if (board[1][0] === 'x' && board[1][1] === 'x' && board[1][2] === 'x') {
    return 'x';
  } else if (board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'x') {
    return 'x';         // checks x vertical
  } else if (board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'x') {
    return 'x';
  } else if (board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] === 'x') {
    return 'x';
  } else if (board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'x') {
    return 'x';         // checks x diagonal forwards
  } else if (board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x') {
    return 'x';        // checks x diagonal backwards
  } else if (board[0][2] === 'x' && board[1][1] === 'x' && board[2][0] === 'x') {
    return 'x';        // checks o horizontal
  } else if (board[0][0] === 'o' && board[0][1] === 'o' && board[0][2] === 'o') {
    return 'o';
  } else if (board[1][0] === 'o' && board[1][1] === 'o' && board[1][2] === 'o') {
    return 'o';
  } else if (board[2][0] === 'o' && board[2][1] === 'o' && board[2][2] === 'o') {
    return 'o';       // checks o vertical
  } else if (board[0][0] === 'o' && board[1][0] === 'o' && board[2][0] === 'o') {
    return 'o';
  } else if (board[0][1] === 'o' && board[1][1] === 'o' && board[2][1] === 'o') {
    return 'o';
  } else if (board[0][2] === 'o' && board[1][2] === 'o' && board[2][2] === 'o') {
    return 'o';        // checks o diagonal forwards
  } else if (board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o') {
    return 'o';
  } else if (board[0][2] === 'o' && board[1][1] === 'o' && board[2][0] === 'o') {
    return 'o';
  } else {
    return null;
  }
};
// Issues with importing batteries.js and linking it to index.html so I just added flatten and updateMatrix here
const flatten = arr => arr.reduce((acc, x) => [...acc, ...x], []);

const fullBoard = board => !flatten(board).includes(null);

const gameLoop = (piece) => {
  allCells.forEach((cell) => cell.onclick = () => {
    cell.textContent = piece;
    const updatedBoard = getBoard(); 
  // check for winner or tie
  // if win or tie print message and return
  if (winner(updatedBoard) === 'x') {
    console.log(`X won!`);
    allCells.forEach(cell => cell.onclick = null);
    return; 
  } else if (winner(updatedBoard) === 'o') {
    console.log(`O won!`);
    allCells.forEach(cell => cell.onclick = null);
    return;
  } else if (winner(updatedBoard) === null && fullBoard(updatedBoard) === true) {
    console.log(`Tied!`);
    allCells.forEach(cell => cell.onclick = null);
    return;
  } else {
    const nextPiece = piece === 'x' ? 'o' : 'x';
    return gameLoop(nextPiece);
  }

  });
} 
gameLoop('x');

