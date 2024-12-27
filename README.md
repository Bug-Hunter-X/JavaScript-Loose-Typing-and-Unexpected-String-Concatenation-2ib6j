# JavaScript Loose Typing Bug

This example demonstrates a common issue in JavaScript related to its loose typing system and the behavior of the `+` operator. When used with a mix of numbers and strings, the `+` operator performs string concatenation instead of numerical addition, resulting in unexpected outputs.

## Bug Description
The provided `foo` function adds two inputs. However, due to JavaScript's loose typing, it performs string concatenation if either input is a string. This leads to outputs that differ from what one might expect from a strict numerical addition operation. 

## Solution
The solution involves explicit type checking or conversion to ensure numerical addition.

## How to Reproduce
1. Save the code in `bug.js`.
2. Run it using a JavaScript interpreter (like Node.js): `node bug.js`