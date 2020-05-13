var ulElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var btnElement = document.querySelector("#app button");

var todos =JSON.parse(localStorage.getItem("list_todos"))||[];

  function rendertodo(){
  ulElement.innerHTML="";
  
  for(todo of todos){
    
    var listElement = document.createElement("li");
    var texttodo = document.createTextNode(todo);
    var link = document.createElement("a");
    var textLink = document.createTextNode("Excluir");
        link.setAttribute("href","#");
    var pos = todos.indexOf(todo);
    link.setAttribute('onclick','deleteTodo('+pos+')');
    link.appendChild(textLink);
    listElement.appendChild(texttodo);
    listElement.appendChild(link);
    ulElement.appendChild(listElement);
    
  }
    }
   
  rendertodo();
  
  function addtodos(){
    
    var inputText = inputElement.value+'        ';
    if (inputText === ''+'        '){
      alert("O campo não pode ser vazio");
    }else{
    todos.push(inputText);
    inputElement.value="";
    rendertodo();
    savetodoStorage();
    }
  }
  
  btnElement.onclick=addtodos;
  
  function deleteTodo(pos){
    todos.splice(pos,1);
    rendertodo();
    savetodoStorage();
  }
  
  function savetodoStorage(){
    localStorage.setItem('list_todos',JSON.stringify(todos));
  }