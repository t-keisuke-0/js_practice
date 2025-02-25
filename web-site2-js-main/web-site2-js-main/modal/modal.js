'use strict'
{
  //ここにJSコードを入力してください。
  const openBtn = document.getElementById("open-btn")
  const closeBtn = document.getElementById("close-btn")
  const modal = document.getElementById("modal")

  function changeModal(showModal) {
    if (showModal) {
      modal.classList.add('show-modal')
    } else {
      modal.classList.remove('show-modal')
    }
  }

  openBtn.addEventListener('click', function () { changeModal(true) })
  closeBtn.addEventListener('click', function () { changeModal(false) })
}
