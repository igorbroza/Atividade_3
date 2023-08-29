const corpoPiadas = document.getElementById('corpoTabelaPiadas')

function fazerPergunta(){
    axios.get('https://v2.jokeapi.dev/joke/any')
    .then(response => {
        const pergunta = response.data.setup;

        const resposta = response.data.delivery;

        preencherResposta(resposta);
        preencherPergunta(pergunta);
    })
    .catch(error => {
        console.log('Deu erro, se vira ai: ', error);
    });
}

function chamarImagem(){
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(response => {

        console.log(response.data.message);
        const fotoApi = response.data.message;
        

        preencherFoto(fotoApi)
    })
    .catch(error => {
        console.log('Deu erro, se vira ai: ', error);
    });
}

const botaoFazerPergunta = document.getElementById('btPergunta');

botaoFazerPergunta.addEventListener('click', () => {
    fazerPergunta();
})

const botaoGerarImagem = document.getElementById('btImagem');

botaoGerarImagem.addEventListener('click', () => {
    chamarImagem();
})

function preencherFoto(fotoApi){
    document.getElementById("fotoApi").src=fotoApi;
}

function preencherPergunta(pergunta){
    document.getElementById("pergunta").textContent=pergunta;
}

function preencherResposta(resposta){
    document.getElementById("resposta").textContent=resposta;
}