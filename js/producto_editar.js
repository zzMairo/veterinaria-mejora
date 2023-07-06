console.log(location.search)

let argsURL= location.search.substring(1).split('&');

console.log(argsURL)
let data = [];
for(let i=0;i<argsURL.length;i++){
    data[i]= argsURL[i].split('=');
}
console.log(data)

document.getElementById('id').value=decodeURIComponent(data[0][1]);
document.getElementById('nombre').value=decodeURIComponent(data[1][1]);
document.getElementById('precio').value=decodeURIComponent(data[2][1]);
document.getElementById('stock').value=decodeURIComponent(data[3][1]);
document.getElementById('imagen').value=decodeURIComponent(data[4][1]);
document.getElementById('categoria').value=decodeURIComponent(data[5][1]);
document.getElementById('descripcion').value=decodeURIComponent(data[6][1]);


function modificar(){
    let id = document.getElementById('id').value;
    let n = document.getElementById('nombre').value;
    let p = document.getElementById('precio').value;
    let s = document.getElementById('stock').value;
    let i = document.getElementById('imagen').value;
    let c = document.getElementById('categoria').value;
    let d = document.getElementById('descripcion').value;

    let producto ={
        nombre: n,
        precio: p,
        stock: s,
        imagen: i,
        categoria: c,
        descripcion: d
    };

    let url = "http://127.0.0.1:5000/productos/"+id;

    let options = {
        body: JSON.stringify(producto),
        method: 'PUT',
        headers: {'Content-Type':'application/json'}
    };

    fetch(url,options)
    .then(function(){
        alert('Registro cargado exitosamente');
        window.location.href='./productos.html';
    })
    .catch(err =>{
        alert('No se pudo cargar el producto');
        console.log(err);
    })
} 