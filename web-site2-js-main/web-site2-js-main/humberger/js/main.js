{
  //ここにJSコードを入力してください。
  const hamburgerMenu = document.querySelector(".hamburger-menu")
  const navi = document.getElementById("hamburger-navigation")
  const hamburgerMenuSections = document.querySelectorAll(".hamburger-menu-section")

  hamburgerMenu.addEventListener('click', function () {
    hamburgerMenu.classList.toggle("active")
    navi.classList.toggle("active")
  })

  hamburgerMenuSections.forEach((hamburgerMenuSection) => {
    hamburgerMenuSection.addEventListener('click', function () {
      hamburgerMenu.classList.remove("active")
      navi.classList.remove("active")
    })
  })
}
