const list = document.querySelector('.flash-sales__list');
const btnPrev = document.querySelector('.flash-sales__control-btn--prev');
const btnNext = document.querySelector('.flash-sales__control-btn--next');

const scrollAmount = 300;

btnPrev.addEventListener('click', () => {
    list.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

btnNext.addEventListener('click', () => {
    list.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

const countdownEnd = new Date().getTime() + 72 * 60 * 60 * 1000;

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownEnd - now;

    if (distance <= 0) {
        document.querySelector(".flash-sales__timer").innerHTML = "Sale Ended!";
        clearInterval(timer);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".flash-sales__timer-item.days .flash-sales__timer-value").textContent = days.toString().padStart(2, '0');
    document.querySelector(".flash-sales__timer-item.hours .flash-sales__timer-value").textContent = hours.toString().padStart(2, '0');
    document.querySelector(".flash-sales__timer-item.minutes .flash-sales__timer-value").textContent = minutes.toString().padStart(2, '0');
    document.querySelector(".flash-sales__timer-item.seconds .flash-sales__timer-value").textContent = seconds.toString().padStart(2, '0');
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();

// Promo Banner Countdown
const countdownEndPromo = new Date().getTime() + 144 * 60 * 60 * 1000; // example: 48 hours

function updatePromoCountdown() {
    const now = new Date().getTime();
    const distance = countdownEndPromo - now;

    if (distance <= 0) {
        document.querySelector(".promo-banner__timer").innerHTML = "Promotion Ended!";
        clearInterval(timerPromo);
        return;
    }

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".promo-banner__timer-item.promo-days .promo-banner__timer-value").textContent = days.toString().padStart(2, '0');
    document.querySelector(".promo-banner__timer-item.promo-hours .promo-banner__timer-value").textContent = hours.toString().padStart(2, '0');
    document.querySelector(".promo-banner__timer-item.promo-minutes .promo-banner__timer-value").textContent = minutes.toString().padStart(2, '0');
    document.querySelector(".promo-banner__timer-item.promo-seconds .promo-banner__timer-value").textContent = seconds.toString().padStart(2, '0');
}

const timerPromo = setInterval(updatePromoCountdown, 1000);
updatePromoCountdown();