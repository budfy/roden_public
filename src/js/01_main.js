function bubbles() {
  const bubblesWrapper = document.querySelector('.page-bg');
  const bubblesArr = bubblesWrapper.querySelectorAll('.page-bubble');
  const pageWidth = window.innerWidth;
  const pageHeight = window.innerHeight;

  function move(el) {
    let left = el.offsetLeft;
    let width = el.offsetWidth;

    let top = el.offsetTop;
    let height = el.offsetHeight;

    let size = random(75, 200) / 100;

    el.style.transform = `scale(${ size })`;

    if (pageWidth > (left + width) && (left + width) >= 0) {
      el.style.left = random(1, pageWidth - width) + "px"
    }


    if (pageHeight > (top + height) && (top + height) >= 0) {
      el.style.top = random(1, pageHeight - height) + "px"
    }
  }

  function random(min, max) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum
  };

  bubblesArr.forEach(el => move(el));

  setInterval(() => {
    bubblesArr.forEach(el => move(el))
  }, 9750);


}
bubbles()

/* acordion js start*/
class ItcAccordion {
  constructor(target, config) {
    this._el = typeof target === 'string' ? document.querySelector(target) : target;
    const defaultConfig = {
      alwaysOpen: true,
      duration: 350
    };
    this._config = Object.assign(defaultConfig, config);
    this.addEventListener();
  }
  addEventListener() {
    this._el.addEventListener('click', (e) => {
      const elHeader = e.target.closest('.accordion__header');
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector('.accordion__item_show');
        if (elOpenItem) {
          elOpenItem !== elHeader.parentElement ? this.toggle(elOpenItem) : null;
        }
      }
      this.toggle(elHeader.parentElement);
    });
  }
  show(el) {
    const elBody = el.querySelector('.accordion__body');
    if (elBody.classList.contains('collapsing') || el.classList.contains('accordion__item_show')) {
      return;
    }
    elBody.style.display = 'block';
    const height = elBody.offsetHeight;
    elBody.style.height = 0;
    elBody.style.overflow = 'hidden';
    elBody.style.transition = `height ${this._config.duration}ms ease`;
    elBody.classList.add('collapsing');
    el.classList.add('accordion__item_slidedown');
    elBody.offsetHeight;
    elBody.style.height = `${height}px`;
    window.setTimeout(() => {
      elBody.classList.remove('collapsing');
      el.classList.remove('accordion__item_slidedown');
      elBody.classList.add('collapse');
      el.classList.add('accordion__item_show');
      elBody.style.display = '';
      elBody.style.height = '';
      elBody.style.transition = '';
      elBody.style.overflow = '';
    }, this._config.duration);
  }
  hide(el) {
    const elBody = el.querySelector('.accordion__body');
    if (elBody.classList.contains('collapsing') || !el.classList.contains('accordion__item_show')) {
      return;
    }
    elBody.style.height = `${elBody.offsetHeight}px`;
    elBody.offsetHeight;
    elBody.style.display = 'block';
    elBody.style.height = 0;
    elBody.style.overflow = 'hidden';
    elBody.style.transition = `height ${this._config.duration}ms ease`;
    elBody.classList.remove('collapse');
    el.classList.remove('accordion__item_show');
    elBody.classList.add('collapsing');
    window.setTimeout(() => {
      elBody.classList.remove('collapsing');
      elBody.classList.add('collapse');
      elBody.style.display = '';
      elBody.style.height = '';
      elBody.style.transition = '';
      elBody.style.overflow = '';
    }, this._config.duration);
  }
  toggle(el) {
    el.classList.contains('accordion__item_show') ? this.hide(el) : this.show(el);
  }
}
/* acordion js end*/