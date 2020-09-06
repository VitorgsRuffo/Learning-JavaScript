var colors = ["blue", "red", "orange", "yellow", "purple"];
var colorsLength = colors.length;

//Iterating with a for loop:
    for(var i = 0; i < colorsLength; i++){
        console.log(colors[i]);
    }

    for(var i = colorsLength-1; i > -1; i--){
        console.log(colors[i]);
    }


//Iterating with the built-in method ForEach:

    //We must pass a function (callback) as argument that is gonna be runned for each element inside the array. That function takes the current array element as argument.
        colors.forEach(function(color){
            console.log(color);
        });

    //We can also define that function before calling the forEach method:
        function printColor(color){
            console.log(color);
        }

        colors.forEach(printColor)
    
    //the callback function that is passed to forEach can take up to 3 arguments:
    /*  - The first one represents each element in the array (per loop iteration) that .forEach was called on.
        - The second represents the index of said element.
        - The third represents the array that .forEach was called on (it will be the same for every iteration of the loop).
    */