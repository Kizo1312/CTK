/*document.addEventListener("keypress", function(event){
    console.log(event)
})

function customEventListener(eventType, callbackFunction){
    const event = {
        type: "kihanje",
        key: "w",
        message: "poruka"
    }
    if(eventType === event.type){
        callbackFunction(event)
    }

}

customEventListener("kihanje", function(event) {

    console.log(event)
}
)
*/
function Todo(name) {
    this.name = name
}
const input = document.getElementsByClassName("task")[0]
const button = document.getElementById("add")
const popis = document.getElementById("popis")
button.addEventListener("click", function() {
    const newTask = new Todo(input.value)
    input.value= ""
    const task = document.createElement("li")
    task.id = "task"
    const deleteButton = document.createElement("button")
    deleteButton.innerHTML= "Delete"
    task.innerHTML =`${newTask.name}`
    popis.appendChild(task)
    task.appendChild(deleteButton)
    console.log(task.id)
    deleteButton.addEventListener("click", function(){
        task.remove()
    })
    task.addEventListener("click", function(){
        task.innerHTML = `${newTask.name.strike()}`
        task.appendChild(deleteButton)
    })
})

