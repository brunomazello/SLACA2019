const post = document.querySelector('.discussoes')
const criarPost = document.querySelector('.botao_criar')
const botaoEnviar = document.querySelector('#enviar')
const botaoRecriar = document.querySelector('.botao_criar-topico')
const campoDiscussoes = document.querySelector('.discussoes__campos')
const campoEnviado = document.querySelector('.post__enviado')
const verMais = document.querySelector('.ver__mais')
const textoCompleto = document.querySelector('.continuar__texto')
const maisComentarios = document.querySelector('#respostas')
const boxRespostas = document.querySelector('.respostas__perguntas')
const topicoAguardando = document.querySelector('.topico__aguardando')

console.log(botaoRecriar)

maisComentarios.addEventListener('click', e => {
    boxRespostas.classList.remove('d-none')
})

verMais.addEventListener('click', e => {
    textoCompleto.classList.remove('d-none')
    verMais.innerHTML = "";
})

criarPost.addEventListener('click', e => {
    post.classList.add('d-none')
    campoDiscussoes.classList.remove('d-none')
})

botaoEnviar.addEventListener('click', e => {
    e.preventDefault();
    campoDiscussoes.classList.add('d-none')
    campoEnviado.classList.remove('d-none')
    topicoAguardando.classList.remove('d-none')
})

botaoRecriar.addEventListener('click', e => {
    e.preventDefault();
    campoEnviado.classList.add('d-none')
    campoDiscussoes.classList.remove('d-none')
    topicoAguardando.classList.remove('d-none')
})