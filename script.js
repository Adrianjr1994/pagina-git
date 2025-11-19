$ // Script simple de bienvenida
document.addEventListener('DOMContentLoaded', function() {
    const h1 = document.querySelector('h1');

    // Cambiar color al hacer clic
    h1.addEventListener('click', function() {
        this.style.color = this.style.color === 'red' ? '#333' : 'red';
    });

    console.log('JavaScript cargado correctamente!');
});

