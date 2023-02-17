function topbar() {
  let prevScrollpos = window.pageYOffset;
  let screenHeight = window.innerHeight;
  window.addEventListener('scroll', function () {
    let currentScrollPos = window.pageYOffset;
    // if (prevScrollpos > currentScrollPos || prevScrollpos <= 350) {
    //   document.querySelector('.topbar').style.transform = 'translateY(0)';
    // } else {
    //   document.querySelector('.topbar').style.transform = 'translateY(-100%)';
    // }
    if (currentScrollPos >= screenHeight) {
      document.querySelector('.topbar.--main .topbar__logo').style.width = "3.5rem";
      document.querySelector('.topbar.--main .topbar__logo').style.height = "3.5rem";
      document.querySelector('.topbar.--main').style.padding = "0.75rem 0";
      document.querySelector('.topbar.--main').style.opacity = 1;
      document.querySelector('.topbar.--main').style.pointerEvents = "all";
      document.querySelector('.topbar.--main').style.boxShadow = "0 0.5rem 1.25rem rgba(0, 0, 0, 0.25)";
      document.querySelector('.topbar.--main .topbar__wrapper').style.alignItems = "center";
    } else if (currentScrollPos < screenHeight) {
      document.querySelector('.topbar.--main').style.opacity = 0;
      document.querySelector('.topbar.--main').style.pointerEvents = "none";
      document.querySelector('.topbar.--main, .topbar.--main .topbar__logo, .topbar__wrapper').removeAttribute("style");
      document.querySelector('.topbar.--main .topbar__logo').removeAttribute("style");
      document.querySelector('.topbar.--main .topbar__wrapper').removeAttribute("style");
    }
    prevScrollpos = currentScrollPos;
  });
}

topbar();

function topbarBurger() {
  const buttons = document.querySelectorAll('.topbar__burger');
  const menu = document.querySelector('.mobile-menu');
  const menuBar = document.querySelector('.topbar.--header');


  buttons.forEach(el => el.addEventListener('click', burgerHandler));

  function burgerHandler(e) {
    if (e.currentTarget.classList.contains('--is-active')) {
      buttons.forEach(el => el.classList.remove('--is-active'));
      menuBar.removeAttribute('style');
      menu.removeAttribute('style')
    } else {
      buttons.forEach(el => el.classList.add('--is-active'));
      menu.style.transform = "translateX(0)";
    }
  }
}
topbarBurger();