const printBoard = board => {
  var i = 0;
  console.log('Current Board: ');
  while (i < 3) {
    console.log(board[i].join(' | '));
    i++;
  }
};

const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

printBoard(board);
board[0][1] = '1';
board[2][2] = 'B'
printBoard(board);
