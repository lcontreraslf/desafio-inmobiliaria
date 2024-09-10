const indexVentas = [
  {
    id: 1,
    img: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    titulo: "Apartamento de lujo en zona exclusiva",
    description:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    banios: 1,
    precio: 2000,
    fumar: true,
    mascota: false,
  },
  {
    id: 2,
    img: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    titulo: "Apartamento acogedor en la montaña",
    description:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: " 789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 3,
    banios: 3,
    precio: 5000,
    fumar: false,
    mascota: false,
  },
  {
    id: 3,
    img: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    titulo: "Penthouse de lujo con terraza panorámica",
    description:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: " 567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    banios: 3,
    precio: 5000,
    fumar: false,
    mascota: true,
  },
];
const indexAlquiler = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    titulo: "Apartamento en el centro de la ciudad",
    description:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: " 123 Main Street, Anytown, CA 91234",
    habitaciones: 4,
    banios: 1,
    precio: 2000,
    fumar: false,
    mascota: true,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    titulo: "Apartamento luminoso con vista al mar",
    description:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: " 456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    banios: 3,
    precio: 5000,
    fumar: true,
    mascota: false,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    titulo: "Condominio moderno en zona residencial",
    description:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: " 123 Main Street, Anytown, CA 91234",
    habitaciones: 5,
    banios: 2,
    precio: 5000,
    fumar: false,
    mascota: true,
  },
];

let htmlVentas = "";
for (const iVentas of indexVentas) {
    let fumarText;
    if (iVentas.fumar) {
        fumarText = '<span style="color: green;"><i class="fa-solid fa-smoking"></i> Permitido fumar</span>';
    } else {
        fumarText = '<span style="color: red;"><i class="fa-solid fa-ban-smoking"></i> No se permite fumar.</span>';
    }

    let mascotaText;
    if (iVentas.mascota) {
        mascotaText = '<span style="color: green;"> <i class="fa-solid fa-paw"></i> Mascotas permitidas</span>';
    } else {
        mascotaText = '<span style="color: red;"><i class="fa-solid fa-ban"></i> No se permiten mascotas</span>';
    }
  htmlVentas += `
        <div class="col-md-4 mb-4">
            <div class="card">
            <img src="${iVentas.img}" class="card-img-top"
                alt="Imagen del departamento"/>
                <div class="card-body">
                    <h5 class="card-title">${iVentas.titulo}</h5>
                    <p class="card-text">${iVentas.description}</p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i>${
                          indexVentas.ubicacion
                        }</p>
                    <p>
                        <i class="fas fa-bed"></i>${
                          iVentas.habitaciones
                        } Habitaciones
                        <i class="fas fa-bath"></i>${iVentas.banios} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i>${iVentas.precio}</p>
                    <p class="${
                      iVentas.fumar ? "text-success" : "text-danger"
                    }">
                    <i class="${
                      iVentas.fumar ? "fas fa-smoking" : "fas fa-smoking-ban"
                    }"></i>
                    ${
                      iVentas.fumar ? "Permitido fumar" : "No se permite fumar"
                    }</p>
                    <p class="${
                      iVentas.mascota ? "text-success" : "text-danger"
                    }">
                    <i class="${
                      iVentas.mascota ? "fas fa-paw" : "fa-solid fa-ban"
                    }"></i>
                    ${
                      iVentas.mascota
                        ? "Mascotas permitidas"
                        : "No se permite mascotas"
                    }</p>
                </div>
            </div>
        </div>
    `;
}
let htmlAlquiler = "";
for (const iAlquiler of indexAlquiler) {
    let fumarText;
    if (iAlquiler.fumar) {
        fumarText = '<span style="color: green;"><i class="fa-solid fa-smoking"></i> Permitido fumar</span>';
    } else {
        fumarText = '<span style="color: red;"><i class="fa-solid fa-ban-smoking"></i> No se permite fumar.</span>';
    }

    let mascotaText;
    if (iAlquiler.mascota) {
        mascotaText = '<span style="color: green;"> <i class="fa-solid fa-paw"></i> Mascotas permitidas</span>';
    } else {
        mascotaText = '<span style="color: red;"><i class="fa-solid fa-ban"></i> No se permiten mascotas</span>';
    }
    
  htmlAlquiler += `
        <div class="col-md-4 mb-4">
            <div class="card">
            <img src="${iAlquiler.img}" class="card-img-top"
                alt="Imagen del departamento"/>
                <div class="card-body">
                    <h5 class="card-title">${iAlquiler.titulo}</h5>
                    <p class="card-text">${iAlquiler.description}</p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i>${
                          iAlquiler.ubicacion
                        }</p>
                    <p>
                        <i class="fas fa-bed"></i>${
                          iAlquiler.habitaciones
                        } Habitaciones
                        <i class="fas fa-bath"></i>${iAlquiler.banios} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i>${iAlquiler.precio}</p>
                    <p class="${
                      iAlquiler.fumar ? "text-success" : "text-danger"
                    }">
                    <i class="${
                      iAlquiler.fumar ? "fas fa-smoking" : "fas fa-smoking-ban"
                    }"></i>
                    ${
                      iAlquiler.fumar
                        ? "Permitido fumar"
                        : "No se permite fumar"
                    }</p>
                    <p class="${
                      iAlquiler.mascota ? "text-success" : "text-danger"
                    }">
                    <i class="${
                      iAlquiler.mascota ? "fas fa-paw" : "fa-solid fa-ban"
                    }"></i>
                    ${
                      iAlquiler.mascota
                        ? "Mascotas permitidas"
                        : "No se permite mascotas"
                    }</p>
                </div>
            </div>
        </div>
    `;
}
document.getElementById("enVenta").innerHTML = htmlVentas;
document.getElementById("enAlquiler").innerHTML = htmlAlquiler;

