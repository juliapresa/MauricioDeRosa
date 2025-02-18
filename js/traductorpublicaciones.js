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
        'Mauricio De Rosa | Publicaciones':'Mauricio De Rosa | Publicaciones',
        'Enlaces':'Enlaces',
        'Contacto':'Contacto',
        'Inicio': 'Inicio',
        'Enseñanza': 'Enseñanza',
        'Publicaciones': 'Publicaciones',
        'Prensa': 'Prensa',
        'Divulgación': 'Divulgación',
        'PUBLICACIONES':'PUBLICACIONES',
        'Publicaciones en revistas arbitradas':'Publicaciones en revistas arbitradas',
        'Artículos en proceso de revisión en revistas arbitradas':'Artículos en proceso de revisión en revistas arbitradas',
        'Toca para ir al contenido':'Toca para ir al contenido',
        'Capítulos de libros':'Capítulos de libros',
        'Capítulos: Distribución del ingreso, mercado laboral y educación. Unanálisis para 1986-2012.':'Capítulos: Distribución del ingreso, mercado laboral y educación. Un análisis para 1986-2012.',
        'Organizadores: Harari L Mazzeo M, Alemany C. Págs. 385-398.':'Organizadores: Harari L Mazzeo M, Alemany C. Págs. 385-398.',
        'Documentos de trabajo y publicaciones no arbitradas':'Documentos de trabajo y publicaciones no arbitradas',
        'Arim, R, De Rosa, M. y Vigorito, A.':'Arim, R, De Rosa, M. y Vigorito, A.',
        '2024. Todos los derechos reservados.':'2024. Todos los derechos reservados.',
      },
      'en': {
        'Mauricio De Rosa | Publicaciones':'Mauricio De Rosa | Publications',
        'Enlaces':'Links',
        'Contacto':'Contact',
        'Inicio': 'Home',
        'Enseñanza': 'Teaching',
        'Publicaciones': 'Publications',
        'Prensa': 'Press',
        'Divulgación': 'Outreach',
        'PUBLICACIONES':'PUBLICATIONS',
        'Publicaciones en revistas arbitradas':'Publications in refereed journals',
        'Artículos en proceso de revisión en revistas arbitradas':'Articles under review in refereed journals',
        'Toca para ir al contenido':'Tap to go to content',
        'Capítulos de libros':'Book chapters',
        'Capítulos: Distribución del ingreso, mercado laboral y educación. Un análisis para 1986-2012.':'Chapters: Distribución del ingreso, mercado laboral y educación. Un análisis para 1986-2012.',
        'Organizadores: Harari L Mazzeo M, Alemany C. Págs. 385-398.':'Organizers: Harari L Mazzeo M, Alemany C. Págs. 385-398.',
        'Documentos de trabajo y publicaciones no arbitradas':'Working papers and non-refereed publications',
        'Arim, R, De Rosa, M. y Vigorito, A.':'Arim, R, De Rosa, M. and Vigorito, A.',
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