          //Добавляем загрузчик
   const timer = document.querySelector('.lds-spinner')
   document.addEventListener("DOMContentLoaded", function() {
      setTimeout( () => {
         timer.classList.add('timerOff')
      }, 2000);
    });
   
   
         // Слушатели + API внутри
   document.querySelector('.generation-btn').addEventListener('click', async function() {
      timer.classList.remove('timerOff')
      const response = await fetch('https://meowfacts.herokuapp.com/?lang=rus')
      const data = await response.json()
      const [fact] = data.data
      document.querySelector('.facts').textContent = fact
      setTimeout( () => {
         timer.classList.add('timerOff')
      },  1000 );   
   })
   
   // ----------------------------------------------------------------------------------------------------------//
   
   getRandomFacts().then(setFactToElement)
   
      // Функция, которая делает запрос и возвращает факт о котике в виде Promise
   
   async function getRandomFacts() {
      const result =  await fetch('https://meowfacts.herokuapp.com/?lang=rus')
      const parsedResult = await result.json()
      const [fact] = parsedResult.data
      return fact
   }
   
   function setFactToElement(fact) {
      document.querySelector('.facts').textContent = fact
   }
   

         // Вызываем сразу 5 фактов о котиках
   document.querySelector('.facts-btn').addEventListener('click', async function(){
      timer.classList.remove('timerOff')
      const response = await fetch('https://meowfacts.herokuapp.com/?count=5')
      const data = await response.json()
      const result = data.data
      document.querySelector('.severalFacts').textContent = result
      setTimeout( () => {
         timer.classList.add('timerOff')
      },  1000 );  
   })



