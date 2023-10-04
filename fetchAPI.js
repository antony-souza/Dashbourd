const form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.pre()

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

const registerPoint = 'http://localhost:7000/register';

fetch(registerPoint,{
    method:'POST',
    mode:"cors",
    headers: {'Content-Type':'application/json'},
    body:JSON.stringify({
       name: name,
       email: email,    
       password:password
    })
})
})
