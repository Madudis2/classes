class NovoHeroi{
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        }

    escrever(){
        switch(this.tipo){
        case "Mago": 
            console.log(`${this.tipo} atacou usando Magia`)
            break;
        case "Guerreiro":
            console.log(`${this.tipo} atacou usando Espada`)
            break;
        case "Monje":
            console.log(`${this.tipo} atacou usando Artes Marciais`)
            break;
        case "Ninja":
            console.log(`${this.tipo} atacou usando Shuriken`)
            break;
        }
    }
}

let classe = new NovoHeroi("Pedrinho", 20 , "Ninja")

classe.escrever()
    