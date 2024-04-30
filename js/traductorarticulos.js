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
        'ARTÍCULOS DE DIVULGACIÓN':'ARTÍCULOS DE DIVULGACIÓN',
        'Con Andrea Vigorito, Ignacio Pardo y Gabriel Burdín.':'Con Andrea Vigorito, Ignacio Pardo y Gabriel Burdín.',
        '“Un best seller contra el capital” reseña del libro El Capital en el siglo XXI de Thomas Piketty':'“Un best seller contra el capital” reseña del libro El Capital en el siglo XXI de Thomas Piketty',
        'Revista Lento, (2015).':'Revista Lento, (2015).',
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
        'ARTÍCULOS DE DIVULGACIÓN':'DISCLOSURE ARTICLES',
        'Con Andrea Vigorito, Ignacio Pardo y Gabriel Burdín.':'With Andrea Vigorito, Ignacio Pardo y Gabriel Burdín.',
        '“Un best seller contra el capital” reseña del libro El Capital en el siglo XXI de Thomas Piketty':'“Un best seller contra el capital” review of the book El Capital en el siglo XXI of Thomas Piketty',
        'Revista Lento, (2015).':'Lento magazine, (2015).',
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