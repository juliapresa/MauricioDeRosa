function cambiarIdioma(idioma) {
    // Selecciona todos los elementos que deseas traducir
    var elementosATraducir = document.querySelectorAll('.traducible');

    var traducciones = {
      'es': {
        'Inicio': 'Inicio',
        'Enseñanza': 'Enseñanza',
        'Publicaciones': 'Publicaciones',
        'Prensa': 'Prensa',
        'Articulos': 'Articulos',
        'Español': 'Español',
        'Ingles': 'Ingles',
        'Toca para ir al contenido':'Toca para ir al contenido',
        'APARICIONES EN PRENSA':'APARICIONES EN PRENSA',
        'Ir a Youtube':'Ir a Youtube',
      },
      'en': {
        'Inicio': 'Home',
        'Enseñanza': 'Teaching',
        'Publicaciones': 'Publications',
        'Prensa': 'Press',
        'Articulos': 'Articles',
        'Español': 'Spanish',
        'Inglés': 'English',
        'Toca para ir al contenido':'Tap to go to content',
        'APARICIONES EN PRENSA':'PRESS APPEARANCES',
        'Ir a Youtube':'Go to Youtube',
      }
    };
  
    // Recorre todos los elementos a traducir
    elementosATraducir.forEach(function(elemento) {
      // Obtiene el texto actual del elemento
      var textoActual = elemento.textContent.trim();
  
      // Verifica si hay una traducción disponible para el texto actual
      if (traducciones[idioma][textoActual]) {
        // Aplica la traducción al elemento
        elemento.textContent = traducciones[idioma][textoActual];
      }
    });
  }