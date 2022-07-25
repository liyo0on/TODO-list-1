// window.addEventListener('click',function (e) {
//     this.navigator.clipboard.writeText(e.target.className)
//     console.log(e.target)
// })
// 
// 
// 

let newTodoForm = document.querySelector('.todos-list-ul')
let newTodoFormSubmitBtn = document.querySelector('.create-form-submit-btn')
let newTodoFormTitleInput = document.querySelector('.title-input')
let newTodoFormDescriptionInput = document.querySelector('.description-input')
let newTodoFormLinkInput = document.querySelector('.link-input')
let newTodoFormLinkLabelInput = document.querySelector('.link-label')
let newTodoFormPriorityOption = document.querySelector('.priority-input')
let highPriorityInput = document.getElementById('high-priority')
let mediumPriorityInput = document.getElementById('medium-priority')
let lowPriorityInput = document.getElementById('low-priority')
let priorityLabels = document.querySelectorAll('.priority-labels')
let prioritiesTitle = document.querySelector('.priority-labels-title')


let getNewElement = function (elementClassName) {
    let newElem = document.querySelector(elementClassName)
    return newElem
}

let getNewElements = function (elementsClassName) {
    let newElems = document.querySelectorAll(elementsClassName)
    return newElems
}




getNewElement('.create-todo-form').addEventListener('click',function (e) {e.preventDefault(0)})

function changePriorityTitle() {
    priorityLabels.forEach((e) => {
        e.addEventListener('click',function (e) {
            prioritiesTitle.innerHTML = `${e.target.innerHTML} priority`
        })
    });
}




function openPriorityMenuHandler() {
    counter++
    if(counter % 2 === 1) {
        getNewElement('.open-priorities-menu-btn').innerHTML = '<i class="fas fa-caret-down"></i>'
        getNewElement('.priorities-options-menu').style.display = 'initial'
    }
    if(counter % 2 === 0) {
        getNewElement('.open-priorities-menu-btn').innerHTML = '<i class="fas fa-caret-right"></i>'
        getNewElement('.priorities-options-menu').style.display = 'none'
    } 
}




function closePriorityMenu() {
    getNewElement('.priorities-options-menu').style.display = 'none'
}


function resetPanel() {
    getNewElement('.title-input').value = ''
    getNewElement('.description-input').value = ''
    getNewElement('.link-input').value = ''
    getNewElement('.link-label').value = ''
    getNewElement('.priority-labels-title').innerHTML = 'choose priority'
}

<<<<<<< HEAD


let hoursTimersCounter = 0
let minutesTimersCounter = 0
let secondsTimersCounter = 0
let hoursDisplay = getNewElement('.todo-timer-hours-display')
let minsDisplay = getNewElement('.todo-timer-mins-display')
let secsDisplay = getNewElement('.todo-timer-secs-display')
let newTodoTimerBtns = getNewElements('.todo-timer-btns')

newTodoTimerBtns.forEach((e) => {
    let isIncreaseBtn
    e.addEventListener('click',(e)=>{
        if(e.target.parentElement.dataset.typeOfBtn === '1') isIncreaseBtn = true
        if(e.target.parentElement.dataset.typeOfBtn === '-1') isIncreaseBtn = false
        
        let typeOfTime = e.target.parentElement.dataset.typeOfTime
        NewTodoIncreaseBtns(typeOfTime,isIncreaseBtn)
        NewTodoDecreaseBtns(typeOfTime,isIncreaseBtn)
    })
});

function NewTodoIncreaseBtns(typeOfTime,isIncreaseBtn) {
    if(typeOfTime === 'hour' && isIncreaseBtn) hoursDisplay.innerHTML = hoursTimersCounter++
    if(typeOfTime === 'minute' && isIncreaseBtn) minsDisplay.innerHTML = minutesTimersCounter++
    if(typeOfTime === 'second' && isIncreaseBtn) secsDisplay.innerHTML = secondsTimersCounter++
}
function NewTodoDecreaseBtns(typeOfTime,isIncreaseBtn) {
    if(typeOfTime === 'hour' && !isIncreaseBtn){
        hoursDisplay.innerHTML = hoursTimersCounter--
        if(hoursTimersCounter < 0) hoursTimersCounter = 0
    } 
    if(typeOfTime === 'minute' && !isIncreaseBtn){
        minsDisplay.innerHTML = minutesTimersCounter--
        if(minutesTimersCounter < 0) minutesTimersCounter = 0
    }
    
    if(typeOfTime === 'second' && !isIncreaseBtn) {
        secsDisplay.innerHTML = secondsTimersCounter--
        if(secondsTimersCounter < 0) secondsTimersCounter = 0
        
    }
}

=======
newTodoFormSubmitBtn.addEventListener('click',function (e) {

    let newTodoTitle = newTodoFormTitleInput.value
    let newTodoDescription =newTodoFormDescriptionInput.value
    let newTodoLinkUrl = newTodoFormLinkInput.value
    let newTodoLinkLabel = newTodoFormLinkLabelInput.value
    let lowPriority = lowPriorityInput.checked
    let mediumPriority = mediumPriorityInput.checked
    let highPriority = highPriorityInput.checked

    createNewTodo(newTodoTitle , newTodoDescription,newTodoLinkUrl,newTodoLinkLabel,lowPriority,mediumPriority,highPriority)
    resetPanel()
    closePriorityMenu()
})
>>>>>>> master
function createNewTodo(newTodoTitle , newTodoDescription,newTodoLinkUrl,newTodoLinkLabel,lowPriority,mediumPriority,highPriority){
    let priorityColor
    if(lowPriority) priorityColor = lowPriorityInput.value
    if(mediumPriority) priorityColor = mediumPriorityInput.value
    if(highPriority) priorityColor = highPriorityInput.value

    newTodoForm.insertAdjacentHTML('beforeend',`
    <li class="todos-list-lis" style="box-shadow: -2px 2px 0px 0px ${priorityColor}">
    <div class="todos-lis-text">
        <h3 class="todos-text-title">${newTodoTitle}</h3>
        <p class="todos-text-description">${newTodoDescription}</p>
        <a href="${newTodoLinkUrl}" class="todos-text-link">${newTodoLinkLabel}</a>
        <button class="todos-description-show-btn" title="show more">
            <i class="fas fa-caret-down"></i>
        </button>
    </div>
    <div class="todos-lis-options">
        <div class="todos-timer-option">
            <button class="todos-timer-start-btn">
                <i class="far fa-play-circle"></i>
            </button>
            <p class="todos-timer-display"><span class="todos-timer-hours">0h</span> : <span class="todos-timer-minutes">0m</span> : <span class="todos-timer-seconds ">0s</span>
            </p>
        </div>
        <button class="todos-options-btns lis-options-done" title="done">
            <i class="fas fa-check"></i>
        </button>
        <button class="todos-options-btns lis-options-favorite" title="make favorite">
            <i class="far fa-star"></i>
        </button>
        <button class="todos-options-btns lis-options-comment" title="comments">
            <i class="far fa-comment-alt"></i>
        </button>
        <button class="todos-options-btns lis-options-remove" title="remove">
            <i class="far fa-trash-alt"></i>
        </button>
    </div>
</li>
    `)    
}
<<<<<<< HEAD
getNewElement('.open-priorities-menu-btn').addEventListener('click',priorityPanel)
=======






newElement('.create-todo-form').addEventListener('click',(e)=>{e.preventDefault()})
newElement('.open-priorities-menu-btn').addEventListener('click',priorityPanel)
>>>>>>> master
function priorityPanel(e) {
    openPriorityMenuHandler()
    changePriorityTitle()
}

