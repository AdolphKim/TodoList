const todoForm = document.querySelector(".todoList");
const todolist = document.querySelector(".todoList__list");
const todoInput = document.querySelector(".todoList__input");
const todoProgress = document.querySelector("#todo__progress");
const alert = document.querySelector(".progress__alert");
const todoComplete = document.querySelector(".progress__complete");
let todos = [];

function paintTodo(newTodoObj){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const Btn = document.createElement("button");
    const cog = document.createElement("i");
    span.innerText = newTodoObj.text;
    span.id = newTodoObj.id;
    if(newTodoObj.checked == "check"){
        li.classList.add("check")
    }
    Btn.innerText = "O";
    li.appendChild(span);
    li.appendChild(Btn);
    todolist.appendChild(li);
    Btn.addEventListener("click",optionTodo);
    todos.push(newTodoObj);
    if(li.classList.contains("check")){
        todoProgress.value = todoProgress.value + 1;
    }
    saveTodo();
}
function handelSubmitTodo(event){
    event.preventDefault();
    const newTodoObj ={
        text : todoInput.value,
        id : Date.now(),
        checked : ""
    };
    paintTodo(newTodoObj);
    todoInput.value = "";
}
function optionTodo(event){
    if(event.target.parentElement.childNodes.length == 2 )
    {
        li = event.target.parentElement;
        div = document.createElement("div");
        removeBtn = document.createElement("button");
        fixBtn = document.createElement("button");
        checkBtn = document.createElement("button");
        removeBtn.innerText = "X";
        checkBtn.innerText ="C";
        div.appendChild(checkBtn);
        div.appendChild(removeBtn);
        li.appendChild(div);
        removeBtn.addEventListener("click",delTodo);
        checkBtn.addEventListener("click",checkTodo);
    }
    else{
        event.target.parentElement.lastChild.remove();
    }
    
}
function checkTodo(event){
    li = event.target.parentElement.parentElement;
    span = li.querySelector("span");

    todos.map(function(obj){
        if(obj.id == span.id && obj.checked !="check")
        {
            obj.checked = "check";
        }
        else if(obj.id == span.id && obj.checked =="check"){
            obj.checked ="";
        }
    })
    saveTodo();
    progressValue(li);
    li.classList.toggle("check");
}

function progressValue(li){
    if(li.classList.contains("check")){
        todoProgress.value = todoProgress.value - 1;
    }
    else{
        todoProgress.value = todoProgress.value + 1;
    }
}
function delTodo(event){
    li = event.target.parentElement.parentElement;
    span = li.querySelector("span");
    if(li.classList.contains("check")){
        todoProgress.value = todoProgress.value - 1;
    }
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(span.id));
    saveTodo();
}
function saveTodo(){
    localStorage.setItem("todos",JSON.stringify(todos))
    todoProgress.max = todos.length;
    if(todos.length == 0){
        todoProgress.max = 100;
        todoProgress.value = 0;
    }
}
const localTodos = JSON.parse(localStorage.getItem("todos"))
setInterval(handle,1000)
function handle(){
    if(todoProgress.max != 100){
    todoProgress.classList.remove(HIDDEN_CLASS);
    alert.classList.add(HIDDEN_CLASS);
    }
    else{
        todoProgress.classList.add(HIDDEN_CLASS);
        alert.classList.remove(HIDDEN_CLASS);
    }

    if(todoProgress.max == todoProgress.value){
        todoProgress.classList.add(HIDDEN_CLASS);
        todoComplete.classList.remove(HIDDEN_CLASS);
    }
    else{
            todoComplete.classList.add(HIDDEN_CLASS);
       
    }
    
}
if(localTodos){
    localTodos.forEach(element => {
        paintTodo(element);
    });
}


todoForm.addEventListener("submit",handelSubmitTodo)

