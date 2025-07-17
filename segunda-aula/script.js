//1 peça ao usuário para digitar sua idade. Se tiver 18 anos ou mais, exiba "Maior de idade",senão exiba "menor de idade"
function maiorDeIdade() {
    let idade = prompt("digite sua idade")
    if (idade >= 18)
        alert("Maior de idade")
    else {
        alert("menor de idade")
    }
}
maiorDeIdade()
//2) Crie um sistema de notas. Se a nota for maior ou igual a 9, mostre"excelente. Se for entre 6 e 8, "aprovado". Caso contrario, reprovado
function notas() {
    let nota = prompt("digite sua nota")
    if (nota >= 9)
        alert("excelente")
    else if (nota >= 6 && nota <= 8)
        alert("aprovado")
    else {
        alert("reprovado")
    }

}
notas()
//3) use switgh para imprimir o dia de semana com base em um numero de 1 a 7.
let dia = 1
switch(dia){
    case 1:
        console.log("domingo")
        break;
    case 2:
        console.log("segunda")
    case 3:
        console.log("terça")
        break;
    case 4:
        console.log("quarta")
    default:
        console.log("nao existe esse dia da semana")
        break;
}





//4) dado que x = 10 e y = 5:
let x = 10
let y = 5
//a) mostre a soma
let soma = x + y
console.log("soma", soma)

//b)multiplicação

let multiplicacao = x * y
console.log("Multiplicação", multiplicacao)

//divisão e resto entre elas
let divisão = x / y
console.log("divisão", divisão)

let resto = x % y
console.log("resto", resto)

//5) crie um array com 4 freutas. Adicione uma nova fruta, remova a última, e exiba o array final com as frutas separadas por virgula.
function frutas() {
    let frutas = ["maçã", "banana", "laranja", "uva"];

    frutas.push("melancia")

    frutas.pop()

    console.log(frutas.join(","))
}
//6) Verifique se duas variáveis x = "50" e y = 50 têm o mesmo valor usando == e depois usand ===. Mostre os resultados e explique a diferença.


let string = "50";
let number = 50;

if (string == number) {
    console.log("x == y -> Verdadeiro: os valores são iguais com coerção de tipo.");
} else {
    console.log("x == y -> Falso");
}

if (string === number) {
    console.log("x === y -> Verdadeiro: os valores e os tipos são iguais.");
} else {
    console.log("x === y -> Falso: os valores são iguais, mas os tipos são diferentes.");
}


//7) crie uma verificação onde se a pessoa tem mais de 16 anos e se possui titulo de eleitor exiba "tem o direito de votar".

let idadePessoa = 17
let temTitulo = true

if(idadePessoa > 16 && temTitulo)
    console.log("tem titulo")
 else{
    console.log("nao pode votar")
 }

//8) crie uma verificação onde se a pessoa tiver ingresso ou estiver na lista VIP, ela poderá entrar no evento.
let temIngresso = false;
let listaVip = true;

if(temIngresso || listaVip){
    console.log("Pode entrar no evento.")
}
else{
    console.log("não pode entrar no evento.")
}
//9) em um codigo escreva seu nome completo e mostre:

//a) Tamanho do nome             b)nome maiúsculo             c)nome em minúsculo
//d)verifique se contem a palavra "soares"              e)substitua seu primeiro nome por "desenvolvedor(a)"
let nomeCompleto = "João Soares Silva";


//a)
console.log("Tamanho do nome:", nomeCompleto.length);

//b)
console.log("Nome em maiúsculo:", nomeCompleto.toUpperCase());

//c)
console.log("Nome em minúsculo:", nomeCompleto.toLowerCase());

// d)
console.log("Contém 'soares'?", nomeCompleto.toLowerCase().includes("soares"));

//e)
let novoNome = nomeCompleto.replace("João", "Desenvolvedor");
console.log("Novo nome:", novoNome);

//10) crie um sistema simples de login. O usuario so entra se o email nao estiver vazio e a senha tiver pelo menos 6 caracteres

let email = "usuario@email.com";
let senha = "abc123";


if (email && senha.length >= 6) {
    true
} else {
    false
}
