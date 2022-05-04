function sumValue(array) {
    let newValue = { ...array };
    let newArray1 = [1];
    let newArray2 = [];
    let result = 0;
    for (let i = 1; i < array.length; i++) {
        temp = array[i] + array[i - 1];
        newArray1.push(temp);
        array[i] = temp;

        // newArray1 = array.slice(0, i+1);
        // newArray1.reduce((acc, cur) => {
        //  result = acc + cur;
        //  console.log(result);

        // });
        // newArray2.push(result);
        // array = [1, 2, 3, 4];
    }
    console.log(newArray1);

    // return newArray2;
}
sumValue([1, 2, 3, 4]);