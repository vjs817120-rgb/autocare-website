// ===== IMAGE SLIDER =====
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
  index = (index + 1) % slides.length;
}

if (slides.length > 0) {
  setInterval(showSlide, 3000);
}

// ===== CONDITIONAL FORM FIELDS =====
const serviceType = document.getElementById("serviceType");
const problem = document.getElementById("problem");
const serviceDate = document.getElementById("serviceDate");

if (serviceType) {
  serviceType.addEventListener("change", () => {
    problem.style.display = serviceType.value === "emergency" ? "block" : "none";
    serviceDate.style.display = serviceType.value === "periodic" ? "block" : "none";
  });
}
