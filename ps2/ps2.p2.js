function * getSentenceWords(str) {
    let words = str.split(' ');
        yield* words;
}
const words = getSentenceWords('All I know is something like a bird within her sang');
for (word of words){
    console.log(word);
}
