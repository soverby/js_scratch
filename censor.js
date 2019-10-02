const lenFilter = (len) => (word) => word.length !== len;
const len4Filter = lenFilter(4);

const censor = filter => words => {
    const filtered = [];
    for (let i = 0, { length } = words; i < length; i++) {
        const word = words[i];
        if(filter(word)) filtered.push(word);
    }
    return filtered;
};

const wordList = [ 'one', 'two', 'thre', 'four', 'five', 'six'];

const filteredList =censor(len4Filter)(wordList);

console.log(filteredList);

