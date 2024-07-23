function AAA(){
    document.body.classList.toggle('aaa')
}
function sub(sub1) {
    
     
    var submenu = document.getElementById("sub1");
    if (submenu.style.display === "none") {
        submenu.style.display = "block";
       var elemento =document.getElementById('a')
        elemento.style.height='250px'
    
    } else {
        submenu.style.display = "none";
        var elemento =document.getElementById('a')
        elemento.style.height='110px'
    }
}
function sub2(sub2) {
    
     
    var submen = document.getElementById("sub2");
    if (submen.style.display === "none") {
        submen.style.display = "block";
       var element =document.getElementById('a')
        element.style.height='250px'
    
    } else {
        submen.style.display = "none";
        var element =document.getElementById('a')
        element.style.height='110px'
    }}
let currentIndex= 0;
function carroseu (direction){
    const carroseu = document.querySelector('.carroseuiner');
    const item = document.querySelectorAll('.carroseuitem');
    const totalitem = item.length;

    currentIndex += direction;

    if(currentIndex<0){
        currentIndex = totalitem - 1
    }else if(currentIndex >= totalitem){
        currentIndex = 0 ;
    }
    const offset= -currentIndex *100;
    carroseu.style.transform =`translateX(${offset}%)`
}
 