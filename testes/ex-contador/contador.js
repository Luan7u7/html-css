const contar = document.querySelector('button') 
contar.addEventListener('click', calcular)

function calcular(){
    const inicio = document.getElementById('n1')
    const fim = document.getElementById('n2')
    const passo = document.getElementById('passo')
    const res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0|| passo.value.length == 0){res.innerHTML = 'impossivel contar'}

    else {
        res.innerHTML = 'contando: <br>'
        const n1 = Number(inicio.value)
        const n2 = Number(fim.value)
        var intervalo = Number(passo.value)

        if(intervalo <= 0)
        {
            alert('impossivel contar de 0 em 0 burro, vou considerar o valor como sendo 1'); 
            intervalo = 1
        }
        if (n1 < n2){
            //contagem crescente
            for(let c = n1; c <= n2; c += intervalo){
                res.innerHTML += ` ${c} `
            }
        } else {
            //contagem regressiva
            for(let c = n1; c >= n2; c -= intervalo){
                res.innerHTML += ` ${c} `
            }
        }
        res.style.textAlign = 'justify'
        res.style.padding = '20px'
        res.innerHTML += '"FIM"'
    
    }
}
