function toggleSection(checkbox) {
  const section = document.getElementById(checkbox.value);

  if (checkbox.checked) {
    section.classList.remove("hidden");
    section.querySelectorAll("input").forEach(i => i.required = true);
  } else {
    section.classList.add("hidden");
    section.querySelectorAll("input").forEach(i => {
      i.required = false;
      i.value = "";
    });
  }
}
