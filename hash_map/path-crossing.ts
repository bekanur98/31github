/*
1496. Path Crossing

Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

 

Example 1:


Input: path = "NES"
Output: false 
Explanation: Notice that the path doesn't cross any point more than once.
Example 2:


Input: path = "NESWW"
Output: true
Explanation: Notice that the path visits the origin twice.
 

Constraints:

1 <= path.length <= 104
path[i] is either 'N', 'S', 'E', or 'W'.

*/

function isPathCrossing(path: string): boolean {
    let x = 0;
    let y = 0;
    let hash = new Map<string, number>();
    hash.set('0-0', 1);
    for (let i = 0; i < path.length; i++) {
        if (path[i] === 'N') {
            y++;
        } else if (path[i] === 'S') {
            y--;
        } else if (path[i] === 'E') {
            x++;
        } else {
            x--;
        }

        if (hash.has(`${x}-${y}`)) {
            return true;
        } else {
            hash.set(`${x}-${y}`, 1);
        }
    }

    return false;
};
const result = isPathCrossing("NESW");
console.log(result);
