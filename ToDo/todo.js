const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");


//Event listener
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener("click",filterTodo)

//Functon
function addTodo(event){
    //prevent form from submitting
event.preventDefault();

//todo DIV
const todoDiv = document.createElement('div');
todoDiv.classList.add("todo")

const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);


/*const myInput = document.createElement('textbox');
myInput.innerHTML = 'hi';
myInput.classList.add("myinput")
todoDiv.appendChild(myInput);*/
//check mark button
const completeButton = document.createElement("button");
completeButton.innerHTML='<i class="fas fa-check"></i>';
completeButton.classList.add("complete-btn");
todoDiv.appendChild(completeButton);

//trash button
const trashButton = document.createElement("button");
trashButton.innerHTML ='<i class="fa fa-trash" aria-hidden="true"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);


//append to list
todoList.appendChild(todoDiv);
//clear todoInput vale
todoInput.value = "";
}

function deleteCheck(e)
{
    const item = e.target;
    //delete todo
    if(item.classList[0]==="trash-btn"){
        const todo = item.parentElement;
        //animation
        todo.classList.toggle("fall");    
    }
    
//check mark
if(item.classList[0]==="complete-btn"){

    const todo = item.parentElement;
    todo.classList.toggle("completed");
}



}
function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex';
                break;

            case "completed" :
                if(todo.classList.contains('completed')){
todo.style.display = 'flex';
                }
                else{
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted" :
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display = 'none'
                }
           break;
        }
    })
}
