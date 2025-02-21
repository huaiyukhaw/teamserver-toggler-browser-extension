var togglers = document.querySelectorAll(".pds-table .pds-heading--xs");
if (togglers) {
  togglers.forEach((toggler) => {
    toggler.classList.toggle("pds-line-clamp-2");
  });
}