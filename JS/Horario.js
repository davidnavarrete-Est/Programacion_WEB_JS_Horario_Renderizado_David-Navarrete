const btnVista = document.getElementById("btnVista");
const contenedor = document.getElementById("contenedorHorario");

let vistaActual = "lista";
const tablaOriginal = contenedor.innerHTML;

btnVista.addEventListener("click", () => {
 if (vistaActual === "lista") {
  contenedor.innerHTML = "";
  btnVista.textContent = "Vista Lista";
  btnVista.classList.remove("btn-primary");
  btnVista.classList.add("btn-outline-primary");
  vistaActual = "calendario";
 } else {
  contenedor.innerHTML = tablaOriginal;
  btnVista.textContent = "Vista Calendario";
  btnVista.classList.remove("btn-outline-primary");
  btnVista.classList.add("btn-primary");
  vistaActual = "lista";
 }
});
