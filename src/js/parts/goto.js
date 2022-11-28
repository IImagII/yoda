// модуль  плавной прокрутки

function goto() {
   const goTo = document.querySelectorAll('.menu[data-goto]');
   if (goTo.length > 0) {
      goTo.forEach((menuLink) => {
         menuLink.addEventListener('click', function (e) {
            const menuLink = e.target;
            if (
               menuLink.dataset.goto &&
               document.querySelector(menuLink.dataset.goto)
            ) {
               const gotoBlock = document.querySelector(menuLink.dataset.goto);
               const gotoBlockValue =
                  gotoBlock.getBoundingClientRect().top +
                  pageYOffset -
                  document.querySelector('header').offsetHeight;

               window.scrollTo({
                  top: gotoBlockValue,
                  behavior: 'smooth',
               });
               e.preventDefault();
            }
         });
      });
   }
}
module.exports = goto;
