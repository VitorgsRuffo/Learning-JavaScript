var toDoList = [];
var userChoice;

window.setTimeout(function(){ //this garatees that the html loads before our js code. That way the html doesn't need to wait for the prompt window to close.

    do{
        userChoice = prompt("Choose an option:");
        if(userChoice === "new"){
            var newToDo = prompt("Enter a new todo:");
            addNewTodo(newToDo);
        }else if(userChoice === "list"){
            listAllToDos();
        }else if(userChoice === "delete"){
            deleteSpecificToDo();
        }
    }while(userChoice !== "quit");
    
    console.log("Quitting the app..");

}, 500);


function addNewTodo(newToDo){
    toDoList.push(newToDo);
}

function listAllToDos(){
    console.log("*****************");
    toDoList.forEach(function(todo, index){
        console.log(index + ": " + todo);
    });
    console.log("*****************");
}

function deleteSpecificToDo(){
    var indexOfElementToBeDeleted = prompt("Enter index of todo to delete:");
    var deletedElement = toDoList.splice(indexOfElementToBeDeleted, 1); //"in the specified array, from the index 'indexOfElementToBeDeleted', remove one element".
    console.log("You removed '" + deletedElement + "' from your todos..");
}