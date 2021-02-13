function sendMail(contactForm) {
    emailjs.send("gmail", "discover north yorkshire", {
        "from_firstname": contactForm.firstname.value,
        "from_lastname": contactForm.lastname.value,
        "from_email": contactForm.emailaddress.value,
        "northyorkshire_query": contactForm.message.value
    })
    
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false; 
}