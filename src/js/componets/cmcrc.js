export const Cmсrc = () => {


  class SliderAnimation {
    constructor () {
      this.wrapper = $('.cmcrc__slider');
      this.dots = document.querySelectorAll('.custom-crc');
      this.defColor = '#E5E5E5';
      this.activeClass = 'active';
      this.idPrefix = 'crc-';
      this.title = document.querySelector('.cmcrc__title');
    }

    addLines() {
      this.dots.forEach( dot => {
        dot.innerHTML = '<div class="idss"></div>';
      })
    }

    fnSlider() {
      this.wrapper.slick({
        vertical: true,
        arrows: false,
        slidesToShow: 4,
        autoplay: true
      });
    }

    fnClickDot() {
      this.dots.forEach( dot => {
        dot.style.fill = this.defColor;
        dot.addEventListener( 'click', function () {
          const curId = this.id.slice(4);
          this.wrapper.slick('slickGoTo',curId);
          this.dots.forEach(dot => {
            dot.style.fill = this.defColor;
            dot.classList.remove(this.activeClass)
          });
          this.classList.add(this.activeClass);
          this.style = null;
        });
      });
    }

    fnSliderChanged() {
      this.wrapper.on('afterChange', (event, slick, currentSlide, nextSlide) => {
        this.dots.forEach( dot => {
          dot.style.fill = this.defColor;
          dot.classList.remove(this.activeClass)
        });

        const dot =  document.getElementById( this.idPrefix + ( currentSlide+1 ) );

        dot.classList.add(this.activeClass);
        dot.style = null;

      });
    }

    init() {

      this.dots.forEach( ( dot, i) => {
        const color = window.getComputedStyle(dot).getPropertyValue('fill');
        this.title.innerHTML += `<div class="line" 
                                      id="line-${i+1}"
                                      style='background: ${color}'></div>`
      });

      this.addLines();
      this.fnClickDot();
      this.fnSlider();
      this.fnSliderChanged();
    }
  }

  const sliderAnimation = new SliderAnimation;

  sliderAnimation.init();

};