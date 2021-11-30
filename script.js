//CRIA UMA LISTA DE STRINGS
const myPhrases = [
    "01. Encoraje outras pessoas a praticar a gentileza: Compartilhe esse calendário;",
    "02. Faça você mesmo alguns presentes para distribuir nesta época de festas;",
    "03. Deixe em algum lugar uma mensagem positiva para alguém encontrar;",
    "04. Escolha dois livros que você já leu e doe;",
    "05. Sorria para pelo menos 5 pessoas;",
    "06. Ofereça ajuda a algum amigo ou familiar;",
    "07. Convide um amigo para um café e bate papo;",
    "08. Recolha algum lixo ao caminhar;",
    "09. Elogie o Trabalho de alguém;",
    "10. Ofereça ajuda a alguém mais veho;",
    "11. Retome contato com alguém distante;",
    "12. Diga algo de positivo para todos que encontrar;",
    "13. Abrace seus amigos e familiares;",
    "14. Elogie o maior número de pessoas que encontrar;",
    "15. Deixe alguma lembrancinha com um recado carinhoso para alguém;",
    "16. Pague uma água ou sorvete a um desconhecido;",
    "17. Faça e entregue um cartão para alguém especial;",
    "18. Experimente a arte da fofoca positiva;",
    "19. Se ofereça para fazer um favor a alguém;",
    "20. Ceda seu lugar na fila para alguém;",
    "21. Escreva e envie votos de boas festas para o máximo de pessoas que puder;",
    "22. Perdoe alguém e procure coisas boas nessa pessoa;",
    "23. Seja gentil com você. Caminhe pelas ruas e aprecie a natureza;",
    "24. Para cada presente que receber, doe um item seu;",
    "25. Desligue os eletrônicos e preste atenção em quem está com você;",
    "26. Faça alguma boa ação para fazer alguém sorrir;",
    "27. Peça desculpas 'Você sabe para quem';",
    "28. Converse com um estranho;",
    "29. Encontre maneiras de ser gentil com você mesmo;",
    "30. Faça uma lista de coisas boas que aconteceram este ano;",
    "31. Planeje novos atos de gentileza para o próximo ano.",
]

// INICIALIZA UMA FUNÇÃO PARA ENCONTRAR O CLIQUE DO USUARIO
function chamaTexto(element) {
    console.log(element);  // EXIBI O ELEMENTO ONDE O USUARIO CLICOU
    const textElement = element.textContent // PEGA O TEXTO DE ONDE O USUARIO CLICOU, O TEXTO É UM STRING
    console.log(textElement) // EXIBE O TEXTO CLICADO

    // TRANSFORMA O TEXTO STRING QUE É A DATA QUE O USUARIO CLICOU EM UM NUMERO INTEIRO
    // DEPOIS DIMINUI 1 PARA SER COMPATIVEL COM AS POSIÇÕES DA LISTA DE STRINGS 
    const posicaoClicada = parseInt(textElement) - 1

    // 
    const todayPhrase = myPhrases[
        posicaoClicada
    ]
    console.log(todayPhrase)

    const todayDate = new Date() // cria um novo objeto do tipo data, se nenhuma data for passada, é a data de hoje
    const dateNumber = todayDate.getDate() // pega o dia de hoje, retorna um numero de 1 a 31
    console.log(todayDate)
    console.log(todayDate.getDate())

    // compara a data de hoje com a data que o cliente clicou, depois exibe o texto para o cliente
    // somamos 1 porque foi diminuido 1 do texto da posição clicada
    if (dateNumber === posicaoClicada + 1) {
        const divChamaTexto = document.getElementById('chama-texto')
        const labelElement = document.createElement("label")
        const conteudoDaDiv = document.createTextNode(todayPhrase)
        labelElement.appendChild(conteudoDaDiv)

        divChamaTexto.insertAdjacentElement('afterbegin', labelElement)
    } else {
        const divChamaTexto = document.getElementById('chama-texto')
        const labelElement = document.createElement("label")
        const conteudoDaDiv = document.createTextNode("Ops! Você clicou no dia errado. Por favor, clique na data de hoje.")
        labelElement.appendChild(conteudoDaDiv)

        divChamaTexto.insertAdjacentElement('afterbegin', labelElement)
    }

}
