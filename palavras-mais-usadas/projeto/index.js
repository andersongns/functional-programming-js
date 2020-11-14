const path = require('path');
const {
    getFolder,
    getFilesByExt,
    getContents,
    removeEmptyLines,
    removeLineWith,
    removeSimbols,
    countWords,
    orderByQtd,
} = require('./functions');

const folder = path.join(__dirname, '..', 'legends');
const LINE_BREAK = '\n';
const SPACE = ' ';
const SRT = 'srt';
                        /* /tags|simbos|numeros\r/ global caseInsentive */
const invalidCaracteres = /(<[^>]*>)|([,.?_"\[\]\(\)♪-])|([0-9])|\r/gim

getFolder(folder)
    .then(getFilesByExt(SRT))
    .then(getContents)
    .then(contents => contents.join(LINE_BREAK))
    .then(content => content.split(LINE_BREAK))
    .then(removeLineWith('-->'))
    .then(contents => contents.join())
    .then(removeSimbols(invalidCaracteres))
    .then(contents => contents.split(SPACE))
    .then(removeEmptyLines)
    .then(countWords)
    .then(orderByQtd('qtd'))
    .then(console.log);