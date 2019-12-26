<p align="center">
  <h1 align="center">inity</h1>
  <h3 align="center">✨ Custom Magic Initializers 🧙</h3>
</p>

## Installation

### Yarn

```
yarn add inity
```

### npm

```
npm install inity
```

## Usage

```js
import Init from "inity";

// Sample class that holds a value
class Value {
  constructor(n) {
    this.n = n;
  }
}
```

### ✨ Initialize many values using destructuring assignment syntax... 🧙

```js
const { posX, posY, velX, velY, score, state } = new Init(Value)(0);
/* each variable has its own UNIQUE value class */

posX.n = 42;
console.log(`${posX.n}, ${posY.n}`);
// 15, 0
```

### 💩 ...rather than in a big block...

```js
const posX = new Value(0);
const posY = new Value(0);
const velX = new Value(0);
const velY = new Value(0);
const score = new Value(0);
const state = new Value(0);
```
