document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const filterButtons = document.querySelectorAll(".filter-buttons button");
const projects = document.querySelectorAll(".project");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-filter");

    projects.forEach((project) => {
      project.style.display = "block";

      if (
        category !== "all" &&
        !project.getAttribute("data-category").includes(category)
      ) {
        project.style.display = "none";
      }
    });
  });
});

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

document.querySelectorAll(".project img").forEach((image) => {
  image.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = image.src;
    captionText.innerHTML = image.alt;
  });
});

closeBtn.onclick = function () {
  modal.style.display = "none";
};
