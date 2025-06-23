const result = document.getElementById('result');
const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btnMPlus = document.getElementById('btnMPlus'); 
const btnMSub = document.getElementById('btnMSub');  
const btnPlus = document.getElementById('btnPlus');
const btnMinus = document.getElementById('btnMinus');
const btnMultiply = document.getElementById('btnMultiply');
const btnDivision = document.getElementById('btnDivision');
const btnClear = document.getElementById('btnClear');
const btnEqual = document.getElementById('btnEqual');
const btnMRC = document.getElementById('btnMRC');
const  btnOnOff = document.getElementById('btnOnOff');
const  power = document.getElementById('power');

[btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9].forEach(btn => {
  btn.addEventListener('click', () => {
    if(result.textContent === 'Error'){
        result.textContent = '';
    };
    result.textContent += btn.textContent;
    const value =  input.value;
    display.innerText = value
  });
});

const operators = ["+", "-", "*", "/"];
[btnPlus, btnMinus, btnMultiply, btnDivision].forEach(btn => {
  btn.addEventListener('click', () => {
    const lastChar = result.textContent.slice(-1);
    if (operators.includes(lastChar)) {
      return; 
    };
    result.textContent += btn.textContent;
  });
});

btnClear.addEventListener('click', () => {
  result.textContent = '';
});

btnEqual.addEventListener('click', () => {
  try {
    result.textContent = eval(result.textContent);
  } catch {
    result.textContent = 'Error';
  }
});

let isOn = true; 
if(isOn = true){
    power.textContent = 'on'; 
};

btnOnOff.addEventListener('click', () => {
  if (isOn) {
    
    [btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9,
     btnPlus, btnMinus, btnMultiply, btnDivision, btnEqual, btnClear,
     btnMPlus, btnMSub, btnMRC].forEach(btn => btn.disabled = true);
    power.textContent = 'off';
    result.textContent = ''; 
    isOn = false;
  } else {
    
    [btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9,
     btnPlus, btnMinus, btnMultiply, btnDivision, btnEqual, btnClear,
     btnMPlus, btnMSub, btnMRC].forEach(btn => btn.disabled = false);
       power.textContent = 'on';
    isOn = true;
  };
});
