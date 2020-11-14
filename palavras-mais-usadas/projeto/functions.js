const fs = require('fs');
const path = require('path');

const getFolder = (folder) => {
    return new Promise((resolve, reject) => {
        try {
            const files = fs.readdirSync(folder)
            const filesWithPath = files.map(file => path.join(folder, file))
            resolve(filesWithPath)
        } catch (error) {
            reject(error)
        }
    })
}

const getFilesByExt = (ext) => { 
    return (files) => {
        return files.filter(item => item.endsWith(ext))
    }
}

const getContents = (files) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(files.map(file => fs.readFileSync(file, { encoding: 'utf-8' })))
        } catch (error) {
            reject(error)
        }
    })
}

const removeEmptyLines = (lines) => lines.filter(line => line.trim())

const removeLineWith = (pattern) => {
    return (lines) => {
        return lines.filter(line => !line.includes(pattern) ) 
    }
}

const removeSimbols = (patterns) => {
    return (line) => {
        return line.replace(patterns, ' ')
    }
}

const countWords = (words) => {
    return Object.values(words.reduce((acc, value) => {
        const word = value.toLowerCase()
        const qtd = (acc[word] && acc[word].qtd || 0) + 1
        acc[word] = { word, qtd }
        return acc
    }, {}))
}
const orderByQtd = (attr,sort = 'desc') => {
    return (array) => {
        const desc = (second, first) => first[attr] - second[attr]
        const asc = (second, first) => second[attr] - first[attr]
        return array.sort(sort === 'desc' ? desc : asc)
    }
}

module.exports = {
    getFolder,
    getFilesByExt,
    getContents,
    removeEmptyLines,
    removeLineWith,
    removeSimbols,
    countWords,
    orderByQtd
}
