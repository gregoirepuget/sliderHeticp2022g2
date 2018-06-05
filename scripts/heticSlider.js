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

    if(this.arrow)
    {
        this.arrowLeft= document.createElement("a")
        this.arrowLeft.classList.add("arrowLeft")
        this.arrowLeft.setAttribute("href", "#")
        this.container.appendChild(this.arrowLeft)
        let _this = this
        this.arrowLeft.addEventListener(
          "click",
          function(e)
          {
            e.preventDefault()
            _this.currentSlide--
            _this.move()
          }
        )

        this.arrowRight= document.createElement("a")
        this.arrowRight.classList.add("arrowRight")
        this.arrowRight.setAttribute("href", "#")
        this.container.appendChild(this.arrowRight)
        this.arrowRight.addEventListener(
          "click",
          function(e)
          {
            e.preventDefault()
            _this.currentSlide++
            _this.move()
          }
        )
    }
  }

  move(){
    console.log("Ca marche")
  }
}
