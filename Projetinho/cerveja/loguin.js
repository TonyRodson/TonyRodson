document.addEventListener('DOMContentLoaded',function(){

    const form = document. querySelector('form');
    const emailImput = form.querySelector('input');
    const passwordlImput = form.querySelector('input');
    const button = form.querySelector('button');

    form.addEventListener('submit' , function(event){
        event.preventDefault();

        const email =emailImput.value;
        const password = passwordlImput.value;

        if(email && password){
            console.log('email', email);
            console.log('password', password)
            alert('login realizado com suecesso');
            location.href='PROJETINHOO .html'
        }
        else{
            alert( 'tu nao sabe fazer um login burro')
        }

    })



})

