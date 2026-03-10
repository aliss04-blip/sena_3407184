// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Dominio: Gestión de Consultas Veterinarias
// ============================================


// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// Precio de una consulta veterinaria
const CONSULTA_PRECIO = 50_000;

// Precio promedio de medicamentos
const MEDICAMENTO_PRECIO = 30_000;

// Número de consultas en el día
const CONSULTAS_DIA = 12;

// Capacidad máxima de consultas al día
const MAX_CONSULTAS = 20;


// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// Total dinero recibido por consultas
const totalConsultas = CONSULTA_PRECIO * CONSULTAS_DIA;
console.log("Total ganado por consultas:", totalConsultas);

// Total dinero por medicamentos vendidos
const totalMedicamentos = MEDICAMENTO_PRECIO * 5;
console.log("Total por medicamentos:", totalMedicamentos);

// Total general del día
const totalDia = totalConsultas + totalMedicamentos;
console.log("Total ingresos del día:", totalDia);

// Consultas disponibles aún
const consultasRestantes = MAX_CONSULTAS - CONSULTAS_DIA;
console.log("Consultas disponibles:", consultasRestantes);

// Promedio de dinero por consulta
const promedioConsulta = totalConsultas / CONSULTAS_DIA;
console.log("Promedio por consulta:", promedioConsulta);

// Resto si se reparten las consultas entre 3 veterinarios
const restoConsultas = CONSULTAS_DIA % 3;
console.log("Consultas restantes entre veterinarios:", restoConsultas);

console.log("");


// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

let ingresos = 0;

ingresos += totalConsultas;
console.log("Ingresos tras consultas:", ingresos);

ingresos += totalMedicamentos;
console.log("Ingresos tras medicamentos:", ingresos);

ingresos -= 20_000; // descuento aplicado
console.log("Ingresos después del descuento:", ingresos);

ingresos *= 1.05; // aumento del 5% por servicio extra
console.log("Ingresos con servicio adicional:", ingresos);

console.log("");


// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

// Verificar si el número de consultas es exactamente 12
const esDoceConsultas = CONSULTAS_DIA === 12;
console.log("¿Se atendieron exactamente 12 consultas?", esDoceConsultas);

// Verificar si se alcanzó la capacidad máxima
const capacidadLlena = CONSULTAS_DIA >= MAX_CONSULTAS;
console.log("¿Capacidad máxima alcanzada?", capacidadLlena);

console.log("");


// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

// Cliente obtiene descuento si tiene más de 10 consultas y compra medicamentos
const aplicaDescuento = CONSULTAS_DIA > 10 && totalMedicamentos > 0;
console.log("¿Aplica descuento?", aplicaDescuento);

// Promoción si hay muchas consultas o muchos medicamentos vendidos
const promocion = CONSULTAS_DIA > 15 || totalMedicamentos > 100_000;
console.log("¿Aplica promoción?", promocion);

// Verificar si no hay consultas
const sinConsultas = !CONSULTAS_DIA;
console.log("¿No hubo consultas?", sinConsultas);

console.log("");


// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

console.log("Consultas realizadas:", CONSULTAS_DIA);
console.log("Total ganado por consultas:", totalConsultas);
console.log("Total medicamentos vendidos:", totalMedicamentos);
console.log("Ingresos totales del día:", ingresos);

console.log("");