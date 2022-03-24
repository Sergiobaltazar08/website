const seccionesPagina = new fullpage('#fullpage', {
	// ──────────────────────────────────────────────────
	//   :::::: Opciones Basicas
	// ──────────────────────────────────────────────────
		 autoScrolling: true, // Se activa el scroll.
		 fitToSection: false, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
		 fitToSectionDelay: 300, // Delay antes de acomodar la seccion automaticamente.
		 easing: 'easeInOutCubic', // Funcion de tiempo de la animacion.
		 scrollingSpeed: 500, // Velocidad del scroll. Valores: en milisegundos.
		 css3: true, // Si usara CSS3 o javascript.
		 easingcss3: 'ease-out', // Curva de velocidad del efecto.
		 loopBottom: true, // Regresa a la primera seccion siempre y cuando se ya haya llegado a la ultima sección y el ususario siga scrolleando.
	// ──────────────────────────────────────────────────
	//   :::::: Barra de navegación
	// ──────────────────────────────────────────────────
		 navigation: true, // Muesta la barra de navegación.
		 menu: '#menu', // Menu de navegación.
		 anchors: ['Inicio','Laptops', 'Audio', 'Accesorios', 'Contacto'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
		 navigationTooltips: ['Inicio', 'Laptops', 'Audio', 'Accesorios', 'Contacto'], // Tooltips que mostrara por cada boton.
		 showActiveTooltip: false, // Mostrar tooltip activa.
	// ──────────────────────────────────────────────────
	//   :::::: Secciones
	// ──────────────────────────────────────────────────
		 sectionsColor : ['#c2c2c2', '#000', '#c2c2c2', '#000', '#c2c2c2'], // Color de fondo de cada seccion.
		 verticalCentered: true, // Si alineara de forma vertical los contenidos de cada seccion.
	// ──────────────────────────────────────────────────
	//   :::::: Animaciones (Callbacks de FullPage.js)
	// ──────────────────────────────────────────────────
	afterLoad: function(origin, destination){
		 if(destination.anchor == 'Contacto'){
			  document.querySelector('.contacto h2').style.opacity = 1;
		 }
	}
});
