var maxAreaOfIsland = function(grid) {
    var row = grid.length;
    var col = grid[0].length;
    let count = 0, max = 0;

    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            findMaxIsland(i, j);
            max = Math.max(count, max);
            count = 0
        }
    }
    return max;

    function findMaxIsland(i, j) {
        if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] === 0) return
        count++;
        grid[i][j] = 0

        findMaxIsland(i + 1, j) //right
        findMaxIsland(i - 1, j)  //left
        findMaxIsland(i, j + 1) //up
        findMaxIsland(i, j - 1)
    }
};