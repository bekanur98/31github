/*
2264. Largest 3-Same-Digit Number in String

You are given a string num representing a large integer. An integer is good if it meets the following conditions:

It is a substring of num with length 3.
It consists of only one unique digit.
Return the maximum good integer as a string or an empty string "" if no such integer exists.

Note:

A substring is a contiguous sequence of characters within a string.
There may be leading zeroes in num or a good integer.
 

Example 1:

Input: num = "6777133339"
Output: "777"
Explanation: There are two distinct good integers: "777" and "333".
"777" is the largest, so we return "777".
Example 2:

Input: num = "2300019"
Output: "000"
Explanation: "000" is the only good integer.
Example 3:

Input: num = "42352338"
Output: ""
Explanation: No substring of length 3 consists of only one unique digit. Therefore, there are no good integers.
 

Constraints:

3 <= num.length <= 1000
num only consists of digits.
*/

function largestGoodInteger(num: string) {
	let sub = [];
	let ch = num[0];
	let = 1;
	for (let i = 1; i < num.length; i++) {
		if (num[i] === ch) {
			c++;
		} else {
			ch = num[i];
			c = 1;
		}
		if (c === 3) {
			sub.push(ch.repeat(3));
			c = 1;
			ch = "";
		}
	}

	sub.sort((a,b) => a - b);

	return sub.length > 0 ? sub[sub.length - 1] : "";
}

const result = largestGoodInteger("6777133339");
console.log(result);