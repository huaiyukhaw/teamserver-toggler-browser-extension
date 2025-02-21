browser.commands.onCommand.addListener((command) => {
    if (command === "run_script") {
        browser.tabs.executeScript({
            code: `
          var togglers = document.querySelectorAll(".pds-table .pds-heading--xs");
          if (togglers) {
          togglers.forEach((toggler) => {
              toggler.classList.toggle("pds-line-clamp-2");
          });
          }
        `
        });
    }
});