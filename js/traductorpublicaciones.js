function cambiarIdioma(idioma) {
    var elementosATraducir = document.querySelectorAll('.traducible');

    var traducciones = {
      'es': {
        'Mauricio De Rosa | Publicaciones':'Mauricio De Rosa | Publicaciones',
        'Inicio': 'Inicio',
        'Enseñanza': 'Enseñanza',
        'Publicaciones': 'Publicaciones',
        'Prensa': 'Prensa',
        'Articulos': 'Articulos',
        'PUBLICACIONES':'PUBLICACIONES',
        'Publicaciones en revistas arbitradas':'Publicaciones en revistas arbitradas',
        'Artículos en proceso de revisión en revistas arbitradas':'Artículos en proceso de revisión en revistas arbitradas',
        'Toca para ir al contenido':'Toca para ir al contenido',
        'Capítulos de libros':'Capítulos de libros',
        'Capítulos: Distribución del ingreso, mercado laboral y educación. Unanálisis para 1986-2012.':'Capítulos: Distribución del ingreso, mercado laboral y educación. Un análisis para 1986-2012.',
        'Organizadores: Harari L Mazzeo M, Alemany C. Págs. 385-398.':'Organizadores: Harari L Mazzeo M, Alemany C. Págs. 385-398.',
        'Documentos de trabajo y publicaciones no arbitradas':'Documentos de trabajo y publicaciones no arbitradas',
        'Arim, R, De Rosa, M. y Vigorito, A.':'Arim, R, De Rosa, M. y Vigorito, A.',
      },
      'en': {
        'Mauricio De Rosa | Publicaciones':'Mauricio De Rosa | Publications',
        'Inicio': 'Home',
        'Enseñanza': 'Teaching',
        'Publicaciones': 'Publications',
        'Prensa': 'Press',
        'Articulos': 'Articles',
        'PUBLICACIONES':'PUBLICATIONS',
        'Publicaciones en revistas arbitradas':'Publications in refereed journals',
        'Artículos en proceso de revisión en revistas arbitradas':'Articles under review in refereed journals',
        'Toca para ir al contenido':'Tap to go to content',
        'Capítulos de libros':'Book chapters',
        'Capítulos: Distribución del ingreso, mercado laboral y educación. Un análisis para 1986-2012.':'Chapters: Distribución del ingreso, mercado laboral y educación. Un análisis para 1986-2012.',
        'Organizadores: Harari L Mazzeo M, Alemany C. Págs. 385-398.':'Organizers: Harari L Mazzeo M, Alemany C. Págs. 385-398.',
        'Documentos de trabajo y publicaciones no arbitradas':'Working papers and non-refereed publications',
        'Arim, R, De Rosa, M. y Vigorito, A.':'Arim, R, De Rosa, M. and Vigorito, A.',
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