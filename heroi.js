class heroi {
    nome;
    idade;
    tipo = ["guerreiro" , "mago" , "monge" , "ninja"];

    constructor(nome , idade ,tipo,  ){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
        switch(this.tipo){
            case "guerreiro":
                console.log(`o ${this.tipo} atacou usando espada`)
                break;
        
            case "mago":
                console.log(`o ${this.tipo} atacou usando magia`)
                break
        
            case "monge":
                console.log(`o ${this.tipo} atacou usando artes marciais`)
                break
        
            case "ninja":
                console.log(`o ${this.tipo} atacou usando Shuriken`)
                break
            default:
                console.log("heroi invalido")
                
        }
        

        
    }
}

const destruidor = new heroi("Gilgamesh",18,"guerreiro");
destruidor.atacar();

