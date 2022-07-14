console.log('in the client')
$(document).ready(readyNow);

// ready now function for click holders
function readyNow(){
    console.log('rock and roll!');
    $('#submit-button').on('click', addEmployee );
}

// create function that adds employees to table on 'click'

function addEmployee(){
    console.log("added new employee");
}