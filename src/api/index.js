export function login (usuario){
    fetch('http://localhost:5000/login',{
        method: 'POST',
        body: JSON.stringify({
            correo: usuario.email,
            password: usuario.password
        }),
        headers: {
            'Content-type': 'application/json'
        } 
    });
}