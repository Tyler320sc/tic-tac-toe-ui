const refreshBtn = document.querySelector("#my-button");
refreshBtn.onclick = () => document.location.reload();

const getBoard = () => {
  const cell1 = document.querySelector("#cell-1");
  const cell2 = document.querySelector("#cell-2");
  const cell3 = document.querySelector("#cell-3");
  const cell4 = document.querySelector("#cell-4");
  const cell5 = document.querySelector("#cell-5");
  const cell6 = document.querySelector("#cell-6");
  const cell7 = document.querySelector("#cell-7");
  const cell8 = document.querySelector("#cell-8");
  const cell9 = document.querySelector("#cell-9");

  const map = (val) => {
    if (val === " " || val.charCodeAt(0) === 160) {
      return null;
    } else if (val === "X") {
      return "x";
    } else if (val === "O") {
      return "o";
    } else {
      return val;
    }
  };
  return [
    [map(cell1.textContent), map(cell2.textContent), map(cell3.textContent)],
    [map(cell4.textContent), map(cell5.textContent), map(cell6.textContent)],
    [map(cell7.textContent), map(cell8.textContent), map(cell9.textContent)],
  ];
};

const getBoard2 = () => {
  const box1 = document.querySelector("#box-1");
  const box2 = document.querySelector("#box-2");
  const box3 = document.querySelector("#box-3");
  const box4 = document.querySelector("#box-4");
  const box5 = document.querySelector("#box-5");
  const box6 = document.querySelector("#box-6");
  const box7 = document.querySelector("#box-7");
  const box8 = document.querySelector("#box-8");
  const box9 = document.querySelector("#box-9");

  const map = (val) => {
    if (val === " " || val.charCodeAt(0) === 160) {
      return null;
    } else if (val === "X") {
      return "x";
    } else if (val === "O") {
      return "o";
    } else {
      return val;
    }
  };
  return [
    [map(box1.textContent), map(box2.textContent), map(box3.textContent)],
    [map(box4.textContent), map(box5.textContent), map(box6.textContent)],
    [map(box7.textContent), map(box8.textContent), map(box9.textContent)],
  ];
};

const cell1 = document.querySelector("#cell-1");
const cell2 = document.querySelector("#cell-2");
const cell3 = document.querySelector("#cell-3");
const cell4 = document.querySelector("#cell-4");
const cell5 = document.querySelector("#cell-5");
const cell6 = document.querySelector("#cell-6");
const cell7 = document.querySelector("#cell-7");
const cell8 = document.querySelector("#cell-8");
const cell9 = document.querySelector("#cell-9");

const box1 = document.querySelector("#box-1");
const box2 = document.querySelector("#box-2");
const box3 = document.querySelector("#box-3");
const box4 = document.querySelector("#box-4");
const box5 = document.querySelector("#box-5");
const box6 = document.querySelector("#box-6");
const box7 = document.querySelector("#box-7");
const box8 = document.querySelector("#box-8");
const box9 = document.querySelector("#box-9");

const winnerMessage = document.querySelector("#winner-message");

// const winnerMessage2 = document.querySelector('#winner-message-2');

const allCells = [
  cell1,
  cell2,
  cell3,
  cell4,
  cell5,
  cell6,
  cell7,
  cell8,
  cell9,
];

const allBoxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

