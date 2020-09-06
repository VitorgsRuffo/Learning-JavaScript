var toDoList = [];

window.setTimeout(function(){

    do{
        var userChoice = prompt("Choose an option:");
        if(userChoice === "new"){
            var newToDo = prompt("Enter a new todo:");
            toDoList.push(newToDo);
        }else if(userChoice === "list"){
            console.log(toDoList);
        }
    }while(userChoice !== "quit");
    
    console.log("Quitting the app..");

}, 500);
