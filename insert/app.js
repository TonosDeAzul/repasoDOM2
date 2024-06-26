// Agregar post id por input
// Si el id no es número, poner rojo el input
// Evitar refrescar la página al enviar el formulario

import { post } from "./modulo.js";

const _d = document;

// Contenedor
const _root = _d.getElementById("root");

// Agregar formulario
const _form = _d.createElement("form");
// _form.setAttribute("action", "index.html");
// _form.setAttribute("method", "post");
_root.appendChild(_form);

// Agregar input
const _input = _d.createElement("input");
_input.setAttribute("type", "text");
// Evitar que se escriban letras
_input.setAttribute(
  "onkeypress",
  "return (event.charCode >= 48 && event.charCode <= 57)"
);
_form.appendChild(_input);

// Agregar button
const _button = _d.createElement("button");
_button.textContent = "Solicitar nuevo";
_button.setAttribute("type", "submit");
_form.appendChild(_button);

// Agregar button
// const _button = _d.createElement("button");
// _button.textContent = "Solicitar nuevo";
// _root.appendChild(_button);

// Agregar sección
const _section = _d.createElement("section");
_root.appendChild(_section);

const agregarPost = (event) => {
  event.preventDefault();
  // console.log(event);
  // console.log(_input.value);

  const regexNumber = /^\d+$/;

  // Validación del input
  if (_input.value == "" || !_input.value.match(regexNumber)) {
    _input.classList.add("error");
    _input.classList.remove("confirm");
    alert("Solo se permiten números");
  } else {
    // console.log(typeof _input.value);
    _input.classList.remove("error");
    _input.classList.add("confirm");
    // let id = parseInt(prompt("Ingrese el identificador"));
    post(_input.value)
      .then((post) => {
        // Crear elemento "div"
        const _div = _d.createElement("div");
        _section.appendChild(_div);
        // Crear elemento "h2"
        const _h2 = _d.createElement("h2");
        _h2.textContent = `${post.title} - ${post.id}`;
        _div.appendChild(_h2);
        // Crear elemento "p"
        const _p = _d.createElement("p");
        _p.textContent = post.body;
        _div.appendChild(_p);

        // Obtener referencia al primer hijo
        const firstChild = _section.firstChild;

        // Insertarel el nuevo elemento antes del hijo
        _section.insertBefore(_div, firstChild);
      })
      .catch((e) => {
        console.log(e);
      });
  }
};

_form.addEventListener("submit", agregarPost);
// _input.addEventListener("keypress", function () {
//   alert("¿Será?");
// });
// _button.addEventListener("click", agregarPost);
