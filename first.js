// Here we will learn about Variables.

console.log(b);
// console.log(c);

// let c = 10; // It will show an error while var won't.
var b = 10;

const accountNum = 123223;

let bankName = "HDFC Bank";

var accountPassword = "123456";

accountCity = "Jaipur";

let name;

console.log(bankName);

console.table([accountNum, bankName, accountPassword, accountCity, name]);

/*
1> var, let and const are the three mostly used variables in JS.
2> var is not much used due to its problems with scope.
3> variable having const cannot be reassigned a new value.
4> without using any let,var or const also we can declare a variable.
5> if we declare a variable and do not assign a value to it then its value will be "undefined".
6> When you declare a variable without var, let, or const:
-> It does not behave like var, let, or const.
-> It becomes a global property of the global object (if in non-strict mode).
*/

/*
Here’s a summary of why we avoid using var in modern JavaScript:

Function Scope (Not Block Scope):

var is function-scoped, so it's accessible outside blocks like if or for.
let and const are block-scoped, preventing unintended access.
Hoisting:

var is hoisted to the top of its scope, but remains undefined until assigned.
This can cause confusing bugs. let and const don't have this issue.
Global Namespace Pollution:

Forgetting var creates an implicit global variable.
let and const avoid this problem with stricter scoping rules.
No Temporal Dead Zone (TDZ):

var allows access before declaration (returns undefined), which can be misleading.
let and const throw an error if accessed before initialization.
Lack of Immutability:

var doesn't allow declaring constants, whereas const ensures immutability.
Modern Standards:

let and const were introduced in ES6 (2015) to address var's shortcomings and ensure cleaner, safer, and more maintainable code.
 */