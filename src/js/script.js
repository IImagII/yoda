window.addEventListener('DOMContentLoaded', function () {
   'use strict';
   let tabs = require('./parts/tab.js'), // подключение модуля табов
      goto = require('./parts/goto.js'), // подключение модуля плавной прокрутки
      timer = require('./parts/timer.js'), // подключение модуля таймера
      modul = require('./parts/modul.js'), // подключение модуля модального окна
      // form = require('./parts/form.js'), // подключение модуля формы
      slider = require('./parts/slider.js'), // подключение модуля слайдера
      calc = require('./parts/calc.js'); // подключение модуля калуькулятора
   tabs();
   goto();
   timer();
   modul();
   // form();
   slider();
   calc();
});
