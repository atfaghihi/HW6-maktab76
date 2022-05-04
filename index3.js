let user = {
    id: 6, name: "Hossein", lastName: "Zenderoh", roles: ["student", "admin"], age: 19,
    scores: { english: 10, math: 19.5, physics: 14 },
    };

function addScore(score){
         return {...user, ...{scores: {...score}}};
}
console.log(addScore({arabi: 19}));

function addRole(role){
    let {age} = user;
    let old = JSON.parse(JSON.stringify(user));

    if(old[4] < 18){
        return {...user, ...[roles] = [...role]};
    }
}
console.log(addRole(["veryyoung"]));

let arr = Object.entries(user);
let father = {fatherName: "ali"};
// let arr1 = Object.entries(father);

arr.push([father]);
// let str = JSON.parse(JSON.stringify(user));
// let arr = [...str];
let obj = {...arr};
console.log(arr);


