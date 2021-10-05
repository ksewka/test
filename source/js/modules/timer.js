const setTimer = () => {
  const deadline = '2021-10-27';
  function getTime(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor((t / (1000 * 60 * 60) % 24)),
          minutes = Math.floor((t / 1000 / 60) % 60),
          seconds = Math.floor((t / 1000) % 60);
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function getZero(num){
    if (num >= 0 && num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          title = document.querySelector('.promotion-timer__title'),
          timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTime(endtime);

      days.innerHTML = '';
      hours.innerHTML = '';
      minutes.innerHTML = '';
      seconds.innerHTML = '';
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        title.innerHTML = 'Акция закончилась'
        days.innerHTML = '0';
        hours.innerHTML = '0';
        minutes.innerHTML = '0';
        seconds.innerHTML = '0';
        clearInterval(timeInterval);

      }
    }

  }
  setClock('.timer', deadline);
}

export {setTimer}
