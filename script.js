
function clearInput () {
    const getTask = document.querySelector('#texto-tarefa').value = ''  ;
}


function addToDo () {
    document.querySelector('#criar-tarefa').addEventListener('click', function(){
    const taskList = document.querySelector('#lista-tarefas');
    const getTask = document.querySelector('#texto-tarefa').value;
    const sortTask = document.createElement('li');
    sortTask.className = 'task';
    sortTask.innerText= getTask;
    taskList.appendChild(sortTask); 
    clearInput ()
});
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

let sortTask = document.getElementById('lista-tarefas');
sortTask.addEventListener('click', grayPaint);
sortTask.addEventListener('dblclick', completed);

function completed(event) {
  event.target.classList.toggle('completed');
}

function finishRemove () {
    document.getElementById('remover-finalizados').addEventListener('click', function() {
        const finish = document.querySelectorAll('.completed');
        for (let i = 0; i < finish.length; i += 1) {
            finish[i].remove();
        }
    });
}

function selectedRemove () {
    document.getElementById('remover-selecionado').addEventListener('click',function() {

        const finish = document.querySelectorAll('.selected');
        for (let i = 0; i < finish.length; i += 1) {
            finish[i].remove();
        }
    })
}

function storeTask () {
    document.getElementById('salvar-tarefas').addEventListener('click',function () {
        let task = document.querySelector('#lista-tarefas').innerHTML;
        localStorage.setItem('tarefas', task);
    })
}

function getStore () {
    let task = document.querySelector('#lista-tarefas');
    task.innerHTML = localStorage.getItem('tarefas');
}


function moveUp() {
    document.getElementById('mover-cima').addEventListener('click', function () {
        let task = document.querySelector('.selected');
        if (task === null ) {
            return;
        };
        if (task.previousElementSibling) {
        let sortTask = document.getElementById('lista-tarefas');
        sortTask.insertBefore(task, task.previousElementSibling)  
        }
    });
}
moveUp();


function moveDown() {
    document.getElementById('mover-baixo').addEventListener('click', function () {
        
        let task = document.querySelector('.selected');      
        if (task === null) {
            return;
        };
        if (task.nextElementSibling) {
            let sortTask = document.getElementById('lista-tarefas');
            sortTask.insertBefore(task.nextElementSibling, task);
        }
    });
}
moveDown();

addToDo ();
clearInput ();
clearAll(); 
finishRemove();
selectedRemove ();
storeTask ();
finishRemove ();


window.addEventListener('load', function () {
    getStore();
});



















