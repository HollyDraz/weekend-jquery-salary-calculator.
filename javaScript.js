console.log('in the client')
$(document).ready(readyNow);

// ready now function for click holders
function readyNow(){
    console.log('rock and roll!');
    $('#submit-button').on('click', addEmployee );
}

// create function that adds 
//employees to table on 'click'

function addEmployee(){
    console.log("added new employee");
    let firstName =$('#first-input').val();
    console.log(firstName);
    $('#employee-table').append(`
    <tr>
   <td>${firstName}</td>

  </tr>
`);

}

// console.log("add notes");
;
