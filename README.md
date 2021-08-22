# word-detect.js
A (super) small library for intelligently detecting words in strings.

**NOTE:** none of these functions are case sensitive.

Install with:

`npm i word-detect.js`

## How To Use

word-detect has three main functions:

- `includesWord()`
- `includesAllWords()`
- `includesAnyWords()`

### `includesWord()`

`includesWord()` searches for a word inside of a string. If the word is inside of another word (e.g. Rat inside of Crate),
it will be ignored.
The function takes in 2 parameters; The string, and the word to be searched for.

```
const wordDetect = require('word-detect.js');

// This will return true:
wordDetect.includesWord('Hello World!', "hello");

// Even though 'hell' is inside 'hello', this will still return false:
wordDetect.includesWord('Hello World!', "hell");
```

### `includesAllWords()`

`includesAllWords` searches for an array of words inside of a string. If the words are inside of other words (e.g. Ten inside of Tent),
it will be ignored.
The function takes in 2 parameters; the string, and an array of words to be searched for.

```

const wordDetect = require('word-detect.js');

// This will return true:
wordDetect.includesAllWords('Gavin waited for the train', ['gavin', 'waited']);

// This will return false, because the string only contains one of the words:
wordDetect.includesAllWords('Gavin waited for the train', ['wait', 'the']);

```

### `includesAnyWords()`

`includesAnyWords()` searches for any of the words in an array, inside of a string. If the words are inside of other words (e.g. Owl inside of Bowl),
it will be ignored.
The function takes in 2 parameters; the string, and an array of words to be searched for.

```

const wordDetect = require('word-detect.js');

// This will return true:
wordDetect.includesAnyWords('Where do you live?', ['how', 'do', 'you']);

// This will return false:
wordDetect.includesAnyWords('Where do you live?', ['what', 'your', 'name']);

```
