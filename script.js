(function () {
  emailjs.init("NBSr8syhjIdtQ7HQK");
  console.log("EmailJS initialized");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");

    emailjs.sendForm("service_hnzwpme", "template_qydcu5k", this).then(
      function () {
        console.log("Email sent successfully");
        alert("Message Sent Successfully!");
      },
      function (error) {
        console.error("Error sending email:", error);
        alert("Failed to send the message: " + JSON.stringify(error));
      }
    );
  });
