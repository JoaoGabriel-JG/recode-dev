

        class Pessoa{
        constructor(nome){
            this.nome = nome;
    }

        falar(frase){
            console.log(this.nome + " disse: " + frase);
    }
        }

    class Aluno extends Pessoa{
        estudar(disciplina){
            console.log(this.nome + " estuda: " + disciplina);
    }
        }

    class JG extends Pessoa{
        sofre(amor){
            console.log(this.nome + " sofre " + amor);
    }

        falar(frase){
            console.log(this.nome + " GRITA INSESSANTEMENTE " + frase);
    }

        falar(frase, quantidade){
            console.log(this.nome + " GRITA INSESSANTEMENTE " + quantidade + " vezes virei o coringa " + frase);
    }

        }



var pessoa_um = new JG("JG");

pessoa_um.falar("Quero uma namorada ")

pessoa_um.falar("Vida amorosa merda", 3)

pessoa_um.sofre("amor")

