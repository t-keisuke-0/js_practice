'use strict'

{
  //ここにJSコードを入力してください。
  const menuContents = document.querySelectorAll(".menu-content")

  const downArrows = document.querySelectorAll(".fa-angle-down")

  const upArrows = document.querySelectorAll(".fa-angle-up")

  downArrows.forEach((downArrow, index) => {
    downArrow.addEventListener('click', function () {
      menuContents[index].classList.remove("display-none")
      upArrows[index].classList.remove("display-none")
      downArrow.classList.add("display-none")
    })
  })

  upArrows.forEach((upArrow, index) => {
    upArrow.addEventListener('click', function () {
      menuContents[index].classList.add("display-none")
      upArrow.classList.add("display-none")
      downArrows[index].classList.remove("display-none")
    })
  })

}
