# JavaScript Loose Equality vs. Strict Equality

This repository demonstrates a common JavaScript bug stemming from the misuse of loose equality (`==`) versus strict equality (`===`).  Loose equality can lead to unexpected type coercion and errors, whereas strict equality provides more predictable behavior.

## The Bug
The `bug.js` file contains two functions, `foo` and `bar`. Both functions add two numbers. However, `foo` uses strict equality (`===`) to check for null values while `bar` uses loose equality (`==`).  This seemingly small difference can introduce significant errors.

## The Solution
The `bugSolution.js` file showcases the corrected version using strict equality (`===`) throughout. This eliminates the unpredictable type coercion associated with loose equality.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` and run the code in a JavaScript environment.
3. Observe the differences in output between `foo` and `bar`.
4. Review the corrected code in `bugSolution.js` to see the proper way to handle null values.

## Lesson Learned
Always prefer strict equality (`===`) in JavaScript to avoid unintended type coercion and potential bugs.  Understanding the subtle differences between loose and strict equality is crucial for writing robust and reliable JavaScript code.