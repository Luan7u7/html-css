const input1 = document.querySelector('input#n1')
const lista = document.getElementById('lista')
const res = document.getElementById('res')
const analisar = document.querySelector('.analisar')
const valores = []


function isNumero(n){

    if(Number(n) >= 1 && Number(n) <= 100){

        return true
    } 
    else {

        return false
    }
}

function inLista(n, l){

    if(l.indexOf(Number(n)) != -1){

        return true
    } 
    else {

        return false 
    }
}

adicionar.addEventListener('click', ()=>{
    
    if (isNumero(input1.value) && !inLista(input1.value, valores)){
        
        valores.push(Number(input1.value))
        let item = document.createElement('option')
        item.text = `valor ${input1.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else {

        alert('deu ruin')
    }
    input1.value = ''
    input1.focus()
})

analisar.addEventListener('click', () => {

    if(valores.length == 0){
        alert('erro')
    }
    else {
        
        let total = valores.length
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0

        //esse for vai varrer todo o array 
        for(let pos in valores){

            soma += valores[pos]

            if(valores[pos] > maior)
                maior = valores[pos]
            
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total

        res.innerHTML = ``
        res.innerHTML += `<br>temos ${total} adicionados`
        res.innerHTML += `<br>a soma é ${soma}`
        res.innerHTML += `<br>o maior é ${maior}`
        res.innerHTML += `<br>o menor é ${menor}`
        res.innerHTML += `<br>a media é ${media}`
    }
})