window.addEventListener('DOMContentLoaded', function (){
    var dataAtual = new Date()
    var dataFormada = "data atual: " + dataAtual.toLocaleString()
    document.getElementById("data_atual").innerText =dataFormada
    
})
