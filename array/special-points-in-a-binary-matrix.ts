/*

1582. Special Positions in a Binary Matrix

Given an m x n binary matrix mat, return the number of special positions in mat.

A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

 

Example 1:


Input: mat = [[1,0,0],[0,0,1],[1,0,0]]
Output: 1
Explanation: (1, 2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.
Example 2:


Input: mat = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
Explanation: (0, 0), (1, 1) and (2, 2) are special positions.
 

Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 100
mat[i][j] is either 0 or 1.

*/

function numSpecial(mat: number[][]): number {
  const m = mat.length;
    const n = mat[0].length;
    let count = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1 && isSpecial(mat, i, j, m, n)) {
                count++;
            }
        }
    }

    return count;
};

function isSpecial(mat: number[][], row: number, col: number, m: number, n: number): boolean {
    for (let i = 0; i < n; i++) {
        if (mat[row][i] !== 0 && i !== col) {
            return false;
        }
    }

    for (let i = 0; i < m; i++) {
        if (mat[i][col] !== 0 && i !== row) {
            return false;
        }
    }

    return true;
}

const result = numSpecial([[1,0,0],[0,1,0],[0,0,1]]);
console.log(result);