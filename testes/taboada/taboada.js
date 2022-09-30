const button = document.querySelector('.button');
button.addEventListener('click', contar)

function contar(){
    
    const input1 = document.querySelector('.input1');
    const n1 = Number(input1.value);
    const res = document.getElementById('res');
    
    if(input1.value.length == 0){alert('ERRO'); return;}

    else{

        tab.innerHTML = ''
        for(let i = 1; i <= 10; i++){

            const item = document.createElement('option');
            item.text = `${n1} x ${i} = ${n1*i}`;
            tab.appendChild(item);
        }
    }

}

const check = document.getElementById('idcheck')
check.addEventListener('change', ()=> {
    
    document.body.classList.toggle('dark')
});
