const check = document.getElementById('check')
check.addEventListener('click', verificar)

function verificar(){

    const data = new Date()
    const ano = data.getFullYear()
    const fano = document.getElementById('txtano')
    const res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value)> ano){

        alert('[ERRO] tente novamente')

    }

    else {

        const fsex = document.getElementsByName('radsex')
        const  idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){

            genero = 'Homem'
            if (idade >=0 && idade < 50)
            {img.setAttribute('src', '/shop/imagens/brancopar.webp')}

        } 
        
        else if (fsex[1].checked){

            genero = 'Mulher'
            if (idade >=0 && idade < 50)
            {img.setAttribute('src', '/shop/imagens/rosapar.webp')}

        } 
        
        else {genero = 'Indefinido'}
        
        res.style.textAlign = 'center'
        res.innerHTML = `você é ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}