// Bootstrap modal instance
let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('exampleModal'));
let zonTargeted;
const firstname = document.getElementById("firstname");
const Rool = document.getElementById("Rool");
const lastEmail = document.getElementById("lastEmail");
const lastNumber = document.getElementById("lastNumber");
const nameregex = /^[a-zA-Z\s?]+$/;
const emilregex = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
const numberregex = /^0[67]\d{8}$/;


document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("keyNAme")) || [];
    renderCards(cart);
  
});

// AjouteCate 
function AjouteCate() {
    let cart = JSON.parse(localStorage.getItem("keyNAme")) || [];

    if (validationCart()) {

    const persone = {
        name: firstname.value,
        Rol: Rool.value,
        email: lastEmail.value,
        number: lastNumber.value,
        competences: [],
        inroom :false 
    };

  
    cart.push(persone);
    saveToLocalStorage("keyNAme", cart);

        renderCards(cart);
        
    modal.hide();
    document.forms["ajouterApprenant"].reset();
    }
}

// Save localStorage
function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Validation
function validationCart() {
    let user = true;

    if (!nameregex.test(firstname.value)) {
        firstname.style.borderColor = "red";
        user = false;
    } else firstname.style.borderColor = "green";

    if (!emilregex.test(lastEmail.value)) {
        lastEmail.style.borderColor = "red";
        user = false;
    } else lastEmail.style.borderColor = "green";

    if (!numberregex.test(lastNumber.value)) {
        lastNumber.style.borderColor = "red";
        user = false;
    } else lastNumber.style.borderColor = "green";

    return user;
}

// Ajouter input
function ajouterlesinput() {
const cartttt = document.createElement("div")
    let container = document.getElementById('dynamiqueForm');
    cartttt.innerHTML = `
        <input type="text" class="nom form-control mt-2" placeholder="competence">
    `;
    container.appendChild(cartttt)
}


function renderCards(cart) {
    const zone = document.getElementById("Cards");
    zone.innerHTML = "";
    let carts = JSON.parse(localStorage.getItem("keyNAme")) || [];
    carts.forEach((apprenant, i) => {
        if(!apprenant.inroom){
            zone.innerHTML += renderCard(apprenant, i);
        }
    });

    const elements = document.querySelectorAll(".carde");
    elements.forEach(aitem => {
        aitem.addEventListener("click", function() {
            const index = aitem.getAttribute("data-id");
            let cart = JSON.parse(localStorage.getItem("keyNAme")) || [];
            const persone = cart[index];

            // Build competences HTML
            let compHTML = "";
            persone.competences.forEach(c => {
                compHTML += `<p class="ps-2">${c}</p>`;
            });

            document.getElementById("modalContent").innerHTML = `
                <div>
                    <img src="image/image-1.png" class="align-center border-info rounded-circle">
                    <div class="User">
                        <p class="ps-2 fw-bold">${persone.name}</p>
                        <p class="ps-2 fw-bold">${persone.Rol}</p>
                        <p class="ps-2 fw-bold">${persone.email}</p>
                        <p class="ps-2 fw-bold">${persone.number}</p>
                        <h6 class="fw-bold mt-3">Competences :</h6>
                        ${compHTML}
                    </div>
                </div>`;

            let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('imageModal'));
            modal.show();
        });
    });
}


function renderCard(apprenant, i) {

    return `
    <div class="card h-25 border border-primary mb-2">
        <div class="card-body row">
            <div class="carde border ps-2  my-2 align-items-center pl-8 px-3" data-id="${i}">
                <div class="image d-flex align-items-center">
                    <img src="image/image-1.png" class="image-per border-info rounded-circle my-1" alt="photo" width="70px" height="70px">
                    <div class="User">
                        <p class="ps-2">${apprenant.name}</p>
                        <p class="ps-2">${apprenant.Rol}</p>
                    </div>
                </div>
                <div class="button-Edit">
                    <button class="bg-warning text-light border border-1 rounded-3 px-4">Edit</button>
                </div>
            </div>
        </div>
    </div>`;
    
}




const zone1 = document.getElementById('Conference');
const zone2 = document.getElementById('service');
const zone3 = document.getElementById('security');
const zone4 = document.getElementById('Reception');
const zone5 = document.getElementById('staff');
const zone6 = document.getElementById('Vault');
const divModal =document.querySelector('#modalContent');

//zone 1;
zone1.addEventListener('click', () => {

    let cart = JSON.parse(localStorage.getItem("keyNAme")) || [];
    console.log(cart);

   
      
    divModal.innerHTML = "";

    cart.forEach(prsen => {

        let divCart = document.createElement("div") 

     
        if(prsen.Rol=="Nettoyage" || prsen.Rol=="Manager" || prsen.Rol=="Autres rôles"){
        divCart.innerHTML = `
        <div class="card">
              <div class="carde border ps-2 d-flex my-2 align-items-center pl-4 px-3 rounded bg-light">
               <div class="image d-flex align-items-center">
                    <div class="image d-flex align-items-center">
                        <img src="image/image-1.png" class="image-per border-info rounded-circle my-1" alt="photo" width="70px" height="70px">
                        <div class="User">
                            <p class="ps-2">${prsen.name}</p>
                            <p class="ps-2">${prsen.Rol}</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>`;
        }

        divModal.appendChild(divCart);
    
    });

  
    
});


