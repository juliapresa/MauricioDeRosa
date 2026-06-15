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

  // Guardar idioma en localStorage
  localStorage.setItem("idioma", idioma);

  var elementosATraducir = document.querySelectorAll('.traducible');

  var traducciones = {
      'es': {
        'Mauricio De Rosa | Enseñanza':'Mauricio De Rosa | Enseñanza',
        'Enlaces':'Enlaces',
        'Contacto':'Contacto',
        'Inicio': 'Inicio',
        'Enseñanza': 'Enseñanza',
        'Publicaciones': 'Publicaciones',
        'Prensa': 'Prensa',
        'Medios': 'Medios',
        'Divulgación': 'Divulgación',

        'Actividades de':'Actividades de',

        'Cursos dictados':'Cursos dictados',

        'Profesor invitado · 2024':'Profesor invitado · 2024',
        'Universidad de Los Andes, Colombia.':'Universidad de Los Andes, Colombia.',
        'Historia del Pensamiento Económico':'Historia del Pensamiento Económico.',
        'Curso obligatorio del séptimo semestre de la Licenciatura en Economía.':'Curso obligatorio del séptimo semestre de la Licenciatura en Economía.',
        'Encargado del curso':'Encargado del curso',

        'Economía de América Latina':'Economía de América Latina',
        'Curso obligatorio del quinto semestre de la Licenciatura en Economía.':'Curso obligatorio del quinto semestre de la Licenciatura en Economía.',

        'Tópicos de Distribución del Ingreso':'Tópicos de Distribución del Ingreso',
        'Maestría en Economía de la Facultad de Ciencias Económicas y de Administración.':'Maestría en Economía de la Facultad de Ciencias Económicas y de Administración.',

        'Colaboración':'Colaboración',
        'Tópicos de Desigualdad, Pobreza y Políticas Públicas':'Tópicos de Desigualdad, Pobreza y Políticas Públicas',
        'Maestría en Políticas Públicas de las Facultades de Ciencias Sociales.':'Maestría en Políticas Públicas de las Facultades de Ciencias Sociales.',

        'Dirección de Tesis: grado y posgrado':'Dirección de Tesis: grado y posgrado',

        'Trabajo Final de Grado':'Trabajo Final de Grado',
        'Dirección de Trabajo Final de Grado (FCEA)':'Dirección de Trabajo Final de Grado (FCEA)',
        'Julieta Pessina y Carolina Ardoguein. Finalizada.':'Julieta Pessina y Carolina Ardoguein. Finalizada.',

        'Tesis de Maestría':'Tesis de Maestría',
        'Co-Dirección de Tesis de Maestría (FCEA)':'Co-Dirección de Tesis de Maestría (FCEA)',
        'Co-Dirección junto a Matías Brum.':'Co-Dirección junto a Matías Brum.',

        'Previamente: dictado de cursos de grado':'Previamente: dictado de cursos de grado',
        'Desigualdad y Pobreza':'Desigualdad y Pobreza',
        'Economía del Uruguay':'Economía del Uruguay',
        'Economía I':'Economía I',
        'Matemática I':'Matemática I',
        'Estadística I.':'Estadística I.',

        'Redes':'Redes',
        '© 2024 · Todos los derechos reservados':'© 2024 · Todos los derechos reservados',
      },
      'en': {
        'Mauricio De Rosa | Enseñanza':'Mauricio De Rosa | Teaching Activities',
        'Enlaces':'Links',
        'Contacto':'Contact',
        'Inicio': 'Home',
        'Enseñanza': 'Teaching',
        'Publicaciones': 'Publications',
        'Prensa': 'Press',
        'Medios': 'Media',
        'Divulgación': 'Outreach',


        'Actividades de':'Activities',

        'Cursos dictados':'Dictated courses',

        'Profesor invitado · 2024':'Guest proffesor · 2024',
        'Universidad de Los Andes, Colombia.':'University of Los Andes, Colombia.',
        'Historia del Pensamiento Económico':'History of economic thought.',

        'Curso obligatorio del séptimo semestre de la Licenciatura en Economía.':'Mandatory course of the seventh semester of the Bachelors Degree in Economics.',
        'Encargado del curso':'Course manager',



        'Economía de América Latina':'Latin American economy',
        'Curso obligatorio del quinto semestre de la Licenciatura en Economía.':'Mandatory course of the fifth semester of the Bachelors Degree in Economics.',


        'Tópicos de Distribución del Ingreso':'Topics of Income Distribution',
        'Maestría en Economía de la Facultad de Ciencias Económicas y de Administración.':'Masters Degree in Economics of the Faculty of Economics and Administration.',

        'Colaboración':'Collaboration',
        'Tópicos de Desigualdad, Pobreza y Políticas Públicas':'Topics of Inequality, Poverty and Public Policies',
        'Maestría en Políticas Públicas de las Facultades de Ciencias Sociales.':'Masters Degree in Public Policies of the Faculties of Social Sciences.',

        'Dirección de Tesis: grado y posgrado':'Master and Bachelors thesis',

        'Trabajo Final de Grado':'Final Degree Project',
        'Dirección de Trabajo Final de Grado (FCEA)':'Final Degree Project Direction (FCEA)',
        'Julieta Pessina y Carolina Ardoguein. Finalizada.':'Julieta Pessina and Carolina Ardoguein. Finished.',

        'Tesis de Maestría':'Masters Thesis',
        'Co-Dirección de Tesis de Maestría (FCEA)':'Masters Thesis Co-Direction (FCEA)',
        'Co-Dirección junto a Matías Brum.':'Co-Direction with Matías Brum.',

        'Previamente: dictado de cursos de grado':'Previously: teaching degree courses',
        'Desigualdad y Pobreza':'Inequality and Poverty',
        'Economía del Uruguay':'Economy of Uruguay',
        'Economía I':'Economics I',
        'Matemática I':'Mathematics I',
        'Estadística I':'Statistics I',

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