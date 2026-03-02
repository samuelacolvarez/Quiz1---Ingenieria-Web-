function init(){
    var form =  document.getElementById("profileForm");
    form.addEventListener("submit", handleSubmit);
    renderEmptyProfile();
}

function handleSubmit(event){
    event.preventDefault();

    var form = document.getElementById("profileForm");

    if (!form.checkValidity()){
        form.reportValidity();
        return;
    }

    var name = document.getElementById("nameInput").value;
    var age = document.getElementById("ageInput").value;
    var career = document.getElementById("careerSelect").value;

    renderProfile({name: name, age: age, career: career});
    showMessage("Perfil creado exitosamente!");
}

function renderProfile(datos){
    document.getElementById("profileTitle").textContent = "Perfil de " + datos.name;
    document.getElementById("profileText").textContent = "Edad: " + datos.age + " | Carrera: " + datos.career;
}

function showMessage(text, type){
    var mensaje = document.getElementById("msg");
    mensaje.textContent = text;
    mensaje.className = ""; 
    mensaje.className = type; 
}

function renderEmptyProfile(){
    document.getElementById("profileTitle").textContent = "Perfil Vacío";
    document.getElementById("profileText").textContent = "No se ha creado ningún perfil aún.";
    document.getElementById("msg").textContent = "";
}

init(); 




