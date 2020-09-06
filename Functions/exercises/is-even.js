function isEven(num){
    if(num % 2 === 0){
        return true;
    }else if (num % 2 == 1){
        return false;
    }else{
        return undefined;
    }
}

console.log(isEven(4));  //true
console.log(isEven(3));  //false
console.log(isEven(7));  //false
console.log(isEven(10)); //true