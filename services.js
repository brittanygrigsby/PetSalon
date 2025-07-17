// Constructor for the services (global variables)
// Allows to replaced with what was inputted into form by user
function Service(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
}

//Waits until HTML is loaded
$(document).ready(function () {
//Service Submission Page
    $("#serviceRegistrationForm").on("submit", function (event) {
        event.preventDefault();

// Collect user input and trim empty space
        const nameEntry = $("#serviceName");
        const descEntry = $("#serviceDescription");
        const priceEntry = $("#servicePrice");

        const name = nameEntry.val().trim();
        const description = descEntry.val().trim();
        const price = priceEntry.val().trim();

// Resets red error borders
        nameEntry.removeClass("error-border");
        descEntry.removeClass("error-border");
        priceEntry.removeClass("error-border");

// Form Validation, checks for empty input
//Flags red from CSS if empty
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

        if (hasError) return;

// Creates new service and stores in the local storage
        const newService = new Service(name, description, parseFloat(price));
        console.log("New service registered:", newService);

        let serviceList = JSON.parse(localStorage.getItem("service")) || [];
        serviceList.push(newService);
        localStorage.setItem("service", JSON.stringify(serviceList));

        alert(`${newService.name} service has been saved.`);
        $("#serviceRegistrationForm")[0].reset();
    });

    // Loads service information at the bottom of the page
    $("#loadButton").click(function (event) {
        event.preventDefault();

        const serviceList = JSON.parse(localStorage.getItem("service")) || [];
//Checks to make sure theres at least one item
        if (serviceList.length > 0) {
            const output = serviceList.map(s =>
                `Name: ${s.name}, Description: ${s.description}, Price: $${s.price.toFixed(2)}`
            ).join("<br>");
            $("#result").html(output);
        } else {
            $("#result").text("No data found");
        }
    });

    // Clears Service information at the bottom of the page
    $("#clearButton").click(function (event) {
        event.preventDefault();

        const confirmation = confirm("Are you sure you want to clear the data?");
        if (confirmation) {
            
            // Remove data
            localStorage.removeItem("service");

            // Clears the form and display
            $("#serviceRegistrationForm")[0].reset();
            $("#result").text("");

            // Remove error borders
            $("#serviceName").removeClass("error-border");
            $("#serviceDescription").removeClass("error-border");
            $("#servicePrice").removeClass("error-border");

            alert("Service data cleared.");
        }
    });
});
