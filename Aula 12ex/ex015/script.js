function verifica(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = (document.getElementById('ano').value)
    var res = document.getElementById('res')
    if(fAno.length == 0 || fAno > ano){
        window.alert('Digite o ano atual!')
    }else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fAno)
        //res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('img','foto')
        if(fsex[0].checked){
                genero = 'Homem'
                if(idade >= 0 && idade < 12){
                    //Criança
                    img.setAttribute('src', 'imagens/foto-bebe-m.png')
                }else if(idade < 18){
                    //jovem
                    img.setAttribute('src', 'imagens/foto-jovem-m.png')
                }else if(idade < 60){
                    //Adulto
                    img.setAttribute('src', 'imagens/foto-adulto-m.png')
                }else{
                    //Idoso
                    img.setAttribute('src', 'imagens/foto-idoso-m.png')
                }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 12){
                //Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            }else if(idade < 18){
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            }else if(idade < 60){
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }else{
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}