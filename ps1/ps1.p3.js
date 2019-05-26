const execution = (string,operation) => operation(string);

const splitString = string => string.replace(/c/g, ' c').split(' ');

console.log(execution('supercalifragilisticexpialidocious',splitString));

const getNewString = string => {
    let str = string.split('');
    let count = 0;

    for(i=0; i<str.length; i++){
        if (str[i] === 'a'){
            str[i] = 'A';
            count ++;
        }
    }

    return {
        originalString:string,
        modifiedString:str.join(''),
        numberReplaced:count,
        length:str.length
    }
}

console.log(execution('supercalifragilisticexpialidocious',getNewString));