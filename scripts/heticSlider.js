class HeticSlider{
  constructor(container,pagination,arrow,speed){
    this.container = document.querySelector(container)
    this.containerSlider
    this.pagination = pagination
    this.arrow = arrow
    this.arrowLeft
    this.arrowRight
    this.speed = speed
    this.transition = "ease-in"
    this.currentSlide = 0

    this.init()
  }

  init(){
    this.containerSlider = document.createElement("div")
    this.containerSlider.classList.add("containerSlider")
    this.containerSlider.innerHTML = this.container.innerHTML
    this.container.innerHTML = ''
    this.container.appendChild(this.containerSlider)

    this.container.classList.add("heticSlider")
  }
}
