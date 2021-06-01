const { response } = require("express");


fetch('/api')
.then(response => response.json())
.then(data =>{

    updateFeedback(data);
})

let form = document.querySelector('form');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    fetch('/api', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF9'
        },
        body: JSON.stringify({
            name: document.getElementById('feedback-form-name').value,
            title: document.getElementById('feedback-form-title').value,
            message: document.getElementById('feedback-form-message').value
        })
    })
    .then(response => response.json())
    .then(data => {
        updateFeedback(data);
    })
})


const updateFeedback = (data) => {
    let output = "";
    data.forEach((item, key) =>{

        output += '     <div class="feedback-item item-list media-list">';
        output += '       <div class="feedback-item media">';
        output += '       <div class="media-left"><button class="feedback-delete btn btn-xs btn-danger"><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>';
        output += '         <div class="feedback-info media-body">';
        output += '           <div class="feedback-head">';
        output += '             <div class="feedback-title">' + item.title + ' <small class="feedback-name label label-info">' + item.name + '</small></div>';
        output += '           </div>';
        output += '           <div class="feedback-message">' + item.message + '</div>';
        output += '         </div>'; 
        output += '       </div>';
        output += '     </div>';
    })
    
    //attach to a dom element
    let feedbackMessages = document.querySelector('.feedback-messages');
    feedbackMessages.innerHTML = output;
}

