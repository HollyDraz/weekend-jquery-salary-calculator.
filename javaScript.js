console.log('in the client')
$(document).ready(readyNow);

// ready now function for click holders
function readyNow(){
    console.log('rock and roll!');
    $('#submit-button').on('click', addEmployee );
    $('#delete-button').on('click', removeEmployee );
}

// create function that adds 
//employees to table on 'click'

function addEmployee(){
    console.log("added new employee");
    let firstName =$('#first-input').val();
    let lastName =$('#last-input').val();
    let id =$('#ID-input').val();
    let employeeTitle = $('#title-input').val();
    let employeeSalary =$('#salary-input').val();
    console.log(firstName);
    $('#employee-table').append(`
    <tr>
   <td>${firstName}</td>
   <td>${lastName}</td>
   <td>${id}</td>
   <td>${employeeTitle}</td>
   <td>${employeeSalary}</td>
   <td><button id="delete-button">delete</button></td>
  </tr>
`);
}

// function now needed to remove selected employees
function removeEmployee(){
    console.log("you're fired");

}