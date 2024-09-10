const propiedades_alquiler = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Apartamento de lujo en zona exclusiva",
    description:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "Prestige Suburb, 73452",
    habitaciones: 3,
    banios: 2,
    precio: 1500,
    fumar: false,
    mascota: true,
  },
  {
    id: 2,
    img: "https://plus.unsplash.com/premium_photo-1687996107376-20005edd18fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Casa campestre",
    description:
      "Esta casa está ubicada a 10 km de la ciudad",
    ubicacion: "Luxury Lane, 90234",
    habitaciones: 5,
    banios: 3,
    precio: 3900,
    fumar: false,
    mascota: false,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1724652378738-bd6ac3663fa3?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Apartamento nuevo en condominio",
    description:
      "Ubicado en la mejor zona",
    ubicacion: "Suburb Luxury 66598",
    habitaciones: 6,
    banios: 4,
    precio: 3000,
    fumar: false,
    mascota: true,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Apartamento amoblado",
    description:
      "Ubicado en una exclusiva zona central",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 3,
    banios: 2,
    precio: 2900,
    fumar: true,
    mascota: false,
  },
];

let htmlAlquiler = "";
for (let pAlquiler of propiedades_alquiler) {
  let fumarText;
  if (pAlquiler.fumar) {
    fumarText =
      '<span style="color: green;"><i class="fa-solid fa-smoking"></i> Permitido fumar</span>';
  } else {
    fumarText =
      '<span style="color: red;"><i class="fa-solid fa-ban-smoking"></i> No se permite fumar.</span>';
  }

  let mascotaText;
  if (pAlquiler.mascota) {
    mascotaText =
      '<span style="color: green;"> <i class="fa-solid fa-paw"></i> Mascotas permitidas</span>';
  } else {
    mascotaText =
      '<span style="color: red;"><i class="fa-solid fa-ban"></i> No se permiten mascotas</span>';
  }
  htmlAlquiler += `
    <div class="col-md-4 mb-4">
        <div class="card">
        <img src="${pAlquiler.img}" class="card-img-top"
            alt="Imagen del departamento"/>
            <div class="card-body">
                <h5 class="card-title">${pAlquiler.titulo}</h5>
                <p class="card-text">${pAlquiler.description}</p>
                <p>
                    <i class="fas fa-map-marker-alt"></i>${
                      pAlquiler.ubicacion
                    }</p>
                <p>
                    <i class="fas fa-bed"></i>${
                      pAlquiler.habitaciones
                    } Habitaciones
                    <i class="fas fa-bath"></i>${pAlquiler.banios} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i>${pAlquiler.precio}</p>
                <p class="${pAlquiler.fumar ? "text-success" : "text-danger"}">
                <i class="${
                  pAlquiler.fumar ? "fas fa-smoking" : "fas fa-smoking-ban"
                }"></i>
                ${
                  pAlquiler.fumar ? "Permitido fumar" : "No se permite fumar"
                }</p>
                <p class="${
                  pAlquiler.mascota ? "text-success" : "text-danger"
                }">
                <i class="${
                  pAlquiler.mascota ? "fas fa-paw" : "fa-solid fa-ban"
                }"></i>
                ${
                  pAlquiler.mascota
                    ? "Mascotas permitidas"
                    : "No se permite mascotas"
                }</p>
            </div>
        </div>
    </div>
  `;
}
document.getElementById("enVenta").innerHTML = htmlAlquiler;
