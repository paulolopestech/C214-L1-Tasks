class Filme {
    titulo;
    ano;
    genero;
    duracao;
    assistido;
    avaliacao;

    constructor (
        titulo,
        ano,
        genero,
        duracao,
        assistido,
        avaliacao
    ) {
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = assistido;
        this.avaliacao = avaliacao;
    }

    showMovieDetails() {
        console.log('Filme: ', this.titulo);
        console.log('Ano de lançamento: ', this.ano);
        console.log('Gênero: ', this.genero);
        console.log('Duração: ', this.duracao);
        console.log('Assistido: ', this.assistido);
        console.log('Avaliação: ', this.avaliacao);
        console.log('\n');
    }

    setWatchedMovie() {
        this.assistido = 'SIM';
    }

    setMovieScore(score) {
        this.avaliacao = score;
    }
}


const movie1 = new Filme(
    'Missão Impossível',
    1996,
    'Ação',
    '1h50m',
    'SIM',
    10
);

const movie2 = new Filme(
    'Interestelar',
    2014,
    'Ficção Científica',
    '2h49m',
    'SIM',
    10
);

movie1.showMovieDetails();
movie2.showMovieDetails();