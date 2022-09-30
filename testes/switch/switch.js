var hoje = new Date()
var dia = hoje.getDay()

switch(dia){
    case 0: 
        console.log('Hoje é Domingo, tenha um ótimo dia senhor.')
        break
    case 1:
        console.log('Hoje é segunda, tenha um ótimo dia senhor.')
        break
    case 2:
        console.log('Hoje é terça, tenha um ótimo dia senhor.')
        break
    case 3:
        console.log('Hoje é quarta, tenha um ótimo dia senhor.')
        break
    case 4:
        console.log('Hoje é quinta, tenha um ótimo dia senhor.')
        break
    case 5:
        console.log('Hoje é sexta, tenha um ótimo dia senhor.')
        break
    case 6:
        console.log('Hoje é sabado, tenha um ótimo dia senhor.')
        break
    default:
        console.log('não é um dia valido senhor')
        break
}