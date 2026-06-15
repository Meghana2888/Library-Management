document.addEventListener("DOMContentLoaded", function () {
    // ✅ Step 1: Initialize EmailJS with your actual Public Key
    emailjs.init("-HRkj_IXigvAVfbXO");  // e.g., "HRkj_IXigvAVfbXO"

    // ✅ Step 2: Add event listener for the form submission
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        // ✅ Step 3: Prepare the template parameters
        const formData = {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value,
        };

        // ✅ Step 4: Send the email using EmailJS
        emailjs.send("service_l5abdti", "template_10e52x5", formData)
            .then(function (response) {
                console.log("✅ SUCCESS!", response.status, response.text);
                alert("✅ Message Sent Successfully!");
                document.getElementById("contact-form").reset();
            })
            .catch(function (error) {
                console.error("❌ FAILED TO SEND!", error);
                alert("❌ Failed to send message. Check console for details.");
            });
    });
});
