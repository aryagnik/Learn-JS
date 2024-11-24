// Here we will talk about loops.

// for loop:

// for(const i=1; i<=10; i++){
//     console.log(i);
// }
// Only 1 will be printed.


const arr = [[1,2,3],[4,5],[6,7,8]];

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        console.log(arr[i][j]);
    }
}

console.log("*****************************************");

// We can also use keywords like: break and continue to modify our for loop execution.

for(let i=0; i<=10; i++){
    if(i==4){
        console.log(`${i} detected`);
        continue;
    }
    else if(i==8){
        console.log(`${i} detected`);
        break;
    }
    else{
        console.log(`${i}`);
    }
}