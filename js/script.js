const post = document.querySelector('.discussoes')
const criarPost = document.querySelector('.botao_criar')
const campoDiscussoes = document.querySelector('.discussoes__campos')
const verMais = document.querySelector('.ver__mais')
const textoCompleto = document.querySelector('.continuar__texto')
const maisComentarios = document.querySelector('#respostas')
const boxRespostas = document.querySelector('.respostas__perguntas')

console.log(maisComentarios)
console.log(boxRespostas)

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