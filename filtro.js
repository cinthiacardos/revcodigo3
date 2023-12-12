const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]; //Se agregaron ; al final de las funciones que les hacia falta

const li = document.getElementById("lista-de-productos"); //Se cambio el name por el Id. ya que al ser byName creaba una node list y esto hacia que li.appendChild no pudiera realizar la lectura.
const $i = document.querySelector('.input');

function displayProductos() { // Se agrego la funcion displayProductos ya que anteriormente no estaba definida.

for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div");
  d.classList.add("producto");

  var ti = document.createElement("p");
  ti.classList.add("titulo");
  ti.textContent = productos[i].nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti);
  d.appendChild(imagen);

  li.appendChild(d);
 
  }
}
displayProductos(productos);
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value.toLowerCase(); // SE agrego el toLowerCase para facilitar mejor la busqueda con mayusculas y minusculas
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div");
    d.classList.add("producto");
  
    var ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productosFiltrados[i].nombre.toLowerCase(); // SE agrego el toLowerCase para facilitar mejor la busqueda con mayusculas y minusculas
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti);
    d.appendChild(imagen);
  
    li.appendChild(d);
  }

}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.toLowerCase().includes(texto) || item.color.toLowerCase().includes(texto))|| item.nombre.toLowerCase().includes(texto);
}; // SE agrego el toLowerCase para facilitar mejor la busqueda con mayusculas y minusculas