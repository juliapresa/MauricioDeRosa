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
        'ACTIVIDADES DE ENSEÑANZA':'ACTIVIDADES DE ENSEÑANZA',
        'Cursos dictados':'Cursos dictados',
        'Historia del Pensamiento Económico. Curso obligatorio del séptimo semestre de la Licenciatura en Economía (Encargado del curso). 2021-2024.':'Historia del Pensamiento Económico. Curso obligatorio del séptimo semestre de la Licenciatura en Economía (Encargado del curso).',
        'Economía Descriptiva. Curso obligatorio del segundo semestre de la Licenciatura en Economía. 2022-2024.':'Economía Descriptiva. Curso obligatorio del segundo semestre de la Licenciatura en Economía. 2021-2024.',
        'Tópicos de Distribución del Ingreso de la Maestría en Economía de la Facultad de Ciencias Económicas y de Administración.':'Tópicos de Distribución del Ingreso de la Maestría en Economía de la Facultad de Ciencias Económicas y de Administración.',
        'Colaboración en curso de Tópicos de Desigualdad, Pobreza y Políticas Públicas de la Maestría en Políticas Públicas de las Facultades de Ciencias Sociales.':'Colaboración en curso de Tópicos de Desigualdad, Pobreza y Políticas Públicas de la Maestría en Políticas Públicas de las Facultades de Ciencias Sociales.',
        'Dirección de Tesis: grado y posgrado:':'Dirección de Tesis: grado y posgrado:',
        'Dirección de Trabajo Final de Grado (FCEA) de Julieta Pessina y Carolina Ardoguein. Finalizada. 2021-2022.':'Dirección de Trabajo Final de Grado (FCEA) de Julieta Pessina y Carolina Ardoguein. Finalizada. 2021-2022.',
        'Co-Dirección (junto a Matías Brum) de Tesis de Maestría de Joaquín Toledo en Maestría de FCEA. 2021-2022.':'Co-Dirección (junto a Matías Brum) de Tesis de Maestría de Joaquín Toledo en Maestría de FCEA. 2021-2022.',
        'Previamente: dictado de cursos de grado:':'Previamente: dictado de cursos de grado:',
        'Desigualdad y Pobreza, Economía del Uruguay, Economía I, Matemática I y Estadística I.':'Desigualdad y Pobreza, Economía del Uruguay, Economía I, Matemática I y Estadística I.',
      },
      'en': {
        'Inicio': 'Home',
        'Enseñanza': 'Teaching',
        'Publicaciones': 'Publications',
        'Prensa': 'Press',
        'Articulos': 'Articles',
        'Español': 'Spanish',
        'Inglés': 'English',
        'ACTIVIDADES DE ENSEÑANZA':'TEACHING ACTIVITIES',
        'Cursos dictados':'Dictated courses',
        'Historia del Pensamiento Económico. Curso obligatorio del séptimo semestre de la Licenciatura en Economía (Encargado del curso). 2021-2024.':'History of economic thought. Mandatory course of the seventh semester of the Bachelors Degree in Economics (Course Manager). 2021-2024.',
        'Economía Descriptiva. Curso obligatorio del segundo semestre de la Licenciatura en Economía. 2022-2024.':'Descriptive Economics. Mandatory course of the second semester of the Bachelors Degree in Economics. 2022-2024.',
        'Tópicos de Distribución del Ingreso de la Maestría en Economía de la Facultad de Ciencias Económicas y de Administración.':'Topics of Income Distribution of the Masters Degree in Economics of the Faculty of Economics and Administration.',
        'Colaboración en curso de Tópicos de Desigualdad, Pobreza y Políticas Públicas de la Maestría en Políticas Públicas de las Facultades de Ciencias Sociales.':'Collaboration on Topics of Inequality, Poverty and Public Policies course of the Masters Degree in Public Policies of the Faculties of Social Sciences.',
        'Dirección de Tesis: grado y posgrado:':'Thesis direction: degree and postgraduate:',
        'Dirección de Trabajo Final de Grado (FCEA) de Julieta Pessina y Carolina Ardoguein. Finalizada. 2021-2022.':'Final Degree Project Direction (FCEA) by Julieta Pessina and Carolina Ardoguein. Finished. 2021-2022.',
        'Co-Dirección (junto a Matías Brum) de Tesis de Maestría de Joaquín Toledo en Maestría de FCEA. 2021-2022.':'Co-Direction (with Matías Brum) of Joaquín Toledos Masters Thesis in the FCEA Masters Degree. 2021-2022.',
        'Previamente: dictado de cursos de grado:':'Previously: teaching degree courses:',
        'Desigualdad y Pobreza, Economía del Uruguay, Economía I, Matemática I y Estadística I.':'Inequality and Poverty, Economy of Uruguay, Economics I, Mathematics I and Statistics I.',
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
  