var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber =0;
alert ("vamos contar um por um?");
function increment (){
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
}
function decrement (){
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
}
