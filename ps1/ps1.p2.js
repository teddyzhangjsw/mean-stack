const calculate = operator => {

    switch (operator) {
        case '+':
            return (left,right) => left + right;
            break;
        case '-':
            return (left,right) => left - right;
            break;
        case '*':
            return (left,right) => left * right;
            break;
        case '/':
            return (left,right) => left / right;
            break;
    }
}

var expression = `4+2`;
let getResultOne = calculate(expression.slice(1,2));
console.log(`${expression} = ${getResultOne(parseInt(expression.slice(0,1)),parseInt(expression.slice(2,3)))}`);

var expression = `5*7`
let getResultTwo = calculate(expression.slice(1,2));
console.log(`${expression} = ${getResultTwo(parseInt(expression.slice(0,1)),parseInt(expression.slice(2,3)))}`);

var expression = `6-1`;
let getResultThree = calculate(expression.slice(1,2));
console.log(`${expression} = ${getResultThree(parseInt(expression.slice(0,1)), parseInt(expression.slice(2,3)))}`);

var expression = `9/2`;
let getResultFour = calculate(expression.slice(1,2));
console.log(`${expression} = ${getResultFour(parseInt(expression.slice(0,1)),parseInt(expression.slice(2,3)))}`);