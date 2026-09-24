(function() {
  var controls = document.querySelectorAll(".tekton-navbar__theme-control");

  function closeMenus(except) {
    controls.forEach(function(control) {
      if (control === except) {
        return;
      }

      control.querySelector(".tekton-navbar__theme-menu").hidden = true;
      control.querySelector(".tekton-navbar__theme-toggle").setAttribute("aria-expanded", "false");
    });
  }

  controls.forEach(function(control) {
    var button = control.querySelector(".tekton-navbar__theme-toggle");
    var menu = control.querySelector(".tekton-navbar__theme-menu");

    button.addEventListener("click", function() {
      var isOpen = !menu.hidden;
      closeMenus(control);
      menu.hidden = isOpen;
      button.setAttribute("aria-expanded", String(!isOpen));
    });

    menu.addEventListener("click", function() {
      menu.hidden = true;
      button.setAttribute("aria-expanded", "false");
      button.focus();
    });
  });

  document.addEventListener("click", function(event) {
    if (!event.target.closest(".tekton-navbar__theme-control")) {
      closeMenus();
    }
  });

  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closeMenus();
    }
  });
}());
