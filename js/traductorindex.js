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

   document.querySelectorAll(".nav-lang span")
  .forEach(el => el.classList.remove("active"));

    const idiomaActivo = document.querySelector(
    `[onclick="cambiarIdioma('${idioma}')"]`
    );

    if (idiomaActivo) {
    idiomaActivo.classList.add("active");
    }

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
          'Sobre mí':'Sobre mí',
          'Ver Curriculum Vitae →':'Ver Curriculum Vitae →',
          'Docente grado 3 en FCEA–Udelar. Research Fellow del World Inequality Lab - Paris School of Economics. SNI nivel I. Especializado en desigualdad de ingresos y riqueza en América Latina.':'Docente grado 3 en FCEA–Udelar. Research Fellow del World Inequality Lab - Paris School of Economics. SNI nivel I. Especializado en desigualdad de ingresos y riqueza en América Latina.',
          'Soy Docente en Régimen de Dedicación Total, grado 3, del Departamento de Economía, Facultad de Ciencias Económicas y de Administración. Pertenezco además al Sistema Nacional de Investigadores, Nivel I, y soy además Research Fellow del World Inequality Lab – Paris School of Economics. Mi trabajo de investigación se centra en la desigualdad de ingresos y riqueza, así como en las políticas públicas necesarias para reducirlas. Soy además docente de Historia del Pensamiento Económico, Economía de América Latina y Desigualdad (en la maestría de FCEA). Desde 2026, soy además el Director de Carrera de la Licenciatura en Economía.':'Soy Docente en Régimen de Dedicación Total, grado 3, del Departamento de Economía, Facultad de Ciencias Económicas y de Administración. Pertenezco además al Sistema Nacional de Investigadores, Nivel I, y soy además Research Fellow del World Inequality Lab – Paris School of Economics. Mi trabajo de investigación se centra en la desigualdad de ingresos y riqueza, así como en las políticas públicas necesarias para reducirlas. Soy además docente de Historia del Pensamiento Económico, Economía de América Latina y Desigualdad (en la maestría de FCEA). Desde 2026, soy además el Director de Carrera de la Licenciatura en Economía.',
          'Formación':'Formación',
          'Doctorado en Economía':'Doctorado en Economía',
          'Supervisores: Thomas Piketty y Facundo Alvaredo': ' Supervisores: Thomas Piketty y Facundo Alvaredo',
          'Maestría en Economía':'Maestría en Economía',
          'Paris School of Economics · EHESS (Políticas Públicas y Desarrollo)':'Paris School of Economics · EHESS (Políticas Públicas y Desarrollo)',
          'Tesis de Maestría: “Distribución de la riqueza en Uruguay: una aproximación por el método de capitalización”':'Tesis de Maestría: “Distribución de la riqueza en Uruguay: una aproximación por el método de capitalización”',
          'Tesis: “Wealth accumulation and its distribution in Uruguay: first estimates of the untold half of the story”':'Tesis: “Wealth accumulation and its distribution in Uruguay: first estimates of the untold half of the story”',
          'Tutora: Andrea Vigorito':'Tutora: Andrea Vigorito',
          'Licenciatura en Economía':'Licenciatura en Economía',
          'Tesis de Grado: “Sistemas tributarios alternativos y su impacto en la distribución del ingreso y la oferta laboral: una aproximación comportamental para el caso uruguayo”':'Tesis de Grado: “Sistemas tributarios alternativos y su impacto en la distribución del ingreso y la oferta laboral: una aproximación comportamental para el caso uruguayo”',
          'Toca para ir al contenido →':'Toca para ir al contenido →',
          '© 2024 · Todos los derechos reservados':'© 2024 · Todos los derechos reservados',
          'Tweets destacados':'Tweets destacados',
          'Redes':'Redes',
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
          'Ver Curriculum Vitae →':'View Curriculum Vitae →',
          'Sobre mí':'About me',
          'Docente grado 3 en FCEA–Udelar. Research Fellow del World Inequality Lab - Paris School of Economics. SNI nivel I. Especializado en desigualdad de ingresos y riqueza en América Latina.':'Assistant Professor at FCEA–Udelar. Research Fellow of the World Inequality Lab - Paris School of Economics. SNI level I. Specialized on income and wealth inequality.',
          'Soy Docente en Régimen de Dedicación Total, grado 3, del Departamento de Economía, Facultad de Ciencias Económicas y de Administración. Pertenezco además al Sistema Nacional de Investigadores, Nivel I, y soy además Research Fellow del World Inequality Lab – Paris School of Economics. Mi trabajo de investigación se centra en la desigualdad de ingresos y riqueza, así como en las políticas públicas necesarias para reducirlas. Soy además docente de Historia del Pensamiento Económico, Economía de América Latina y Desigualdad (en la maestría de FCEA). Desde 2026, soy además el Director de Carrera de la Licenciatura en Economía.':'I am an Assistant Professor (Grade 3, Full-Time Dedication Regime) in the Department of Economics at the Faculty of Economics and Administration, Universidad de la República (Uruguay). I am also a Level I researcher in Uruguay’s National System of Researchers and a Research Fellow at the World Inequality Lab, Paris School of Economics. My research focuses on income and wealth inequality, as well as the public policies aimed at reducing them. I teach courses on the History of Economic Thought, Latin American Economics, and Inequality (Master’s Program in Economics). Since 2026, I have served as Director of the Bachelor’s Degree Program in Economics.',
          'Formación':'Education',
          'Doctorado en Economía':'PhD in Economics',
          'Supervisores: Thomas Piketty y Facundo Alvaredo': ' Supervisors: Thomas Piketty y Facundo Alvaredo',
          'Maestría en Economía':'Master in Economics',
          'Paris School of Economics · EHESS (Políticas Públicas y Desarrollo)':'Paris School of Economics · EHESS (Public Policy and Development)',
          'Tesis de Maestría: “Distribución de la riqueza en Uruguay: una aproximación por el método de capitalización”':'Masters Thesis: “Distribución de la riqueza en Uruguay: una aproximación por el método de capitalización”',
          'Tesis: “Wealth accumulation and its distribution in Uruguay: first estimates of the untold half of the story”':'Thesis: “Wealth accumulation and its distribution in Uruguay: first estimates of the untold half of the story”',
          'Tutora: Andrea Vigorito':'Tutor: Andrea Vigorito',
          'Licenciatura en Economía':'Degree in Economics',
          'Tesis de Grado: “Sistemas tributarios alternativos y su impacto en la distribución del ingreso y la oferta laboral: una aproximación comportamental para el caso uruguayo”':'Thesis: “Sistemas tributarios alternativos y su impacto en la distribución del ingreso y la oferta laboral: una aproximación comportamental para el caso uruguayo”',
          'Toca para ir al contenido →':'Tap to go to content →',
          'Tweets destacados':'Highlighted tweets',
          'Redes':'Networks',
          '© 2024 · Todos los derechos reservados':'© 2024 · All rights reserved.',
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