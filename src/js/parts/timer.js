function timer() {
   //таймер
   const dedLine = 'May 24 2023 00:00:00'

   function getTimeRemaining(endtime) {
      let t = Date.parse(endtime) - Date.parse(new Date())
      let seconds = Math.floor((t / 1000) % 60),
         minutes = Math.floor((t / 1000 / 60) % 60),
         hours = Math.floor((t / (1000 * 60 * 60)) % 24),
         day = Math.floor(t / (1000 * 60 * 60 * 24))

      return {
         total: t,
         hours: hours,
         minutes: minutes,
         seconds: seconds,
         day: day,
      }
   }
   function setClock(id, endtime) {
      let timer = document.getElementById(id),
         hours = timer.querySelector('.hours'),
         minutes = timer.querySelector('.minutes'),
         seconds = timer.querySelector('.seconds'),
         days = timer.querySelector('.days'),
         timeInterval = setInterval(upDate, 1000)
      function upDate() {
         let t = getTimeRemaining(endtime)
         hours.textContent = t.hours
         minutes.textContent = t.minutes
         seconds.textContent = t.seconds
         days.textContent = t.day
         if (t.total <= 0) {
            clearInterval(timeInterval)
         }
      }
   }

   setClock('timer', dedLine)
}
module.exports = timer
