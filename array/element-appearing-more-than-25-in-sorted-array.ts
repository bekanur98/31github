/*
1287. Element Appearing More Than 25% In Sorted Array

Given an integer array sorted in non-decreasing order, there is exactly one integer in the 
 array that occurs more than 25% of the time, return that integer.

 

Example 1:

Input: arr = [1,2,2,6,6,6,6,7,10]
Output: 6
Example 2:

Input: arr = [1,1]
Output: 1
 

Constraints:

1 <= arr.length <= 104
0 <= arr[i] <= 105
*/

function findSpecialInteger(arr: number[]): number {
    const map = new Map<number, number>();
    const n = arr.length / 4;
    let index = 0;
    arr.forEach(v => {
        if (map.has(v)) {
            map.set(v, map.get(v) + 1);
        } else {
            map.set(v, 1);
        }
        if (map.get(v) >= n) {
            index = v;
        }
    });

    return index;
};

const result = findSpecialInteger([1,2,2,6,6,6,6,7,10]);
console.log(result);