//2d array input
var _input = [             
  ['0', '9', '0', '0', '4', '2', '1', '3', '6'],
  ['0', '0', '0', '9', '6', '0', '4', '8', '5'],
  ['0', '0', '0', '5', '8', '1', '0', '0', '0'],
  ['0', '0', '4', '0', '0', '0', '0', '0', '0'],
  ['5', '1', '7', '2', '0', '0', '9', '0', '0'],
  ['6', '0', '2', '0', '0', '0', '3', '7', '0'],
  ['1', '0', '0', '8', '0', '4', '0', '2', '0'],
  ['7', '0', '6', '0', '0', '0', '8', '1', '0'],
  ['3', '0', '0', '0', '9', '0', '0', '0', '0'],
];
sudokuSolver(_input);//calling the main sudokusolver function
console.log(_input);//printing the output


//function to check 3*3 matrix
function isValid(input, row, col, k) {
    for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (input[row][i] == k || input[i][col] == k || input[m][n] == k) {
          return false;
        }
    }
    return true;
}

//main function
function sudokuSolver(data) {
  for (let i = 0; i < 9; i++) {//loop for row
    for (let j = 0; j < 9; j++) {//loop for column
      if (data[i][j] == '0') {//condition if cell contains '0'
        for (let k = 1; k <= 9; k++) {//loop for substituting the numbers
          if (isValid(data, i, j, k)) {//calling another function
            data[i][j] = `${k}`;
          if (sudokuSolver(data)) {
           return true;
          } else {
           data[i][j] = '0';
          }
         }
       }
       return false;
     }
   }
 }
 return true;
}//end of the loof
