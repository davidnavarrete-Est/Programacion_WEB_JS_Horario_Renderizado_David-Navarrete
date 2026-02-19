const btnVista = document.getElementById("btnVista");
const contenedor = document.getElementById("contenedorHorario");

let vistaActual = "lista";
const tablaOriginal = contenedor.innerHTML;

const datos = obtenerDatos();

btnVista.addEventListener("click", () => {

 if (vistaActual === "lista") {
  renderCalendario();
  btnVista.textContent = "Ver Lista";
  btnVista.classList.remove("btn-primary");
  btnVista.classList.add("btn-outline-primary");
  vistaActual = "calendario";
 } else {
  contenedor.innerHTML = tablaOriginal;
  btnVista.textContent = "Ver Calendario";
  btnVista.classList.remove("btn-outline-primary");
  btnVista.classList.add("btn-primary");
  vistaActual = "lista";
 }

});

function obtenerDatos() {

 const filas = document.querySelectorAll("tbody tr");
 const eventos = [];

 filas.forEach(fila => {

  const celdas = fila.querySelectorAll("td");

  const asignatura = celdas[1].innerText;
  const grupo = celdas[2].innerText;
  const dia = celdas[3].innerText;
  const horario = celdas[4].innerText;
  const horaInicio = parseInt(horario.split(":")[0]);

  eventos.push({ asignatura, grupo, dia, horario, horaInicio });

 });

 return eventos;

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
     ${generarHoras()}
    </tbody>
   </table>
  </div>
 `;

}

function generarHoras() {

 let filas = "";
 const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

 for (let hora = 8; hora <= 17; hora++) {

  filas += `<tr><td><strong>${hora}:00</strong></td>`;

  dias.forEach(dia => {

   const clase = datos.find(e => e.dia === dia && e.horaInicio === hora);

   filas += clase
    ? `<td class="bg-primary text-white">
        <div class="fw-bold">${clase.asignatura}</div>
        <div class="small">${clase.grupo}</div>
        <div class="small">${clase.horario}</div>
       </td>`
    : `<td></td>`;

  });

  filas += `</tr>`;

 }

 return filas;

}
