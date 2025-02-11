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

const carros = [
    {nome: 'Skyline R34', icon: 'sky.webp',descricao: 'O R34 foi o último dos Skyline GT-R, sucedendo o R32 e o R33 e formando a Santíssima Trindade da Nissan. Como os outros dois, ele tinha um seis-em-linha biturbo de 2,6 litros, cerca de 300 cv, tração integral e câmbio manual de seis marchas.'},
    {nome: 'Supra', icon: 'supra2.jpg', descricao:'O Toyota Supra MK4 impressiona pela sua potência e desempenho. Seu motor é um 3.0 litros de seis cilindros em linha, com turbocompressor e injeção direta de combustível, proporcionando 326 cavalos de potência e 44 kgfm de torque.'},
    {nome: 'Mazda Rx7', icon: 'mazda.webp', descricao: "Possui tração traseira e motor de até 280 cavalos de potência. Apesar de a Mazda ter parado de fabricá-lo, ainda é possível vê-lo em alguns salões de automóveis, jogos eletrônicos (como Need for Speed) e é frequentemente visto nas ruas do Japão."}
]

function criarCards(carros) {
    carros.forEach(cars => {
        const container = document.getElementById('container')

        const nvcard = document.createElement('div')
        nvcard.classList.add('card1')

        const Titulo = document.createElement('h2')
        Titulo.textContent = cars.nome

        const Paragrafo = document.createElement('p')
        Paragrafo.textContent = cars.descricao

        const Img = document.createElement('img')
        Img.src = `./icon/${cars.icon}`
        Img.classList.add('card-img')

        nvcard.appendChild(Img)
        nvcard.appendChild(Titulo)
        nvcard.appendChild(Paragrafo)

        container.appendChild(nvcard)
    })
}

criarCards(carros)