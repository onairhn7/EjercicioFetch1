// conectamos nuestra API
fetch("https://api.escuelajs.co/api/v1/users")
    // convertimos nuestra data JSON
    .then(response => response.json())
    .then(data => {
        let tablaBody = "";

         // Verifica la cantidad de registros devueltos por la API
         console.log("Cantidad total de registros:", data.length);

        // creamos un ciclo para extraer cada arreglo que viene en el dato
        for (let usuario of data) {
            // construccion de tabla
            tablaBody += `<tr>
                           <td>${usuario.name}</td>
                           <td>${usuario.email}</td>
                           <td>${usuario.password}</td>
                           <td><img src="${usuario.avatar}" alt="Avatar" style="width: 256px; height: 256px;"></td>
                         </tr>`;
        }

        document.getElementById("tablaBody").innerHTML = tablaBody;
    });