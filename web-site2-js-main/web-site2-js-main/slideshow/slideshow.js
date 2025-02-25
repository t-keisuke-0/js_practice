'use strict'

{
  //ここにJSコードを入力してください。
  const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg'
  ]

  let currentIndex = 0
  const slideImage = document.getElementById("slide-image")
  const nextBtn = document.getElementById("next-btn")
  const prevBtn = document.getElementById("prev-btn")
  const startBtn = document.getElementById("start-btn")
  const stopBtn = document.getElementById("stop-btn")

  function nextSlide() {
    currentIndex++
    if (currentIndex > images.length - 1) {
      currentIndex = 0
    }
    slideImage.src = images[currentIndex]
  }

  function prevSlide() {
    currentIndex--
    if (currentIndex < 0) {
      currentIndex = images.length - 1
    }
    slideImage.src = images[currentIndex]
  }

  let intervalId

  function startSlide() {
    startBtn.disabled = true
    stopBtn.disabled = false

    intervalId = setInterval(nextSlide, 1000)
  }

  function stopSlide() {
    startBtn.disabled = false
    stopBtn.disabled = true

    clearInterval(intervalId)
  }


  nextBtn.addEventListener('click', nextSlide)
  prevBtn.addEventListener('click', prevSlide)
  startBtn.addEventListener('click', startSlide)
  stopBtn.addEventListener('click', stopSlide)
}
