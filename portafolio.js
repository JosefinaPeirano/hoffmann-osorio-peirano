var trabajos = [{
    figure: "media/rum.png",
    alt: "Descripción de la imagen",
    title: "Rum",
    about: "Texto simulado de descripción de primer trabajo"
}, {
    figure: "media/mako.png",
    alt: "Descripción de la imagen",
    title: "Mako",
    about: "Texto simulado de descripción de segundo trabajo"
}, {
    figure: "media/virutex.png",
    alt: "Descripción de la imagen",
    title: "Parches Virutex",
    about: "Texto simulado de descripción de tercer trabajo"
}, {
    figure: "media/zoologico.png",
    alt: "Descripción de la imagen",
    title: "Enriquecimiento Ambiental Animal",
    about: "Texto simulado de descripción de cuarto trabajo"
}, {
    figure: "media/foster.png",
    alt: "Descripción de la imagen",
    title: "Estampado",
    about: "Texto simulado de descripción de quinto trabajo"
}, {
    figure: "media/el borrador.png",
    alt: "Descripción de la imagen",
    title: "El Borrador",
    about: "Texto simulado de descripción de sexto trabajo"
}, {
    figure: "media/arruca.png",
    alt: "Descripción de la imagen",
    title: "Arruca",
    about: "Texto simulado de descripción de séptimo trabajo"
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
