const btn=document.querySelectorAll('.btn');
const body=document.querySelector('body');
btn.forEach(function(button){
    button.addEventListener('click',function(e){
        console.log(e.target)
        switch (e.target.id) {
            case 'red':
                body.style.backgroundColor = 'red';
                body.style.color='white';
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow';
                body.style.color='white';
                break;
            case 'green':
                body.style.backgroundColor = 'green';
                body.style.color='white';
                break;
            case 'orange':
                body.style.backgroundColor = 'orange';
                body.style.color='white';
                break;
            default:
                body.style.backgroundColor = 'white'; 
                body.style.color='black';
        }
    });
});