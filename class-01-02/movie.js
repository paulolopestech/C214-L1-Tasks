const readline = require("readline");
const { promisify } = require("util");

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
question = promisify(rl.question).bind(rl);

class Movies {
  appState = true;
  movies = [];

  showMoviesDetails() {
    this.movies.forEach((movie, index) => {
      console.log(`Filme ${index + 1}:`, movie);
    });
    console.log("\n");
  }

  async getUserInput(prompt) {
    return await question(prompt);
  }

  async setMovieScore() {
    console.log('Lista de Filmes: ');
    this.showMoviesDetails();
    const indice = await this.getUserInput('Escolha o indice do filme: ');
    console.log('FILME: ', this.movies[indice - 1]);
    const avaliacao = await this.getUserInput('Insira uma nota de 0 a 10: ');
    const newMovie = {...this.movies[indice - 1], avaliacao};
    this.movies[indice-1] = newMovie;
    this.showMoviesDetails();
  }

  async setWatchedMovie() {
    console.log('Lista de Filmes: ');
    this.showMoviesDetails();
    const indice = await this.getUserInput('Escolha o indice do filme: ');
    console.log('FILME: ', this.movies[indice - 1]);
    const assistido = await this.getUserInput('Você já assistiu o filme? ');
    const newMovie = {...this.movies[indice - 1], assistido};
    this.movies[indice-1] = newMovie;
    this.showMoviesDetails();
  }

  async inputMovie() {
    const titulo = await this.getUserInput("Digite o título: ");
    const ano = parseInt(await this.getUserInput("Digite o ano: "));
    const genero = await this.getUserInput("Digite o gênero: ");
    const duracao = parseInt(await this.getUserInput("Digite a duração: "));
    const assistidoInput = await this.getUserInput("Foi assistido? (S/N): ");
    const assistido = assistidoInput.toLowerCase() === "s";
    const avaliacao = parseFloat(await this.getUserInput("Digite a avaliação: "));

    const filme = {
      titulo,
      ano,
      genero,
      duracao,
      assistido,
      avaliacao,
    };

    this.movies.push(filme);
  }

  insertMovie(movie) {
    this.movies.push(movie);
  }

  async startProgram() {
    while (this.appState !== false) {
      console.log("\n1 - adicionar filme");
      console.log("2 - marcar um filme como assistido");
      console.log("3 - avaliar um filme");
      console.log("4 - exibir lista de filmes");
      console.log("5 - sair");

      const input = await this.getUserInput("DIGITE UMA OPCAO: ");
      console.log('\n');

      switch (input) {
        case '1':
            await this.inputMovie();
            break;
        case '2':
            await this.setWatchedMovie();
            break;
        case '3':
            await this.setMovieScore();
            break;
        case '4':
            this.showMoviesDetails();
            break;
        case '5':
            this.appState = false;
            rl.close();
            continue;
        default:
            console.log('OPÇÃO INVÁLIDA')
            break;
      }
    }
  }
}

const movieList = new Movies();
const movie = {
    titulo: 'um filme',
    ano: '1999',
    genero: 'acao',
    duracao: '1h',
    assistido: 'sim',
    avaliacao: '0',
}

movieList.insertMovie(movie);
movieList.startProgram();
