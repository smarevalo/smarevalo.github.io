
$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
    console.log(data.results[0]);
    let persona = data.results[0];
    var fechaNac = new Date(persona.dob.date);

    document.getElementById("nombre").innerHTML = persona.name.first + " " + persona.name.last;
    document.getElementById("nacimiento").innerHTML = fechaNac.getDate() + "/" + fechaNac.getMonth() + "/" + fechaNac.getFullYear();
    document.getElementById("direccion").innerHTML = persona.location.street.name + " " + persona.location.street.number + ", " + persona.location.city;
    document.getElementById("telefono").innerHTML = persona.phone;
    document.getElementById("correo").innerHTML = persona.email;
    document.getElementById("foto").innerHTML = "<img src='"+persona.picture.large+"' class='circle float-left' alt='...'>";

}
});