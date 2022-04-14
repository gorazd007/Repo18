let shoppingList = new Map([
    [3, 'Banana'],
    [5, 'Pineapple'],
    [2, 'Pear'],
    [10, 'Carrot'],
    [1.5, 'Apple'],
]);

let arrKey = shoppingList.keys();

for (let key of arrKey){
    console.log("amount " + key);
}

let arrValue = shoppingList.values();

for (let value of arrValue) {
    console.log("groceries: " + value);
}

for (let value of shoppingList) console.log(value);

module.exports = {shoppingList, arrKey, arrValue};