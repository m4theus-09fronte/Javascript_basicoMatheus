/*    Exercício 1: Imprima os números de 1 a 20 no console.
for(let i = 1; i <= 20; i++){
    console.log(i);
}*/


/*    Exercício 2: Calcule a soma dos números de 1 a 100 e imprima o resultado no console.
for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log("Número par: " + i);   
}else{
    console.log("Número ímpar: " + i);
}*/

/* lançamento
for(let i = 1; i <= 5; i++){
    console.log( + i);
}
console.log(" 🚀Lançamento!");*/

/* tabua
let numero = 5;
let numero2 = 6;
let numero3 = 7;
for(let i = 1; i <= 10; i++){
    console.log(numero + " x " + i + " = " + (numero * i));
}

for(let i = 1; i <= 10; i++){
    console.log(numero2 + " x " + i + " = " + (numero2 * i));
}

for(let i = 1; i <= 10; i++){
    console.log(numero3 + " x " + i + " = " + (numero3 * i));
}*/

/* bateria
let bateria = 100;
while(bateria >= 0){
    console.log("Bateria: " + bateria + "%");
    bateria -= 10;
}*/

/*senha 
let senha = "";
let tentativa = 0;

while(senha !== '1234'){
    senha = prompt("Digite a senha:");
    tentativa++;
    if(tentativa >= 3){
        alert("Número máximo de tentativas atingido. Acesso negado!");
        break;
    }

}

alert("Acesso concedido!");*/

/* energia
console.log("Iniciando o jogo...");
let energia = 100;
while(energia >= 0){
    console.log("Energia: " + energia + "%");
    energia -= 10;
}*/

/*
let creditos = 0;
do{
    console.log('tentatanto jogar...');

}while(creditos > 0);*/


/*desafio 5
let opcao;
do {
    opcao = Number(prompt("Escolha uma opção:\n1. Jogar\n2. Ranking\n3. Sair"));
    switch (opcao) {
        case 1:
            alert("Você escolheu jogar.");
            break;
        case 2:
            alert("Você escolheu ver o ranking.");
            break;
        case 3:
            alert("Você escolheu sair.");
            break;
        default:
            alert("Opção inválida.");
    }
}
while (opcao !== 3);*/

/* vetor
let playlist = ["Música 1", "Música 2", "Música 3", "Música 4", "Música 5", "Música 6", "Música 7", "Música 8", "Música 9", "Música 10"];
for(let i = 0; i < playlist.length; i++){
    console.log(playlist[i]);
}*/


notas=[
    7, 8, 10, 5,
];

let soma = 0;

for(let i = 0; i < notas.length; i++){
    soma += notas[i];
}
alert("Soma das notas: " + soma);


