function calcularDescuento() {
  // Obtener la información del usuario
  const nombre = document.getElementById("nombre").value;
  const tipo = document.getElementById("tipo").value;
  const monto = document.getElementById("monto").value;

  // Calcular el descuento según el tipo de cliente
  let descuento = 0;
  if (tipo === "nuevo" && monto >= 100000) {
    descuento = monto * 0.05;
  } else if (tipo === "regular" && monto >= 200000) {
    descuento = monto * 0.1;
  } else if (tipo === "vip") {
    descuento = monto * 0.15;
  } else {
    console.log("No se aplica descuento");
  }


  // validar que las entradas no estén vacías
  if (!nombre || !tipo || !monto) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
    <h2>Error</h2>
    <p>Por favor, rellene todos los campos.</p>
    `;

    // Mostrar la información del usuario y el descuento
  } else {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
    <h2>Detalles de la compra</h2>
    <p>Nombre del cliente: ${nombre}</p>
    <p>Tipo de cliente: ${tipo}</p>
    <p>Valor original de la compra: ${monto}</p>
    <p>Valor de la compra con descuento: ${monto - descuento}</p>
    <p>Valor total del descuento: ${descuento}</p>
  `;
  }
}
