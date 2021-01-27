function calcula(){
    var num = (document.getElementById('txtnum').value)
    var tab = document.getElementById('seltab')
    if(num.length == 0){
        window.alert('Digite um número')
    }else{
        let n = Number(num)
        tab.innerHTML = ''
        for(var c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}