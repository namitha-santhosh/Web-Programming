// var number = 5;
// let name = "Namitha";

// document.writeln(name+number);
// // alert("Hello World");

const formInfo = document.getElementById("formInfo");

let hasJob = true;
if(hasJob){
    showMessage("Thanks for visiting,I'm currently employed.");
} else{
    showMessage("Please look around, let me know of new opportunities!");
}

let today=new Date("08/21/2023");
let dayOfWeek = today.getDay();
if(dayOfWeek === 0 || dayOfWeek ===6){
    showMessage("Since it's a weekend, please be patient.")
}

function showMessage(message) {
    formInfo.innerHTML= "<p>"+ message +"</p>";
}

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit",function(event) {
    event.preventDefault();
    const contact = new Contact(contactForm);
    contact.send();
    showMessage("Sending your msg...Thank you:" + contact.fullName);
});

const experiences = document.getElementsByClassName("experience");
for (let x = 0; x < experiences.length; x++){
    const item = experiences[x];
    item.addEventListener("mouseenter", function(event) {
        event.target.style = "background-color: #999999";
    });
    item.addEventListener("mouseleave", function(event) {
        event.target.style = "";
    });
}

