function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5));   // Output: 10

function bar(a, b) {
  if (a == null || b == null) {
    return 0; // Handle null values
  }
  return a + b;
}

console.log(bar(null, 5)); // Output: 0
console.log(bar(5, null)); // Output: 0
console.log(bar(5, 5));   // Output: 10

//The difference between foo and bar is that foo uses strict equality (===) while bar uses loose equality (==).
//Loose equality (==) can lead to unexpected type coercion and bugs.
//For example, 0 == false evaluates to true, and null == undefined evaluates to true. These can cause unexpected behavior.
//Strict equality (===) avoids such type coercion, making your code more predictable and reducing the risk of unexpected bugs. 