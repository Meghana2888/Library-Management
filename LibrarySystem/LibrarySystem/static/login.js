document.addEventListener("DOMContentLoaded", () => {
    const registerLink = document.querySelector(".register-link");
    const loginLink = document.querySelector(".login-link");

    registerLink.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".wrapper").classList.add("active");
    });

    loginLink.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".wrapper").classList.remove("active");
    });
});