const winner = (board) => {
  // checks x horizontal
  if (board[0][0] === "x" && board[0][1] === "x" && board[0][2] === "x") {
    return "x";
  } else if (
    board[1][0] === "x" &&
    board[1][1] === "x" &&
    board[1][2] === "x"
  ) {
    return "x";
  } else if (
    board[2][0] === "x" &&
    board[2][1] === "x" &&
    board[2][2] === "x"
  ) {
    return "x"; // checks x vertical
  } else if (
    board[0][0] === "x" &&
    board[1][0] === "x" &&
    board[2][0] === "x"
  ) {
    return "x";
  } else if (
    board[0][1] === "x" &&
    board[1][1] === "x" &&
    board[2][1] === "x"
  ) {
    return "x";
  } else if (
    board[0][2] === "x" &&
    board[1][2] === "x" &&
    board[2][2] === "x"
  ) {
    return "x"; // checks x diagonal forwards
  } else if (
    board[0][0] === "x" &&
    board[1][1] === "x" &&
    board[2][2] === "x"
  ) {
    return "x"; // checks x diagonal backwards
  } else if (
    board[0][2] === "x" &&
    board[1][1] === "x" &&
    board[2][0] === "x"
  ) {
    return "x"; // checks o horizontal
  } else if (
    board[0][0] === "o" &&
    board[0][1] === "o" &&
    board[0][2] === "o"
  ) {
    return "o";
  } else if (
    board[1][0] === "o" &&
    board[1][1] === "o" &&
    board[1][2] === "o"
  ) {
    return "o";
  } else if (
    board[2][0] === "o" &&
    board[2][1] === "o" &&
    board[2][2] === "o"
  ) {
    return "o"; // checks o vertical
  } else if (
    board[0][0] === "o" &&
    board[1][0] === "o" &&
    board[2][0] === "o"
  ) {
    return "o";
  } else if (
    board[0][1] === "o" &&
    board[1][1] === "o" &&
    board[2][1] === "o"
  ) {
    return "o";
  } else if (
    board[0][2] === "o" &&
    board[1][2] === "o" &&
    board[2][2] === "o"
  ) {
    return "o"; // checks o diagonal forwards
  } else if (
    board[0][0] === "o" &&
    board[1][1] === "o" &&
    board[2][2] === "o"
  ) {
    return "o";
  } else if (
    board[0][2] === "o" &&
    board[1][1] === "o" &&
    board[2][0] === "o"
  ) {
    return "o";
  } else {
    return null;
  }
};

const flatten = (arr) => arr.reduce((acc, x) => [...acc, ...x], []);

const fullBoard = (board) => !flatten(board).includes(null);

const gameLoop = (piece) => {
  allCells
    .filter((cell) => cell.textContent !== "x" && cell.textContent !== "o")
    // returns new arr with els that aren't x's or o's, then the arr
    // of emtpy cells are interated over and onlick is enabled for the 'empty' cells
    .forEach(
      (cell) =>
        (cell.onclick = () => {
          cell.textContent = piece;
          // after the piece is set the onlclick is disabled
          cell.onclick = null;
          const updatedBoard = getBoard();
          console.log(getBoard()); // debugging

          if (winner(updatedBoard) === "x") {
            winnerMessage.textContent = `X won!`;
            allCells.forEach((cell) => (cell.onclick = null));
            return;
          } else if (winner(updatedBoard) === "o") {
            winnerMessage.textContent = `O won!`;
            allCells.forEach((cell) => (cell.onclick = null));
            return;
          } else if (
            winner(updatedBoard) === null &&
            fullBoard(updatedBoard) === true
          ) {
            winnerMessage.textContent = `Tied!`;
            allCells.forEach((cell) => (cell.onclick = null));
            return;
          } else {
            const nextPiece = piece === "x" ? "o" : "x";
            return gameLoop(nextPiece);
          }
        })
    );
};
gameLoop("x");

const gameLoop2 = (piece) => {
  allBoxes
    .filter((box) => box.textContent !== "x" && box.textContent !== "o")
    .forEach(
      (box) =>
        (box.onclick = () => {
          box.textContent = piece;
          box.onclick = null;
          const updatedBoard = getBoard2();
          console.log(getBoard2()); // debugging

          if (winner(updatedBoard) === "x") {
            winnerMessage.textContent = `X won!`;
            allBoxes.forEach((box) => (box.onclick = null));
            return;
          } else if (winner(updatedBoard) === "o") {
            winnerMessage.textContent = `O won!`;
            allBoxes.forEach((box) => (box.onclick = null));
            return;
          } else if (
            winner(updatedBoard) === null &&
            fullBoard(updatedBoard) === true
          ) {
            winnerMessage.textContent = `Tied!`;
            allBoxes.forEach((box) => (box.onclick = null));
            return;
          } else {
            const nextPiece = piece === "x" ? "o" : "x";
            return gameLoop2(nextPiece);
          }
        })
    );
};
gameLoop2("x");
