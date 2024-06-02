const nome = 'Mateus';
const sobrenome = 'Miranda';
const idade = 26;
const altura = 1.77;
const peso = 71;
const imc = peso / (altura * altura);
const anoNascimento = 2024 - idade;

//template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
            
console.log(`tem ${altura} de altura e seu IMC é ${imc}`);

console.log(`${nome} nasceu em ${anoNascimento}`);