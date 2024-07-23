function whatzap(){
    var al= new Date()
    var b= al.getDate()
    var d =al.getDay()
    var c= document.getElementById('c')
    c.innerText= `${b} `
    if(b==21.00){
    const numero = '5589999042001'
    const msg = encodeURIComponent('Tu é um gay')
    const url = `https://wa.me/${numero}?text=${msg}`
    window.open(url,'_blank')}
}