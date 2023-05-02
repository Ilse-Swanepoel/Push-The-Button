
  const menuBtn = document.querySelector(".burger-menu");
  const navItems = document.querySelector(".navigation-bar");

  let showMenu = false;
  menuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    if (!showMenu) {
      menuBtn.classList.add("close");
      navItems.classList.add("show-menu");
      showMenu = true;
    } else {
      menuBtn.classList.remove("close");
      navItems.classList.remove("show-menu");
      showMenu = false;
    }
  }
