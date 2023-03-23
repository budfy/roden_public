function headerType() {
  let strs = document.documentElement.lang !== "en" ? ["запускати", "покращувати", "підтримувати"] : ["launch", "improve", "support"];
  const typed = new Typed('.header__title-typed', {
    strings: strs,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 3000,
    smartBackspace: true,
    loop: true,
    loopCount: Infinity,
  });
}
headerType();

function resizeVideo() {
  const video = document.querySelector('.header__video');
  const screenWidth = window.innerWidth;

  if (screenWidth < 1024) {
    video.setAttribute('src', 'video/roden_400x300_30.mp4');
  } else if (screenWidth < 1366) {
    video.setAttribute('src', 'video/roden_600x450_30.mp4')
  } else {
    video.setAttribute('src', 'video/roden_800x600_30.mp4');
  }
}
resizeVideo();