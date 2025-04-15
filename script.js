function mostrarFotos() {
    const galeriaDiv = document.getElementById('galeria');
    galeriaDiv.innerHTML = ''; // Limpiar el contenido anterior

    // Enlace compartido de Google Fotos (asegurate de tener el enlace correcto)
    const googleFotosLink = "https://photos.app.goo.gl/AsenCKSkQ3kgGjH88";
    
    // Ejemplo de cargar imágenes (puedes modificar esto para cargar las fotos manualmente)
    const photos = [
        'https://photos.app.goo.gl/AsenCKSkQ3kgGjH88',
        'url_de_foto_2.jpg',
        'url_de_foto_3.jpg',
        'url_de_foto_4.jpg',
        'url_de_foto_5.jpg'
    ];

    photos.forEach(photo => {
        const imgElement = document.createElement('img');
        imgElement.src = photo;
        imgElement.alt = 'Foto de la galería';
        galeriaDiv.appendChild(imgElement);
    });
}
