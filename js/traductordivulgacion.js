document.addEventListener("DOMContentLoaded", function () {
  // Obtener el idioma guardado en localStorage (si existe)
  let idiomaGuardado = localStorage.getItem("idioma") || "es"; // Por defecto, español

  // Aplicar el idioma guardado al cargar la página
  cambiarIdioma(idiomaGuardado);

  // Asignar eventos a los botones de idioma
  document.getElementById("btn-es").addEventListener("click", function () {
      cambiarIdioma("es");
  });

  document.getElementById("btn-en").addEventListener("click", function () {
      cambiarIdioma("en");
  });
});

function cambiarIdioma(idioma) {
  // Guardar idioma en localStorage
  localStorage.setItem("idioma", idioma);

  var elementosATraducir = document.querySelectorAll('.traducible');

  var traducciones = {
      'es': {
        'Mauricio De Rosa | Articulos':'Mauricio De Rosa | Articulos',
        'Enlaces':'Enlaces',
        'Contacto':'Contacto',
        'Inicio': 'Inicio',
        'Enseñanza': 'Enseñanza',
        'Publicaciones': 'Publicaciones',
        'Prensa': 'Prensa',
        'Medios': 'Medios',
        'Prensa escrita': 'Prensa escrita',
        'Divulgación': 'Divulgación',
        'Toca para ir al contenido':'Toca para ir al contenido',
        'ARTÍCULOS DE DIVULGACIÓN':'ARTÍCULOS DE DIVULGACIÓN',
        'Con Andrea Vigorito, Ignacio Pardo y Gabriel Burdín.':'Con Andrea Vigorito, Ignacio Pardo y Gabriel Burdín.',
        '“Un best seller contra el capital” reseña del libro El Capital en el siglo XXI de Thomas Piketty':'“Un best seller contra el capital” reseña del libro El Capital en el siglo XXI de Thomas Piketty',
        'Revista Lento, (2015).':'Revista Lento, (2015).',
        '2024. Todos los derechos reservados.':'2024. Todos los derechos reservados.',
      },
      'en': {
        'Mauricio De Rosa | Articulos':'Mauricio De Rosa | Articles',
        'Enlaces':'Links',
        'Contacto':'Contact',
        'Inicio': 'Home',
        'Enseñanza': 'Teaching',
        'Publicaciones': 'Publications',
        'Prensa': 'Press',
        'Medios': 'Media',
        'Divulgación': 'Outreach',
        'Prensa escrita': 'Written press',
        'Toca para ir al contenido':'Tap to go to content',
        'ARTÍCULOS DE DIVULGACIÓN':'OUTREACH ARTICLES',
        'Con Andrea Vigorito, Ignacio Pardo y Gabriel Burdín.':'With Andrea Vigorito, Ignacio Pardo y Gabriel Burdín.',
        '“Un best seller contra el capital” reseña del libro El Capital en el siglo XXI de Thomas Piketty':'“Un best seller contra el capital” review of the book El Capital en el siglo XXI of Thomas Piketty',
        'Revista Lento, (2015).':'Lento magazine, (2015).',
        '2024. Todos los derechos reservados.':'2024. All rights reserved.',
      }
  };

  elementosATraducir.forEach(function(elemento) {
      if (!elemento.dataset.original) {
          elemento.dataset.original = elemento.textContent.trim();
      }
      
      var textoOriginal = elemento.dataset.original;
      
      if (traducciones[idioma][textoOriginal]) {
          elemento.textContent = traducciones[idioma][textoOriginal];
      }
  });
}