function cambiarIdioma(idioma) {

    var elementosATraducir = document.querySelectorAll('.traducible');

    var traducciones = {
      'es': {
        'Inicio': 'Inicio',
        'Enseñanza': 'Enseñanza',
        'Publicaciones': 'Publicaciones',
        'Prensa': 'Prensa',
        'Articulos': 'Articulos',
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
        'Toca para ir al contenido':'Tap to go to content',
        'APARICIONES EN PRENSA':'PRESS APPEARANCES',
        'Ir a Youtube':'Go to Youtube',
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