/**
Conceptos importantes:

* Procesamiento Single Thread y Multi Thread
* Operaciones de CPU y Operaciones de I/O
* Operaciones Concurrentes y Paralelas
* Operaciones Bloqueantes y No Bloqueantes: se refiere a la fase de espera
* en la que el código se va ejecutando
* Operaciones Síncronas y Asíncronas
*/

// Función síncrona bloqueante
(() => {
  console.log("Código síncrono");
  console.log("Inicio");

  function dos() {
    console.log("Dos");
  }

  function uno() {
    console.log("Uno");
    dos();
    console.log("Tres");
  }

  uno();
  console.log("Fin");
})();

// Función asíncrona no bloqueante

(() => {
  console.log("Código Asíncrono");
  console.log("Inicio");

  function dos() {
    setTimeout(function () {
      console.log("Dos");
    }, 1000);
  }

  function uno() {
    setTimeout(function () {
      console.log("Uno");
    }, 0);

    dos();
    console.log("Tres");
  }

  uno();
  console.log("Fin");
})();
