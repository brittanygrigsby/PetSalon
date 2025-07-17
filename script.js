// Salon Object
const salon = {
    
    phone: "(213)123-4567",
    address: {
        street: "123 Puppy Lane",
        city: "Los Angeles",
        state: "CA",
        zip: "12345"
    },
    hours: {
        open: "9:00 AM",
        close: "5:00 PM"
    },
    owner: "Brittany Grigsby"
};

// Display Salon Information
function displaySalonInformation() {
    let salonContainer = document.getElementById("salonContainer");
    let information = `
        
        <p><strong>Owner:</strong> ${salon.owner}</p>
        <p><strong>Phone:</strong> ${salon.phone}</p>
        <p><strong>Address:</strong> ${salon.address.street}, ${salon.address.city}, ${salon.address.state}, ${salon.address.zip}</p>
        <p><strong>Hours:</strong> ${salon.hours.open} to ${salon.hours.close}</p>
    `;
    salonContainer.innerHTML = information;
}

$(document).ready(function() {
displaySalonInformation();

$("#changeModeButton").click(function(){
$("body").toggleClass("dark-mode");

const isDark = $("body").hasClass("dark-mode");


});

});


