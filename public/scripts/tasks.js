// FRONT END FILE TO INTERACT WITH THE DOM

let btnAdding = document.querySelector('#btn-agregar');
let liste = document.querySelector("#lista")

const sendTaskToUpdateToBack = (task) => {
    fetch('api/update', {

        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',

        }
        , body: JSON.stringify(task),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}







const addEventToAllTasks = (tasks) => {
    tasks.forEach((task) => {
        task.addEventListener('click', (event) => {

            alert(task.innerText)
            alert(task.dataset.id) //for dataset==>added in fetchTasksFromDB function
            // call the back end and send info from the front end
            sendTaskToUpdateToBack({ task_id: task.dataset.id })
        })
    })
}
const selectAllTasks = () => {
    allTasks = document.querySelectorAll("#lista li")
    console.log(allTasks)
    addEventToAllTasks(allTasks)
}








const sendData = (task) => {

    fetch('api/addtask', {

        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',

        }
        , body: JSON.stringify(task),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}

const fetchTasksFromDB = () => {

    fetch('api/alltask', {

        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',

        }
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            data.tasks.forEach(task => {
                liste.insertAdjacentHTML('beforeend', `<li data-id=${task.id}><a href="#">${task.content}</a></li>`)

            });
            selectAllTasks()
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}








btnAdding.addEventListener('click', (e) => {
    let input = document.querySelector('#tareaInput').value;
    liste.insertAdjacentHTML('beforeend', `<li><a href="#">${input}</a></li>`)
    sendData({ task: input })
    input = ""

})


fetchTasksFromDB()






















