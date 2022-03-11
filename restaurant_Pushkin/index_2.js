let elems = document.querySelectorAll(".css_nav_menu_radio"); //массив из радиокнопок
let restaurans = document.querySelectorAll(".css_restaurans"); //массив из карточек меню 
let menu = document.querySelectorAll(".css_nav_menu_view"); //массив названий разделов меню
let before = document.querySelector(".before") // Кнопка вперед у слайдера на маленьких экранах
let after = document.querySelector(".after") // Кнопка назад у слайдера на маленьких экранах

let n = 0 // Переменная для указания элемента массива menu

// Перебор элементов радиокнопок с привязкой на них событий при клике
for (var i = 0; i < elems.length; i++) {
    elems[i].addEventListener('click', func);
    elems[i].addEventListener('click', scrollTo);
}

// Функция отоюражает соответсвющий раздел меню при клике на элемент menu
function func() {
    for (var i = 0; i < restaurans.length; i++) {
        if (this.value === restaurans[i].id) {
            restaurans[i].style.cssText = "display: block;";
            n = i
            func2(restaurans[i]);
        } else {
            restaurans[i].style.display = "none"
        }
    }
}

//Функция плавного появления разделов меню
function func2(restaurans) {
    let opacity = 0;
    let timer = setInterval(function() {
        if (opacity >= 1) {
            clearInterval(timer)
        }
        restaurans.style.opacity = opacity;
        opacity += 0.03
        console.log(opacity)
    }, 30)
}

//Функция прокрутки при клике на название раздела меню до его блока
function scrollTo(e) {
    scroll({ top: 350, behavior: 'smooth' });
}


after.addEventListener("click", func3); // Перелистывание слайдера на маленьких экранах назад

// Функция перелистывания названий разделов меню вперед
function func3() {
    if (n <= menu.length - 2) {
        menu[n].style.display = "none"
        restaurans[n].style.display = "none"
        n += 1
        menu[n].style.display = "block"
        restaurans[n].style.display = "block"
        func2(restaurans[n])
    } else {
        menu[n].style.display = "none"
        restaurans[n].style.display = "none"
        menu[0].style.display = "block"
        restaurans[0].style.display = "block"
        func2(restaurans[0])
        n = 0;
    }
}

before.addEventListener("click", func4); // Перелистывание слайдера на маленьких экранах вперед

// Функция перелистывания названий разделов меню назад
function func4() {
    if (n > 0) {
        menu[n].style.display = "none"
        restaurans[n].style.display = "none"
        n -= 1

        menu[n].style.display = "block"
        restaurans[n].style.display = "block"
        func2(restaurans[n])
    } else {
        menu[0].style.display = "none"
        restaurans[0].style.display = "none"

        n = 5;
        menu[n].style.display = "block"
        restaurans[n].style.display = "block"
        func2(restaurans[n])
    }
}

// Проверка ширины экрана для правильного отображения назавний разделов меню
window.addEventListener('resize', function(event) {
    if (window.innerWidth > 766) {
        for (var i = 0; i < menu.length; i++) {
            menu[i].style.display = "block"
        }
    } else {
        for (var i = 0; i < menu.length; i++) {
            menu[i].style.display = "none"
            menu[n].style.display = "block"
        }
    }
});