window.addEventListener('click',function (e) {
    this.navigator.clipboard.writeText(e.target.className)
    console.log(e.target)
})
// 
// 
let newTodoContainer = document.querySelector('.todos-list-ul')
let createNewTodoPanel = {
    form : document.querySelector('.create-todo-form'),
    allBtns : document.querySelectorAll('.form-btns'),
    titleInput : document.querySelector('.title-input'),
    descriptionInput : document.querySelector('.description-input'),
    linkInput : document.querySelector('.link-input'),
    linkLabelInput : document.querySelector('.link-label'),
    priorityMenu : {
        prioritiesMenu : document.querySelector('.priorities-options-menu'),
        openPriorityMenuBtn : document.querySelector('.open-priorities-menu-btn'),
        priorityMenuTitle : document.querySelector('.priorities-menu-title-item'),
        lowPriority : document.querySelector('#low-priority'),
        mediumPriority : document.querySelector('#medium-priority'),
        highPriority : document.querySelector('#high-priority'),
        priorityLabels : document.querySelectorAll('.priority-labels')
    },
    timers : {
        hours : {
            display : document.querySelector('.todo-timer-hours-display'),
            increaseBtn : document.querySelector('.hours-increase-btn'),
            decreaseBtn : document.querySelector('.hours-decrease-btn'),
            timeLimit : 12,
            counter : 0,
            
        },
        minutes : {
            display : document.querySelector('.todo-timer-mins-display'),
            increaseBtn:document.querySelector('.minutes-increase-btn'),
            decreaseBtn : document.querySelector('.minutes-decrease-btn'),
            timeLimit : 60,
            counter : 0,
            
        },
        seconds : {
            display : document.querySelector('.todo-timer-secs-display'),
            increaseBtn:document.querySelector('.seconds-increase-btn'),
            decreaseBtn : document.querySelector('.seconds-decrease-btn'),
            timeLimit : 60,
            counter : 0,
           
        }
    },
    submit : document.querySelector('.create-form-submit-btn'),
    allTimerBtn : document.querySelectorAll('.todo-timer-btns')
    
}
createNewTodoPanel.allTimerBtn.forEach((e) => {
    e.addEventListener('click',(e)=>{
        let data = e.target.parentElement.dataset.typeOfBtn
        newTodoTimerHandler(data)
    })
});

let newTodoObject = {
    Id : null,
    title : null,
    description : null,
    link : null,
    labelOfLink : null,
    priorityColor : null,
}

createNewTodoPanel.allBtns.forEach((e) => {
    e.addEventListener('click',(e)=>{e.preventDefault()})
});




createNewTodoPanel.priorityMenu.openPriorityMenuBtn.addEventListener('click',()=>{
    createNewTodoPanel.priorityMenu.prioritiesMenu.classList.toggle('display-none')
    
})

let hoursCounter = 0
let minCounter = 0 
let secCounter = 0

function newTodoTimerHandler(key) {

    switch (key ) {
        case 'increaseHour':
            hoursCounter++
            if(hoursCounter <10){
                createNewTodoPanel.timers.hours.display.innerHTML = "0" + hoursCounter
                break;
            }
            if(hoursCounter > 12)
            {
                hoursCounter = 0 
                createNewTodoPanel.timers.hours.display.innerHTML = "0" + hoursCounter
                break
            }

            createNewTodoPanel.timers.hours.display.innerHTML = hoursCounter
            break;
        case 'increaseMin':
            minCounter++
            if(minCounter < 10){
                createNewTodoPanel.timers.minutes.display.innerHTML = "0" + minCounter
                break;
            }
            if(minCounter > 60)
            {
                minCounter = 0 
                createNewTodoPanel.timers.minutes.display.innerHTML = "0" +  minCounter
                break
            }
            createNewTodoPanel.timers.minutes.display.innerHTML = minCounter
            break;
        case 'increaseSec':
            secCounter++
            if(secCounter < 10){
                createNewTodoPanel.timers.seconds.display.innerHTML = "0" + secCounter
                break;
            }
            if(secCounter > 60)
            {
                secCounter = 0 
                createNewTodoPanel.timers.seconds.display.innerHTML = "0" + secCounter
                break
            }
            createNewTodoPanel.timers.seconds.display.innerHTML = secCounter
            break;
        case 'decreaseHour':
            hoursCounter--
            
            if(hoursCounter < 0){
                createNewTodoPanel.timers.hours.display.innerHTML = 12
                hoursCounter = 12 
                break
            }
            else if (hoursCounter < 10 ){
                createNewTodoPanel.timers.hours.display.innerHTML = "0" + hoursCounter
                break
            }
            createNewTodoPanel.timers.hours.display.innerHTML = hoursCounter
            break;
        case 'decreaseMin':
            minCounter--
            if(minCounter < 0)
            {
                createNewTodoPanel.timers.minutes.display.innerHTML = 59   
                minCounter = 59
                break
            }

            else if( minCounter < 10 ){
                createNewTodoPanel.timers.minutes.display.innerHTML = "0" + minCounter
                break
            }
                createNewTodoPanel.timers.minutes.display.innerHTML = minCounter
                break;
        case 'decreaseSec':
            secCounter--
            if(secCounter < 0)
            {
                createNewTodoPanel.timers.seconds.display.innerHTML = 59
                secCounter = 59
                break
            }
            if(secCounter < 10 ){
                createNewTodoPanel.timers.seconds.display.innerHTML = "0" + secCounter
                break
            }
            createNewTodoPanel.timers.seconds.display.innerHTML = secCounter
            break;
            
    }
}
    


 function randomNum() {
    let randomNumber = Math.floor(Math.random()* 900 + 100)
    return randomNumber
}

createNewTodoPanel.submit.addEventListener('click',(e)=>{
    e.preventDefault()
    newTodoObject.Id = randomNum()
    newTodoObject.title = createNewTodoPanel.titleInput.value
    newTodoObject.description = createNewTodoPanel.descriptionInput.value
    newTodoObject.link = createNewTodoPanel.linkInput.value
    newTodoObject.labelOfLink = createNewTodoPanel.linkLabelInput.value
    let low = createNewTodoPanel.priorityMenu.lowPriority.checked
    let medium = createNewTodoPanel.priorityMenu.mediumPriority.checked
    let high = createNewTodoPanel.priorityMenu.highPriority.checked
    createNewTodo(newTodoObject.title,newTodoObject.description,newTodoObject.link,newTodoObject.labelOfLink,low,high,medium)
})

function createNewTodo(title,description,link,labelOfLink,low,high,medium) {

    if(low) newTodoObject.priorityColor = createNewTodoPanel.priorityMenu.lowPriority.value
    if(medium)  newTodoObject.priorityColor = createNewTodoPanel.priorityMenu.mediumPriority.value
    if(high) newTodoObject.priorityColor = createNewTodoPanel.priorityMenu.highPriority.value

    newTodoContainer.insertAdjacentHTML('beforeend',`
    <li class="todos-list-lis" style="box-shadow: -2px 2px 0px 0px ${newTodoObject.priorityColor}">
    <div class="todos-lis-text">
        <h3 class="todos-text-title">   ${title}   </h3>
        <p class="todos-text-description">  ${description} </p>
        <a href="   ${link}   " class="todos-text-link">  ${labelOfLink}    </a>
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
    `) }

