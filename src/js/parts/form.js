function form() {
   // формы отправки
   let message = {
      loading: 'загрузка',
      success: 'спасибо Соро мы с вами свяжимся',
      failure: 'чтото пошло не так',
   };
   let form = document.querySelector('.main-form'),
      input = document.getElementsByTagName('input'),
      statusMessage = document.createElement('div');
   statusMessage.classList.add('status');

   const promisYoda = new Promise((resolve, reject) => {
      form.addEventListener('submit', (e) => {
         e.preventDefault();
         form.appendChild(statusMessage);
         let request = new XMLHttpRequest();
         request.open('post', 'server.php');
         request.setRequestHeader(
            'Content-type',
            'application/x-www-form-urlencoded'
         );
         let formData = new FormData(form);

         request.addEventListener('readystatechange', () => {
            if (request.readyState < 4) {
               resolve();
            } else if (request.readyState === 4 && request.status === 405) {
               resolve();
            } else {
               reject();
            }
         });
         request.send(formData);
      });
   });
   function clearForm() {
      for (let i = 0; i < input.length; i++) {
         input[i].value = '';
      }
   }
   promisYoda
      .then(() => {
         statusMessage.innerHTML = message.loading;
      })
      .then(() => {
         statusMessage.innerHTML = message.success;
      })
      .catch(() => {
         statusMessage.innerHTML = message.failure;
      })
      .then(clearForm);
}
module.exports = form;
