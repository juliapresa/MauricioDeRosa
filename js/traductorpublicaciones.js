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
  document.querySelectorAll(".nav-lang span").forEach(el => {
    el.classList.remove("active");
  });

  // Marcar el idioma seleccionado
  const idiomaActivo = document.querySelector(
      `[onclick="cambiarIdioma('${idioma}')"]`
  );

  if (idiomaActivo) {
      idiomaActivo.classList.add("active");
  }
  
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
        'Medios': 'Medios',
        'Divulgación': 'Divulgación',
        'PUBLICACIONES':'PUBLICACIONES',
        'Publicaciones en revistas arbitradas':'Publicaciones en revistas arbitradas',
        'Artículos en proceso de revisión en revistas arbitradas':'Artículos en proceso de revisión en revistas arbitradas',
        'Leer →':'Leer →',
        'Capítulos de libros':'Capítulos de libros',
        'Documentos de trabajo y publicaciones no arbitradas':'Documentos de trabajo y publicaciones no arbitradas',
        'Redes':'Redes',
        '© 2024 · Todos los derechos reservados':'© 2024 · Todos los derechos reservados',
      },
      'en': {
        'Mauricio De Rosa | Publicaciones':'Mauricio De Rosa | Publications',
        'Enlaces':'Links',
        'Contacto':'Contact',
        'Inicio': 'Home',
        'Enseñanza': 'Teaching',
        'Publicaciones': 'Publications',
        'Prensa': 'Press',
        'Medios': 'Media',
        'Divulgación': 'Outreach',
        'PUBLICACIONES':'PUBLICATIONS',
        'Publicaciones en revistas arbitradas':'Publications in refereed journals',
        'Artículos en proceso de revisión en revistas arbitradas':'Articles under review in refereed journals',
        'Leer →':'Read →',
        'Capítulos de libros':'Book chapters',
        'Redes':'Networks',
        '© 2024 · Todos los derechos reservados':'© 2024 · All rights reserved',
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