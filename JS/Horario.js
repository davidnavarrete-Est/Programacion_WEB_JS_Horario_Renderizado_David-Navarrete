const btnVista = document.getElementById("btnVista");
const contenedor = document.getElementById("contenedorHorario");

let vistaActual = "lista";
const tablaOriginal = contenedor.innerHTML;

function generarHorasVacias() {
 let filas = "";
 const dias = ["Lunes","Martes","Miércoles","Jueves","Viernes"];

 for (let hora = 1; hora <= 17; hora++) {
  filas += `<tr><td><strong>${hora}:00</strong></td>`;
  dias.forEach(() => {
   filas += `<td></td>`;
  });
  filas += `</tr>`;
 }

 return filas;
}

function renderCalendario() {
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
   <tbody>
    ${generarHorasVacias()}
   </tbody>
  </table>
 </div>
 `;
}

btnVista.addEventListener("click", () => {
 if (vistaActual === "lista") {
  renderCalendario();
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
