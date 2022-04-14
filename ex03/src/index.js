
let generatorArray= [];
const iterator = myGenerator(6, 7, 8);

function* myGenerator(a, b, c) {

    yield* [1, 2, 3, 4, 5];
    yield* 'Arena';
    yield* [a, b, c];
}

for (let i = 0; i <= 13; i++){
    generatorArray.push(iterator.next().value);
}

console.log(generatorArray);
module.exports = { generatorArray, myGenerator };