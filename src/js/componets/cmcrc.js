export const Cmсrc = () => {


  class SliderAnimation {
    constructor () {
      this.wrapper = $('.cmcrc__slider');
      this.dots = document.querySelectorAll('.custom-crc');
      this.defColor = '#E5E5E5';
      this.activeClass = 'active';
      this.circle = document.querySelector('#cmcrc-vg');
      this.idPrefix = {
        dot: 'crc-',
        line: 'line-'
      };
      this.title = document.querySelector('.cmcrc__title');
      this.lines = document.querySelectorAll('.main-line');
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
        autoplay: false
      });

      const idPrefix = this.idPrefix;
      window.addEventListener( 'load', () => {
        this.circle.classList.add('zoomIn');
        setTimeout( () => {

          this.wrapper.slick('slickPlay');
          const line = document.getElementById( this.idPrefix.line + 1 );
          const dot =  document.getElementById( this.idPrefix.dot + 1 );

          dot.classList.add(this.activeClass);
          dot.style = null;
          line.style.opacity = 1;
        },1500)
      })
    }

    fnClickDot() {
      const wrapper = this.wrapper;
      this.dots.forEach( dot => {
        dot.addEventListener( 'click', function () {
          const curId = this.id.slice(4);
          wrapper.slick('slickGoTo',curId-1);
        });
      });
    }


    fnSliderChanged() {
      this.wrapper.on('afterChange', (event, slick, currentSlide, nextSlide) => {
        this.dots.forEach( dot => {
          dot.style.fill = this.defColor;
          dot.classList.remove(this.activeClass)
        });

        this.lines.forEach( line => line.style.opacity = 0);


        const line = document.getElementById( this.idPrefix.line + ( currentSlide+1 ) );

        const dot =  document.getElementById( this.idPrefix.dot + ( currentSlide+1 ) );

        dot.classList.add(this.activeClass);
        dot.style = null;
        line.style.opacity = 1;

      });
    }

    init() {

      this.dots.forEach( ( dot, i) => {
        dot.style.fill = this.defColor;
      });

      this.addLines();
      this.fnClickDot();
      this.fnSlider();
      this.fnSliderChanged();
    }
  }

  const sliderAnimation = new SliderAnimation;

  sliderAnimation.init();

  window.addEventListener('load', () => {
    setTimeout(function () {
      var scene = document.getElementById('scene');
      var parallaxInstance = new Parallax(scene);
    });

  })

};