
// conectamos nuestra api
fetch ("https://api.escuelajs.co/api/v1/users")
//convertimos nuestra data json
.then (response => response.json())
.then(data =>{


    
    let fila =""

     // Encabezado de la tabla
     fila += `<tr>
     <th>Usuario</th>
     <th>Email</th>
     <th>Password</th>
     <th>Avatar</th>
   </tr>`;

    // creamos un ciclio para extraer cada arrglo que viene en el dato
    for (let usuario of data){


        // construccion de tabla

        fila += `<tr><td> ${usuario.name}</td>
                 <td> ${usuario.email}</td>
                 <td> ${usuario.password}</td>
                 <td><img src="${usuario.avatar}"  alt="Avatar" style="width: 100px; height: 100px;"></td>`


    }

    document.getElementById("tabla").innerHTML = fila


})