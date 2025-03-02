let button = document.querySelector('button');
button.addEventListener('click', function () {
    comprar(); // Llama a la función comprar
});



function comprar() {
    let url = "https://wa.me/+584129627765?text=Hola Para Pedir Información"
    window.location.href = url
}


//anillos 
const articulosAnillos = [
    {
        Imagen: "producto/Anillo-clavo-dorado.jpg",
        Nombre: "Anillos de oro chino",
        Descripcion: "Disfruta de tu vida, con la mejor calidad.",
        Precio: "Precio 2,5$"
    },
    {
        Imagen: "producto/Anillo-Dorado.jpg",
        Nombre: "Anillos de oro chino",
        Descripcion: "Disfruta de tu vida, con la mejor calidad.",
        Precio: "Precio 2,5$"
    },
    {
        Imagen: "producto/Anillo-modelo1-dorado.jpg",
        Nombre: "Anillos de oro chino",
        Descripcion: "Disfruta de tu vida, con la mejor calidad.",
        Precio: "Precio 2,5$"
    },
    {
        Imagen: "producto/Anillo-modelo1-plaeado.jpg",
        Nombre: "Anillos de oro chino",
        Descripcion: "Disfruta de tu vida, con la mejor calidad.",
        Precio: "Precio 2,5$"
    },
    {
        Imagen: "producto/Anillo-modelo2-dorado.jpg",
        Nombre: "Anillos de oro chino",
        Descripcion: "Disfruta de tu vida, con la mejor calidad.",
        Precio: "Precio 2,5$"
    },
    {
        Imagen: "producto/Anillo-modelo3-dorado.jpg",
        Nombre: "Anillos de oro chino",
        Descripcion: "Disfruta de tu vida, con la mejor calidad.",
        Precio: "Precio 2,5$"
    },
    {
        Imagen: "producto/Anillo-modelo4-dorado.jpg",
        Nombre: "Anillos de oro chino",
        Descripcion: "Disfruta de tu vida, con la mejor calidad.",
        Precio: "Precio 2,5$"   
    },
    {
        Imagen: "producto/Anillo-t-dorado.jpg",
        Nombre: "Anillos de oro chino",
        Descripcion: "Disfruta de tu vida, con la mejor calidad.",
        Precio: "Precio 2,5$"
    },
    {
        Imagen: "producto/Anillo.modelo2-plateado.jpg",
        Nombre: "Anillos de oro chino",
        Descripcion: "Disfruta de tu vida, con la mejor calidad.",
        Precio: "Precio 2,5$"
    },
];



let contenedorAnillos = document.getElementsByClassName("contenedor")[0];

for (let i of articulosAnillos) {
        let divli = document.createElement("div");
        let article = document.createElement("article");
        let img = document.createElement("img");
        let nombre = document.createElement("h4");
        let descripcion = document.createElement('p');
        let precio = document.createElement('p');
        let button = document.createElement('button');
        button.textContent = 'Comprar';
        button.addEventListener('click', comprar);
        // Texto del botón
        //agragamos clase
        divli.classList.add("li");
        //creamos el texto que le vamos a agragar
        img.src = i.Imagen; // Asegúrate de que i.Imagen contenga la ruta correcta
        img.alt = ""
        nombre.textContent = i.Nombre;
        descripcion.textContent = i.Descripcion;
        precio.textContent = i.Precio
       
       
        //le agragamos las etiquetas dento de los div
        const contenedor = document.getElementsByClassName('contenedor')[0]
        article.appendChild(img);
        article.appendChild(nombre);
        article.appendChild(descripcion);
        article.appendChild(precio);
        article.appendChild(button);
        divli.appendChild(article);
        contenedor.appendChild(divli);
      
}

        
   