function printTheReverseOfTheArray(array){
    var arrayLength = array.length;
    for(var i = arrayLength-1; i>-1; i--){
        console.log(array[i]);
    }
}

printTheReverseOfTheArray([1,2,3,4,5]); //5 4 3 2 1



function isUniform(array){
    var arrayLength = array.length;
    var arrayElement = array[0];
    for(var i = 1; i<arrayLength; i++){
        if(arrayElement !== array[i]){
            return false;
        }
    }
    return true;
}

isUniform(['a', 'a', 'a']); //true
isUniform(['aa', 'bb', 'aa']); //false
isUniform([1,1,1,1,1,1,1,1,1,1,1]); //true



function sumOfTheArray(array){
    var arrayLength = array.length;
    var sum = 0;
    for(var i = 0; i<arrayLength; i++){
        sum += array[i];
    }
    return sum;
}

sumOfTheArray([2,4,8,6]); //20



function maximumNumberInTheArray(array){
    var arrayLength = array.length;
    var maximumNumber = 0;
    for(var i = 0; i<arrayLength; i++){
        if(array[i] > maximumNumber){
            maximumNumber = array[i];
        }
    }
    return maximumNumber;
}


maximumNumberInTheArray([11,444,2321,55,23,1,232,5,9]); //2321