function topbar() {
  let prevScrollpos = window.pageYOffset;
  window.addEventListener('scroll', function () {
    let currentScrollPos = window.pageYOffset;
    // if (prevScrollpos > currentScrollPos || prevScrollpos <= 350) {
    //   document.querySelector('.topbar').style.transform = 'translateY(0)';
    // } else {
    //   document.querySelector('.topbar').style.transform = 'translateY(-100%)';
    // }
    if (currentScrollPos >= 150) {
      document.querySelector('.topbar__logo').style.width = "3.5rem";
      document.querySelector('.topbar__logo').style.height = "3.5rem";
      document.querySelector('.topbar').style.padding = "0.75rem 0";
      document.querySelector('.topbar').style.zIndex = 20;
      document.querySelector('.topbar').style.boxShadow = "0 0.5rem 1.25rem rgba(0, 0, 0, 0.25)";
      document.querySelector('.topbar__wrapper').style.alignItems = "center";
    } else if (currentScrollPos < 100) {
      document.querySelector('.topbar, .topbar__logo, .topbar__wrapper').removeAttribute("style");
      document.querySelector('.topbar__logo').removeAttribute("style");
      document.querySelector('.topbar__wrapper').removeAttribute("style");
    }
    prevScrollpos = currentScrollPos;
  });
}

topbar();