// Constructor for the services (global variables)
function Service(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
}
///////////////////////////
$(document).ready(function () {
    $("#serviceRegistrationForm").on("submit", function (event) {
        event.preventDefault();

////////////////////////////////////
        const nameInput = $("#serviceName");
        const descInput = $("#serviceDescription");
        const priceInput = $("#servicePrice");

        const name = nameInput.val().trim();
        const description = descInput.val().trim();
        const price = priceInput.val().trim();

// Reset all error borders first////////
        nameInput.removeClass("error-border");
        descInput.removeClass("error-border");
        priceInput.removeClass("error-border");

// Form Validation Fields/////////////////
        let hasError = false;

        if (!name) {
            nameInput.addClass("error-border");
            hasError = true;
        }

        if (!description) {
            descInput.addClass("error-border");
            hasError = true;
        }

        if (!price || isNaN(price) || price <= 0) {
            priceInput.addClass("error-border");
            hasError = true;
        }

        if (hasError) {
            return; 
        }

///////Create a New Service///////////////////////////////////////////////////
        const newService = new Service(name, description, parseFloat(price));
        console.log("New service registered:", newService);

        

// Clears the forms and removes previous error red borders/////////////////////
        $("#serviceRegistrationForm")[0].reset();
        nameInput.removeClass("error-border");
        descInput.removeClass("error-border");
        priceInput.removeClass("error-border");
    });
});
