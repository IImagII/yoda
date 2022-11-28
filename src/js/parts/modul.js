function modul() {
   // модальное окно
   let more = document.querySelector('.more'),
      modulOverlay = document.querySelector('.overlay'),
      popClose = document.querySelector('.popup-close');
   more.addEventListener('click', function () {
      modulOverlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
   });
   popClose.addEventListener('click', function () {
      modulOverlay.style.display = 'none';
      more.classList.remove('more-splash');
      document.body.style.overflow = 'visible';
   });
}
module.exports = modul;
