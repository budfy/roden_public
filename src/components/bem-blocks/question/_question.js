function questions() {
  const questions = document.querySelectorAll('.question');
  const qButtons = document.querySelectorAll('.question__title');

  qButtons.forEach(
    el => el.addEventListener('click', qButtonHandler)
  )

  function qButtonHandler(e) {
    const parent = e.currentTarget.parentElement;
    if (parent.classList.contains('--is-opening') || parent.classList.contains('--is-open')) {
      closeQuestion(parent)
    } else {
      questions.forEach(el => closeQuestion(el));
      openQuestion(parent);
      parent.scrollIntoView({
        behavior: "smooth",
        block: "center"
      })
    }
  }

  function openQuestion(elem) {
    elem.classList.add('--is-opening');
    elem.querySelector('.question__content-wrapper').style.height = elem.querySelector('.question__content-inner').scrollHeight + 'px';
    setTimeout(() => {
      elem.classList.remove('--is-opening');
      elem.classList.add('--is-open');
      elem.removeAttribute('style');
    }, 250);
  }

  function closeQuestion(elem) {
    elem.querySelector('.question__content-wrapper').style.height = 0;
    elem.querySelector('.question__content-wrapper').removeAttribute('style');
    elem.classList.remove('--is-opening');
    elem.classList.remove('--is-open');
  }
}

questions();