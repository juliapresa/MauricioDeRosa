function cambiarIdioma(idioma) {

    var elementosATraducir = document.querySelectorAll('.traducible');

    var traducciones = {
      'es': {
        'Inicio': 'Inicio',
        'Enseñanza': 'Enseñanza',
        'Publicaciones': 'Publicaciones',
        'Prensa': 'Prensa',
        'Articulos': 'Articulos',
        'IR AL CV':'IR AL CV',
        'Docente efectivo grado 3 del Departamento de   Economía, Facultad de Ciencias Económicas y de Administración. Docente en Régimen de Dedicación Total. Sistema Nacional de Investigadores, nivel I. Research Fellow del World Inequality Lab - Paris School of Economics.':'Docente efectivo grado 3 del Departamento de   Economía, Facultad de Ciencias Económicas y de Administración. Docente en Régimen de Dedicación Total. Sistema Nacional de Investigadores, nivel I. Research Fellow del World Inequality Lab - Paris School of Economics.',
        'FORMACIÓN':'FORMACIÓN',
        'Doctorado en Economía.':'Doctorado en Economía.',
        'Supervisores: Thomas Piketty y Facundo Alvaredo.': ' Supervisores: Thomas Piketty y Facundo Alvaredo.',
        'Maestría en Economía.':'Maestría en Economía.',
        '(Políticas Públicas y Desarrollo).':'(Políticas Públicas y Desarrollo).',
        '(Políticas Públicas y Desarrollo).':'(Public Policy and Development).',
        'Tesis de Maestría: “Distribución de la riqueza en Uruguay: una aproximación por el método de capitalización”.':'Tesis de Maestría: “Distribución de la riqueza en Uruguay: una aproximación por el método de capitalización”.',
        'Tesis: “Wealth accumulation and its distribution in Uruguay: first estimates of the untold half of the story”.':'Tesis: “Wealth accumulation and its distribution in Uruguay: first estimates of the untold half of the story”.',
        'Tutora: Andrea Vigorito.':'Tutora: Andrea Vigorito.',
        'Licenciatura en Economía.':'Licenciatura en Economía.',
        'Tesis de Grado: “Sistemas tributarios alternativos y su impacto en la distribución del ingreso y la oferta laboral: una aproximación comportamental para el caso uruguayo”.':'Tesis de Grado: “Sistemas tributarios alternativos y su impacto en la distribución del ingreso y la oferta laboral: una aproximación comportamental para el caso uruguayo”.',
        'Toca para ir al contenido':'Toca para ir al contenido',
        'Tesis de Maestría: “Distribución de la riqueza en Uruguay: una aproximación por el método de capitalización”.':'Tesis de Maestría: “Distribución de la riqueza en Uruguay: una aproximación por el método de capitalización”.',
      },
      'en': {
        'Inicio': 'Home',
        'Enseñanza': 'Teaching',
        'Publicaciones': 'Publications',
        'Prensa': 'Press',
        'Articulos': 'Articles',
        'IR AL CV':'GO TO CV',
        'Docente efectivo grado 3 del Departamento de   Economía, Facultad de Ciencias Económicas y de Administración. Docente en Régimen de Dedicación Total. Sistema Nacional de Investigadores, nivel I. Research Fellow del World Inequality Lab - Paris School of Economics.':'Professor at the Department of Economics, Facultad de Ciencias Económicas y de Administración (UdelaR). Research Fellow of the World Inequality Lab - Paris School of Economics.',
        'FORMACIÓN':'EDUCATION',
        'Doctorado en Economía.':'Doctorate in Economics.',
        'Supervisores: Thomas Piketty y Facundo Alvaredo.': ' Supervisors: Thomas Piketty y Facundo Alvaredo.',
        'Maestría en Economía.':'Master in Economics',
        '(Políticas Públicas y Desarrollo).':'(Public Policy and Development).',
        'Tesis de Maestría: “Distribución de la riqueza en Uruguay: una aproximación por el método de capitalización”.':'Masters Thesis: “Distribución de la riqueza en Uruguay: una aproximación por el método de capitalización”.',
        'Tesis: “Wealth accumulation and its distribution in Uruguay: first estimates of the untold half of the story”.':'Thesis: “Wealth accumulation and its distribution in Uruguay: first estimates of the untold half of the story”.',
        'Tutora: Andrea Vigorito.':'Tutor: Andrea Vigorito.',
        'Licenciatura en Economía.':'Degree in Economics',
        'Tesis de Grado: “Sistemas tributarios alternativos y su impacto en la distribución del ingreso y la oferta laboral: una aproximación comportamental para el caso uruguayo”.':'Thesis: “Sistemas tributarios alternativos y su impacto en la distribución del ingreso y la oferta laboral: una aproximación comportamental para el caso uruguayo”.',
        'Toca para ir al contenido':'Tap to go to content',
        'Tesis de Maestría: “Distribución de la riqueza en Uruguay: una aproximación por el método de capitalización”.':'Thesis: “Distribución de la riqueza en Uruguay: una aproximación por el método de capitalización”.',
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