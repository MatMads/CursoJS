/*
* window.alert()    ->  mostra uma janela de alerta com um botão "OK"
* window.confirm()  ->  mostra uma janela com duas opções (boolean)
* window.prompt()   ->  mostra uma janela pedindo uma entrada do usuário 
*/

let num1 = prompt('Digite um número: ');
let num2 = prompt('Digite outro número: ');

num1 = Number(num1);
num2 = Number(num2);

window.alert(`o resultado é ${num1 + num2}`);
