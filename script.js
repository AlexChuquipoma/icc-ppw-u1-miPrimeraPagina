// Agregar nueva fila a la tabla
document.getElementById("agregarFila").addEventListener("click", () => {
  const tabla = document.getElementById("tablaComponentes");
  const nuevaFila = tabla.insertRow();
  nuevaFila.innerHTML = `
    <td>Tarjeta gráfica (GPU)</td>
    <td>Procesa los gráficos y acelera tareas visuales y de inteligencia artificial.</td>
  `;
  alert("Se agregó una nueva fila a la tabla.");
});
