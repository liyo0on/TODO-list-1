window.addEventListener('click',function (e) {
    this.navigator.clipboard.writeText(e.target.className)
    console.log(e.target)
})
// 
// 
let createNewTodoPanel = {
    form : document.querySelector('.create-todo-form'),
    titleInput : document.querySelector('.title-input'),
    descriptionInput : document.querySelector('.description-input'),
    linkInput : document.querySelector('.link-input'),
    linkLabelInput : document.querySelector('.link-label'),
    priorityMenu : {
        priorityMenuTitle : document.querySelector('.priorities-menu-title-item'),
        lowPriority : document.querySelector('#low-priority'),
        mediumPriority : document.querySelector('#medium-priority'),
        highPriority : document.querySelector('#high-priority'),
    },
    timers : {
        hours : {
            display : document.querySelector('.todo-timer-hours-display'),
            increaseBtn : document.querySelector('.hours-increase-btn'),
            decreaseBtn : document.querySelector('hours-decrease-btn'),
            counter : 0
        },
        minutes : {
            display : document.querySelector('.todo-timer-mins-display'),
            increaseBtn:document.querySelector('.minutes-increase-btn'),
            decreaseBtn : document.querySelector('.minutes-decrease-btn'),
            counter : 0
        },
        seconds : {
            display : document.querySelector('.todo-timer-secs-display'),
            increaseBtn:document.querySelector('.seconds-increase-btn'),
            decreaseBtn : document.querySelector('.seconds-decrease-btn'),
            counter : 0

        }
    },
    submit : document.querySelector('.create-form-submit-btn')
}


function createNewTodo() {
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