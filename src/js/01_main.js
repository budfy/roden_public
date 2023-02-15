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