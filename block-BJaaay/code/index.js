//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.
for( let n = 0;n<=10;n=n+1){
    console.log(n)
}

// Using `console.log` log all the evan values from 1 to 10.
    for( let i=0; i<=10;i=i+1){
        if(i%2==0){
            console.log(i)
        }
    }
// Using `console.log` log all the od values from 1 to 10.
for(let a= 0;a<=10;a=a+1){
    if (a%2 !==0){
        console.log(a)
    }
}

// Calculate the sum of all numbers from 1 to 10.
let sum=0;
for(let b=1;b<=10;b=b+1){
    sum=sum+b
}
console.log(sum)

// Log all the values from 1 to 10 using while loop
    let d=0;
    while(d<=10){
        console.log(d);
        d=d+1
    }