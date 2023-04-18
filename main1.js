'use strict';

const btnNumber = document.querySelectorAll('.btnNumber');

const inputText = document.querySelector('#inputText');

const btnClear = document.querySelector('.clear');

const btnOperations = document.querySelectorAll('.btnOperations');

const btnEqual = document.querySelector('.btnEqual');

const btnSquare = document.querySelector('.square');

const btnOff = document.querySelector('.off');

let operationNumber;

let operationType = '';

const defaultInput = function (e) {
  if (!operationNumber) {
    operationNumber = Number(inputText.value);
    inputText.value = '';
    operationType = e.target.textContent;
  } else {
    if (operationType) {
      switch (e.target.textContent) {
        case '-':
          operationNumber -= Number(inputText.value);
          break;
        case '+':
          operationNumber += Number(inputText.value);
          break;
        case '/':
          operationNumber /= Number(inputText.value);
          break;
        case '*':
          operationNumber *= Number(inputText.value);
          break;
        case '%':
          operationNumber *= Number(inputText.value) / 100;
          break;
      }
    } else {
      operationNumber = Number(inputText.value);
    }
    inputText.value = '';
    operationType = e.target.textContent;
    console.log(operationType);
    console.log(operationNumber);
  }
};

for (let i = 0; i < btnNumber.length; i++) {
  btnNumber[i].addEventListener('click', function (e) {
    let input;
    input = e.target.textContent;
    inputText.value += input;
  });
}

btnClear.addEventListener('click', function () {
  operationNumber = 0;
  inputText.value = '';
});

for (let i = 0; i < btnOperations.length; i++) {
  btnOperations[i].addEventListener('click', function (e) {
    defaultInput(e);
  });
}

btnSquare.addEventListener('click', function (e) {
  operationNumber = Number(inputText.value) ** 2;
  inputText.value = operationNumber;
  operationType = false;
});

btnEqual.addEventListener('click', function () {
  switch (operationType) {
    case '+':
      operationNumber += Number(inputText.value);
      break;
    case '-':
      operationNumber -= Number(inputText.value);
      break;
    case '/':
      operationNumber /= Number(inputText.value);
      break;
    case 'X':
      operationNumber *= Number(inputText.value);
      break;
    case '%':
      operationNumber *= Number(inputText.value) / 100;
      break;
  }
  let result = operationNumber;
  inputText.value = result;
  operationType = false;
  console.log(inputText.value);
  console.log(operationType);
  console.log(operationNumber);
});

btnOff.addEventListener('click', function () {
  if (inputText.disabled === false) {
    inputText.disabled = true;
    inputText.value = 'Ligue para começar :)';
    inputText.classList.add('disabled');
  } else {
    inputText.disabled = false;
    inputText.value = '';
    inputText.classList.remove('disabled');
  }
});
