
let cart =[];

function AjouteCate (){
const firstname = document.getElementById("firstname");
const Rool = document.getElementById("Rool");
const  lastEmail= document.getElementById("lastEmail");
const lastNumber = document.getElementById("lastNumber");
const  company= document.getElementById("company");


 const persone ={ //is correct 
    name:firstname.value,
    Rol :Rool.value,
    email :lastEmail.value,
    number :lastNumber.value,
    Experionse :company.value
 
 }

 cart.push(persone);


//  let lastElement = cart[cart.length -1]
//  console.log(`ladjflasdjfl ${lastElement.name}`
//);

let container = document.getElementById('Cards');

let cardHTML = `
                       
                        <div class="carde border ps-2 d-flex my-2 align-items-center justify-content-between pl-8 px-3 ">
                            <div class="image d-flex align-items-center">
                                <img src="image/image-1.png" class="image-per border-info rounded-circle my-1" alt="photo" width="70px" height="70px ">

                                 <div class="User">
                                 <p class="ps-2 fw-bold">${persone.name}</p>
                                 <p class="ps-2 fw-bold">${persone.Rol}</p>
                            </div>
                            </div>
                           
                            <div class="button-Edit">
                                 <button class=" bg-warning text-light border border-1 rounded-3 px-4">Edit</button>

                            </div>
                        </div>

`;

 container.innerHTML += cardHTML;

}

document.getElementById('ajouteCompitence').addEventListener("click", AjouteCate);


