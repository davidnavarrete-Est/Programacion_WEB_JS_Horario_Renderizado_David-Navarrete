const btnVista = document.getElementById("btnVista");
const contenedor = document.getElementById("contenedorHorario");

let vistaActual = "lista";
const htmlOriginal = contenedor.innerHTML;

function extraerDatosTabla(){
 const filas = document.querySelectorAll("tbody tr");
 const eventos = [];

 filas.forEach(fila => {
  const celdas = fila.querySelectorAll("td");
  eventos.push({
   asignatura: celdas[1].innerText,
   dia: celdas[3].innerText,
   hora: parseInt(celdas[4].innerText)
  });
 });

 return eventos;
}

const datos = extraerDatosTabla();

function generarHoras(){
 let filas = "";
 const dias = ["Lunes","Martes","Miércoles","Jueves","Viernes"];

 for(let h = 1; h <= 17; h++){
  filas += `<tr><td>${h}:00</td>`;
  dias.forEach(() => {
   filas += `<td></td>`;
  });
  filas += `</tr>`;
 }

 return filas;
}

function renderCalendario(){
 contenedor.innerHTML = `
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
 `;
}

btnVista.addEventListener("click", () => {
 if(vistaActual === "lista"){
  renderCalendario();
  btnVista.textContent = "Vista Lista";
  vistaActual = "calendario";
 } else {
  contenedor.innerHTML = htmlOriginal;
  btnVista.textContent = "Vista Calendario";
  vistaActual = "lista";
 }
});
