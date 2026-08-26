/**
 * Configuración de la invitación digital XV años
 * Todos los campos editables están aquí para fácil personalización
 */

const config = {
  // ============================================
  // DATOS PRINCIPALES
  // ============================================
  festejante: {
    nombre: "Ayde",  // ← CAMBIA ESTO
    fotoHero: "123.jpeg",
    fotoGaleria: [
      "123.jpeg",
      "123.jpeg",
      "123.jpeg",
      "123.jpeg"
    ]
  },

  // ============================================
  // FECHA Y HORA
  // ============================================
  evento: {
    fecha: "2026-11-28T17:00:00",
    fechaFormateada: "Sabado 28 de Noviembre de 2026",
    hora: "17:00",
    horaFormateada: "17:00 hs",
    duracion: "8 horas"
  },

  // ============================================
  // UBICACIÓN
  // ============================================
  direccion: {
    texto: "Calle 5 Juan Escutia",
    salon: "Salón San Lorenzo",
    googleMapsUrl: "https://www.google.com/maps/@19.4046911,-98.9750284,3a,75y,177.02h,68.92t/data=!3m7!1e1!3m5!1sUQfd8xgnsDw5kG2em2ssNQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D21.08%26panoid%3DUQfd8xgnsDw5kG2em2ssNQ%26yaw%3D177.02!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDgyMy4wIKXMDSoASAFQAw%3D%3D"  // ← COMPLETA ESTO
  },

   direccion2: {
    texto: "Av.Central 5, San Lorenzo",
    salon: "Parroquia de San Lorenzo",
    googleMapsUrl: "https://maps.app.goo.gl/QKc11EPARztqD1cs7"  // ← COMPLETA ESTO
  },

  // ============================================
  // MENSAJE DE INVITACIÓN
  // ============================================
  mensaje: {
    principal: "Quiero que seas parte de una noche inolvidable",
    secundario: "Será un honor celebrar contigo esta noche mágica"
  },

  // ============================================
  // DRESS CODE
  // ============================================
  dressCode: {
    principal: "Formal",
    descripcion: "Para mantener la armonia con la tematica de la velada le sugerimos evitar el tono rojo y optar por tonos suaves"
  },

  // ============================================
  // INFORMACIÓN DE PRECIOS (Opcional)
  // ============================================
  precios: {
    adulto: 15000,
    nino: 5000,
    menorEdadGratis: 5,
    incluir: true
  },

  // ============================================
  // MESA DE REGALOS
  // ============================================
  mesaRegalos: {
    tienda: "SEARS",
    url: "https://www.sears.com.mx/Mesa-de-Regalos/",  // ← COMPLETA ESTO
    // banco: "Banco Nación",
    // CBU: "1234567890123456789012",
    // alias: "valeria.xv",
    // titular: "Valeria García"
  },

  // ============================================
  // ITINERARIO
  // ============================================
  itinerario: [
    { hora: "15:30", actividad: "Iglesia", ubicacion: "Misa XV" },
    { hora: "18:00", actividad: "Recepción", ubicacion: "Entrada principal" },
    { hora: "19:00", actividad: "Cena", ubicacion: "Salón principal" },
    { hora: "22:00", actividad: "Pastel", ubicacion: "Salón principal" },
    { hora: "23:00", actividad: "Baile", ubicacion: "Salón principal" }
  ],

  // ============================================
  // REDES SOCIALES
  // ============================================
  redes: {
    hashtag: "#XVAYDE",  // ← CAMBIA ESTO
    playlistUrl: "https://open.spotify.com/playlist/...",  // ← COMPLETA ESTO
    instagram: "https://instagram.com/valeria"
  },

  // ============================================
  // FORMULARIO DE CONFIRMACIÓN
  // ============================================
  confirmacion: {
    linkFormulario: "https://docs.google.com/forms/d/e/1FAIpQLSchSIph0dRz1b2LrC1IRM6yjK0wwy9gVMl7bY2vbYu0XaMGxQ/viewform?usp=publish-editor",  // ← COMPLETA ESTO
    fechaLimite: "2026-10-29",
    mostrarFechaLimite: true
  },

  // ============================================
  // MULTIMEDIA
  // ============================================
  multimedia: {
    cancion: "musi.mp3",  // ← RUTA RELATIVA (sin ./)
    imagenShare: "download.jpg"
  },

  // ============================================
  // APARIENCIA
  // ============================================
  //apariencia: {
    //paleta: "romantic-blush",  // classic-gold, modern-minimal, romantic-blush, navy-night
  //}
};

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
}
