function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagens/manha.png'
        msg.innerHTML += '&#128513;	<strong>Bom dia!</strong>'
        document.body.style.background = "#e4e1d9";
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'imagens/tarde.png'
        msg.innerHTML += '&#128513; <strong>Boa tarde!</strong>'
        document.body.style.background = "#e09875";
    } else {
        //BOA NOITE!
        img.src = 'imagens/noite.png'
        msg.innerHTML += '&#128513; <strong>Boa noite!</strong>'
        document.body.style.background = "#16283a";
    }
}
