const propiedades_venta = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Apartamento en venta 1",
    description:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 20987",
    habitaciones: 4,
    banios: 2,
    precio: 1900,
    fumar: true,
    mascota: false,
  },
  {
    id: 2,
    img: "https://media.istockphoto.com/id/1415886888/es/foto/casa-bungalow-artesano-reci%C3%A9n-pintado.jpg?s=1024x1024&w=is&k=20&c=-_GPzmc6yHFIp4PyX7plHw510QcfA0TkZwsP7JbhOZ4=",
    titulo: "Casa en venta 2",
    description:
      "Esta casa está ubicada en una exclusiva zona residencial",
    ubicacion: "456 Lane, Suburb, CA 08456",
    habitaciones: 6,
    banios: 4,
    precio: 4900,
    fumar: true,
    mascota: false,
  },
  {
    id: 3,
    img: "https://plus.unsplash.com/premium_photo-1661313639796-8c38ae96756f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Apartamento de lujo en zona exclusiva",
    description:
      "Apartamento ubicado en zona residencial",
    ubicacion: "789 Lane, Prestige , CA 92347",
    habitaciones: 4,
    banios: 3,
    precio: 3000,
    fumar: false,
    mascota: true,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1483097365279-e8acd3bf9f18?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Casa de lujo zona residencial",
    description:
      "Esta casa de lujo está ubicada en un exclusivo condominio",
    ubicacion: "012 Luxury Lane, Prestige Suburb, CA 48378",
    habitaciones: 5,
    banios: 3,
    precio: 4900,
    fumar: true,
    mascota: true,
  },
];

let htmlVenta = "";
for (let pVenta of propiedades_venta) {
  let fumarText;
  if (pVenta.fumar) {
    fumarText =
      '<span style="color: green;"><i class="fa-solid fa-smoking"></i> Permitido fumar</span>';
  } else {
    fumarText =
      '<span style="color: red;"><i class="fa-solid fa-ban-smoking"></i> No se permite fumar.</span>';
  }

  let mascotaText;
  if (pVenta.mascota) {
    mascotaText =
      '<span style="color: green;"> <i class="fa-solid fa-paw"></i> Mascotas permitidas</span>';
  } else {
    mascotaText =
      '<span style="color: red;"><i class="fa-solid fa-ban"></i> No se permiten mascotas</span>';
  }
  htmlVenta += `
  <div class="col-md-4 mb-4">
      <div class="card">
      <img src="${pVenta.img}" class="card-img-top"
          alt="Imagen del departamento"/>
          <div class="card-body">
              <h5 class="card-title">${pVenta.titulo}</h5>
              <p class="card-text">${pVenta.description}</p>
              <p>
                  <i class="fas fa-map-marker-alt"></i>${pVenta.ubicacion}</p>
              <p>
                  <i class="fas fa-bed"></i>${pVenta.habitaciones} Habitaciones
                  <i class="fas fa-bath"></i>${pVenta.banios} Baños
              </p>
              <p><i class="fas fa-dollar-sign"></i>${pVenta.precio}</p>
              <p class="${pVenta.fumar ? "text-success" : "text-danger"}">
              <i class="${
                pVenta.fumar ? "fas fa-smoking" : "fas fa-smoking-ban"
              }"></i>
              ${pVenta.fumar ? "Permitido fumar" : "No se permite fumar"}</p>
              <p class="${pVenta.mascota ? "text-success" : "text-danger"}">
              <i class="${
                pVenta.mascota ? "fas fa-paw" : "fa-solid fa-ban"
              }"></i>
              ${
                pVenta.mascota
                  ? "Mascotas permitidas"
                  : "No se permite mascotas"
              }</p>
          </div>
      </div>
  </div>
`;
}
document.getElementById("enVenta").innerHTML = htmlVenta;