//zone 2


zone2.addEventListener('click', () => {

    let cart = JSON.parse(localStorage.getItem("keyNAme")) || [];
    console.log(cart);

   
    


    divModal.innerHTML = "";

    cart.forEach(prsen => {

        let divCart = document.createElement("div"); 

    
        if(prsen.Rol=="Nettoyage" || prsen.Rol=="Manager" || prsen.Rol=="Technicien IT"){
        divCart.innerHTML = `
        <div class="card">
              <div class="carde border ps-2 d-flex my-2 align-items-center pl-4 px-3 rounded bg-light">
               <div class="image d-flex align-items-center">
                    <div class="image d-flex align-items-center">
                        <img src="image/image-1.png" class="image-per border-info rounded-circle my-1" alt="photo" width="70px" height="70px">
                        <div class="User">
                            <p class="ps-2">${prsen.name}</p>
                            <p class="ps-2">${prsen.Rol}</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>`;
        }
        divModal.appendChild(divCart);
    });

   
    
});

//zone3


zone3.addEventListener('click', () => {

    let cart = JSON.parse(localStorage.getItem("keyNAme")) || [];
    console.log(cart);



    divModal.innerHTML = "";

    cart.forEach(prsen => {

        let divCart = document.createElement("div"); 

  

        if(prsen.Rol=="Nettoyage" || prsen.Rol=="Manager" || prsen.Rol=="Agent de sécurité"){
        divCart.innerHTML = `
        <div class="card">
              <div class="carde border ps-2 d-flex my-2 align-items-center pl-4 px-3 rounded bg-light">
               <div class="image d-flex align-items-center">
                    <div class="image d-flex align-items-center">
                        <img src="image/image-1.png" class="image-per border-info rounded-circle my-1" alt="photo" width="70px" height="70px">
                        <div class="User">
                            <p class="ps-2">${prsen.name}</p>
                            <p class="ps-2">${prsen.Rol}</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>`;

        }
        divModal.appendChild(divCart);
    });


});


//zon4


zone4.addEventListener('click', () => {

    let cart = JSON.parse(localStorage.getItem("keyNAme")) || [];
    console.log(cart);

   


    divModal.innerHTML = "";

    cart.forEach(prsen => {

        let divCart = document.createElement("div"); 


        if(prsen.Rol=="Réceptionniste" || prsen.Rol=="Manager" || prsen.Rol=="Nettoyage"){
        divCart.innerHTML = `
        <div class="card">
              <div class="carde border ps-2 d-flex my-2 align-items-center pl-4 px-3 rounded bg-light">
               <div class="image d-flex align-items-center">
                    <div class="image d-flex align-items-center">
                        <img src="image/image-1.png" class="image-per border-info rounded-circle my-1" alt="photo" width="70px" height="70px">
                        <div class="User">
                            <p class="ps-2">${prsen.name}</p>
                            <p class="ps-2">${prsen.Rol}</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>`;
        }

        divModal.appendChild(divCart);
    });

    
});

//zone 5


zone5.addEventListener('click', () => {

    let cart = JSON.parse(localStorage.getItem("keyNAme")) || [];
    console.log(cart);

  


    divModal.innerHTML = "";

    cart.forEach(prsen => {

        let divCart = document.createElement("div"); 

         if(prsen.Rol=="Autres rôles" || prsen.Rol=="Manager" || prsen.Rol=="Nettoyage"){
             divCart.innerHTML = `
        <div class="card">
              <div class="carde border ps-2 d-flex my-2 align-items-center pl-4 px-3 rounded bg-light">
               <div class="image d-flex align-items-center">
                    <div class="image d-flex align-items-center">
                        <img src="image/image-1.png" class="image-per border-info rounded-circle my-1" alt="photo" width="70px" height="70px">
                        <div class="User">
                            <p class="ps-2">${prsen.name}</p>
                            <p class="ps-2">${prsen.Rol}</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>`;
         }

       

        divModal.appendChild(divCart);
    });

 
    

   
});

//zone6


zone6.addEventListener('click', () => {

    let cart = JSON.parse(localStorage.getItem("keyNAme")) || [];
    console.log(cart);

   


    divModal.innerHTML = "";

    cart.forEach(prsen => {

        let divCart = document.createElement("div"); 
        if(prsen.Rol=="Autres rôles" || prsen.Rol=="Nettoyage"){
              divCart.innerHTML = `
        <div class="card">
              <div class="carde border ps-2 d-flex my-2 align-items-center pl-4 px-3 rounded bg-light">
               <div class="image d-flex align-items-center">
                    <div class="image d-flex align-items-center">
                        <img src="image/image-1.png" class="image-per border-info rounded-circle my-1" alt="photo" width="70px" height="70px">
                        <div class="User">
                            <p class="ps-2">${prsen.name}</p>
                            <p class="ps-2">${prsen.Rol}</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>`;
        }
      

        divModal.appendChild(divCart);
    });

});










document.getElementById('ajouteCompitence').addEventListener("click", AjouteCate);
document.getElementById('ajouter').addEventListener("click", ajouterlesinput);
