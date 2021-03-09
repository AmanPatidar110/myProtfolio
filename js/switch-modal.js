
const ham = document.querySelector(".ham");
const cancel = document.querySelector(".cancel");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");

backdrop.addEventListener("click", () => {
    cancel.click();
})

ham.addEventListener("click", () => {
    modal.classList.add("appear-modal");
    cancel.classList.add("appear-modal");
    ham.classList.add("hide");
    backdrop.style.display = "block";
});

cancel.addEventListener("click", () => {
    console.log("triggered!")
    modal.classList.remove("appear-modal");
    cancel.classList.remove("appear-modal");
    ham.classList.remove("hide");
    backdrop.style.display = "none";
});