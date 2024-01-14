let array1 = [1, 2, 3, 4, 5];
let array2 = [10, 20, 30];

console.log("Array 1:", array1);
console.log("Array 2:", array2);

for (let i = 0; array1.length !== array2.length; i++) {
    if (array1.length < array2.length) {
        array1.push(Math.floor((Math.random() * 100) + 1)); 
    } else {
        array2.push(Math.floor((Math.random() * 100) + 1));
    }
}

console.log("Array 1 dopo l'aggiunta:", array1);
console.log("Array 2 dopo l'aggiunta:", array2);
