console.log('in the client')
$(document).ready(readyNow);

// ready now function for click holders
function readyNow(){
    console.log('rock and roll!');
    $('#submit-button').on('click', addEmployee);
    $('body').on('click','#delete-button', removeEmployee );

   // on click push to array 
   
}





// where the object of a the new employee will be added 

let allEmployee = [];
let grandTotal = 0;


// create function that adds 
//employees to table on 'click'

function addEmployee(){
    console.log("added new employee");
    //object
    let firstName =$('#first-input').val();
    let lastName =$('#last-input').val();
    let id =$('#ID-input').val();
    let employeeTitle = $('#title-input').val();
    let employeePayment =$('#salary-input').val();
    console.log(firstName);
    $('#employee-table').append(`
    <tr>
   <td>${firstName}</td>
   <td>${lastName}</td>
   <td>${id}</td>
   <td>${employeeTitle}</td>
   <td>${employeePayment}</td>
  <td><button id="delete-button">delete</button></td>
  </tr>
  `);

  //new object employee
  const newEmployee = {
    first: firstName,
    last: lastName,
    Id: id,
    title: employeeTitle,
    salary: employeePayment
  }
console.log(newEmployee);

 allEmployee.push(newEmployee);


grandTotal = 0;
 for(let i = 0; i < allEmployee.length; i++){
    grandTotal += parseInt(allEmployee[i].salary);
 }
  console.log('my grand total is', grandTotal); 

   // changes the total on the page
   moneyTotal = grandTotal;
   $('#total-amount').html(`
    <span id="total-amount">$ ${moneyTotal} </span>
   `)
   console.log(moneyTotal);
/// if statment to set cap on page 

   if(moneyTotal > 20000){
    console.log("over budget");
    $("h3").css("background-color", "red");

}


}




// function now needed to remove selected employees
function removeEmployee(){
    console.log("you're fired");
    $(this).parent().parent().remove();

}

/// function that adds the salaries of the employees added
// create an array that adds all the totals together? 

