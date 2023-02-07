function facOfN(num) {
    let fact = num;
    for (let i = num-1; i>=1 ;i--){
        fact *= i;
    }
    console.log(fact);
}

facOfN(3);
facOfN(5);
facOfN(6);
facOfN(7);


