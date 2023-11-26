/*
200. Number of Islands

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), 
 return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
 You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
*/

function numIslands(grid: string[][]): number {
    let countIslands = 0;
    for (let rowIndex in grid) {
      for (let colIndex in grid[rowIndex]) {
        if (grid[rowIndex][colIndex] === "1") {
          countIslands++;
          terraform(parseInt(rowIndex), parseInt(colIndex), grid);
        }
      }
    }

    return countIslands;
};

//Function will recursively call itsellf and mark island as water in four direction, 
// it will help to avoid double check and count island as another one.
function terraform(rowIndex: number, colIndex: number, grid: string[][]): void {
  if (grid[rowIndex] === undefined || grid[rowIndex][colIndex] === undefined || grid[rowIndex][colIndex] === "0") {
    return;
  }
  grid[rowIndex][colIndex] = "0";
  terraform(rowIndex+1, colIndex, grid);
  terraform(rowIndex-1, colIndex, grid);
  terraform(rowIndex, colIndex+1, grid);
  terraform(rowIndex, colIndex-1, grid);
}

const result = numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]);
console.log(result);