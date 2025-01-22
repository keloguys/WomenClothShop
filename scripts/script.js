document.addEventListener('DOMContentLoaded', function () {
    // Функция для управления слайдерами
    function initSlider(sliderClass) {
        const slides = document.querySelectorAll(`.${sliderClass} .slide`);
        let currentSlide = 0;

        function showSlide(index) {
            // Скрываем все слайды
            slides.forEach((slide) => {
                slide.style.display = 'none';
            });

            // Показываем текущий слайд
            slides[index].style.display = 'block';
        }

        function nextSlide() {
            // Переход к следующему слайду
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        // Показываем первый слайд
        showSlide(currentSlide);

        // Автоматическая прокрутка слайдера
        setInterval(nextSlide, 5000);
    }

    // Инициализация всех слайдеров
    initSlider('slider-1'); // Первый слайдер
    initSlider('slider-2'); // Второй слайдер
    initSlider('slider-3'); // Третий слайдер

    // Логика для скрытия/показа меню при прокрутке
    let lastScroll = 0;
    const header = document.getElementById('header');

    window.addEventListener('scroll', function () {
        const currentScroll = window.scrollY;

        if (currentScroll <= 0) {
            // Если пользователь в самом верху страницы
            header.classList.remove('hidden');
        } else if (currentScroll > lastScroll) {
            // Если пользователь прокручивает вниз
            header.classList.add('hidden');
        } else {
            // Если пользователь прокручивает вверх
            header.classList.remove('hidden');
        }

        lastScroll = currentScroll;
    });
});

// Закрытие выпадающего меню при клике вне его области
document.addEventListener('click', function (event) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            if (dropdownContent) {
                dropdownContent.style.display = 'none';
            }
        }
    });
});