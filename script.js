const buttons = document.querySelectorAll(".btn-bookmark");
const info = document.querySelector(".info");
const btnArray = [...buttons];
const btnIdArray = btnArray.map((btn) => btn.id);

// show projects by default
$(".info").load(`./scr/templates/projects.html`);

function addActive() {
  for (let i = 0; i < btnArray.length; i++) {
    btnArray[i].classList.remove("active");
  }
  this.classList.add("active");
}

function handleClick(event) {
  let id = event.target.id;
  if (btnIdArray.includes(id)) {
    $(".info").load(`./scr/templates/${id}.html`);
  }
}

btnArray.forEach((btn) => btn.addEventListener("click", addActive));
document.addEventListener("click", handleClick);
