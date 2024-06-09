let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let varT = varA;

varA = varB;
varB = varC;
varC = varT;


console.log(varA, varB, varC); // Resultado tem que ser "B C A"
