import { Util } from "./Util";

export class Personagem {
    nome: string;
    nivel: number;
    vida: number;
    ataque: number;
    defesa: number;
    raca: string;
    classe: string;
    vitalidade: number;
    mana: number;
    intelecto: number;
    armadura: number;

    constructor(nome: string) {
        this.nome = nome;
        this.ataque = Util.randomizar(10,100);
        this.defesa = Util.randomizar(10,100);
        this.vida = Util.randomizar(100,1000);
        this.mana = Util.randomizar(100,1000);
        this.intelecto = Util.randomizar(10,100);
        this.armadura = Util.randomizar(10,100);
        this.vitalidade = Util.randomizar(10,100);
        this.nivel = Util.randomizar(1,10);
        this.raca = '';
        this.classe = '';
    }
    treinarAtaque(tempoTreinoHoras: number): void {
        
        this.ataque += tempoTreinoHoras * Util.randomizar(1,10);
        this.vitalidade -= tempoTreinoHoras * Util.randomizar(1,10);

        if (this.vitalidade < 0) {
            throw new Error("O herói morreu");
        }
    }

}