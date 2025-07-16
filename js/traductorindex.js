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
          'Enlaces':'Enlaces',
          'Contacto':'Contacto',
          'Inicio': 'Inicio',
          'Enseñanza': 'Enseñanza',
          'Publicaciones': 'Publicaciones',
          'Prensa': 'Prensa',
          'Medios': 'Medios',
          'Divulgación': 'Divulgación',
          'IR AL CV':'IR AL CV',
          'Soy docente efectivo grado 3 del Departamento de Economía, Facultad de Ciencias Económicas y de Administración. Docente en Régimen de Dedicación Total. Sistema Nacional de Investigadores, nivel I. Research Fellow del World Inequality Lab - Paris School of Economics. Mi trabajo de investigación se centra en la desigualdad de ingresos y riqueza, así como en las políticas públicas necesarias para reducirlas. También doy clase sobre estos temas, así como sobre Historia del Pensamiento Económico.':'Soy docente efectivo grado 3 del Departamento de Economía, Facultad de Ciencias Económicas y de Administración. Docente en Régimen de Dedicación Total. Sistema Nacional de Investigadores, nivel I. Research Fellow del World Inequality Lab - Paris School of Economics. Mi trabajo de investigación se centra en la desigualdad de ingresos y riqueza, así como en las políticas públicas necesarias para reducirlas. También doy clase sobre estos temas, así como sobre Historia del Pensamiento Económico.',
          'FORMACIÓN':'FORMACIÓN',
          'Doctorado en Economía.':'Doctorado en Economía.',
          'Supervisores: Thomas Piketty y Facundo Alvaredo.': ' Supervisores: Thomas Piketty y Facundo Alvaredo.',
          'Maestría en Economía.':'Maestría en Economía.',
          '(Políticas Públicas y Desarrollo).':'(Políticas Públicas y Desarrollo).',
          'Tesis de Maestría: “Distribución de la riqueza en Uruguay: una aproximación por el método de capitalización”.':'Tesis de Maestría: “Distribución de la riqueza en Uruguay: una aproximación por el método de capitalización”.',
          'Tesis: “Wealth accumulation and its distribution in Uruguay: first estimates of the untold half of the story”.':'Tesis: “Wealth accumulation and its distribution in Uruguay: first estimates of the untold half of the story”.',
          'Tutora: Andrea Vigorito.':'Tutora: Andrea Vigorito.',
          'Licenciatura en Economía.':'Licenciatura en Economía.',
          'Tesis de Grado: “Sistemas tributarios alternativos y su impacto en la distribución del ingreso y la oferta laboral: una aproximación comportamental para el caso uruguayo”.':'Tesis de Grado: “Sistemas tributarios alternativos y su impacto en la distribución del ingreso y la oferta laboral: una aproximación comportamental para el caso uruguayo”.',
          'Toca para ir al contenido':'Toca para ir al contenido',
          '2024. Todos los derechos reservados.':'2024. Todos los derechos reservados.',
          'Mostrar tweets destacados': 'Mostrar tweets destacados',
          'Ocultar tweets destacados': 'Ocultar tweets destacados',
      },
      'en': {
          'Enlaces':'Links',
          'Contacto':'Contact',
          'Inicio': 'Home',
          'Enseñanza': 'Teaching',
          'Publicaciones': 'Publications',
          'Prensa': 'Press',
          'Medios': 'Media',
          'Divulgación': 'Outreach',
          'IR AL CV':'GO TO CV',
          'Soy docente efectivo grado 3 del Departamento de Economía, Facultad de Ciencias Económicas y de Administración. Docente en Régimen de Dedicación Total. Sistema Nacional de Investigadores, nivel I. Research Fellow del World Inequality Lab - Paris School of Economics. Mi trabajo de investigación se centra en la desigualdad de ingresos y riqueza, así como en las políticas públicas necesarias para reducirlas. También doy clase sobre estos temas, así como sobre Historia del Pensamiento Económico.':'I am an Assistant Professor at the Department of Economics, Facultad de Ciencias Económicas y de Administración (UdelaR). Full Dedication Teacher. Sistema Nacional de Investigadores, level I. Research Fellow of the World Inequality Lab - Paris School of Economics. My research focuses on income and wealth inequality, as well as the public policies needed to reduce them. I also teach on these topics, as well as on the history of economic thought.',
          'FORMACIÓN':'EDUCATION',
          'Doctorado en Economía.':'PhD in Economics',
          'Supervisores: Thomas Piketty y Facundo Alvaredo.': ' Supervisors: Thomas Piketty y Facundo Alvaredo.',
          'Maestría en Economía.':'Master in Economics',
          '(Políticas Públicas y Desarrollo).':'(Public Policy and Development).',
          'Tesis de Maestría: “Distribución de la riqueza en Uruguay: una aproximación por el método de capitalización”.':'Masters Thesis: “Distribución de la riqueza en Uruguay: una aproximación por el método de capitalización”.',
          'Tesis: “Wealth accumulation and its distribution in Uruguay: first estimates of the untold half of the story”.':'Thesis: “Wealth accumulation and its distribution in Uruguay: first estimates of the untold half of the story”.',
          'Tutora: Andrea Vigorito.':'Tutor: Andrea Vigorito.',
          'Licenciatura en Economía.':'Degree in Economics',
          'Tesis de Grado: “Sistemas tributarios alternativos y su impacto en la distribución del ingreso y la oferta laboral: una aproximación comportamental para el caso uruguayo”.':'Thesis: “Sistemas tributarios alternativos y su impacto en la distribución del ingreso y la oferta laboral: una aproximación comportamental para el caso uruguayo”.',
          'Toca para ir al contenido':'Tap to go to content',
          '2024. Todos los derechos reservados.':'2024. All rights reserved.',
          'Mostrar tweets destacados': 'Show highlighted tweets',
          'Ocultar tweets destacados': 'Hide highlighted tweets',
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
document.getElementById("toggleTwitter").addEventListener("click", function() {
    let widget = document.getElementById("twitterContainer");
    let idiomaActual = localStorage.getItem("idioma") || "es"; // Obtener el idioma actual

    if (widget.classList.contains("expandido")) {
        widget.classList.remove("expandido");
        this.textContent = (idiomaActual === "en") ? "Show highlighted tweets" : "Mostrar tweets destacados";
    } else {
        widget.classList.add("expandido");
        this.textContent = (idiomaActual === "en") ? "Hide highlighted tweets" : "Ocultar tweets destacados";
    }
});
