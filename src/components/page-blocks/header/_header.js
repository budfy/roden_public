function headerType() {
  const typed = new Typed('.header__title-typed', {
    strings: ["запускати", "покращувати", "підтримувати"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 3000,
    smartBackspace: true,
    loop: true,
    loopCount: Infinity,
  });
}
headerType()