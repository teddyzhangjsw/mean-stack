function* generatorOne () {
    let [val1, val2, result] = [0, 1, 0];

    yield 0;

    while (true) {
        result = val1+val2;
        val1 = val2;
        val2 = result;
        yield result
    }
}

function* generatorTwo(x){
    while (true){
        let variable = x.next().value;

        if(variable % 2 === 0)
            yield variable;
    }
}
//Get a few fibs
myFibs = generatorOne();
// let result = 10;
// while (result --> 0){
//     console.log(myFibs.next().value);
// }

let count = 5;
while (count --> 0){
    console.log(generatorTwo(myFibs).next().value)
}

