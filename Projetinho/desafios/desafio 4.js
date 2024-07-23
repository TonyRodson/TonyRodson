function but(){
    var produto= window.prompt('Qual produto você quer comprar')
    var preco= Number(window.prompt('Quanto ele(a) custa? '))
    var dinhe= Number(window.prompt('Com quanto você pagou ?'))
    var troco= preco - dinhe
    alert(`Você comprou um(a) ${produto} por ${preco} e recebeu ${troco} de troco`)
} 