function calc() {
   // каькулятор

   let persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daySum = 0,
      total = 0;

   totalValue.textContent = 0;
   persons.addEventListener('input', function () {
      personsSum = +this.value;
      total = (daySum + personsSum) * 4000;
      if (restDays.value == '' || personsSum == '') {
         totalValue.textContent = 0;
      } else {
         totalValue.textContent = total;
      }
   });
   restDays.addEventListener('input', function () {
      daySum = +this.value;
      total = (daySum + personsSum) * 4000;
      if (persons.value == '' || daySum == '') {
         totalValue.innerHTML = 0;
      } else {
         totalValue.textContent = total;
      }
   });
   place.addEventListener('change', function () {
      if (restDays.value == '' || persons.value == '') {
         totalValue.textContent = 0;
      } else {
         let a = total;
         totalValue.innerHTML = a * this.options[this.selectedIndex].value;
      }
   });
}
module.exports = calc;
