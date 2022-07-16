# Weekend Challenge: jQuery Salary Calculator
Create an application that records employee salaries and adds salaries up to report monthly costs. 


## To Do HTML: 
-[x] Source all files 
-[] create outline for dom in html 
    -[]outline includes:
        - [x]title 
        -[x] header
        -[x] table 
        -[x] input fields for first name 
        -[x] last name 
        -[x] id 
        -[x] title 
        -[x] annual salary
        -[x] submit button 
-[x] add delete button to go with each employee 

## Part one of JS append Employees:
-[x]create ready now function and test 
-[x]create a function that takes the employee input and on click adds it to the table.
-[x] add delete button to each row

## Part 2 Delete Employees:
-[x] then create a function that allows us to delete a selected employee on the click 
-[x]delete button calls function when tested 

## Part 3 Monthly total:
-[] create a function that then finds the sum of the employees that are in the table 
    -[]show to total of the additon of all the employee salaries 
    -[] note: its only going to add the salaries 
    -[] create a limit on the total 
    -[] if total is exceeded have the page turn red 


## Stretch Goals 
    - [] once an employee is removed it should also subtract that from the total


## Topics Covered
- JavaScript
- jQuery - Selectors, append, and event handling

## Assignment

The application should have an input form that collects _employee first name, last name, ID number, job title, annual salary_.

A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields. Using the stored information, calculate monthly costs and append this to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

Create a delete button that removes an employee from the DOM. For Base mode, it does **not** need to remove that Employee's salary from the reported total.

### Files Provided
No files have been provided (just instructions.md and a readme.md). Instead of forking and cloning this repo, please choose "Use This Template" (green button) and name your new repo "weekend-jquery-salary-calculator" and clone down from there. Make sure to commit regularily!

### Wireframe

![Wireframe](salary-calc-wireframe.png)

## Stretch Mode

Add styling or extra functionality that fits with the theme of this assignment.

Once the employee is deleted, update the _Total Monthly Cost_ section on the page to reflect the employee's removal. _HINT:_ You will need to figure out which employee was removed, in order to subtract their salary from the total. Consider using `.text()` as a getter, or look into jQuery's `.data()` function. This is tricky! 

## Reminder About Modes

Above, we introduced the concept of levels of difficulty. "Mode" is how we will typically refer to each level. Below is a brief explanation of

* what to expect when attempting each mode
* if they are required or not

Mode | Description
--- | ---
Base | required
Stretch | optional, stretches your understanding and may require additional research

## Assignment Submission
Check in your repo, then turn in your work via the Prime Academy Assignment Application at [http://primeacademy.io](http://primeacademy.io), as usual and don't hesitate to hit up the Slack channel as needed!
