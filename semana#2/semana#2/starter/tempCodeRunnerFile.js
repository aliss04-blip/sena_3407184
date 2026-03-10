// ============================================
// PROYECTO SEMANA 02: Ficha de Datos del Dominio
// ============================================
//
// 🎯 OBJETIVO: Crear una ficha de datos en consola
//    usando variables, tipos y conversiones.
//
// 📋 TU DOMINIO: Gestión de Consultas Veterinarias
// ============================================

// ============================================
// SECCIÓN 1: DATOS PRINCIPALES
// ============================================

const DOMAIN_NAME = "Gestión de Consultas Veterinarias";

// Nombre del paciente (Mascota)
const itemName = "Maximus"; 

// Especie y raza
const itemCategory = "Canino - Labrador Retriever";

// Peso del paciente en kilogramos (decimal)
const itemQuantity = 32.5; 

// ¿Tiene el plan de vacunación al día?
const isItemAvailable = true; 

// Diagnóstico médico (se inicia como null hasta que el doctor lo asigne)
let pendingDiagnosis = null; 


// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================
console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

console.log(`Paciente:   ${itemName}`);
console.log(`Especie:    ${itemCategory}`);
console.log(`Peso:       ${itemQuantity} kg`);
console.log(`Vacunado:   ${isItemAvailable ? "Sí" : "No"}`);
console.log("");


// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS CON typeof
// ============================================
console.log("--- Tipos de datos ---");

console.log("typeof itemName:     ", typeof itemName);
console.log("typeof itemQuantity: ", typeof itemQuantity);
console.log("typeof isItemAvailable: ", typeof isItemAvailable);
console.log("");


// ============================================
// SECCIÓN 4: CONVERSIONES EXPLÍCITAS
// ============================================
console.log("--- Conversiones ---");

// Convertimos el peso (Number) a String para generar una etiqueta de envío o registro
const weightAsText = String(itemQuantity);
console.log("Peso como texto para reporte:", weightAsText);
console.log("typeof (convertido):", typeof weightAsText);

// Ejemplo de conversión de String a Number (Simulando entrada de formulario)
const stringAge = "5";
const ageAsNumber = Number(stringAge);
console.log(`Edad convertida: ${ageAsNumber} años`);

console.log("");


// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================
console.log("--- Valor nulo ---");

console.log("Diagnóstico pendiente:", pendingDiagnosis);
// Recordatorio: typeof null devuelve "object" por un comportamiento histórico de JS
console.log("typeof pendingDiagnosis:", typeof pendingDiagnosis); 
console.log("¿El diagnóstico es nulo?:", pendingDiagnosis === null); 

console.log("");


// ============================================
// CIERRE
// ============================================
console.log("===========================");
console.log("FIN DE FICHA - SISTEMA VET");
console.log("===========================");