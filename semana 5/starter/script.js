// ============================================
// PROYECTO SEMANA 05: Clasificador
// Condicionales — if/else, ternario, switch, ??, ?.
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

const elementName = "Consulta General";
const elementStatus = "active";
const elementValue = 8; // número de prioridad o gravedad
const elementType = "revision";
const elementInfo = {
  detail: "Revisión médica general para mascota",
  veterinarian: "Dr. alison garzon"
};

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

let classification;

if (elementValue >= 8) {
  classification = "Alta prioridad";
} else if (elementValue >= 5) {
  classification = "Prioridad media";
} else {
  classification = "Prioridad baja";
}

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

const statusLabel = elementStatus === "active" ? "Consulta Activa" : "Consulta Inactiva";

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

let typeLabel;

switch (elementType) {
  case "revision":
    typeLabel = "Consulta de revisión";
    break;

  case "vacuna":
    typeLabel = "Aplicación de vacuna";
    break;

  case "cirugia":
    typeLabel = "Procedimiento quirúrgico";
    break;

  default:
    typeLabel = "Tipo de consulta desconocido";
}

// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

const displayName = elementName ?? "Sin nombre";

const infoDetail = elementInfo?.detail ?? "Sin información adicional";

// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

const safeProperty = elementInfo?.veterinarian ?? "Veterinario no especificado";

// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN");
console.log("=".repeat(40));

console.log(`Nombre: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Clasificación: ${classification}`);
console.log(`Tipo: ${typeLabel}`);
console.log(`Detalle: ${infoDetail}`);
console.log(`Propiedad adicional: ${safeProperty}`);

console.log("=".repeat(40));