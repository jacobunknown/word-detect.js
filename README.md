# word-detect.js
A (super) small library for intelligently detecting words in strings.

Install with:

`npm i word-detect.js`

## How To Use

word-detect has three main functions:

- `includesWord()`
- `includesAllWords()`
- `includesAnyWords()`

### `includesWord()`

`includesWord()` takes in 2 parameters; The string, and the word to be searched for.

```const wordDetect = require('./index.js');

// This will return true:
console.log(wordDetect.includesWord('Hello World!', "hello"));

// Even though 'hell' is inside 'hello', this will still return false:
console.log(wordDetect.includesWord('Hello World!', "hell"));```
