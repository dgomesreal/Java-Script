let num = document.getElementById('num')
let tab = document.getElementById('seltab')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, v){
    if(v.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adiciona(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = num.value
        tab.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor Inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores acima!!!')
    }else{
        let tot = valores.length
        let maior = Math.max(...valores)
        let menor = Math.min(...valores)
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
        }
        media = soma/valores.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} cadastrados</p>`
        res.innerHTML += `<p>O maior valor é: ${maior} </p>`
        res.innerHTML += `<p>O menor valor é: ${menor} </p>`
        res.innerHTML += `<p>A soma é: ${soma} </p>`
        res.innerHTML += `<p>A media é: ${media} </p>`
    }
}