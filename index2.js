function averageVote(array) {
    let newArray1 = [];
    let newArray2 = [];
    let newArray3 = [];
    let newArray4 = [16, 17, 23, 40, 45];
    let newArray5 = [];
    let star2 = 0;
    let star3 = 0;
    let shape = "";
    // [55, 67, 98, 115, 61]
    array.forEach(element => {
        let str1 = element.toString();
        newArray1.push(str1);
    });

    for (let i = 0; i < newArray4.length; i++) {
        let num = newArray1[i].length;
        let star = newArray4[i];
        let result = star % (10 ** (num - 1));
        newArray1.push(result);
        newArray5 = newArray1.slice(5, 10)
    }

    array.forEach(element => {
        let str3 = element.toString();
        newArray3.push(str3);
    });

    for (let i in newArray3) {
        let temp = newArray3[i].charAt(0);
        newArray2.push(Number(temp));
    }

    let star1 = newArray5.reduce((acc, cur) => {
        return acc + cur;
    });

    for (let i in newArray2) {
        star2 += newArray2[i] * newArray5[i];
    }
    star3 = star2 / star1;
    let arr = [star3];
    let starRating = Math.round(star3);
    for (let i = 0; i < starRating; i++) {
        shape += "*";
    }

    console.log(arr, shape);

}
averageVote([16, 17, 23, 40, 45]);