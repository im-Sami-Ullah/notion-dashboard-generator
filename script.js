const form = document.getElementById("dashboardForm");
const output = document.getElementById("output");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const sections = document.getElementById("sections").value.split(",");

  let html = `<h2>${title}</h2>`;
  sections.forEach(sec => {
    html += `<div class="section"><strong>${sec.trim()}</strong></div>`;
  });

  output.innerHTML = html;
});
