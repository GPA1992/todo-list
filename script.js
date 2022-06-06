
function clearInput () {
    const getTask = document.querySelector('#texto-tarefa').value = ''  ;
}


function addToDo () {
    const taskList = document.querySelector('#lista-tarefas');
    const getTask = document.querySelector('#texto-tarefa').value;
    const sortTask = document.createElement('li');
    sortTask.className = 'task';
    sortTask.innerText= getTask;
    sortTask.addEventListener('click', grayPaint);  
    sortTask.addEventListener('dblclick', completed); 
    taskList.appendChild(sortTask); 
}

function clearAll () {
    const clearButton = document.querySelector('#apaga-tudo')
    const taskList = document.querySelector('#lista-tarefas');
    clearButton.addEventListener('click', function () {
    const taskList = document.querySelector('#lista-tarefas').innerHTML = '';
})
}

function grayPaint(event) {
    const task = document.querySelector('.selected');
    if (task === null) {
    event.target.classList.add('selected');
    }
    else {
    task.classList.remove('selected');
    event.target.classList.add('selected');
    }
}

function completed(event) {
  event.target.classList.toggle('completed');
}

function finishRemove () {
    const finish = document.querySelectorAll('.completed');
    for (let i = 0; i < finish.length; i += 1) {
    finish[i].remove();
    }
}

function selectedRemove () {
    const finish = document.querySelectorAll('.selected');
    for (let i = 0; i < finish.length; i += 1) {
    finish[i].remove();
    }
}

function storeTask () {
    const task = document.getElementsByClassName('task');
    localStorage.setItem('tarefas', task);
}




function startEvents () {
    document.querySelector('#criar-tarefa').addEventListener('click', function(){
        addToDo ();
        clearInput ();
    });
    clearAll();  
    document.getElementById('remover-finalizados').addEventListener('click', finishRemove)
    document.getElementById('remover-selecionado').addEventListener('click', selectedRemove)
    document.getElementById('salvar-tarefas').addEventListener('click', storeTask);
}
window.addEventListener('load', startEvents);



















