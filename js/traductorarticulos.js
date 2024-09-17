function cambiarIdioma(idioma) {

  var elementosATraducir = document.querySelectorAll('.traducible');

  var traducciones = {
    'es': {
      'Mauricio De Rosa | Articulos':'Mauricio De Rosa | Articulos',
      'Inicio': 'Inicio',
      'Enseñanza': 'Enseñanza',
      'Publicaciones': 'Publicaciones',
      'Prensa': 'Prensa',
      'Prensa escrita': 'Prensa escrita',
      'Divulgación': 'Divulgación',
      'Toca para ir al contenido':'Toca para ir al contenido',
      'ARTÍCULOS DE DIVULGACIÓN':'ARTÍCULOS DE DIVULGACIÓN',
      'Con Andrea Vigorito, Ignacio Pardo y Gabriel Burdín.':'Con Andrea Vigorito, Ignacio Pardo y Gabriel Burdín.',
      '“Un best seller contra el capital” reseña del libro El Capital en el siglo XXI de Thomas Piketty':'“Un best seller contra el capital” reseña del libro El Capital en el siglo XXI de Thomas Piketty',
      'Revista Lento, (2015).':'Revista Lento, (2015).',
    },
    'en': {
      'Mauricio De Rosa | Articulos':'Mauricio De Rosa | Articles',
      'Inicio': 'Home',
      'Enseñanza': 'Teaching',
      'Publicaciones': 'Publications',
      'Prensa': 'Press',
      'Divulgación': 'Outreach',
      'Prensa escrita': 'Written press',
      'Toca para ir al contenido':'Tap to go to content',
      'ARTÍCULOS DE DIVULGACIÓN':'OUTREACH ARTICLES',
      'Con Andrea Vigorito, Ignacio Pardo y Gabriel Burdín.':'With Andrea Vigorito, Ignacio Pardo y Gabriel Burdín.',
      '“Un best seller contra el capital” reseña del libro El Capital en el siglo XXI de Thomas Piketty':'“Un best seller contra el capital” review of the book El Capital en el siglo XXI of Thomas Piketty',
      'Revista Lento, (2015).':'Lento magazine, (2015).',
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
