function Sorting(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = current;
    }
    return array;
}

let array = [70,50,20,10,30,40];
console.log("Original array:" , array);
let sortedArray = Sorting(array);
console.log("Sorted array:" , sortedArray);
