/////////////////////////// Pet Array ////////////////////////////////////
let pets = [
    { name: "William", age: 6, gender: "Male", service: "Grooming", type: "Dog", breed: "Bulldog" },
    { name: "Bebe", age: 4, gender: "Female", service: "Spa", type: "Dog", breed: "Pug" },
    { name: "Bob", age: 2, gender: "Male", service: "Day care", type: "Dog", breed: "Terrier" }
];

/////////////////////////Pet Constructor//////////////////////////////////
function Pet(name, age, gender, service, type, breed) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.service = service;
    this.type = type;
    this.breed = breed;
}

//////////// Global//////////////////////////////////////////////////////
const petRegistrationForm = document.getElementById("petRegistrationForm");
const petsList = document.getElementById("petsList");
const countElement = document.getElementById("petCount");

//////////////////// Display total pet count///////////////////////////////
function displayPetCount() {
    countElement.innerText = "Total Pets Registered: " + pets.length;
}

/////////////////////// Display all pets//////////////////////////////////
function displayAllPets() {
    petsList.innerHTML = "";
    pets.forEach(newPet => {
        petsList.innerHTML += `
            <div class="pet-card">
                <p>${newPet.name}</p>
                <p>Age: ${newPet.age}</p>
                <p>Gender: ${newPet.gender}</p>
                <p>Service: ${newPet.service}</p>
                <p>Type: ${newPet.type}</p>
                <p>Breed: ${newPet.breed}</p>
            </div>
        `;

        
    });
}

//////Pet Registration///////////////////////////////////////////////////
function registerPet(event) {
    event.preventDefault();

    const name = petRegistrationForm.elements["petName"].value;
    const age = petRegistrationForm.elements["petAge"].value;
    const gender = petRegistrationForm.elements["petGender"].value;
    const service = petRegistrationForm.elements["petService"].value;
    const type = petRegistrationForm.elements["petType"].value;
    const breed = petRegistrationForm.elements["petBreed"].value;


    const newPet = new Pet(name, age, gender, service, type, breed);
    pets.push(newPet);

    displayPetCount();
    displayAllPets();
    petRegistrationForm.reset(); // Clear form
}

// Gather and upload new inputted pet/////////////////////////////
petRegistrationForm.addEventListener("submit", registerPet);


displayPetCount();
displayAllPets();
