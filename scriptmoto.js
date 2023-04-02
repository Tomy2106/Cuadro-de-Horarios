// Obtener todas las celdas de la columna de motos disponibles
const cells = document.querySelectorAll("td.available");

// Iterar sobre todas las celdas y agregar un evento de click a cada una
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    // Obtener el número de motos disponibles en este horario
    const available = parseInt(cell.textContent);
    // Si hay motos disponibles, disminuir el número y actualizar la celda
    if (available > 0) {
      cell.textContent = available - 1;
      // Si ya no quedan motos disponibles, actualizar el color de fondo
      if (available - 1 == 0) {
        cell.classList.remove("available");
        cell.classList.add("unavailable");
      }
    } else {
      alert("No hay motos disponibles en este horario");
    }
  });
});
