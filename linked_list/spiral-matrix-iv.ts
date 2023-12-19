/*

2326. Spiral Matrix IV


You are given two integers m and n, which represent the dimensions of a matrix.

You are also given the head of a linked list of integers.

Generate an m x n matrix that contains the integers in the linked list presented in spiral order (clockwise), starting from the top-left of the matrix. If there are remaining empty spaces, fill them with -1.

Return the generated matrix.

 

Example 1:


Input: m = 3, n = 5, head = [3,0,2,6,8,1,7,9,4,2,5,5,0]
Output: [[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]]
Explanation: The diagram above shows how the values are printed in the matrix.
Note that the remaining spaces in the matrix are filled with -1.
Example 2:


Input: m = 1, n = 4, head = [0,1,2]
Output: [[0,1,2,-1]]
Explanation: The diagram above shows how the values are printed from left to right in the matrix.
The last space in the matrix is set to -1.
 

Constraints:

1 <= m, n <= 105
1 <= m * n <= 105
The number of nodes in the list is in the range [1, m * n].
0 <= Node.val <= 1000

*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function spiralMatrix(m: number, n: number, head: ListNode | null): number[][] {
    let array = new Array(m);

    for (let i = 0; i < m; i++) {
        array[i] = new Array(n).fill(0);
    }

    let top = 0, bottom = array.length - 1;
    let left = 0, right = array[0].length - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            array[top][i] = head?.val !== undefined ? head.val : -1;
            head = head?.next;
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            array[i][right] = head?.val !== undefined ? head.val : -1;
            head = head?.next;
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                array[bottom][i] = head?.val !== undefined ? head.val : -1;
                head = head?.next;
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                array[i][left] = head?.val !== undefined ? head.val : -1;
                head = head?.next;
            }
            left++;
        }
    }


    return array;
};