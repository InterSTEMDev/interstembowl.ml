
export function collapseNav() {
  let button = document.querySelector('.collapse-btn');
  let content = button.nextElementSibling;

  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
    content.style.borderBottom = "2px solid gray";
    button.classList.toggle('active');
  }
}
