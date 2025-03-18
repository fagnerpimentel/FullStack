window.alert("olá");
console.log('olá');

let nome = prompt("Qual o seu nome?");
console.log(nome);

let i = 5;
while(i<=500){
    console.log(i)
    // i++;
    // i = i + 1;
    i += 5;
}

for (let i = 1; i < 100; i += 2){
     console.log(i)
}

let num = prompt("Digite um número positivo");

if(num < 0){
    console.log("número inválido!")
}else if(num >= 0){

    let mult = 1;
    for (let i = 1; i <= num; i++){
        mult *= i; 
        console.log(i, mult);
    }


}else{
    console.log("outro erro!")
}

