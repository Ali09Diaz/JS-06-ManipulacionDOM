console.log("Alive");
/*

DOM (Document Object Model / Modelo de Objetos del Documento)

Cuando creamos paginas que usan HTML + CSS estamos creando una pagina estaticas (porque no tienen interactividad), cuando agregamos JS, nuestras paginas se convierten en sitios dinamicos (tienen interactividad).

El navegador  lee el documento html de arriba a abajo, de izquierda a derecha (renderizacion)

Para que una pagina se renderice correctamente, se toma en cuenta el contenido, el peso de las imagenes, la conexion a internet, etc. 

Cuando el documento se renderiza, se crea un "arbol" (DOM), tine muchas ramas que son las etiquetas, cada uno de los elementos que tenemos dentro de esas etiquetas se consideran "hojas" (nodos).

Cuando hablamos del DOM y entendemos que se representa como un arbol con ramas y hojas, entendemos que casa una de estas ramas y hojas es un nodo.

Que es un nodo?
Representacion mas basica de lo que existe en un DOM, puede ser un elemento o etiqueta, puede ser un atributo, puede ser un texto, incluso un comentario. 

    - Document : Nodo raiz, a partir del cual se derivan los demas nodos. Es el onjeto a partir del cual se puede acceder a cualquier elemento dentro de el. Todos los nodos derivan de este. 
        //document.body.p
        //caja.folderDocumentos.folderRojo.actaNacimiento

    - Element : Son nodos f=definidos por etiquetas HTML (div, h1, p, img, head, script, etc), ya sea que se vean o no se vean (etiquetas que interpreta el navegador),

    - Text : El texto que hay en un elemento se considera un nodo, con la caracteristica que es un nodo hijo. 

    - Attributes : Los atributos de las etiquetas tambies se convierten en nodod. Son nodos que estan asociados a un elemento y se pueden considerar tambien nodos hijos. 

    - Comment : Los comentarios tambien son un nodo, porque forma parte del documento. 


    Para que utilizamos JS en un DOM ?
        - Agregar elementos HTML
        - Modificar elementos HTML
        - Borrar elementos HTML 
        


*/


//Comenzamos a trabajar con los nodos de mi documentos html 

// 1.- Paso guardar los elementos HTML en variables de JS (let, var, const) 

/*Metodos de seleccion de elementos : Permitir traer una etiqueta html y guardarla para su uso posteriro. 

    -Metodos tradicionales
        -getElementByID
        -getElementByTagName
        -getElementByClassName

*/


//Aqui obtengo un elemento por id
let nombrePaciente = document.getElementById("nombrePaciente");
console.log(nombrePaciente);


//Aqui obteng varios elementos por clase
const columnas = document.getElementsByClassName("col");
console.log(columnas);


//Aqui obetengo varios elementos por etiqueta
const inputs = document.getElementsByTagName("input")
console.log(inputs);


/*
Metodos actuales

La unica diferencia entre el querySelector y el getElement, es que tenemos que especificar el tipo de selector que usaremos (. para las clases y # para los id)


    - document.querySelector
    - document.querySelectorAll
*/


let containerPadre = document.querySelector("#containerPadre");
console.log(containerPadre);

//Aqui obtenga varios elementos por el selector
let containers = document.querySelectorAll(".container");
console.log(containers);


/*
Metodos para modificar elementos en su texto

    -   innerHTML : Esta propiedad nos permite acceder y modificar el contenido de nuestro alemento. Asignamos una variable o una cadena de texto y podemos modificar o eliminar el texto. (ya existe un texto)

    
    - textContent : Cambiar o recuperar el contenido dentro de un elemento. Podemos modificar o eliminar el texto (crear un texto nuevo)


*/

// Modificar el texto de un h1 con innerHTML
let titulo = document.getElementById("titulo");

titulo.innerHTML = "Nuevo texto de mi titulo";

//Creando un nuevo texto con innerHTML
let mensajeConfirmacion = document.getElementById("mensajeConfirmacion");
mensajeConfirmacion.innerHTML = "<p>Mensaje de Confirmacion</p>";


/*

Crear elementos 

    - Crear el elemento
        - createElement
        - createTextNode
        - createComment

    
    
    - Poner el elemento 
        - append
        - appendChild
*/

//Creando un elemento con createElement
let imagen = document.createElement("img");

//Crear los tributos de un elemento
imagen.src = "https://soyunperro.com/wp-content/uploads/perrocontento.jpg";
imagen.alt = "Foto de perrito feliz";


//Poner mi imagen en el contenedor de mensajeConfirmacion
mensajeConfirmacion.appendChild(imagen);

