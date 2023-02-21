const nav = document.querySelector("header");
const toggle = document.querySelector(".mobile-nav-toggle");

toggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    toggle.setAttribute("aria-expanded", true);
  }else{
    nav.setAttribute("data-visible", false);
    toggle.setAttribute("aria-expanded", false);
  }
});
