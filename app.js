'use strict'

/*const botaoTeste = document.getElementById('teste')

function criarElementos (){
    const body = document.querySelector('body')
    const novoBotao = document.createElement('button')
    novoBotao.textContent = 'botao criado pelo js'

    body.appendChild(novoBotao)
}
//criarElementos()

botaoTeste.addEventListener('click', criarElementos)*/

const disciplinas = [
    {nome: 'PWBE', cor: 'red', icon: 'pwbe.png'},
    {nome: 'PWFW', cor: 'blue', icon: 'pwfe.png'},
    {nome: 'PPDM', cor: 'yellow', icon: 'ppdm.png'},
    {nome: 'PRO',  cor : 'pink', icon: 'pro.png'}
]

function criarItemMenu (disciplina) {
    const listaMenu = document.getElementById('menu')
    const novoItem = document.createElement('li')
    const novoLink = document.createElement('a')
    const novoImg = document.createElement('img')

    novoLink.href = '#'
    novoLink.textContent = disciplina.nome

    novoLink.style = `--cor-hover: ${disciplina.cor}`

    novoImg.src = `./icon/${disciplina.icon}`

    novoItem.appendChild(novoImg)

    novoItem.appendChild(novoLink)

    listaMenu.appendChild(novoItem)
}

disciplinas.forEach(criarItemMenu)

