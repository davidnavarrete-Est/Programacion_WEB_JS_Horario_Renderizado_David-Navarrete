const btnVista = document.getElementById("btnVista");
const contenedor = document.getElementById("contenedorHorario");

let vistaActual = "lista";
const tablaOriginal = contenedor.innerHTML;

function renderCalendarioVacio() {
 contenedor.innerHTML = `
 <div class="table-responsive">
  <table class="table table-bordered text-center align-middle">
   <thead class="table-light">
    <tr>
     <th>Hora</th>
     <th>Lunes</th>
     <th>Martes</th>
     <th>Miércoles</th>
     <th>Jueves</th>
     <th>Viernes</th>
    </tr>
   </thead>
   <tbody></tbody>
  </table>
 </div>
 `;
}

btnVista.addEventListener("click", () => {
 if (vistaActual === "lista") {
  renderCalendarioVacio();
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
