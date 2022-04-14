
let fifteenArray = [];
const iterator = myGenerator();

function* myGenerator() {

    yield* insideGeerator1();
    yield* insideGeerator2();
    yield* insideGeerator3();
}

function* insideGeerator1() {

    for (let i = 1; i <= 5; i++){
        yield i;

    }
}


function* insideGeerator2() {

    for (let i = 10; i <= 15; i++){
        yield i;

}
}

function* insideGeerator3() {

    for (let i = 6; i <= 9; i++){
        yield i;

}
}

for (let i = 0; i <= 15; i++){
    fifteenArray.push(iterator.next().value);
}

console.log(fifteenArray);
module.exports = { fifteenArray, myGenerator };