import { Personagem } from "./personagem";
import prompt from 'prompt-sync';

const teclado = prompt();

const nome = teclado('Digite o nome do herói: ');
const heroi: Personagem = new Personagem(nome);

heroi.raca = teclado('Digite a raça do herói: ');
heroi.classe = teclado('Digite a classe do herói: ');


if(heroi.nome === "Edécio"){
    heroi.ataque = 100;
    heroi.defesa = 100;
    heroi.vida = 1000;
    heroi.mana = 1000;
    heroi.intelecto = 100;
    heroi.armadura = 100;
    heroi.vitalidade = 100;
    heroi.nivel = 10;
}

while(true){
    console.log("========== MENU ==========");
    console.log("1 - Treinar ataque");
    console.log("2 - Treinar defesa");
    console.log("3 - Treinar intelecto");
    console.log("4 - Descansar");
    console.log("5 - Status");
    console.log("0 - Sair");

    const opcao: number = +teclado("Escolha uma opção: ");

    if(opcao === 0){
        break;
    }
    switch (opcao) {
        case 1:
            const numeroHoras: number = +teclado("Digite o número de horas de treino: ");
            heroi.treinarAtaque(numeroHoras);
            break;
        case 2:
            
            break;
        case 5:
            console.table(heroi);
            break;
        default:
            break;
    }
    
    
}



// Angelus - Edécius - Gladis

