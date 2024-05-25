document.getElementById('login-form').addEventListener('submit', function () {
    event.preventDefault(); // Evita que el formulario se envie de la manera tradicional
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Lista de usuarios y contraseÃ±as (solo para fines de demostraciÃ³n)
    const users = [
        {
            email: "albertobarron208@gmail.com",
            password: "alberto1bm34y&"
        },
        {
            email: "Admin@tese.edu.com",
            password: "Dule25#4"
        },
        {
            email: "alberto@example.com",
            password: "alberto1bm34y&"
        },
    ];
    // Verificar si el usuario y la contraseÃ±a son correctos
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        window.location.href = "pagina/pag.principal.html"; // Redirige a la segunda pÃ¡gina
    } else {
        alert('Usuario o contraseÃ±a incorrectos');
    }
});