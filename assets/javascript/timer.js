(function () {

    // const startButton = document.getElementById("start");
    // const timer = document.getElementById("clock");
    // let countdown = 0;

    const timerElement = document.getElementById('start');
        let timer;

        function startTimeCountDown() {
            timer = 60;
            const timeCountdown = setInterval(countdown, 1000);
        }


        function countdown() {
            if (timer == 0) {
                clearTimeout(timer);
                timerElement.innerHTML = 'clock'

            } else {
                timerElement.innerHTML = timer + ' remaining';
                timer--;
            }
        }

        timerElement.addEventListener('click', ev => {
            startTimeCountDown();
        });







    // startButton.addEventListener('click', function() {
  
    //     let timeRemaining = document.querySelector("#clock"),
    //         remaining = 60

    //     const downloadTimer = setInterval(() => {
    //         if (remaining <= 0) clearInterval(downloadTimer)
    //         timeRemaining.value = remaining
    //         timeRemaining.textContent = remaining
    //         remaining -= 1
    //     }, 1000)



    // });

})();