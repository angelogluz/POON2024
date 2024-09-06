import { Personagem } from "./personagem";

describe("Treino de ataque", () => {
    it("Deve aumentar o ataque após treinar ataque", () => {
        // Cenário
        const personagem = new Personagem("Gladimir");
        personagem.ataque = 50;
        personagem.vitalidade = 100;
        const ataqueInicial = personagem.ataque;
    
        // Ação
        personagem.treinarAtaque(2);
    
        // Verificação
    
        expect(personagem.ataque).toBeGreaterThan(ataqueInicial);
    });
    
    it("Não deve aumentar o ataque após treinar ataque se o numero de horas de treino for 0", () => {
        // Cenário
        const personagem = new Personagem("Gladimir");
        personagem.ataque = 50;
        personagem.vitalidade = 100;
        const ataqueInicial = personagem.ataque;
    
        // Ação
        personagem.treinarAtaque(0);
    
        // Verificação
        expect(personagem.ataque).toBeCloseTo(ataqueInicial);
    });
    
    it("Deve morrer quando treinar bastante tempo com baixa vitalidade", () => {
    
            // Cenário
            const personagem = new Personagem("Gladimir");
            personagem.ataque = 50;
            personagem.vitalidade = 1;
            
            // Ação e verificação
            expect(() => personagem.treinarAtaque(24)).toThrow("O herói morreu");
        
    });
});

describe("Treino de defesa", () => {
    it("Deve aumentar a defesa após treinar defesa", () => {

        // Cenário
        const personagem = new Personagem("Gladimir");
        personagem.defesa = 50;
        personagem.vitalidade = 100;
        const defesaInicial = personagem.defesa;
    
        // Ação
        personagem.treinarDefesa(2);
    
        // Verificação
        expect(personagem.defesa).toBeGreaterThan(defesaInicial);
    });
    
    it("Deve morrer quando treinar com baixa vitalidade", () => {
        //Cenario
        const personagem = new Personagem("Gladimir");
        personagem.defesa = 50;
        personagem.vitalidade = 1;
    
        //Ação e verificação
        expect(() => personagem.treinarDefesa(24)).toThrow("O herói morreu");
    });
    
    it("Não deve aumentar a defesa após treinar defesa se o numero de horas de treino for 0", () => {
        // Cenário
        const personagem = new Personagem("Gladimir");
        personagem.defesa = 50;
        personagem.vitalidade = 100;
        const defesaInicial = personagem.defesa;
    
        // Ação
        personagem.treinarDefesa(0);
    
        // Verificação
        expect(personagem.defesa).toBeCloseTo(defesaInicial);
    });

});

describe("Descansar", () => {
    it("Deve aumentar a vitalidade após descansar", () => {
        // Cenário
        const personagem = new Personagem("Gladimir");
        personagem.vitalidade = 50;
        const vitalidadeInicial = personagem.vitalidade;

        // Ação
        personagem.descansar(2);

        // Verificação
        expect(personagem.vitalidade).toBeGreaterThan(vitalidadeInicial);
    });

    it("Não deve ultrapassar a vitalidade de 100 após descansar", () => {
        // Cenário
        const personagem = new Personagem("Gladimir");
        personagem.vitalidade = 98;
        const vitalidadeInicial = personagem.vitalidade;

        // Ação
        personagem.descansar(24);

        // Verificação
        expect(personagem.vitalidade).not.toBeGreaterThan(100);
    });
    it("Não deve aumentar a vitalidade após descansar se o numero de horas de descanso for 0", () => {
        //cenario
        const personagem = new Personagem("Gladimir");
        personagem.vitalidade = 50;
        const vitalidadeInicial = personagem.vitalidade;

        //ação
        personagem.descansar(0);

        //verificação
        expect(personagem.vitalidade).toBeCloseTo(vitalidadeInicial);
    });

});




