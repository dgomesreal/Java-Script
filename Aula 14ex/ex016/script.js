function contar(){
    var ini = (document.getElementById('txti').value)
    var fim = (document.getElementById('txtf').value)
    var passo = (document.getElementById('txtp').value)
    var  res = document.getElementById('res')
    var cont = 0 
    if(ini.length == 0 || fim.length == 0 || passo.length == 0){
        res.innerHTML = 'Impossível contar'
        window.alert('Digite corretamente todos os campos!')
    }else{
        res.innerHTML = 'Contando: '    
        let i = Number(ini)
        let f = Number(fim)
        let p = Number(passo)
        if(p <= 0){
            window.alert('Passo inválido!')
            p = 1
        }
        if(ini < fim){
            //Contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F601}`
            }
        }else{
            //Contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F601}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }  
 }