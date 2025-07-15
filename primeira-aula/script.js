//atv3 solicite ao usuário que digite um cpf e verifique se ele tem exatamente 11 digitos. Caso contrario, exiba uma mensagem personalizada explicando o erro.//


// entrada
let cpf = prompt("Digite o numero do CPF do usuário");

// Converte para string (opcional, pois prompt já retorna string)
cpf = String(cpf);

// Verifica o tamanho do CPF
if (cpf.length === 11) {
    alert("Perfeito");
} else if (cpf.length > 11) {
    alert("Passou a quantidade de números");
} else {
    alert("Opa, parceiro! Seu CPF está faltando números");
}




//atv4

//converte os dados abaixo

//conversor para inteiro
let n1 = parseInt('150') //para int

//conversor 
let n2 = String(18) //para string

let n3 = parseFloat("20.99") //float

let n4 = parseInt("010") //para int


//5 qual valor de cada variavel abaixo


//a)
let soraia = 0;
soraia++;
//1


//b)
let bichinho = 5;
bichinho++;
//6

//c
let mateus = 40;
mateus--;
//39

//d
let numero = 10;
bichinho +=5;
//15

//e
let saldo = 500;
bichinho -= 200;
//300 

//f
let b1 = 9;
b1 *= 2;
//18

//g
let aux = 1 ;
 aux = aux + 9;
//10

//  //h
//  let aux = 5 ;
//  aux = aux -5;
//0

//6 crie um objeto aluno com as propriedades nome, idade, notaFinal APROVADO (boolean).




let objeto = {
    nome: "gui",
    idade: 18,
    notaFinal:  10,
    aprovado: true
};
//7. com a ativdade acima, crie uma string informando o nome, idade, nota e se foi aprovado.

let str = "";
let  += `o nome do aluno aprovado é ${objeto.nome}`;
let += `a idade do aluno é ${objeto.idade}`;
let += `a nota final é${objeto.notaFinal}`;
let += `o nome do aluno aprovado é ${objeto.aprvado ? "aprovado" : "reprovado"}`;
console.log(str);




//8 Faça uma calculadora da sua idade.

function calculadora() {
    let anoQueNasceu = 2008
    let anoAtual = 2025
    let idade = (anoAtual - anoQueNasceu)
    console.log("Você tem" + idade + "anos")
}
console.log(calculadora())


//9.converta graus para fahrenheit com formula f = (c*9/5)+32

//a) 18°c | b) 5°c | c) 27°c | d) 0°c e)100?c  | f)44°c | g)-4°c | h) 33°c

function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function conversao() {
    const temperaturasCelsius = [18, 5, 27, 0, 100, 44, -4, 33];

    temperaturasCelsius.forEach((temperatura) => {
        const fahrenheit = celsiusParaFahrenheit(temperatura);
        console.log(`${temperatura}°C = ${fahrenheit.toFixed(1)}°F`);
    });
}

conversao(); 
