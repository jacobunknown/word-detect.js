const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

isLetter = function(letter) {
    if (letters.includes(letter.toLowerCase())) {
        return true;
    } else {
        return false;
    }
}

includesWord = function(string, searchWord) {
    string = string.toLowerCase();
    let wordStart = string.indexOf(searchWord);
    let wordEnd = wordStart + searchWord.length - 1;
    if (wordStart == -1) {
        return false;
    }
    let beforeStart = string.charAt(wordStart - 1);
    let afterEnd = string.charAt(wordEnd + 1);
    if (isLetter(beforeStart) || isLetter(afterEnd)) {
        return false;
    } else {
        return true;
    }
}

includesAllWords = function(string, searchWords) {
    let i = 0;
    for (i = 0; i < searchWords.length;) {
        if (includesWord(string, searchWords[i])) {
            i++;
        } else {
            return false;
        }
    }
    if (i == searchWords.length) {
        return true;
    }
}

includesAnyWords = function(string, searchWords) {
    let i = 0;
    for (i = 0; i < searchWords.length;) {
        if (includesWord(string, searchWords[i])) {
            i++;
            return true;
        }
    }
    if (i == 0) {
        return false;
    }
}

module.exports.letters = letters;
module.exports.isLetter = isLetter;
module.exports.includesWord = includesWord;
module.exports.includesAllWords = includesAllWords;
module.exports.includesAnyWords = includesAnyWords;