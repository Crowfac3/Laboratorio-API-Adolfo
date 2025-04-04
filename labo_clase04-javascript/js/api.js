let usuarios = [];

async function obtenerUsuarios(pagina = 1) {
    try {
        const response = await fetch(`https://reqres.in/api/users?page=${pagina}`);
        const data = await response.json();
        usuarios = data.data;
        renderizarTabla(usuarios);
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
    }
}

function renderizarTabla(listaUsuarios) {
    const tbody = document.getElementById("tablaUsuarios");
    tbody.innerHTML = "";

    listaUsuarios.forEach(usuario => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.first_name}</td>
            <td>${usuario.last_name}</td>
            <td>${usuario.email}</td>
            <td><img src="${usuario.avatar}" width="60" class="rounded-circle"></td>
        `;
        tbody.appendChild(fila);
    });
}

function filtrarUsuarios() {
    const texto = document.getElementById("filtro").value.toLowerCase();
    const filtrados = usuarios.filter(u => u.first_name.toLowerCase().includes(texto));
    renderizarTabla(filtrados);
}
