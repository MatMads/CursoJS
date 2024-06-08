/*ordem de precedencia:
    ()
    **
    * / %
    + -
*/
/*Aritmeticos: 
    + -> adição / concatenação
*/

const num1 = 5;
const num2 = 10;

console.log(num1 + num2); //resultado = 15


//    - -> subtração 
const num3 = 5;
const num4 = 10;

console.log(num3 - num4); //resultado = -5

// * -> multiplicação

const num5 = 5;
const num6 = 10;

console.log(num5 * num6); //resultado = 50

// * -> multiplicação

// ** -> potenciação

const num7 = 5;
const num8 = 10;

console.log(num7 ** num8); //resultado = 9765625

// %  -> resto da divisão

const num9 = 10;
const num10 = 5;

console.log(num9 % num10); //resultado = 0

// / -> divisão

const num11 = 5;
const num12 = 10;

console.log(num11 / num12); //resultado = 0,5


let contador = 1;
contador++;     //acrescenta 1 no contador
console.log(contador)


let contador1 = 1;
contador1--;     //tira 1 no contador
console.log(contador1)

/*  parseInt   (passa o valor para inteiro)
    parseFloat (para decimais)
     */
