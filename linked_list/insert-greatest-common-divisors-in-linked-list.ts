/*

2807. Insert Greatest Common Divisors in Linked List

Given the head of a linked list head, in which each node contains an integer value.

Between every pair of adjacent nodes, insert a new node with a value equal to the greatest common divisor of them.

Return the linked list after insertion.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

 

Example 1:


Input: head = [18,6,10,3]
Output: [18,6,6,2,10,1,3]
Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes (nodes in blue are the inserted nodes).
- We insert the greatest common divisor of 18 and 6 = 6 between the 1st and the 2nd nodes.
- We insert the greatest common divisor of 6 and 10 = 2 between the 2nd and the 3rd nodes.
- We insert the greatest common divisor of 10 and 3 = 1 between the 3rd and the 4th nodes.
There are no more adjacent nodes, so we return the linked list.
Example 2:


Input: head = [7]
Output: [7]
Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes.
There are no pairs of adjacent nodes, so we return the initial linked list.
 

Constraints:

The number of nodes in the list is in the range [1, 5000].
1 <= Node.val <= 1000

*/


//Definition for singly-linked list.
class ListNode {
 	val: number
 	next: ListNode | null
 	constructor(val?: number, next?: ListNode | null) {
     	this.val = (val===undefined ? 0 : val)
     	this.next = (next===undefined ? null : next)
 	}
 }
 

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
    let tmp = head;
    while (tmp.next) {
        const nextNode = tmp.next;
        const num = getGCD(tmp.val, nextNode.val); //18 and 6 = gcd is 6
        const newNode = new ListNode(num); // newNode: {val = 6}
        tmp.next = newNode; // {val = 18, next -> 6} {}
        newNode.next = nextNode;
        tmp = nextNode;
    }

    return head;
};

function getGCD(num1: number, num2: number): number {
    while(num2) {
        let tmp = num2;
        num2 = num1 % num2;
        num1 = tmp;
    }

    return num1;
}