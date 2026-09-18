const navToggle = document.getElementById("navToggle");
const mainNav = document.querySelector(".main-nav");
const reservationForm = document.getElementById("reservationForm");
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (reservationForm) {
  reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(reservationForm);
    const name = formData.get("name") || "Guest";
    const guests = formData.get("guests");
    const date = formData.get("date");
    const time = formData.get("time");

    alert(`Thanks, ${name}! Your reservation for ${guests} on ${date} at ${time} has been received.`);
    reservationForm.reset();
  });
}
