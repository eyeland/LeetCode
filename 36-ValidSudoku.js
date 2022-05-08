
//<--------- Description ----------->

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// var isValid = function(board) {

//     for (let i = 0; i < board.length; i++) {
//         const set = new Set();
//         for(let j = 0; j < board[j].length; j++) {
//             const cell = board[i][j];
//             if(cell === '.') continue;
//             if(set.has(cell)) return false
//             set.add(cell)
//         }
//     }

//     for (let i = 0; i < board.length; i++) {
//         const set = new Set();
//         for(let j = 0; i < board[i].length; i++) {
//             const cell = board[j][i];
//             if(cell === '.') continue;
//             if(set.has(cell)) return false
//             set.add(cell)
//         }
//     }

//     for (let i = 0; i < 3; i++) {
//         for(let j = 0; j < 3; j++) {

//             const set = new Set();
//             for(let k = 0; k < 3; k++) {
//                 for(let l = 0; l < 3; j++) {
//                     const cell = board[3 * i + k][3 * j + l]
//                     if(cell === '.') continue;
//                     if(set.has(cell)) return false;
//                     set.add(cell);
//                 }
//             }
//         }
//     }
//     return true;

// }

//<----Shorter Solution *Array of Sets* ------>

// var isValid = function(board) {

//     const rows = [], cols = [], boxes = [];
//     for(let i = 0; i < board.length; i++) {
//         rows.push(new Set())
//         cols.push(new Set())
//         boxes.push(new Set())
//     }

//     for (let i = 0; i < board.length; i++) {
//         for(let j = 0; i < board[i].length; j++) {
//             const cell = board[i][j];
//             if(cell === '.') continue;
//             const boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3)
//             if(rows[i].has(cell) || cols[j].has(cell) || boxes[boxNum].has(cell)) return false
//             rows[i].add(cell)
//             cols[j].add(cell)
//             boxes[boxNum].add(cell)
//         }
//     }

//     return true;

// }

//<----Stings in Set Solution------>

var isValid = function(board) {
    const set = new Set();

    for (let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            const cell = board[i][j];
            if(cell === '.') continue;
            const boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3)

            const row = `row: ${i}, value${cell}`
            console.log(row)

            // if(rows[i].has(cell) || cols[j].has(cell) || boxes[boxNum].has(cell)) return false
            // rows[i].add(cell)
            // cols[j].add(cell)
            // boxes[boxNum].add(cell)
        }
    }

    return true;

}

const test1 = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]


console.log(isValid(test1))