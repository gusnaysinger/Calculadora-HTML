var firstInput = document.getElementById('first');
var secondInput = document.getElementById('second');
var result = document.getElementById('result');

var currentInput = firstInput;

//Realizar operações aos numeros 
function plus(){
    result.value = +firstInput.value + +secondInput.value;
    currentInput = firstInput;
    firstInput.value = "";
    secondInput.value = "";

}
function minus(){
    result.value = +firstInput.value - +secondInput.value;
    currentInput = firstInput;
    firstInput.value = "";
    secondInput.value = "";
}
function mult(){
    result.value = +firstInput.value * +secondInput.value;
    currentInput = firstInput;
    firstInput.value = "";
    secondInput.value = "";
}
function divide(){
    result.value = +firstInput.value / +secondInput.value;
    currentInput = firstInput;
    firstInput.value = "";
    secondInput.value = "";
}

//Alternar focus entre os inputs
function focusFirst(){
    focus(firstInput);
    currentInput = firstInput;
}
function FocusSecond(){
    focus(secondInput);
    currentInput = secondInput;
}

//Função digitar nos inputs com o teclado virtual
function insert(num){
    currentInput.value = currentInput.value + num;
}