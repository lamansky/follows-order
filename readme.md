# follows-order

Checks that specific array elements or string characters appear only in a certain order. Packaged as a [Node.js](https://nodejs.org/) module.

## Installation

```bash
npm install follows-order --save
```

The module exposes a single function.

## Usage

### Array Example

```javascript
const followsOrder = require('follows-order')

const data = {
  name: "Test",
  description: "This is a test",
  module: "follows-order",
}

// Check to make sure that `name` precedes `description`.
// (Note: JavaScript does not guarantee object key order.
// This is only for the sake of example.)
followsOrder(Object.keys(data), ['name', 'description']) // true
```

### String Example

```javascript
const followsOrder = require('follows-order')

const data = 'test'

// Does the first "t" come before the first "e"?
followsOrder(data, 'te') // true
```

### A Note on Duplicates

If an array or string is being checked to see if its order follows [A, B], then the first B cannot appear before the first A does, even if the [A, B] pattern occurs later.

This is according to design: the module is made to enforce a certain order, not merely check for a pattern.

| Data         | Order     | Result | Reason |
| ------------ | --------- | ------ | ------ |
| [B,A,B]      | [A,B]     | Fail   | The first instance of A should have preceded the first instance of B. |
| [A,B,B,A]    | [A,B]     | Pass   | A and B only occur once in the order, so only the first instances in the data are checked. |
| [A,B,B,A]    | [A,B,A,B] | Fail   | A and B occur twice in the order, so the second A in the data should have preceded the second B. |

```javascript
const followsOrder = require('follows-order')

const data = [1, 2, 1]

followsOrder(data, [1, 2]) // true
followsOrder(data, [2, 1]) // false, because in the data the first instance of 1 occurs before 2
followsOrder(data, [1, 2, 1]) // true
```

If you don’t want to deal with duplicate elements in your data, you’ll need to [deduplicate](https://github.com/lamansky/deduplicate) the data yourself before you check it with `follows-order`.
