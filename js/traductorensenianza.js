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
        'Mauricio De Rosa | Enseñanza':'Mauricio De Rosa | Enseñanza',
        'Enlaces':'Enlaces',
        'Contacto':'Contacto',
        'Inicio': 'Inicio',
        'Enseñanza': 'Enseñanza',
        'Publicaciones': 'Publicaciones',
        'Prensa': 'Prensa',
        'Divulgación': 'Divulgación',
        'ACTIVIDADES DE ENSEÑANZA':'ACTIVIDADES DE ENSEÑANZA',
        'Cursos dictados':'Cursos dictados',
        'Profesor invitado para la Bogotá Summer School, en la Universidad de Los Andes (Colombia-2024)':'Profesor invitado para la Bogotá Summer School, en la Universidad de Los Andes (Colombia-2024)',
        'Historia del Pensamiento Económico. Curso obligatorio del séptimo semestre de la Licenciatura en Economía (Encargado del curso). 2021-2024.':'Historia del Pensamiento Económico. Curso obligatorio del séptimo semestre de la Licenciatura en Economía (Encargado del curso).',
        'Economía Descriptiva. Curso obligatorio del segundo semestre de la Licenciatura en Economía. 2022-2024.':'Economía Descriptiva. Curso obligatorio del segundo semestre de la Licenciatura en Economía. 2021-2024.',
        'Tópicos de Distribución del Ingreso de la Maestría en Economía de la Facultad de Ciencias Económicas y de Administración.':'Tópicos de Distribución del Ingreso de la Maestría en Economía de la Facultad de Ciencias Económicas y de Administración.',
        'Colaboración en curso de Tópicos de Desigualdad, Pobreza y Políticas Públicas de la Maestría en Políticas Públicas de las Facultades de Ciencias Sociales.':'Colaboración en curso de Tópicos de Desigualdad, Pobreza y Políticas Públicas de la Maestría en Políticas Públicas de las Facultades de Ciencias Sociales.',
        'Dirección de Tesis:':'Dirección de Tesis:',
        'grado y posgrado':'grado y posgrado:',
        'Dirección de Trabajo Final de Grado (FCEA) de Julieta Pessina y Carolina Ardoguein. Finalizada. 2021-2022.':'Dirección de Trabajo Final de Grado (FCEA) de Julieta Pessina y Carolina Ardoguein. Finalizada. 2021-2022.',
        'Co-Dirección (junto a Matías Brum) de Tesis de Maestría de Joaquín Toledo en Maestría de FCEA. 2021-2022.':'Co-Dirección (junto a Matías Brum) de Tesis de Maestría de Joaquín Toledo en Maestría de FCEA. 2021-2022.',
        'dictado de cursos de grado:':'dictado de cursos de grado:',
        'Previamente:':'Previamente:',
        'Desigualdad y Pobreza, Economía del Uruguay, Economía I, Matemática I y Estadística I.':'Desigualdad y Pobreza, Economía del Uruguay, Economía I, Matemática I y Estadística I.',
      },
      'en': {
        'Mauricio De Rosa | Enseñanza':'Mauricio De Rosa | Teaching Activities',
        'Enlaces':'Links',
        'Contacto':'Contact',
        'Inicio': 'Home',
        'Enseñanza': 'Teaching',
        'Publicaciones': 'Publications',
        'Prensa': 'Press',
        'Divulgación': 'Outreach',
        'ACTIVIDADES DE ENSEÑANZA':'TEACHING ACTIVITIES',
        'Cursos dictados':'Dictated courses',
        'Profesor invitado para la Bogotá Summer School, en la Universidad de Los Andes (Colombia-2024)':'Guest professor for the Bogotá Summer School, at the University of Los Andes (Colombia-2024)',
        'Historia del Pensamiento Económico. Curso obligatorio del séptimo semestre de la Licenciatura en Economía (Encargado del curso). 2021-2024.':'History of economic thought. Mandatory course of the seventh semester of the Bachelors Degree in Economics (Course Manager). 2021-2024.',
        'Economía Descriptiva. Curso obligatorio del segundo semestre de la Licenciatura en Economía. 2022-2024.':'Descriptive Economics. Mandatory course of the second semester of the Bachelors Degree in Economics. 2022-2024.',
        'Tópicos de Distribución del Ingreso de la Maestría en Economía de la Facultad de Ciencias Económicas y de Administración.':'Topics of Income Distribution of the Masters Degree in Economics of the Faculty of Economics and Administration.',
        'Colaboración en curso de Tópicos de Desigualdad, Pobreza y Políticas Públicas de la Maestría en Políticas Públicas de las Facultades de Ciencias Sociales.':'Collaboration on Topics of Inequality, Poverty and Public Policies course of the Masters Degree in Public Policies of the Faculties of Social Sciences.',
        'Dirección de Tesis:':'Master and Bachelors',
        'grado y posgrado':'thesis',
        'Dirección de Trabajo Final de Grado (FCEA) de Julieta Pessina y Carolina Ardoguein. Finalizada. 2021-2022.':'Final Degree Project Direction (FCEA) by Julieta Pessina and Carolina Ardoguein. Finished. 2021-2022.',
        'Co-Dirección (junto a Matías Brum) de Tesis de Maestría de Joaquín Toledo en Maestría de FCEA. 2021-2022.':'Co-Direction (with Matías Brum) of Joaquín Toledos Masters Thesis in the FCEA Masters Degree. 2021-2022.',
        'Previamente:':'Previously:',
        'dictado de cursos de grado':'teaching degree courses',
        'Desigualdad y Pobreza, Economía del Uruguay, Economía I, Matemática I y Estadística I.':'Inequality and Poverty, Economy of Uruguay, Economics I, Mathematics I and Statistics I.',
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