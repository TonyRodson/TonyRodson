function cor() {
    document.body.classList.toggle('cor')
 
}
document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('formulario');
    const idadeinput = document.getElementById('idade');
    const mensagem = document.getElementById('mensagem');
    form.addEventListener('submit', function(event){ 
    event.preventDefault()
    const idade = parseInt(idadeinput.value);
    if (isNaN(idade) || idade <0 || idade > 100) {
        mensagem.textContent = "por favor, insira uma idade valida entre 0 e 100";
        mensagem.style.color = "red";
    } else {
        mensagem.textContent = "formulario enviado com sucesso!"; 
        mensagem.style.color = "green";
    
    }
    });
});