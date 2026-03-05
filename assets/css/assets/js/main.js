// Active nav highlight + year
(function () {
  const year = document.getElementById("yr");
  if (year) year.textContent = new Date().getFullYear();

  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const links = document.querySelectorAll("[data-nav]");

  links.forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });
})();
