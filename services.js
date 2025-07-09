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
        const nameEntry = $("#serviceName");
        const descEntry = $("#serviceDescription");
        const priceEntry = $("#servicePrice");

        const name = nameEntry.val().trim();
        const description = descEntry.val().trim();
        const price = priceEntry.val().trim();

// Reset all error borders first////////
        nameEntry.removeClass("error-border");
        descEntry.removeClass("error-border");
        priceEntry.removeClass("error-border");

// Form Validation Fields/////////////////
        let hasError = false;

        if (!name) {
            nameEntry.addClass("error-border");
            hasError = true;
        }

        if (!description) {
            descEntry.addClass("error-border");
            hasError = true;
        }

        if (!price || isNaN(price) || price <= 0) {
            priceEntry.addClass("error-border");
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
        nameEntry.removeClass("error-border");
        descEntry.removeClass("error-border");
        priceEntry.removeClass("error-border");
    });
});
