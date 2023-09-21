// Model
var tasks= [
    {description: 'Handle til middag', isDone: false, who: 'Sondre', taskDone: '', deadline: '' }, 
    {description: 'Lage middag', isDone: false, who: '', taskDone: '', deadline: '' }, 
    {description: 'Spise Middag', isDone: false, who: '', taskDone: '', deadline: '' }, 

];

let UserInput = '';

// Controller
var taskDescriptionInput = document.getElementById('taskDescription');
var personDescriptonInput = document.getElementById('personDescription');
var deadlineInput = document.getElementById('datedeadline');
function addTask() {
    tasks.push(
        {
            description: taskDescriptionInput.value,
            who: personDescriptonInput.value,
            isDone: false,
            taskDone: '',
            deadline: deadlineInput.value,
        })
        taskDescriptionInput.value= '';
        personDescriptonInput.value = '';
        deadlineInput.value = '';
        show();
    }
// View
var tasksTable = document.getElementById('tasksTable');
show();
function show() {
    let html = `
    <tr>
        <th>Oppgave</th>
        <th>Hvem</th>
        <th>Frist</th>
        <th>Gjort?</th>
        <th>Gjort dag</th>
        <th></th>
        
    </tr>`;
for (let i=0; i <tasks.length; i++) {
    
    
    html +=  createHtmlRow(i);
}
tasksTable.innerHTML = html;
}

function createHtmlRow(i) {
    const task=tasks[i];
    const checkedHtml = task.isDone ? 'checked="checked"' : '';
    
    if (!task.editMode)  return /*HTML*/ `<tr>
                <td>${task.description}</td>
                <td>${task.who}</td>
                <td>${task.deadline}</td>
                <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml}></td>
                <td>${task.taskDone}</td>
                <td>
                    <button onclick="deleteTask(${i})">Slett</button>
                    <button onclick="editTask(${i})">Rediger</button>
                </td>
            </tr>`

            return /*HTML*/ `<tr>
                <td><input id="editDescription${i}" type="text" value="${task.description}"></td>
                <td><input id="editWho${i}" type="text" value="${task.who}"></td>
                <td><input id="editDeadline${i}" type="date" value="${task.deadline}"></td>
                <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml}></td>
                <td><button onclick="updateTask(${i})">Lagre</button></td>
            </tr>`
}

function changeIsDone(checkbox, index) {
    const date = new Date();
    let options = { year: '2-digit',
                    month: '2-digit',
                    day: '2-digit'};

    tasks[index].isDone = checkbox.checked;
    if (checkbox.checked){
        tasks[index].taskDone = date.toLocaleString("no-NO", options);
    }
    else {
        tasks[index].taskDone = '';
    }
    show();
}
function deleteTask(index) {
    tasks.splice(index, 1);
    show();
}
function editTask(index) {
    tasks[index].editMode = true; 
    show();
}
function updateTask(index) {
    const id = `editDescription${index}`;
    const id2 = `editWho${index}`;
    const id3 =`editDeadline${index}`;
    const inputtag = document.getElementById(id);
    const inputtag2 = document.getElementById(id2);
    const inputtag3 = document.getElementById(id3);

    tasks[index].description = inputtag.value;
    tasks[index].editMode = false;
    tasks[index].who = inputtag2.value;
    tasks[index].deadline = inputtag3.value; 
    show();
}


