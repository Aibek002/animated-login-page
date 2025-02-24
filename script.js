const sign_in = document.getElementById("sign-in-btn");
const sign_up = document.getElementById("sign-up-btn");
const container = document.getElementById("container");

sign_up.addEventListener("click", () => {
    container.classList.add("active");
});
sign_in.addEventListener("click", () => {
    container.classList.remove("active");
});
