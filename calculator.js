const buttons = document.querySelectorAll('.button')
const display = document.querySelector('.display')
const clearAll = document.querySelector('.clear-all')
const deleteButton = document.querySelector('.delete')
const operationButtons = document.querySelectorAll('.operation-button')
const equalButton = document.getElementById('equal')
let leftOperand = null;
let rightOperand = null;
let operation = null;
 
buttons.forEach(button =>{
    button.addEventListener('click', () =>{
        const num = button.value;
        display.value += num;
        console.log(display.value);
    });
});

clearAll.addEventListener('click', () =>{
    display.value = '';
    leftOperand = null;
    rightOperand = null;
    operation = null
})

deleteButton.addEventListener('click', () => { 
    const inputString = display.value;
    const inputStringArray = inputString.split('');
    inputStringArray.pop();
    const newString = inputStringArray.join('');
    display.value = newString;
})

operationButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        buttonClicked(button.value)
    })
})

function buttonClicked(button){
    const addButton = document.getElementById('add')
    const minusButton = document.getElementById('minus')
    const multiplyButton = document.getElementById('multiply')
    const divideButton = document.getElementById('divide')

    if(button === addButton.value){
        operation = button
        leftOperand = display.value;
        display.value = '';
        console.log(operation);
    }
    else if(button === minusButton.value){
        operation = button
        leftOperand = display.value;
        display.value = '';
        console.log(operation);
    }
    else if(button === multiplyButton.value){
        operation = button
        leftOperand = display.value;
        display.value = '';
        console.log(operation);
    }
    else if(button === divideButton.value){
        operation = button
        leftOperand = display.value;
        display.value = '';
        console.log(operation);
    }
}

equalButton.addEventListener('click', () =>{
    rightOperand = display.value
    console.log(rightOperand);
    const answer = eval(`${leftOperand}` + `${operation}` + `${rightOperand}`);
    display.value = answer;
    leftOperand = null;
    rightOperand = null;
    operation = null;
})



