function topbar() {
  let prevScrollpos = window.pageYOffset;
  window.addEventListener('scroll', function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos || prevScrollpos <= document.querySelector('.topbar').scrollHeight) {
      document.querySelector('.topbar').style.transform = 'translateY(0)';
    } else {
      document.querySelector('.topbar').style.transform = 'translateY(-100%)';
    }
    if (currentScrollPos >= 500) {
      document.querySelector('.topbar__logo').style.width = "3.5rem";
      document.querySelector('.topbar__logo').style.height = "3.5rem";
    } else if (currentScrollPos <= 400) {
      document.querySelector('.topbar__logo').removeAttribute("style")
    }
    prevScrollpos = currentScrollPos;
  });
}

topbar();