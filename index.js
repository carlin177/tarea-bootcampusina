class Activity {
    constructor(id, title, description, imgUrl){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }

}

class Repository {
    constructor(){
        this.activities = [];
        this.contador = 1; 
    }
    getAllActivities(){
        return this.activities;
    }
    createActivity(activity){
        const actividad = new Activity(this.contador, activity.title, activity.description, activity.imgUrl);
        this.activities.push(actividad);
        this.contador++;
        return actividad;
    }
}

const repositorio = new Repository();

let inputNombre = document.getElementById("nombre");
let inputDescripcion = document.getElementById("descripcion");
let inputUrl = document.getElementById("url");

let btnAgregar = document.getElementById("btnAgregar");
let contenedorActividades = document.getElementById("contenedorActividades");

const eventos = () => {
    btnAgregar.addEventListener("click", () => {
        let actividad = {
            title: inputNombre.value,
            description: inputDescripcion.value,
            imgUrl: inputUrl.value
        };
        repositorio.createActivity(actividad);
        console.log(repositorio.getAllActivities());
        mostrarActividades();
    });
}
const mostrarActividades = () => {
    contenedorActividades.innerHTML = "";
    let actividades = repositorio.getAllActivities();
    actividades.forEach(actividad => {
        let div = document.createElement("div");
        div.innerHTML = `
            <h3>${actividad.title}</h3>
            <p>${actividad.description}</p>
            <img src="${actividad.imgUrl}" alt="${actividad.title}">
        `;
        contenedorActividades.appendChild(div);
    });
}   
eventos();
