import { comentarios } from "./modulo.js";

const _root = document.querySelector("#root");
const _fragmento = document.createDocumentFragment();
const _plantilla = document.getElementById("plantillas").content;
const _section = document.createElement("section");
_section.classList.add("cards");
_root.appendChild(_section);

// console.log(_plantilla);

comentarios().then((lista) => {
  lista.forEach((comentario) => {
    // Seleccionar titulo
    _plantilla.querySelector("div > h2").textContent = comentario.name;
    // Seleccionar párrafo1
    _plantilla.querySelector("div > div > p").textContent = comentario.email;
    // Seleccionar párrafo2
    _plantilla.querySelector("div > div > p ~ p").textContent = comentario.body;
    // Seleccionar "div" y agregar clase "card"
    _plantilla.querySelector("div").classList.add("card");

    const _clon = document.importNode(_plantilla, true);
    _fragmento.appendChild(_clon);

    // const _div = document.createElement("div");
    // const _h2 = document.createElement("h2");
    // const _p1 = document.createElement("p");
    // const _p2 = document.createElement("p");

    // _h2.textContent = comentario.name;
    // _p1.textContent = comentario.email;
    // _p2.textContent = comentario.body;

    // _div.appendChild(_h2);
    // _div.appendChild(_p1);
    // _div.appendChild(_p2);

    // _fragmento.appendChild(_div);
  });
  _section.appendChild(_fragmento);
});
