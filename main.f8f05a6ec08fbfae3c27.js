/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/polyfill/lib/noConflict.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/noConflict.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/es6 */ "./node_modules/core-js/es6/index.js");

__webpack_require__(/*! core-js/fn/array/includes */ "./node_modules/core-js/fn/array/includes.js");

__webpack_require__(/*! core-js/fn/array/flat-map */ "./node_modules/core-js/fn/array/flat-map.js");

__webpack_require__(/*! core-js/fn/string/pad-start */ "./node_modules/core-js/fn/string/pad-start.js");

__webpack_require__(/*! core-js/fn/string/pad-end */ "./node_modules/core-js/fn/string/pad-end.js");

__webpack_require__(/*! core-js/fn/string/trim-start */ "./node_modules/core-js/fn/string/trim-start.js");

__webpack_require__(/*! core-js/fn/string/trim-end */ "./node_modules/core-js/fn/string/trim-end.js");

__webpack_require__(/*! core-js/fn/symbol/async-iterator */ "./node_modules/core-js/fn/symbol/async-iterator.js");

__webpack_require__(/*! core-js/fn/object/get-own-property-descriptors */ "./node_modules/core-js/fn/object/get-own-property-descriptors.js");

__webpack_require__(/*! core-js/fn/object/values */ "./node_modules/core-js/fn/object/values.js");

__webpack_require__(/*! core-js/fn/object/entries */ "./node_modules/core-js/fn/object/entries.js");

__webpack_require__(/*! core-js/fn/promise/finally */ "./node_modules/core-js/fn/promise/finally.js");

__webpack_require__(/*! core-js/web */ "./node_modules/core-js/web/index.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/***/ (() => {

function slider() {
  let preview = document.querySelector('.home_slider_control_left');
  let next = document.querySelector('.home_slider_control_right');
  let sliders = document.querySelectorAll('.slider');
  let pointActive = document.querySelector('.slider_active').children;
  let button = document.querySelector('.play_slide');
  let slideActive = 0;
  sliders[slideActive].classList.add('sliderAct');
  pointActive[slideActive].classList.add('sActive');
  next.addEventListener('click', () => {
    //console.log(slideActive)
    if (sliders[slideActive].firstElementChild.played) {
      sliders[slideActive].firstElementChild.pause();
      button.style.opacity = '1';
    }
    if (slideActive < sliders.length - 1) {
      pointActive[slideActive].classList.remove('sActive');
      sliders.forEach(elememt => {
        if (elememt.closest('.sliderAct')) {
          elememt.classList.remove('sliderAct');
        }
      });
      slideActive++;
      sliders[slideActive].classList.add('sliderAct');
      pointActive[slideActive].classList.add('sActive');
    }
  });
  preview.addEventListener('click', () => {
    if (sliders[slideActive].firstElementChild.played) {
      sliders[slideActive].firstElementChild.pause();
      button.style.opacity = '1';
    }
    if (slideActive >= 1) {
      pointActive[slideActive].classList.remove('sActive');
      sliders.forEach(elememt => {
        if (elememt.closest('.sliderAct')) {
          elememt.classList.remove('sliderAct');
        }
      });
      slideActive--;
      sliders[slideActive].classList.add('sliderAct');
      pointActive[slideActive].classList.add('sActive');
    }
  });
  //let homeSlide = document.querySelector('.home_slider');

  button.addEventListener('click', () => {
    if (sliders[slideActive].firstElementChild.paused) {
      sliders[slideActive].firstElementChild.play();
      button.style.opacity = '0';
    } else {
      sliders[slideActive].firstElementChild.pause();
      button.style.opacity = '1';
    }
  });

  // homeSlide.onmouseover = function (event) {
  //    if (event.target.closest('.slider') || event.target.closest('.play_slide')) {
  //       button.style.opacity = '1';
  //    }

  // }
  // homeSlide.onmouseout = function (event) {
  //    if (event.target.closest('.slider')) {
  //       button.style.opacity = '0';
  //    }
  // }
}

slider();
function burger() {
  let burger = document.querySelector('.header_burger');
  let body = document.querySelector('.burger_body');
  burger.addEventListener('click', () => {
    body.classList.toggle('burgerActive');
    if (body.classList.contains('burgerActive')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });
}
burger();
function partnerLogo() {
  let active = 1;
  function pLogo() {
    let pLogo = document.querySelectorAll('.partner_logo');
    pLogo.forEach(element => {
      element.classList.remove('active_logo_partner');
    });
    pLogo[active].classList.add('active_logo_partner');
    active++;
    if (active >= pLogo.length) {
      active = 0;
    }
  }
  setInterval(pLogo, 2000);
}
partnerLogo();
function timeline() {
  let button = document.querySelector('.timeline');
  button.addEventListener('click', event => {
    let target = event.target.closest('.timeline_event');
    if (!target) return;
    let closeView = target.lastElementChild.closest('.timeline_event_content');
    let openView = closeView.lastElementChild.closest('.closeView');
    openView.classList.toggle('openView');
    let cicle = target.firstElementChild.closest('.timeline_event_icon');
    cicle.firstElementChild.classList.toggle('inView');
    console.log(cicle);
    if (openView.classList.contains('openView')) {
      closeView.firstElementChild.style.color = 'white';
    } else {
      closeView.firstElementChild.style.color = '#99c1ff';
    }
  });
}
timeline();
function customerSlider() {
  let masTitle = ['This is unbelievable. After using Testiminial Generator my buisness skyrocketed!', 'After using Testiminial. This is unbelievable Generator my buisness skyrocketed!', 'Generator my buisness. This is unbelievable After using Testimin!'];
  let masName = ['John Doe', 'Andre Von', 'Mike Bike'];
  let masWork = ['Ceo at Apple Inc', 'Beo in Facebook Inc', 'Teo on Huawei Inc'];

  //console.log(currentLang);
  if (localStorage.getItem('language') == 'ua') {
    masTitle = ['Це неймовірно. Після використання генератора відгуків мій бізнес різко зріс!', 'Після використання Testimonial. Це неймовірний генератор. Мій бізнес стрімко злетів!', 'Генератор моя справа. Це неймовірно після використання Testim!'];
    masName = ['John Doe', 'Andre Von', 'Mike Bike'];
    masWork = ['Генеральний директор Apple Inc', 'Beo у Facebook Inc', 'Тео про Huawei Inc'];
  }
  let masImage = ['./img/avatar.jpg', './img/foto5.png', './img/client1.png'];
  let item = 0;
  let title = document.querySelector('.customer_slider_title');
  let image = document.querySelector('.customer_avatar').firstElementChild;
  let name = document.querySelector('.customer_slider_person_infa').firstElementChild;
  let work = document.querySelector('.customer_slider_person_infa').lastElementChild;
  let pre = document.querySelector('.customer_pre');
  let next = document.querySelector('.customer_next');
  let activeLine = document.querySelector('.customer_active').children;
  function change(item) {
    name.innerHTML = masName[item];
    work.innerHTML = masWork[item];
    activeLine[item].classList.add('customer_active_point');
    image.classList.remove('visible');
    setTimeout(() => {
      image.classList.add('visible');
      image.setAttribute('src', masImage[item]);
      title.innerText = masTitle[item];
      title.classList.add('title_active');
    }, 650);
  }
  change(item);
  pre.addEventListener('click', () => {
    if (!item <= 0) {
      title.classList.remove('title_active');
      activeLine[item].classList.remove('customer_active_point');
      item--;
      change(item);
    }
  });
  next.addEventListener('click', () => {
    if (item < masTitle.length - 1) {
      title.classList.remove('title_active');
      activeLine[item].classList.remove('customer_active_point');
      item++;
      change(item);
    }
  });
}
customerSlider();
function counter() {
  let counter = document.querySelector('.counter');
  let numbers = document.querySelectorAll('.count_block_number');
  const counts = Array.from(numbers).map(element => parseInt(element.textContent));
  function animCount() {
    const animHeight = counter.offsetHeight;
    const animOffset = offset(counter).top;
    const animStart = 4;
    let animItemPoint = window.innerHeight - animHeight / animStart;
    if (scrollY > animOffset - animItemPoint && scrollY < animOffset + animHeight) {
      const intervals = [];
      function updateNumber(index) {
        return function () {
          if (i[index] <= counts[index]) {
            numbers[index].innerText = i[index] + '+';
            i[index]++;
          } else {
            clearInterval(intervals[index]);
          }
        };
      }
      let i = counts.map(() => 0);
      counts.forEach((count, index) => {
        intervals.push(setInterval(updateNumber(index), 20));
      });
      window.removeEventListener('scroll', animCount);
    }
  }
  window.addEventListener('scroll', animCount);
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.scrollX || document.documentElement.scrollLeft,
      scrollTop = window.scrollY || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  }
}
counter();
function newsHover() {
  const hover = document.querySelector('.news__container');
  function showClass(event) {
    let target = event.target.closest('.news_card_image');
    if (!target) return;
    let view = target.querySelector('.card_image_hover');
    if (view) {
      view.classList.add('hover_visible');
    }
  }
  function hideClass(event) {
    let target = event.target.closest('.news_card_image');
    if (!target) return;
    let view = target.querySelector('.card_image_hover');
    if (view) {
      view.classList.remove('hover_visible');
    }
  }
  hover.addEventListener('mousemove', showClass);
  hover.addEventListener('mouseout', hideClass);
}
newsHover();
function multilanguage() {
  const english = document.querySelector('.lng-EN');
  const ukraine = document.querySelector('.lng-UA');
  const languages = ["en", "uk"];
  let currentLang = localStorage.getItem('language') || checkBrowserLang() || "en";
  const text = {
    "text_translate-1": {
      en: "Home",
      ua: "Домашня"
    },
    "text_translate-2": {
      en: "Process",
      ua: "Процес"
    },
    "text_translate-3": {
      en: "Services",
      ua: "Сервіс"
    },
    "text_translate-4": {
      en: "Blog",
      ua: "Блог"
    },
    "text_translate-5": {
      en: "About",
      ua: "Про нас"
    },
    "text_translate-6": {
      en: "We build Intelligent Enterprise Software",
      ua: "Ми створюємо інтелектуальне корпоративне програмне забезпечення"
    },
    "text_translate-7": {
      en: "We are a technology company that understands complexity of businesses, and with our technical expertise, we help them transform and scale",
      ua: "Ми є технологічною компанією, яка розуміє складність бізнесу, і завдяки нашому технічному досвіду ми допомагаємо їм трансформуватись і масштабувати"
    },
    "text_translate-8": {
      en: "Mobile App Development",
      ua: "Розробка мобільних додатків"
    },
    "text_translate-9": {
      en: "Web Development Services copy",
      ua: "Копія послуг веб-розробки"
    },
    "text_translate-10": {
      en: "Prodcut design",
      ua: "Дизайн продукту"
    },
    "text_translate-11": {
      en: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ut est voluptatem nihil. Sapiente incidunt dicta neque exercitationem, hic minima reiciendis doloribus placeat dolorem eveniet animi iste provident impedit ducimus vero quis tempora officiis quidem architecto perspiciatis? Ut fugit reprehenderit ab fuga quo cum assumenda voluptatum animi similique facilis ea dignissimos, expedita nihil illum, ullam perspiciatis? Molestiae, minima ullam ducimus rem quo, sequi, repellat a similique dolor exercitationem sint maxime aliquam pariatur obcaecati numquam accusamus! Vitae, molestiae vel nemo voluptates repellat enim maiores laboriosam voluptatem cumque, minus exercitationem minima beatae nihil placeat, consectetur ipsum. Nisi dolorem similique error tenetur harum explicabo, sed rerum?",
      ua: "Завдяки прогресивним та технологічним продуктам та послугам, кваліфікованим співробітникам і серйозному підходу до глобального громадянства та бізнесу, а також співпраці з акціонерами та гуртовими постачальниками, товариство відкриває перед Україною нові оригінальні перспективи. Одна з найбільших світових організацій надає широкий спектр послуг, а саме виготовлення ключів, закупівлю-продаж та кабельне телебачення. Постійне поліпшення, синергетичне поєднання, розробка оптимальних підходів і технологій та розвиток персоналу забезпечили підприємству успіх і провідну роль на світовому ринку."
    },
    "text_translate-20": {
      en: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ut est voluptatem nihil. Sapiente incidunt dicta neque exercitationem, hic minima reiciendis doloribus placeat dolorem eveniet animi iste provident impedit ducimus vero quis tempora officiis quidem architecto perspiciatis? Ut fugit reprehenderit ab fuga quo cum assumenda voluptatum animi similique facilis ea dignissimos, expedita nihil illum, ullam perspiciatis? Molestiae, minima ullam ducimus rem quo, sequi, repellat a similique dolor exercitationem sint maxime aliquam pariatur obcaecati numquam accusamus! Vitae, molestiae vel nemo voluptates repellat enim maiores laboriosam voluptatem cumque, minus exercitationem minima beatae nihil placeat, consectetur ipsum. Nisi dolorem similique error tenetur harum explicabo, sed rerum?",
      ua: "Завдяки прогресивним та технологічним продуктам та послугам, кваліфікованим співробітникам і серйозному підходу до глобального громадянства та бізнесу, а також співпраці з акціонерами та гуртовими постачальниками, товариство відкриває перед Україною нові оригінальні перспективи. Одна з найбільших світових організацій надає широкий спектр послуг, а саме виготовлення ключів, закупівлю-продаж та кабельне телебачення. Постійне поліпшення, синергетичне поєднання, розробка оптимальних підходів і технологій та розвиток персоналу забезпечили підприємству успіх і провідну роль на світовому ринку."
    },
    "text_translate-21": {
      en: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ut est voluptatem nihil. Sapiente incidunt dicta neque exercitationem, hic minima reiciendis doloribus placeat dolorem eveniet animi iste provident impedit ducimus vero quis tempora officiis quidem architecto perspiciatis? Ut fugit reprehenderit ab fuga quo cum assumenda voluptatum animi similique facilis ea dignissimos, expedita nihil illum, ullam perspiciatis? Molestiae, minima ullam ducimus rem quo, sequi, repellat a similique dolor exercitationem sint maxime aliquam pariatur obcaecati numquam accusamus! Vitae, molestiae vel nemo voluptates repellat enim maiores laboriosam voluptatem cumque, minus exercitationem minima beatae nihil placeat, consectetur ipsum. Nisi dolorem similique error tenetur harum explicabo, sed rerum?",
      ua: "Завдяки прогресивним та технологічним продуктам та послугам, кваліфікованим співробітникам і серйозному підходу до глобального громадянства та бізнесу, а також співпраці з акціонерами та гуртовими постачальниками, товариство відкриває перед Україною нові оригінальні перспективи. Одна з найбільших світових організацій надає широкий спектр послуг, а саме виготовлення ключів, закупівлю-продаж та кабельне телебачення. Постійне поліпшення, синергетичне поєднання, розробка оптимальних підходів і технологій та розвиток персоналу забезпечили підприємству успіх і провідну роль на світовому ринку."
    },
    "text_translate-12": {
      en: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
      ua: "Одна з провідних світових організацій надає широкий спектр послуг?"
    },
    "text_translate-13": {
      en: "Javascript Development",
      ua: "Розробка Javascript"
    },
    "text_translate-14": {
      en: "How can I uninstall Dummy Content?",
      ua: "Як я можу видалити фіктивний вміст?"
    },
    "text_translate-15": {
      en: "Where can I download earlier versions?",
      ua: "Де я можу завантажити попередні версії?"
    },
    "text_translate-16": {
      en: "Under what license are Regular Labs extensions released?",
      ua: "За якою ліцензією випускаються розширення Regular Labs?"
    },
    "text_translate-17": {
      en: "Do I still need the NoNumber Framework plugin?",
      ua: "Чи потрібен мені плагін NoNumber Framework?"
    },
    "text_translate-18": {
      en: "Complain Management System is a platform which is double implied between customer and seller. It helps the seller to keep track of all the complaints lodged by the customer in respect of the product.",
      ua: "Система управління скаргами — це платформа, яка має подвійний зв’язок між клієнтом і продавцем. Це допомагає продавцю відстежувати всі скарги, подані клієнтом щодо продукту."
    },
    "text_translate-19": {
      en: "Words from our customer",
      ua: "Слова нашого клієнта"
    },
    "text_translate-26": {
      en: "Happy Clients",
      ua: "Щасливі клієнти"
    },
    "text_translate-27": {
      en: "Project lunched",
      ua: "Проект обідав"
    },
    "text_translate-28": {
      en: "Startups",
      ua: "Стартапи"
    },
    "text_translate-29": {
      en: "News/ Blogs",
      ua: "Новини/ Блоги"
    },
    "text_translate-30": {
      en: "Team Member",
      ua: "Член команди"
    },
    "text_translate-31": {
      en: "What is Product design?",
      ua: "Що таке дизайн продукту?"
    },
    "text_translate-32": {
      en: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis perspiciatis explicabo laudantium architecto, libero doloremque iusto, amet ducimus impedit animi voluptates, quasi fugit quidem nesciunt optio deserunt suscipit quisquam!",
      ua: " Мета підприємства проста: це забезпечення вам зберігання даних, новаторства та бізнесу. На постійній основі компанія використовує сучасні до найменших дрібниць прораховані технології неперервної інтеграції, безпрограшних домовленостей та відкриттів."
    },
    "text_translate-33": {
      en: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus aperiam corrupti voluptas cumque ex! Quidem eaque recusandae rem ullam, dolorem pariatur! Dolore, ad iste. Dicta alias odit quisquam qui, labore nihil numquam aliquam dolore magnam quod laudantium accusantium assumenda molestias consequuntur nulla enim nesciunt sit omnis voluptatum tempore animi ducimus.",
      ua: "Систематичне поліпшення, збільшення асортименту товарів, підтримка топ-менеджерів та робітнича майстерність забезпечили компанії успіх і провідну роль на ринку України. Хочемо вражати домашніх улюбленців комфортом інновацій і прагнемо розвивати ремонт ювелірних виробів і годинників, передачу даних і закупівлю-продаж разом із рейтинговими агентствами."
    },
    "text_translate-34": {
      en: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus aperiam corrupti voluptas cumque ex! Quidem eaque recusandae rem ullam, dolorem pariatur! Dolore, ad iste. Dicta alias odit quisquam qui, labore nihil numquam aliquam dolore magnam quod laudantium accusantium assumenda molestias consequuntur nulla enim nesciunt sit omnis voluptatum tempore animi ducimus.",
      ua: "Систематичне поліпшення, збільшення асортименту товарів, підтримка топ-менеджерів та робітнича майстерність забезпечили компанії успіх і провідну роль на ринку України. Хочемо вражати домашніх улюбленців комфортом інновацій і прагнемо розвивати ремонт ювелірних виробів і годинників, передачу даних і закупівлю-продаж разом із рейтинговими агентствами."
    },
    "text_translate-35": {
      en: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus aperiam corrupti voluptas cumque ex! Quidem eaque recusandae rem ullam, dolorem pariatur! Dolore, ad iste. Dicta alias odit quisquam qui, labore nihil numquam aliquam dolore magnam quod laudantium accusantium assumenda molestias consequuntur nulla enim nesciunt sit omnis voluptatum tempore animi ducimus.",
      ua: "Систематичне поліпшення, збільшення асортименту товарів, підтримка топ-менеджерів та робітнича майстерність забезпечили компанії успіх і провідну роль на ринку України. Хочемо вражати домашніх улюбленців комфортом інновацій і прагнемо розвивати ремонт ювелірних виробів і годинників, передачу даних і закупівлю-продаж разом із рейтинговими агентствами."
    },
    "text_translate-36": {
      en: "Home",
      ua: "Домашня"
    },
    "text_translate-37": {
      en: "Features",
      ua: "Особливості"
    },
    "text_translate-38": {
      en: "Services",
      ua: "Послуги"
    },
    "text_translate-39": {
      en: "Testimonials",
      ua: "Відгуки"
    },
    "text_translate-40": {
      en: "Pricing",
      ua: "Ціни"
    },
    "text_translate-41": {
      en: "Contact",
      ua: "Контакти"
    },
    "text_translate-42": {
      en: "Read More",
      ua: "Читати більше"
    }
  };
  function changeLang() {
    for (let key in text) {
      const elem = document.querySelectorAll(`[data-lang=${key}]`);
      if (elem) {
        for (let index = 0; index < elem.length; index++) {
          elem[index].textContent = text[key][currentLang];
        }
      }
    }
  }
  changeLang();
  ukraine.addEventListener('click', event => {
    currentLang = event.target.dataset.btn;
    localStorage.setItem("language", event.target.dataset.btn);
    changeLang();
  });
  english.addEventListener('click', event => {
    currentLang = event.target.dataset.btn;
    localStorage.setItem("language", event.target.dataset.btn);
    changeLang();
  });
  function checkBrowserLang() {
    const navLang = navigator.language.slice(0, 2).toLowerCase();
    const result = languages.some(elem => {
      return elem === navLang;
    });
    if (result) {
      return navLang;
    } else {
      return null;
    }
  }
}
multilanguage();

/***/ }),

/***/ "./node_modules/core-js/es6/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/es6/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
__webpack_require__(/*! ../modules/es6.object.create */ "./node_modules/core-js/modules/es6.object.create.js");
__webpack_require__(/*! ../modules/es6.object.define-property */ "./node_modules/core-js/modules/es6.object.define-property.js");
__webpack_require__(/*! ../modules/es6.object.define-properties */ "./node_modules/core-js/modules/es6.object.define-properties.js");
__webpack_require__(/*! ../modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.object.get-prototype-of */ "./node_modules/core-js/modules/es6.object.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
__webpack_require__(/*! ../modules/es6.object.get-own-property-names */ "./node_modules/core-js/modules/es6.object.get-own-property-names.js");
__webpack_require__(/*! ../modules/es6.object.freeze */ "./node_modules/core-js/modules/es6.object.freeze.js");
__webpack_require__(/*! ../modules/es6.object.seal */ "./node_modules/core-js/modules/es6.object.seal.js");
__webpack_require__(/*! ../modules/es6.object.prevent-extensions */ "./node_modules/core-js/modules/es6.object.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.object.is-frozen */ "./node_modules/core-js/modules/es6.object.is-frozen.js");
__webpack_require__(/*! ../modules/es6.object.is-sealed */ "./node_modules/core-js/modules/es6.object.is-sealed.js");
__webpack_require__(/*! ../modules/es6.object.is-extensible */ "./node_modules/core-js/modules/es6.object.is-extensible.js");
__webpack_require__(/*! ../modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
__webpack_require__(/*! ../modules/es6.object.is */ "./node_modules/core-js/modules/es6.object.is.js");
__webpack_require__(/*! ../modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.function.bind */ "./node_modules/core-js/modules/es6.function.bind.js");
__webpack_require__(/*! ../modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
__webpack_require__(/*! ../modules/es6.function.has-instance */ "./node_modules/core-js/modules/es6.function.has-instance.js");
__webpack_require__(/*! ../modules/es6.parse-int */ "./node_modules/core-js/modules/es6.parse-int.js");
__webpack_require__(/*! ../modules/es6.parse-float */ "./node_modules/core-js/modules/es6.parse-float.js");
__webpack_require__(/*! ../modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
__webpack_require__(/*! ../modules/es6.number.to-fixed */ "./node_modules/core-js/modules/es6.number.to-fixed.js");
__webpack_require__(/*! ../modules/es6.number.to-precision */ "./node_modules/core-js/modules/es6.number.to-precision.js");
__webpack_require__(/*! ../modules/es6.number.epsilon */ "./node_modules/core-js/modules/es6.number.epsilon.js");
__webpack_require__(/*! ../modules/es6.number.is-finite */ "./node_modules/core-js/modules/es6.number.is-finite.js");
__webpack_require__(/*! ../modules/es6.number.is-integer */ "./node_modules/core-js/modules/es6.number.is-integer.js");
__webpack_require__(/*! ../modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");
__webpack_require__(/*! ../modules/es6.number.is-safe-integer */ "./node_modules/core-js/modules/es6.number.is-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.max-safe-integer */ "./node_modules/core-js/modules/es6.number.max-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.min-safe-integer */ "./node_modules/core-js/modules/es6.number.min-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.parse-float */ "./node_modules/core-js/modules/es6.number.parse-float.js");
__webpack_require__(/*! ../modules/es6.number.parse-int */ "./node_modules/core-js/modules/es6.number.parse-int.js");
__webpack_require__(/*! ../modules/es6.math.acosh */ "./node_modules/core-js/modules/es6.math.acosh.js");
__webpack_require__(/*! ../modules/es6.math.asinh */ "./node_modules/core-js/modules/es6.math.asinh.js");
__webpack_require__(/*! ../modules/es6.math.atanh */ "./node_modules/core-js/modules/es6.math.atanh.js");
__webpack_require__(/*! ../modules/es6.math.cbrt */ "./node_modules/core-js/modules/es6.math.cbrt.js");
__webpack_require__(/*! ../modules/es6.math.clz32 */ "./node_modules/core-js/modules/es6.math.clz32.js");
__webpack_require__(/*! ../modules/es6.math.cosh */ "./node_modules/core-js/modules/es6.math.cosh.js");
__webpack_require__(/*! ../modules/es6.math.expm1 */ "./node_modules/core-js/modules/es6.math.expm1.js");
__webpack_require__(/*! ../modules/es6.math.fround */ "./node_modules/core-js/modules/es6.math.fround.js");
__webpack_require__(/*! ../modules/es6.math.hypot */ "./node_modules/core-js/modules/es6.math.hypot.js");
__webpack_require__(/*! ../modules/es6.math.imul */ "./node_modules/core-js/modules/es6.math.imul.js");
__webpack_require__(/*! ../modules/es6.math.log10 */ "./node_modules/core-js/modules/es6.math.log10.js");
__webpack_require__(/*! ../modules/es6.math.log1p */ "./node_modules/core-js/modules/es6.math.log1p.js");
__webpack_require__(/*! ../modules/es6.math.log2 */ "./node_modules/core-js/modules/es6.math.log2.js");
__webpack_require__(/*! ../modules/es6.math.sign */ "./node_modules/core-js/modules/es6.math.sign.js");
__webpack_require__(/*! ../modules/es6.math.sinh */ "./node_modules/core-js/modules/es6.math.sinh.js");
__webpack_require__(/*! ../modules/es6.math.tanh */ "./node_modules/core-js/modules/es6.math.tanh.js");
__webpack_require__(/*! ../modules/es6.math.trunc */ "./node_modules/core-js/modules/es6.math.trunc.js");
__webpack_require__(/*! ../modules/es6.string.from-code-point */ "./node_modules/core-js/modules/es6.string.from-code-point.js");
__webpack_require__(/*! ../modules/es6.string.raw */ "./node_modules/core-js/modules/es6.string.raw.js");
__webpack_require__(/*! ../modules/es6.string.trim */ "./node_modules/core-js/modules/es6.string.trim.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/es6.string.code-point-at */ "./node_modules/core-js/modules/es6.string.code-point-at.js");
__webpack_require__(/*! ../modules/es6.string.ends-with */ "./node_modules/core-js/modules/es6.string.ends-with.js");
__webpack_require__(/*! ../modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
__webpack_require__(/*! ../modules/es6.string.repeat */ "./node_modules/core-js/modules/es6.string.repeat.js");
__webpack_require__(/*! ../modules/es6.string.starts-with */ "./node_modules/core-js/modules/es6.string.starts-with.js");
__webpack_require__(/*! ../modules/es6.string.anchor */ "./node_modules/core-js/modules/es6.string.anchor.js");
__webpack_require__(/*! ../modules/es6.string.big */ "./node_modules/core-js/modules/es6.string.big.js");
__webpack_require__(/*! ../modules/es6.string.blink */ "./node_modules/core-js/modules/es6.string.blink.js");
__webpack_require__(/*! ../modules/es6.string.bold */ "./node_modules/core-js/modules/es6.string.bold.js");
__webpack_require__(/*! ../modules/es6.string.fixed */ "./node_modules/core-js/modules/es6.string.fixed.js");
__webpack_require__(/*! ../modules/es6.string.fontcolor */ "./node_modules/core-js/modules/es6.string.fontcolor.js");
__webpack_require__(/*! ../modules/es6.string.fontsize */ "./node_modules/core-js/modules/es6.string.fontsize.js");
__webpack_require__(/*! ../modules/es6.string.italics */ "./node_modules/core-js/modules/es6.string.italics.js");
__webpack_require__(/*! ../modules/es6.string.link */ "./node_modules/core-js/modules/es6.string.link.js");
__webpack_require__(/*! ../modules/es6.string.small */ "./node_modules/core-js/modules/es6.string.small.js");
__webpack_require__(/*! ../modules/es6.string.strike */ "./node_modules/core-js/modules/es6.string.strike.js");
__webpack_require__(/*! ../modules/es6.string.sub */ "./node_modules/core-js/modules/es6.string.sub.js");
__webpack_require__(/*! ../modules/es6.string.sup */ "./node_modules/core-js/modules/es6.string.sup.js");
__webpack_require__(/*! ../modules/es6.date.now */ "./node_modules/core-js/modules/es6.date.now.js");
__webpack_require__(/*! ../modules/es6.date.to-json */ "./node_modules/core-js/modules/es6.date.to-json.js");
__webpack_require__(/*! ../modules/es6.date.to-iso-string */ "./node_modules/core-js/modules/es6.date.to-iso-string.js");
__webpack_require__(/*! ../modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");
__webpack_require__(/*! ../modules/es6.date.to-primitive */ "./node_modules/core-js/modules/es6.date.to-primitive.js");
__webpack_require__(/*! ../modules/es6.array.is-array */ "./node_modules/core-js/modules/es6.array.is-array.js");
__webpack_require__(/*! ../modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
__webpack_require__(/*! ../modules/es6.array.of */ "./node_modules/core-js/modules/es6.array.of.js");
__webpack_require__(/*! ../modules/es6.array.join */ "./node_modules/core-js/modules/es6.array.join.js");
__webpack_require__(/*! ../modules/es6.array.slice */ "./node_modules/core-js/modules/es6.array.slice.js");
__webpack_require__(/*! ../modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");
__webpack_require__(/*! ../modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");
__webpack_require__(/*! ../modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
__webpack_require__(/*! ../modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
__webpack_require__(/*! ../modules/es6.array.some */ "./node_modules/core-js/modules/es6.array.some.js");
__webpack_require__(/*! ../modules/es6.array.every */ "./node_modules/core-js/modules/es6.array.every.js");
__webpack_require__(/*! ../modules/es6.array.reduce */ "./node_modules/core-js/modules/es6.array.reduce.js");
__webpack_require__(/*! ../modules/es6.array.reduce-right */ "./node_modules/core-js/modules/es6.array.reduce-right.js");
__webpack_require__(/*! ../modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");
__webpack_require__(/*! ../modules/es6.array.last-index-of */ "./node_modules/core-js/modules/es6.array.last-index-of.js");
__webpack_require__(/*! ../modules/es6.array.copy-within */ "./node_modules/core-js/modules/es6.array.copy-within.js");
__webpack_require__(/*! ../modules/es6.array.fill */ "./node_modules/core-js/modules/es6.array.fill.js");
__webpack_require__(/*! ../modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
__webpack_require__(/*! ../modules/es6.array.find-index */ "./node_modules/core-js/modules/es6.array.find-index.js");
__webpack_require__(/*! ../modules/es6.array.species */ "./node_modules/core-js/modules/es6.array.species.js");
__webpack_require__(/*! ../modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
__webpack_require__(/*! ../modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
__webpack_require__(/*! ../modules/es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
__webpack_require__(/*! ../modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
__webpack_require__(/*! ../modules/es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
__webpack_require__(/*! ../modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
__webpack_require__(/*! ../modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
__webpack_require__(/*! ../modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
__webpack_require__(/*! ../modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es6.map */ "./node_modules/core-js/modules/es6.map.js");
__webpack_require__(/*! ../modules/es6.set */ "./node_modules/core-js/modules/es6.set.js");
__webpack_require__(/*! ../modules/es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js");
__webpack_require__(/*! ../modules/es6.weak-set */ "./node_modules/core-js/modules/es6.weak-set.js");
__webpack_require__(/*! ../modules/es6.typed.array-buffer */ "./node_modules/core-js/modules/es6.typed.array-buffer.js");
__webpack_require__(/*! ../modules/es6.typed.data-view */ "./node_modules/core-js/modules/es6.typed.data-view.js");
__webpack_require__(/*! ../modules/es6.typed.int8-array */ "./node_modules/core-js/modules/es6.typed.int8-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint8-array */ "./node_modules/core-js/modules/es6.typed.uint8-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint8-clamped-array */ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js");
__webpack_require__(/*! ../modules/es6.typed.int16-array */ "./node_modules/core-js/modules/es6.typed.int16-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint16-array */ "./node_modules/core-js/modules/es6.typed.uint16-array.js");
__webpack_require__(/*! ../modules/es6.typed.int32-array */ "./node_modules/core-js/modules/es6.typed.int32-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint32-array */ "./node_modules/core-js/modules/es6.typed.uint32-array.js");
__webpack_require__(/*! ../modules/es6.typed.float32-array */ "./node_modules/core-js/modules/es6.typed.float32-array.js");
__webpack_require__(/*! ../modules/es6.typed.float64-array */ "./node_modules/core-js/modules/es6.typed.float64-array.js");
__webpack_require__(/*! ../modules/es6.reflect.apply */ "./node_modules/core-js/modules/es6.reflect.apply.js");
__webpack_require__(/*! ../modules/es6.reflect.construct */ "./node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__(/*! ../modules/es6.reflect.define-property */ "./node_modules/core-js/modules/es6.reflect.define-property.js");
__webpack_require__(/*! ../modules/es6.reflect.delete-property */ "./node_modules/core-js/modules/es6.reflect.delete-property.js");
__webpack_require__(/*! ../modules/es6.reflect.enumerate */ "./node_modules/core-js/modules/es6.reflect.enumerate.js");
__webpack_require__(/*! ../modules/es6.reflect.get */ "./node_modules/core-js/modules/es6.reflect.get.js");
__webpack_require__(/*! ../modules/es6.reflect.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.reflect.get-prototype-of */ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.reflect.has */ "./node_modules/core-js/modules/es6.reflect.has.js");
__webpack_require__(/*! ../modules/es6.reflect.is-extensible */ "./node_modules/core-js/modules/es6.reflect.is-extensible.js");
__webpack_require__(/*! ../modules/es6.reflect.own-keys */ "./node_modules/core-js/modules/es6.reflect.own-keys.js");
__webpack_require__(/*! ../modules/es6.reflect.prevent-extensions */ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.reflect.set */ "./node_modules/core-js/modules/es6.reflect.set.js");
__webpack_require__(/*! ../modules/es6.reflect.set-prototype-of */ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js");


/***/ }),

/***/ "./node_modules/core-js/fn/array/flat-map.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/flat-map.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.array.flat-map */ "./node_modules/core-js/modules/es7.array.flat-map.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.flatMap;


/***/ }),

/***/ "./node_modules/core-js/fn/array/includes.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/includes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.includes;


/***/ }),

/***/ "./node_modules/core-js/fn/object/entries.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/object/entries.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.entries */ "./node_modules/core-js/modules/es7.object.entries.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.entries;


/***/ }),

/***/ "./node_modules/core-js/fn/object/get-own-property-descriptors.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/fn/object/get-own-property-descriptors.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.getOwnPropertyDescriptors;


/***/ }),

/***/ "./node_modules/core-js/fn/object/values.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/object/values.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/core-js/modules/es7.object.values.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.values;


/***/ }),

/***/ "./node_modules/core-js/fn/promise/finally.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/promise/finally.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(/*! ../../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ../../modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Promise["finally"];


/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-end.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-end.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.pad-end */ "./node_modules/core-js/modules/es7.string.pad-end.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.padEnd;


/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-start.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-start.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.pad-start */ "./node_modules/core-js/modules/es7.string.pad-start.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.padStart;


/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-end.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-end.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.trim-right */ "./node_modules/core-js/modules/es7.string.trim-right.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.trimRight;


/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-start.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-start.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.trim-left */ "./node_modules/core-js/modules/es7.string.trim-left.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.trimLeft;


/***/ }),

/***/ "./node_modules/core-js/fn/symbol/async-iterator.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/fn/symbol/async-iterator.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
module.exports = (__webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js").f)('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/fn/global.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/library/fn/global.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/es7.global */ "./node_modules/core-js/library/modules/es7.global.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").global;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/***/ ((module) => {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.global.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.global.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.G, { global: __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_a-number-value.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_a-number-value.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-copy-within.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-copy-within.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-reduce.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey);
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak);
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/***/ ((module) => {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-iso-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-primitive.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-primitive.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/***/ ((module) => {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/***/ ((module) => {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flatten-into-array.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_flatten-into-array.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document);
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = (__webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set);
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/***/ ((module) => {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-integer.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_math-expm1.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-expm1.js ***!
  \*****************************************************/
/***/ ((module) => {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;


/***/ }),

/***/ "./node_modules/core-js/modules/_math-fround.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_math-fround.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-log1p.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-log1p.js ***!
  \*****************************************************/
/***/ ((module) => {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-sign.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-sign.js ***!
  \****************************************************/
/***/ ((module) => {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var macrotask = (__webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set);
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  (__webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild)(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = (__webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat)('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var isEnum = (__webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f);
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Reflect = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect);
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_parse-float.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-float.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseFloat = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseFloat);
var $trim = (__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim);

module.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/modules/_parse-int.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-int.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseInt = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseInt);
var $trim = (__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim);
var ws = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

(__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource) = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/***/ ((module) => {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f)(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var def = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-pad.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-pad.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-repeat.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-index.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_to-index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/***/ ((module) => {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_typed-array.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-array.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")) {
  var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
  var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
  var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
  var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
  var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
  var $buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");
  var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
  var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
  var propertyDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
  var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
  var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
  var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
  var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
  var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");
  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
  var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
  var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
  var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
  var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
  var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
  var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
  var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
  var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js");
  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
  var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
  var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
  var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");
  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js");
  var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
  var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/modules/_typed-buffer.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-buffer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),

/***/ "./node_modules/core-js/modules/_typed.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_typed.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/***/ ((module) => {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol);
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = (__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod) = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.copy-within.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('copyWithin');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.every.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.every.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $every = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(4);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('fill');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.filter.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $filter = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(2);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $forEach = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var STRICT = __webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $indexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.join.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js") != Object || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $map = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(1);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.of.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce-right.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $some = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(3);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.species.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.species.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('Array');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.now.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toISOString = __webpack_require__(/*! ./_date-to-iso-string */ "./node_modules/core-js/modules/_date-to-iso-string.js");

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-json.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-json.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ "./node_modules/core-js/modules/_date-to-primitive.js"));


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.has-instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.has-instance.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var HAS_INSTANCE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f)(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.acosh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.acosh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var log1p = __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js");
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.asinh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.asinh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.atanh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.atanh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cbrt.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cbrt.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.clz32.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.clz32.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cosh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cosh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.expm1.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.expm1.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.fround.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.fround.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { fround: __webpack_require__(/*! ./_math-fround */ "./node_modules/core-js/modules/_math-fround.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.hypot.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.hypot.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.imul.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.imul.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log10.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log10.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log1p.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log1p.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log2.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log2.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sign.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sinh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sinh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.tanh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.tanh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.trunc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.trunc.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var gOPD = (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f);
var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var $trim = (__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim);
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, NUMBER, $Number);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.epsilon.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.epsilon.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-finite.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-finite.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var _isFinite = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").isFinite);

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-integer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isInteger = __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js");
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-float.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-float.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-int.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-int.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-precision.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.create.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperty: (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyNames', function () {
  return (__webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js").f);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-frozen.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-sealed.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.seal.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.seal.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: (__webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-float.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-float.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-int.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var task = (__webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set);
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var rApply = ((__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect) || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js");
var rConstruct = ((__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect) || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var gOPD = (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f);
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var getProto = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var setProto = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js");

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  re2[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, 'RegExp', $RegExp);
}

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('RegExp');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f)(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var sameValue = __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@search logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.anchor.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.anchor.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.big.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.big.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.blink.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.blink.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.bold.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.bold.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.code-point-at.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.ends-with.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.ends-with.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fixed.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fixed.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontcolor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontsize.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.from-code-point.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.italics.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.italics.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.raw.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.raw.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.repeat.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.repeat.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.small.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.small.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.starts-with.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.starts-with.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.strike.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.strike.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sup.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sup.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.trim.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var META = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY);
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f) = gOPNExt.f = $getOwnPropertyNames;
  (__webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f) = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
var buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var ArrayBuffer = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").ArrayBuffer);
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(ARRAY_BUFFER);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.data-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.data-view.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.G + $export.W + $export.F * !(__webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js").ABV), {
  DataView: (__webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js").DataView)
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float64-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int16-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int32-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int8-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-set.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-set.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flat-map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flat-map.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ "./node_modules/core-js/modules/_flatten-into-array.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('flatMap');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $includes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $entries = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var ownKeys = __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-end.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-end.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-left.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-left.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-right.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-right.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js");
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "./node_modules/core-js/web/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/web/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! ../modules/web.immediate */ "./node_modules/core-js/modules/web.immediate.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Poppins-Bold.ttf */ "./src/fonts/Poppins-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Poppins-Regular.ttf */ "./src/fonts/Poppins-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Poppins-SemiBold.ttf */ "./src/fonts/Poppins-SemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! img/ellipse.png */ "./src/img/ellipse.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! img/bg_line.png */ "./src/img/bg_line.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! img/ellipse_two.png */ "./src/img/ellipse_two.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! img/mobile_bg.png */ "./src/img/mobile_bg.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! img/web_bg.png */ "./src/img/web_bg.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! img/prodcut_bg.png */ "./src/img/prodcut_bg.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! img/customer_bgOne.png */ "./src/img/customer_bgOne.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! img/customer_bgTwo.png */ "./src/img/customer_bgTwo.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! img/counter_bg.png */ "./src/img/counter_bg.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\na,\na:visited {\n  text-decoration: none;\n}\n\nul li {\n  list-style: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n  border: none;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n  line-height: 1;\n  background: #FFFFFF;\n  font-size: 16px;\n  color: rgba(12, 12, 12, 0.702);\n  font-family: \"Poppins\", sans-serif;\n  line-height: 1.625;\n}\n\n/*--------------------------------------*/\n#root {\n  height: 100%;\n  line-height: 1;\n}\n\n.wrapper {\n  overflow: clip;\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\n/*--------------------------------------*/\n.main {\n  flex: 1 1 auto;\n}\n\n[class*=__container] {\n  max-width: 1350px;\n  margin: 0px auto;\n  padding: 0px 15px;\n}\n\n@font-face {\n  font-family: \"Poppins\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  font-weight: 700;\n}\n@font-face {\n  font-family: \"Poppins\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\");\n  font-weight: 400;\n}\n@font-face {\n  font-family: \"Poppins\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\");\n  font-weight: 600;\n}\n.read_more {\n  width: 200px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  border-radius: 40px;\n  color: white;\n  background-color: rgb(0, 99, 255);\n}\n\n.read_more:hover {\n  transition: all ease-in-out 0.3s;\n  background-color: rgb(86, 140, 226);\n}\n\n.main_title {\n  font-size: 38px;\n  font-family: \"Poppins\";\n  color: rgb(12, 12, 12);\n  font-weight: bold;\n  line-height: 1.053;\n  padding-bottom: calc(20px + 20 * ((100vw - 320px) / 1600));\n}\n\n.main_text {\n  font-size: 16px;\n  font-family: \"Poppins\";\n  color: rgba(12, 12, 12, 0.702);\n  line-height: 1.625;\n  padding-bottom: calc(30px + 20 * ((100vw - 320px) / 1600));\n}\n\n.wrapper .header {\n  position: absolute;\n  width: 100%;\n  padding-top: calc(17px + 30 * ((100vw - 320px) / 1600));\n  z-index: 10;\n}\n.wrapper .header .header__container {\n  display: flex;\n  align-items: center;\n}\n.wrapper .header .header__container .header_logo {\n  padding-right: calc(25px + 90 * ((100vw - 320px) / 1600));\n  flex-shrink: 0;\n  position: relative;\n  z-index: 10;\n}\n.wrapper .header .header__container .header_logo .logo {\n  max-width: 100%;\n}\n.wrapper .header .header__container .burger_body {\n  flex: 1 0 auto;\n}\n.wrapper .header .header__container .burger_body .header_menu .header_menu_list {\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 5px;\n}\n.wrapper .header .header__container .burger_body .header_menu .header_menu_list .header_menu_item {\n  padding-right: calc(20px + 40 * ((100vw - 320px) / 1600));\n}\n.wrapper .header .header__container .burger_body .header_menu .header_menu_list .header_menu_item .header_menu_link {\n  font-family: \"Poppins\", sans-serif;\n  color: white;\n  position: relative;\n}\n.wrapper .header .header__container .burger_body .header_menu .header_menu_list .header_menu_item .header_menu_link::before {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: -5px;\n  content: \"\";\n  height: 3px;\n  background-color: #fff;\n  width: 0%;\n  transition: all 0.5s;\n}\n.wrapper .header .header__container .burger_body .header_menu .header_menu_list .header_menu_item .header_menu_link:hover::before {\n  content: \"\";\n  height: 3px;\n  background-color: #fff;\n  width: 100%;\n}\n@media (max-width: 940px) {\n  .wrapper .header .header__container .burger_body {\n    position: fixed;\n    left: 0;\n    top: -100%;\n    width: 100%;\n    height: 100%;\n    background-color: #0063ff;\n    z-index: 7;\n    overflow: auto;\n    transition: all ease-in-out 0.5s;\n  }\n  .wrapper .header .header__container .burger_body .header_menu .header_menu_list {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 200px;\n  }\n  .wrapper .header .header__container .burger_body .header_menu .header_menu_list .header_menu_item {\n    font-size: 50px;\n    padding-bottom: 20px;\n  }\n}\n.wrapper .header .header__container .burgerActive {\n  top: 0%;\n}\n.wrapper .header .header__container .header_social {\n  display: flex;\n  gap: calc(5px + 15 * ((100vw - 320px) / 1600));\n  padding-right: calc(20px + 40 * ((100vw - 320px) / 1600));\n  flex: 1 0 auto;\n}\n.wrapper .header .header__container .header_social .header_social_ikon:hover {\n  transform: scale(1.5);\n  transition: all 200ms ease-in-out;\n}\n.wrapper .header .header__container .header_choose_lng {\n  display: flex;\n  position: relative;\n}\n.wrapper .header .header__container .header_choose_lng .header_lng {\n  cursor: pointer;\n}\n.wrapper .header .header__container .header_choose_lng .lng-EN {\n  margin-right: 12px;\n}\n.wrapper .header .header__container .header_choose_lng::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 2px;\n  height: 100%;\n  transform: translateY(-50%);\n  background-color: #0c0b0b;\n}\n.wrapper .header .header__container .header_discuss {\n  padding-left: calc(25px + 70 * ((100vw - 320px) / 1600));\n}\n.wrapper .header .header__container .header_discuss .discuss img {\n  min-width: 100%;\n}\n@media (max-width: 430px) {\n  .wrapper .header .header__container .header_discuss {\n    display: none;\n  }\n}\n@media (max-width: 940px) {\n  .wrapper .header .header__container .header_burger_wrapper {\n    padding-left: calc(10px + 30 * ((100vw - 320px) / 1600));\n    position: relative;\n    z-index: 10;\n  }\n  .wrapper .header .header__container .header_burger_wrapper .header_burger {\n    width: 24px;\n    height: 14px;\n    position: relative;\n    cursor: pointer;\n  }\n  .wrapper .header .header__container .header_burger_wrapper .header_burger span, .wrapper .header .header__container .header_burger_wrapper .header_burger::before, .wrapper .header .header__container .header_burger_wrapper .header_burger::after {\n    content: \"\";\n    position: absolute;\n    right: 0;\n    height: 2px;\n    width: 100%;\n    background-color: #5f5151;\n    transition: transform 0.5s;\n  }\n  .wrapper .header .header__container .header_burger_wrapper .header_burger span {\n    top: 50%;\n    transform: translateY(-50%);\n    width: 80%;\n    right: 0;\n  }\n  .wrapper .header .header__container .header_burger_wrapper .header_burger::before {\n    bottom: 0;\n  }\n  .wrapper .header .header__container .header_burger_wrapper .header_burger::after {\n    top: 0;\n  }\n  .wrapper .header .header__container .header_burger_wrapper .header_burger:hover span {\n    transform: scale(0);\n  }\n  .wrapper .header .header__container .header_burger_wrapper .header_burger:hover::before {\n    transform: translateY(-6px) rotate(35deg);\n  }\n  .wrapper .header .header__container .header_burger_wrapper .header_burger:hover::after {\n    transform: translateY(6px) rotate(-35deg);\n  }\n}\n\n.main .home {\n  position: relative;\n  z-index: 1;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-position: right bottom 40px;\n  background-repeat: no-repeat;\n}\n.main .home .home__container {\n  display: flex;\n  align-items: center;\n  height: 100vh;\n  justify-content: space-between;\n  position: relative;\n  padding-right: calc(15px + 70 * ((100vw - 320px) / 1600));\n  padding-left: calc(15px + 70 * ((100vw - 320px) / 1600));\n}\n.main .home .home__container .home_content {\n  font-family: \"Poppins\", sans-serif;\n  color: white;\n}\n.main .home .home__container .home_content .home_content_title {\n  max-width: 605px;\n  padding-bottom: calc(10px + 30 * ((100vw - 320px) / 1600));\n}\n.main .home .home__container .home_content .home_content_title h1 {\n  line-height: 1.6;\n  font-size: calc(20px + 20 * ((100vw - 320px) / 1600));\n}\n@media (max-width: 1100px) {\n  .main .home .home__container .home_content .home_content_title h1 {\n    max-width: 405px;\n  }\n}\n.main .home .home__container .home_content .home_content_text {\n  font-size: calc(16px + 5 * ((100vw - 320px) / 1600));\n  max-width: 455px;\n  line-height: 1.6;\n}\n@media (max-width: 768px) {\n  .main .home .home__container .home_content .home_content_title {\n    padding-top: 20px;\n    color: rgb(180, 220, 253);\n  }\n  .main .home .home__container .home_content .home_content_text {\n    color: rgb(180, 220, 253);\n  }\n}\n.main .home .home__container .home_content .home_content_text:not(:last-child) {\n  padding-bottom: calc(10px + 30 * ((100vw - 320px) / 1600));\n}\n.main .home .home__container .home_content .home_content_button .read_more {\n  background-color: #fff;\n  color: #0063ff;\n}\n.main .home .home__container .home_content .home_content_button .read_more:hover {\n  background-color: #f0cdcd;\n}\n.main .home .home__container .home_slider {\n  width: calc(260px + 300 * ((100vw - 320px) / 1600));\n  height: calc(350px + 170 * ((100vw - 320px) / 1600));\n  position: relative;\n}\n.main .home .home__container .home_slider .home_slider_view {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.main .home .home__container .home_slider .home_slider_view .slider {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n}\n.main .home .home__container .home_slider .home_slider_view .slider video {\n  border-radius: 60px 0 60px 0;\n  max-width: 100%;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.main .home .home__container .home_slider .home_slider_view .slider img {\n  border-radius: 60px 0 60px 0;\n  max-width: 100%;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.main .home .home__container .home_slider .home_slider_view .sliderAct {\n  transition: all 1s;\n  opacity: 1;\n}\n.main .home .home__container .home_slider .home_slider_control {\n  display: flex;\n  justify-content: space-between;\n  padding-top: calc(30px + 50 * ((100vw - 320px) / 1600));\n}\n.main .home .home__container .home_slider .home_slider_control .home_slider_control_left {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid #fff;\n  cursor: pointer;\n}\n.main .home .home__container .home_slider .home_slider_control .home_slider_control_left:hover {\n  background-color: white;\n  transition: all 0.3s ease-in-out;\n}\n.main .home .home__container .home_slider .home_slider_control .home_slider_control_left:hover svg * {\n  fill: currentColor;\n  color: #0063ff;\n}\n.main .home .home__container .home_slider .home_slider_control .home_slider_control_right {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid #0063ff;\n  cursor: pointer;\n}\n.main .home .home__container .home_slider .home_slider_control .home_slider_control_right:hover {\n  background-color: #0063ff;\n  transition: all 0.3s ease-in-out;\n}\n.main .home .home__container .home_slider .home_slider_control .home_slider_control_right:hover svg * {\n  fill: currentColor;\n  color: white;\n}\n.main .home .home__container .home_slider .play_slide {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n}\n@media (max-width: 768px) {\n  .main .home .home__container .home_slider {\n    padding-bottom: calc(70px + 10 * ((100vw - 320px) / 1600));\n  }\n}\n.main .home .home__container .slider_active {\n  position: absolute;\n  left: -16px;\n  display: flex;\n  flex-direction: column;\n  gap: 17px;\n}\n.main .home .home__container .slider_active span {\n  border: 2px solid white;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n}\n.main .home .home__container .slider_active .sActive {\n  background-color: #fff;\n}\n@media (max-width: 1400px) {\n  .main .home .home__container .slider_active {\n    left: 16px;\n  }\n}\n@media (max-width: 768px) {\n  .main .home .home__container {\n    flex-direction: column;\n    justify-content: center;\n  }\n  .main .home .home__container .home_content {\n    align-self: flex-start;\n  }\n  .main .home .home__container .home_slider {\n    padding-top: 20px;\n    width: 80%;\n  }\n  .main .home .home__container .slider_active {\n    top: 70%;\n    transform: translateY(-70%);\n  }\n}\n.main .home::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: #0063ff;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-repeat: no-repeat;\n  background-position: 0 bottom;\n  width: 66%;\n  height: 100%;\n  z-index: -1;\n}\n@media (max-width: 1150px) {\n  .main .home::after {\n    content: \"\";\n    width: 70%;\n  }\n}\n.main .home::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  background-repeat: no-repeat;\n  background-position: top;\n  z-index: 1;\n  width: 400px;\n  height: 300px;\n}\n.main .partners .partners__container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 35px 0;\n  flex-wrap: wrap;\n}\n.main .partners .partners__container .partner_logo {\n  width: 195px;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.main .partners .partners__container .partner_logo svg * {\n  fill: currentColor;\n  color: rgb(13, 13, 13);\n  opacity: 0.302;\n}\n@media (max-width: 400px) {\n  .main .partners .partners__container .partner_logo {\n    width: 150px;\n  }\n}\n.main .partners .partners__container .active_logo_partner {\n  background-color: rgb(255, 255, 255);\n  box-shadow: 2.63px 5.393px 19.44px 4.56px rgba(12, 12, 12, 0.05);\n}\n.main .partners .partners__container .active_logo_partner svg * {\n  fill: currentColor;\n  color: #f40009;\n  opacity: 1;\n}\n.main .partners .partners__container .partner_logo:hover {\n  background-color: rgb(255, 255, 255);\n  box-shadow: 2.63px 5.393px 19.44px 4.56px rgba(12, 12, 12, 0.05);\n}\n.main .partners .partners__container .partner_logo:hover svg * {\n  fill: currentColor;\n  color: #f40009;\n  opacity: 1;\n}\n.main .mobile {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n  background-repeat: no-repeat;\n  background-position: 0 50%;\n}\n.main .mobile .mobile__container {\n  display: flex;\n  align-items: center;\n  padding-top: calc(30px + 50 * ((100vw - 320px) / 1600));\n}\n.main .mobile .mobile__container .mobile_image {\n  flex: 0 1 50%;\n  display: flex;\n  justify-content: center;\n}\n.main .mobile .mobile__container .mobile_image img {\n  max-width: 100%;\n}\n.main .mobile .mobile__container .mobile_content {\n  flex: 0 1 50%;\n}\n@media (max-width: 768px) {\n  .main .mobile .mobile__container {\n    flex-direction: column;\n  }\n  .main .mobile .mobile__container .mobile_image {\n    max-width: 300px;\n    max-height: 500px;\n  }\n}\n@media (max-width: 1250px) {\n  .main .mobile {\n    background-size: 30%;\n  }\n}\n@media (max-width: 768px) {\n  .main .mobile {\n    background-size: 50%;\n    background-position: 0 10%;\n  }\n}\n.main .web {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n  background-repeat: no-repeat;\n  background-position: 100% 0;\n}\n.main .web .web__container {\n  display: flex;\n  align-items: center;\n  padding-top: calc(30px + 50 * ((100vw - 320px) / 1600));\n  padding-bottom: calc(30px + 50 * ((100vw - 320px) / 1600));\n}\n.main .web .web__container .web_content {\n  flex: 0 1 50%;\n}\n.main .web .web__container .web_image {\n  flex: 0 1 50%;\n  display: flex;\n  justify-content: flex-end;\n}\n.main .web .web__container .web_image img {\n  max-width: 100%;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n@media (max-width: 768px) {\n  .main .web .web__container {\n    flex-direction: column;\n  }\n  .main .web .web__container .web_image {\n    padding-top: 50px;\n  }\n}\n@media (max-width: 1250px) {\n  .main .web {\n    background-size: 40%;\n    background-position: 100% 30%;\n  }\n}\n@media (max-width: 768px) {\n  .main .web {\n    background-size: 50%;\n    background-position: 100% 90%;\n  }\n}\n.main .prodcut {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\n  background-repeat: no-repeat;\n  background-position: 0 50%;\n  background-size: 20% 80%;\n}\n.main .prodcut .prodcut__container {\n  display: flex;\n  align-items: center;\n  padding-top: calc(30px + 50 * ((100vw - 320px) / 1600));\n  padding-bottom: calc(60px + 90 * ((100vw - 320px) / 1600));\n  padding-left: calc(30px + 20 * ((100vw - 320px) / 1600));\n  gap: calc(30px + 60 * ((100vw - 320px) / 1600));\n}\n.main .prodcut .prodcut__container .prodcut_image {\n  flex: 0 1 50%;\n  display: flex;\n  justify-content: center;\n}\n.main .prodcut .prodcut__container .prodcut_image img {\n  max-width: 100%;\n}\n.main .prodcut .prodcut__container .prodcut_content {\n  flex: 0 1 50%;\n}\n@media (max-width: 768px) {\n  .main .prodcut .prodcut__container {\n    flex-direction: column;\n  }\n}\n@media (max-width: 1250px) {\n  .main .prodcut {\n    background-size: 20% 70%;\n  }\n}\n@media (max-width: 768px) {\n  .main .prodcut {\n    background-size: 50%;\n    background-position: 0 10%;\n  }\n}\n\n.timeline_wrapper {\n  background-color: #0063ff;\n}\n.timeline_wrapper .timeline__container {\n  display: flex;\n  justify-content: space-between;\n   padding-top: calc(20px + 80 * ((100vw - 320px) / 1600));\n   padding-bottom: calc(20px + 80 * ((100vw - 320px) / 1600));\n}\n.timeline_wrapper .timeline__container .timeline_block {\n  flex: 0 1 50%;\n}\n.timeline_wrapper .timeline__container .timeline_block .timeline_block_title {\n  font-size: calc(18px + 20 * ((100vw - 320px) / 1600));\n  font-family: \"Poppins\", sans-serif;\n  color: rgb(255, 255, 255);\n  font-weight: bold;\n  line-height: 1.316;\n   padding-bottom: calc(20px + 15 * ((100vw - 320px) / 1600));\n  font-weight: 400;\n}\n.timeline_wrapper .timeline__container .timeline_block .timeline {\n  position: relative;\n  z-index: 2;\n}\n.timeline_wrapper .timeline__container .timeline_block .timeline .timeline_event {\n  display: flex;\n  justify-content: center;\n}\n.timeline_wrapper .timeline__container .timeline_block .timeline .timeline_event .timeline_event_icon {\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n  background-color: #1a73ff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-family: \"Poppins\", sans-serif;\n  color: rgb(255, 255, 255);\n  position: relative;\n  margin-right: 25px;\n  outline: 4px solid #0063ff;\n}\n.timeline_wrapper .timeline__container .timeline_block .timeline .timeline_event .timeline_event_icon .timeline_event_icon_in {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  background-color: #3181ff;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n}\n.timeline_wrapper .timeline__container .timeline_block .timeline .timeline_event .timeline_event_icon .inView {\n  background-color: #fff;\n  color: #2068b0;\n  animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n@keyframes scale-up-center {\n  0% {\n    transform: scale(0.5);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.timeline_wrapper .timeline__container .timeline_block .timeline .timeline_event .timeline_event_content .clickView {\n  font-size: calc(16px + 4 * ((100vw - 320px) / 1600));\n  font-family: \"Poppins\", sans-serif;\n  color: #99c1ff;\n  line-height: 1.622;\n  padding-top: 5px;\n  cursor: pointer;\n  font-weight: 400;\n}\n.timeline_wrapper .timeline__container .timeline_block .timeline .timeline_event .timeline_event_content .white {\n  color: white;\n}\n.timeline_wrapper .timeline__container .timeline_block .timeline .timeline_event .timeline_event_content .closeView {\n  font-size: calc(16px + 4 * ((100vw - 320px) / 1600));\n  font-family: \"Poppins\", sans-serif;\n  color: rgba(255, 255, 255, 0.6);\n  line-height: 1.622;\n  transition: all 0.6s ease-out;\n  height: 0;\n  visibility: hidden;\n  opacity: 0;\n  font-weight: 400;\n}\n.timeline_wrapper .timeline__container .timeline_block .timeline .timeline_event .timeline_event_content .openView {\n  height: 100%;\n  opacity: 1;\n  visibility: visible;\n  padding-top: 10px;\n  color: rgb(255, 255, 255);\n}\n.timeline_wrapper .timeline__container .timeline_block .timeline .timeline_event:not(:last-child) {\n  padding-bottom: 25px;\n}\n.timeline_wrapper .timeline__container .timeline_block .timeline::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 18px;\n  background-color: #1a73ff;\n  width: 4px;\n  height: 100%;\n  z-index: -1;\n}\n.timeline_wrapper .timeline__container .timeline_image {\n  flex: 0 1 45%;\n  border-radius: 60px 0 60px 0;\n  max-width: 520px;\n}\n.timeline_wrapper .timeline__container .timeline_image img {\n  max-width: 100%;\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 60px 0 60px 0;\n}\n@media (max-width: 768px) {\n  .timeline_wrapper .timeline__container {\n    flex-direction: column;\n    align-items: center;\n  }\n  .timeline_wrapper .timeline__container .timeline_image {\n    padding-top: 50px;\n  }\n}\n\n.customer {\n  position: relative;\n}\n.customer .customer__container {\n  padding-top: calc(30px + 70 * ((100vw - 320px) / 1600));\n  padding-bottom: calc(100px + 100 * ((100vw - 320px) / 1600));\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.customer .customer__container .customer_title {\n  font-size: calc(18px + 20 * ((100vw - 320px) / 1600));\n  padding-bottom: calc(30px + 50 * ((100vw - 320px) / 1600));\n  font-family: \"Poppins\", sans-serif;\n  color: rgb(12, 12, 12);\n  font-weight: bold;\n  line-height: 1.053;\n  text-align: center;\n}\n.customer .customer__container .customer_slider_wrapper {\n  background-color: rgb(255, 255, 255);\n  box-shadow: 10.603px 29.13px 45.9px 5.1px rgba(12, 12, 12, 0.1);\n  border-radius: 60px 0 60px 0;\n  max-height: 405px;\n  transition: all 0.9s ease-in-out;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider {\n  padding-right: calc(20px + 180 * ((100vw - 320px) / 1600));\n  padding-left: calc(20px + 180 * ((100vw - 320px) / 1600));\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider .customer_slider_title {\n  position: relative;\n  max-width: 550px;\n  margin-top: calc(36px + 70 * ((100vw - 320px) / 1600));\n  font-size: calc(18px + 7 * ((100vw - 320px) / 1600));\n  font-family: \"Poppins\", serif;\n  color: rgb(13, 13, 13);\n  font-style: italic;\n  font-weight: 600;\n  line-height: 1.2;\n  text-align: center;\n  opacity: 0;\n  transition: all 0.5s ease-in-out;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider .title_active {\n  opacity: 1;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider .customer_slider_title::before {\n  content: \"❝\";\n  position: absolute;\n  top: calc(-25px + -45 * ((100vw - 320px) / 1600));\n  left: calc(-25px + -45 * ((100vw - 320px) / 1600));\n  font-size: calc(55px + 50 * ((100vw - 320px) / 1600));\n  font-family: \"Poppins\", sans-serif;\n  color: rgba(13, 13, 13, 0.6);\n  font-style: italic;\n  line-height: 1.2;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider .customer_slider_person {\n  display: flex;\n  gap: 30px;\n  padding-top: calc(30px + 40 * ((100vw - 320px) / 1600));\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider .customer_slider_person .customer_slider_person_avatar {\n  height: 195px;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider .customer_slider_person .customer_slider_person_avatar .customer_avatar {\n  border-radius: 60px 0 60px 0;\n  width: 100%;\n  height: 100%;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider .customer_slider_person .customer_slider_person_avatar .customer_avatar img {\n  max-width: 100%;\n  border-radius: 60px 0 60px 0;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  opacity: 0;\n  transition: opacity 0.5s ease;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider .customer_slider_person .customer_slider_person_avatar .customer_avatar .visible {\n  animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  opacity: 1;\n}\n@keyframes scale-up-center {\n  0% {\n    transform: scale(0.5);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider .customer_slider_person .customer_slider_person_infa {\n  padding-top: 50px;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider .customer_slider_person .customer_slider_person_infa h1 {\n  flex-wrap: nowrap;\n  font-size: calc(18px + 12 * ((100vw - 320px) / 1600));\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider .customer_slider_person .customer_slider_person_infa h2 {\n  flex-wrap: nowrap;\n  padding-top: 10px;\n  font-size: calc(16px + 4 * ((100vw - 320px) / 1600));\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 600;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider_controlled {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 50px;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider_controlled .customer_pre {\n  width: 40px;\n  height: 40px;\n  border: 2px solid #0063ff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider_controlled .customer_pre:hover {\n  background-color: #0063ff;\n  transition: all 0.3s ease-in-out;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider_controlled .customer_pre:hover svg * {\n  fill: currentColor;\n  color: white;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider_controlled .customer_active {\n  display: flex;\n  gap: 18px;\n  align-items: flex-end;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider_controlled .customer_active span {\n  width: 37px;\n  height: 4px;\n  background-color: #cfcfcf;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider_controlled .customer_active .customer_active_point {\n  background-color: #0063ff;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider_controlled .customer_next {\n  width: 40px;\n  height: 40px;\n  border: 2px solid #0063ff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider_controlled .customer_next:hover {\n  background-color: #0063ff;\n  transition: all 0.3s ease-in-out;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider_controlled .customer_next:hover svg * {\n  fill: currentColor;\n  color: white;\n}\n\n.customer::before {\n  content: \"\";\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\n  background-repeat: no-repeat;\n  width: 200px;\n  height: 400px;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  z-index: -1;\n}\n\n.customer::after {\n  content: \"\";\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");\n  background-repeat: no-repeat;\n  width: 110px;\n  height: 400px;\n  position: absolute;\n  right: 0px;\n  top: 80px;\n  z-index: -1;\n}\n\n.counter {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n.counter .counter__container {\n  display: flex;\n  justify-content: space-between;\n  padding-top: calc(25px + 50 * ((100vw - 320px) / 1600));\n  padding-bottom: calc(25px + 50 * ((100vw - 320px) / 1600));\n}\n.counter .counter__container .count_block .count_block_number {\n  font-size: 54px;\n  font-family: \"Poppins\", sans-serif;\n  color: rgb(255, 255, 255);\n  line-height: 1.2;\n  text-align: center;\n  font-weight: 600;\n}\n.counter .counter__container .count_block .count_block_name {\n  font-size: 18px;\n  font-family: \"Poppins\", sans-serif;\n  color: rgb(255, 255, 255);\n  line-height: 1.2;\n  text-align: center;\n  padding-top: 10px;\n}\n@media (max-width: 768px) {\n  .counter .counter__container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 20px;\n    gap: 20px;\n  }\n}\n\n.news .news__container {\n  display: flex;\n  gap: 30px;\n  padding-top: calc(20px + 80 * ((100vw - 320px) / 1600));\n  padding-bottom: calc(20px + 80 * ((100vw - 320px) / 1600));\n}\n.news .news__container .news_blockOne {\n  display: grid;\n  flex: 0 1 45%;\n  grid-gap: 30px;\n  gap: 30px;\n  align-items: flex-end;\n}\n.news .news__container .news_blockOne .news_head .news_head_title {\n  font-size: 38px;\n  font-family: \"Poppins\", sans-serif;\n  color: rgb(12, 12, 12);\n  font-weight: bold;\n  line-height: 1.053;\n  padding-bottom: 30px;\n}\n.news .news__container .news_blockOne .card-1 .news_card_image {\n  height: 400px;\n}\n.news .news__container .news_blockTwo {\n  display: grid;\n  flex: 0 1 55%;\n  grid-gap: 30px;\n  gap: 30px;\n}\n.news .news__container .news_card {\n  background-color: rgb(255, 255, 255);\n  box-shadow: 0.684px 1.879px 32px 0px rgba(12, 12, 12, 0.06);\n}\n.news .news__container .news_card .news_card_image {\n  position: relative;\n  height: 200px;\n}\n.news .news__container .news_card .news_card_image .card_image {\n  max-width: 100%;\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.news .news__container .news_card .news_card_image .card_image_hover_data {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #0063ff;\n  width: calc(50px + 10 * ((100vw - 320px) / 1600));\n  height: calc(60px + 20 * ((100vw - 320px) / 1600));\n  color: white;\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  z-index: 2;\n}\n.news .news__container .news_card .news_card_image .card_image_hover_data .card_image_hover_data_number {\n  text-align: center;\n  width: 80%;\n  border-bottom: 2px solid #80b1ff;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.news .news__container .news_card .news_card_image .card_image_hover_data .card_image_hover_data_month {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.news .news__container .news_card .news_card_image .card_image_hover {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: all 0.2s ease-in-out;\n}\n.news .news__container .news_card .news_card_image .card_image_hover .card_image_hover_share {\n  cursor: pointer;\n  background-color: rgb(255, 255, 255);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  width: 135px;\n  height: 42px;\n  border-radius: 20px;\n  line-height: 42px;\n}\n.news .news__container .news_card .news_card_image .card_image_hover .card_image_hover_view {\n  position: absolute;\n  left: 20px;\n  bottom: 20px;\n  z-index: 2;\n  background-color: #d09eeb;\n  width: 90px;\n  height: 30px;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.news .news__container .news_card .news_card_image .card_image_hover .card_image_hover_view .card_image_hover_view_count {\n  padding-left: 6px;\n}\n.news .news__container .news_card .news_card_image .hover_visible {\n  opacity: 1;\n}\n.news .news__container .news_card .news_card_image .card_image_hover::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-image: -ms-linear-gradient(-135deg, rgb(244, 81, 108) 0%, rgb(152, 58, 240) 100%);\n  background: linear-gradient(-135deg, rgb(244, 81, 108) 0%, rgb(152, 58, 240) 100%);\n  opacity: 0.702;\n}\n.news .news__container .news_card .news_card_content {\n  padding: 30px;\n}\n.news .news__container .news_card .news_card_content .news_card_content_hash-tag {\n  padding-bottom: 10px;\n}\n.news .news__container .news_card .news_card_content .news_card_content_hash-tag a {\n  font-size: 12px;\n  color: rgb(0, 99, 255);\n  text-transform: uppercase;\n}\n.news .news__container .news_card .news_card_content .news_card_content_title {\n  padding-bottom: 20px;\n  font-size: 18px;\n  color: rgb(12, 12, 12);\n  font-weight: bold;\n}\n.news .news__container .news_card .news_card_content .news_card_content_button {\n  padding-top: 20px;\n}\n.news .news__container .news_card .news_card_content .news_card_content_button .read_more {\n  width: 135px;\n  height: 40px;\n  font-size: 16px;\n}\n@media (max-width: 768px) {\n  .news .news__container {\n    flex-direction: column;\n  }\n}\n\n.footer {\n  background-color: #ebf3ff;\n}\n.footer .footer__container .footer_head {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid #d4dbe6;\n  padding-top: calc(40px + 60 * ((100vw - 320px) / 1600));\n  padding-bottom: calc(20px + 20 * ((100vw - 320px) / 1600));\n}\n.footer .footer__container .footer_head .footer_head_logo {\n  font-size: 35px;\n  font-family: \"Poppins\", sans-serif;\n  color: rgb(0, 99, 255);\n  font-weight: bold;\n  line-height: 1.143;\n  margin-right: 20px;\n}\n.footer .footer__container .footer_head .footer_head_nemu .footer_head_menu_list {\n  display: flex;\n  gap: 40px;\n  flex-wrap: wrap;\n  row-gap: 5px;\n}\n.footer .footer__container .footer_head .footer_head_nemu .footer_head_menu_list .footer_head_menu_item .footer_head_menu_link {\n  font-size: calc(15px + 4 * ((100vw - 320px) / 1600));\n  font-family: \"Poppins\", sans-serif;\n  color: rgb(12, 12, 12);\n  position: relative;\n}\n.footer .footer__container .footer_head .footer_head_nemu .footer_head_menu_list .footer_head_menu_item .footer_head_menu_link::before {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: -5px;\n  content: \"\";\n  height: 3px;\n  background-color: #fff;\n  width: 0%;\n  transition: all 0.5s;\n}\n.footer .footer__container .footer_head .footer_head_nemu .footer_head_menu_list .footer_head_menu_item .footer_head_menu_link:hover::before {\n  content: \"\";\n  height: 3px;\n  background-color: #fff;\n  width: 100%;\n}\n.footer .footer__container .footer_bottom {\n  display: flex;\n  justify-content: space-between;\n  padding-top: calc(10px + 20 * ((100vw - 320px) / 1600));\n  padding-bottom: calc(10px + 20 * ((100vw - 320px) / 1600));\n  align-items: center;\n}\n.footer .footer__container .footer_bottom .footer_bottom_copyright {\n  font-size: 14px;\n  font-family: \"Poppins\", sans-serif;\n  color: rgb(12, 12, 12);\n}\n.footer .footer__container .footer_bottom .footer_bottom_social {\n  display: flex;\n  gap: 50px;\n}\n.footer .footer__container .footer_bottom .footer_bottom_social .footer_social_ikon a {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.footer .footer__container .footer_bottom .footer_bottom_social .footer_social_ikon a::before {\n  content: \"\";\n  background: linear-gradient(45deg, #00B5F5, #002A8F);\n  transition: all 265ms ease-out;\n  position: absolute;\n  display: block;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n.footer .footer__container .footer_bottom .footer_bottom_social .footer_social_ikon a:hover::before {\n  content: \"\";\n  transform: scale(0);\n}\n.footer .footer__container .footer_bottom .footer_bottom_social .footer_social_ikon a:hover svg {\n  transform: scale(1.5);\n}\n.footer .footer__container .footer_bottom .footer_bottom_social .footer_social_ikon a:hover svg * {\n  fill: currentColor;\n  color: black;\n}\n.footer .footer__container .footer_bottom .footer_bottom_social .footer_social_ikon a svg {\n  position: relative;\n  z-index: 2;\n}\n.footer .footer__container .footer_bottom .footer_bottom_social .footer_social_ikon a svg * {\n  fill: currentColor;\n  color: rgb(250, 241, 241);\n}", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style/_static.scss","webpack://./src/style/fonts.scss","webpack://./src/style/style.scss","webpack://./src/style/header.scss","webpack://./src/style/home.scss","webpack://./src/style/timeline.scss","webpack://./src/style/customer.scss","webpack://./src/style/news.scss","webpack://./src/style/footer.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACgChB;;EAEC,qBAAA;AD9BD;;ACkCA;EACC,gBAAA;AD/BD;;ACkCA;EACC,eAAA;AD/BD;;ACkCA;;;EAGC,UAAA;EACA,SAAA;EACA,YAAA;EACA,sBAAA;EACA,2BAAA;EACA,8BAAA;AD/BD;;ACkCA;;EAEC,YAAA;EACA,cAAA;EACA,mBAAA;EACA,eAAA;EACA,8BAAA;EACA,kCAAA;EACA,kBAAA;AD/BD;;AC0CA,yCAAA;AACA;EACC,YAAA;EACA,cAAA;ADvCD;;AC0CA;EACC,cAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;ADvCD;;AC0CA,yCAAA;AACA;EACC,cAAA;ADvCD;;AC2CA;EACC,iBAAA;EACA,gBAAA;EACA,iBAAA;ADxCD;;AE1DA;EACC,sBAAA;EACA,+DAAA;EACA,gBAAA;AF6DD;AE1DA;EACC,sBAAA;EACA,+DAAA;EACA,gBAAA;AF4DD;AEzDA;EACC,sBAAA;EACA,+DAAA;EACA,gBAAA;AF2DD;AG1EA;EACG,YAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAAA;EACA,mBAAA;EACA,YAAA;EACA,iCAAA;AH4EH;;AGxEA;EACG,gCAAA;EACA,mCAAA;AH2EH;;AGxEA;EACG,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,iBAAA;EACA,kBAAA;EFID,0DAAA;ADwEF;;AGvEA;EACG,eAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EFLD,0DAAA;ADgFF;;AIzGG;EACG,kBAAA;EACA,WAAA;EHuBJ,uDAAA;EGrBI,WAAA;AJ4GN;AI1GM;EAEG,aAAA;EACA,mBAAA;AJ2GT;AIzGS;EHcP,yDAAA;EGZU,cAAA;EACA,kBAAA;EACA,WAAA;AJ2GZ;AIzGY;EACG,eAAA;AJ2Gf;AIvGS;EACG,cAAA;AJyGZ;AInGe;EACG,aAAA;EACA,eAAA;EACA,YAAA;AJqGlB;AInGkB;EHThB,yDAAA;AD+GF;AIlGqB;EACG,kCAAA;EACA,YAAA;EACA,kBAAA;AJoGxB;AIjGqB;EACG,WAAA;EACA,kBAAA;EACA,SAAA;EACA,2BAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,sBAAA;EACA,SAAA;EACA,oBAAA;AJmGxB;AIhGqB;EACG,WAAA;EACA,WAAA;EACA,sBAAA;EACA,WAAA;AJkGxB;AIzFS;EACG;IACG,eAAA;IACA,OAAA;IACA,UAAA;IACA,WAAA;IACA,YAAA;IACA,yBAAA;IACA,UAAA;IACA,cAAA;IACA,gCAAA;EJ2Fb;EItFgB;IACG,aAAA;IACA,sBAAA;IACA,mBAAA;IACA,kBAAA;EJwFnB;EIrFmB;IACG,eAAA;IACA,oBAAA;EJuFtB;AACF;AIhFS;EACG,OAAA;AJkFZ;AI9ES;EACG,aAAA;EHnFV,8CAAA;EAAA,yDAAA;EGsFU,cAAA;AJgFZ;AI5EY;EACG,qBAAA;EACA,iCAAA;AJ8Ef;AI1ES;EACG,aAAA;EACA,kBAAA;AJ4EZ;AIzEY;EACG,eAAA;AJ2Ef;AIxEY;EACG,kBAAA;AJ0Ef;AIpES;EACG,WAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,UAAA;EACA,YAAA;EACA,2BAAA;EACA,yBAAA;AJsEZ;AInES;EH3HP,wDAAA;ADiMF;AIhEe;EACG,eAAA;AJkElB;AI7DS;EACG;IACG,aAAA;EJ+Db;AACF;AI3DS;EACG;IH/IV,wDAAA;IGkJa,kBAAA;IACA,WAAA;EJ4Db;EI1Da;IACG,WAAA;IACA,YAAA;IACA,kBAAA;IACA,eAAA;EJ4DhB;EI1DgB;IAGG,WAAA;IACA,kBAAA;IACA,QAAA;IACA,WAAA;IACA,WAAA;IACA,yBAAA;IACA,0BAAA;EJ0DnB;EIvDgB;IACG,QAAA;IACA,2BAAA;IACA,UAAA;IACA,QAAA;EJyDnB;EItDgB;IACG,SAAA;EJwDnB;EIrDgB;IACG,MAAA;EJuDnB;EIpDgB;IACG,mBAAA;EJsDnB;EInDgB;IACG,yCAAA;EJqDnB;EIlDgB;IACG,yCAAA;EJoDnB;AACF;;AK9QG;EACG,kBAAA;EACA,UAAA;EACA,yDAAA;EACA,sCAAA;EACA,4BAAA;ALiRN;AK/QM;EACG,aAAA;EACA,mBAAA;EACA,aAAA;EACA,8BAAA;EACA,kBAAA;EJcP,yDAAA;EAAA,wDAAA;ADqQF;AK9QS;EACG,kCAAA;EACA,YAAA;ALgRZ;AK9QY;EACG,gBAAA;EJIb,0DAAA;AD6QF;AK9Qe;EACG,gBAAA;EJAhB,qDAAA;ADiRF;AK3QY;EAEM;IACG,gBAAA;EL4QnB;AACF;AKvQY;EJfV,oDAAA;EIiBa,gBAAA;EACA,gBAAA;ALyQf;AKrQY;EACG;IACG,iBAAA;IACA,yBAAA;ELuQhB;EKpQa;IACG,yBAAA;ELsQhB;AACF;AKjQY;EJnCV,0DAAA;ADuSF;AK/Pe;EACG,sBAAA;EACA,cAAA;ALiQlB;AK9Pe;EACG,yBAAA;ALgQlB;AK3PS;EJnDP,mDAAA;EAAA,oDAAA;EIsDU,kBAAA;AL6PZ;AK1PY;EACG,kBAAA;EACA,WAAA;EACA,YAAA;AL4Pf;AK1Pe;EACG,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;AL4PlB;AK1PkB;EACG,4BAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,oBAAA;KAAA,iBAAA;AL4PrB;AKzPkB;EACG,4BAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,oBAAA;KAAA,iBAAA;AL2PrB;AKvPe;EACG,kBAAA;EACA,UAAA;ALyPlB;AKpPY;EACG,aAAA;EACA,8BAAA;EJ9Fb,uDAAA;ADqVF;AKlPe;EACG,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAAA;EACA,eAAA;ALoPlB;AKjPe;EACG,uBAAA;EACA,gCAAA;ALmPlB;AKhPqB;EACG,kBAAA;EACA,cAAA;ALkPxB;AK7Oe;EACG,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,yBAAA;EACA,eAAA;AL+OlB;AK5Oe;EACG,yBAAA;EACA,gCAAA;AL8OlB;AK3OqB;EACG,kBAAA;EACA,YAAA;AL6OxB;AKjOY;EACG,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;EACA,eAAA;ALmOf;AK9NS;EACG;IJjKV,0DAAA;EDkYA;AACF;AK1NS;EACG,kBAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AL4NZ;AK1NY;EACG,uBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;AL4Nf;AKzNY;EACG,sBAAA;AL2Nf;AKvNS;EACG;IACG,UAAA;ELyNb;AACF;AKrNM;EACG;IACG,sBAAA;IACA,uBAAA;ELuNV;EKrNU;IACG,sBAAA;ELuNb;EKlNU;IACG,iBAAA;IACA,UAAA;ELoNb;EKjNU;IACG,QAAA;IACA,2BAAA;ELmNb;AACF;AK9MG;EACG,WAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,yBAAA;EACA,yDAAA;EACA,4BAAA;EACA,6BAAA;EACA,UAAA;EACA,YAAA;EACA,WAAA;ALgNN;AK7MG;EACG;IACG,WAAA;IAEA,UAAA;EL8MP;AACF;AK3MG;EACG,WAAA;EACA,kBAAA;EACA,MAAA;EACA,SAAA;EACA,yDAAA;EACA,4BAAA;EACA,wBAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;AL6MN;AKxMM;EACG,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,eAAA;EACA,eAAA;AL0MT;AKxMS;EACG,YAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AL0MZ;AKvMe;EACG,kBAAA;EACA,sBAAA;EACA,cAAA;ALyMlB;AKlMS;EACG;IACG,YAAA;ELoMb;AACF;AKjMS;EACG,oCAAA;EACA,gEAAA;ALmMZ;AKhMe;EACG,kBAAA;EACA,cAAA;EACA,UAAA;ALkMlB;AK7LS;EACG,oCAAA;EACA,gEAAA;AL+LZ;AK5Le;EACG,kBAAA;EACA,cAAA;EACA,UAAA;AL8LlB;AKrLG;EACG,yDAAA;EACA,4BAAA;EACA,0BAAA;ALuLN;AKpLM;EACG,aAAA;EACA,mBAAA;EJrUP,uDAAA;AD4fF;AKpLS;EACG,aAAA;EACA,aAAA;EACA,uBAAA;ALsLZ;AKpLY;EACG,eAAA;ALsLf;AKlLS;EACG,aAAA;ALoLZ;AKvKM;EAEG;IACG,sBAAA;ELwKV;EKtKU;IACG,gBAAA;IACA,iBAAA;ELwKb;AACF;AKnKG;EACG;IACG,oBAAA;ELqKP;AACF;AKlKG;EACG;IACG,oBAAA;IACA,0BAAA;ELoKP;AACF;AKhKG;EACG,yDAAA;EACA,4BAAA;EACA,2BAAA;ALkKN;AKhKM;EACG,aAAA;EACA,mBAAA;EJlYP,uDAAA;EAAA,0DAAA;ADsiBF;AK/JS;EACG,aAAA;ALiKZ;AKrJS;EACG,aAAA;EACA,aAAA;EACA,yBAAA;ALuJZ;AKrJY;EACG,eAAA;EACA,WAAA;EACA,YAAA;EACA,oBAAA;KAAA,iBAAA;ALuJf;AK/IM;EAEG;IACG,sBAAA;ELgJV;EK9IU;IACG,iBAAA;ELgJb;AACF;AK3IG;EACG;IACG,oBAAA;IACA,6BAAA;EL6IP;AACF;AK1IG;EACG;IACG,oBAAA;IACA,6BAAA;EL4IP;AACF;AKxIG;EACG,yDAAA;EACA,4BAAA;EACA,0BAAA;EACA,wBAAA;AL0IN;AKxIM;EACG,aAAA;EACA,mBAAA;EJxcP,uDAAA;EAAA,0DAAA;EAAA,wDAAA;EAAA,+CAAA;ADslBF;AKxIS;EACG,aAAA;EACA,aAAA;EACA,uBAAA;AL0IZ;AKxIY;EACG,eAAA;AL0If;AKtIS;EACG,aAAA;ALwIZ;AK3HM;EAEG;IACG,sBAAA;EL4HV;AACF;AKnHG;EACG;IACG,wBAAA;ELqHP;AACF;AKlHG;EACG;IACG,oBAAA;IACA,0BAAA;ELoHP;AACF;;AM5oBA;EACG,yBAAA;AN+oBH;AM7oBG;EACG,aAAA;EACA,8BAAA;GLsBJ,uDAAA;GAAA,0DAAA;AD2nBF;AM3oBM;EACG,aAAA;AN6oBT;AM3oBS;ELaP,qDAAA;EKXU,kCAAA;EACA,yBAAA;EACA,iBAAA;EACA,kBAAA;GLQV,0DAAA;EKNU,gBAAA;AN6oBZ;AM1oBS;EACG,kBAAA;EACA,UAAA;AN4oBZ;AMzoBY;EACG,aAAA;EAEA,uBAAA;AN0oBf;AMvoBe;EACG,WAAA;EACA,YAAA;EACA,cAAA;EACA,yBAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,kCAAA;EACA,yBAAA;EACA,kBAAA;EACA,kBAAA;EACA,0BAAA;ANyoBlB;AMvoBkB;EACG,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,yBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;ANyoBrB;AMtoBkB;EACG,sBAAA;EACA,cAAA;EAEA,wEAAA;ANwoBrB;AMznBkB;EACG;IAEG,qBAAA;ENqoBtB;EMloBmB;IAEG,mBAAA;ENooBtB;AACF;AMxnBkB;EL3EhB,oDAAA;EK6EmB,kCAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;AN0nBrB;AMvnBkB;EACG,YAAA;ANynBrB;AMtnBkB;ELzFhB,oDAAA;EK2FmB,kCAAA;EACA,+BAAA;EACA,kBAAA;EACA,6BAAA;EACA,SAAA;EACA,kBAAA;EACA,UAAA;EACA,gBAAA;ANwnBrB;AMrnBkB;EACG,YAAA;EACA,UAAA;EACA,mBAAA;EACA,iBAAA;EACA,yBAAA;ANunBrB;AM/mBY;EACG,oBAAA;ANinBf;AM7mBS;EACG,WAAA;EACA,kBAAA;EACA,MAAA;EACA,UAAA;EACA,yBAAA;EACA,UAAA;EACA,YAAA;EACA,WAAA;AN+mBZ;AMxmBM;EACG,aAAA;EACA,4BAAA;EACA,gBAAA;AN0mBT;AMvmBS;EACG,eAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;KAAA,iBAAA;EACA,4BAAA;ANymBZ;AMnmBG;EACG;IACG,sBAAA;IACA,mBAAA;ENqmBP;EMnmBO;IACG,iBAAA;ENqmBV;AACF;;AO9xBA;EACG,kBAAA;APiyBH;AO/xBG;ENwBD,uDAAA;EAAA,4DAAA;EMrBI,aAAA;EACA,sBAAA;EACA,mBAAA;APiyBN;AO/xBM;ENiBJ,qDAAA;EAAA,0DAAA;EMdO,kCAAA;EACA,sBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;APiyBT;AO9xBM;EACG,oCAAA;EACA,+DAAA;EACA,4BAAA;EAEA,iBAAA;EACA,gCAAA;AP+xBT;AO7xBS;ENDP,0DAAA;EAAA,yDAAA;ADkyBF;AO7xBY;EACG,kBAAA;EACA,gBAAA;ENPb,sDAAA;EAAA,oDAAA;EMUa,6BAAA;EACA,sBAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,gCAAA;AP+xBf;AO5xBY;EACG,UAAA;AP8xBf;AOvxBY;EACG,YAAA;EACA,kBAAA;EN9Bb,iDAAA;EAAA,kDAAA;EAAA,qDAAA;EMkCa,kCAAA;EACA,4BAAA;EACA,kBAAA;EACA,gBAAA;APyxBf;AOrxBY;EACG,aAAA;EACA,SAAA;EN3Cb,uDAAA;ADm0BF;AOrxBe;EACG,aAAA;APuxBlB;AOpxBkB;EACG,4BAAA;EACA,WAAA;EACA,YAAA;APsxBrB;AOnxBqB;EACG,eAAA;EACA,4BAAA;EACA,YAAA;EACA,oBAAA;KAAA,iBAAA;EACA,UAAA;EACA,6BAAA;APqxBxB;AOlxBqB;EAEG,wEAAA;EAEA,UAAA;APmxBxB;AO/vBkB;EACG;IAEG,qBAAA;EP2wBtB;EOxwBmB;IAEG,mBAAA;EP0wBtB;AACF;AOpwBe;EACG,iBAAA;APswBlB;AOpwBkB;EACG,iBAAA;EN5GnB,qDAAA;ADm3BF;AOnwBkB;EACG,iBAAA;EACA,iBAAA;ENlHnB,oDAAA;EMoHmB,kCAAA;EACA,gBAAA;APqwBrB;AO7vBS;EACG,aAAA;EACA,8BAAA;EACA,iBAAA;AP+vBZ;AO7vBY;EACG,WAAA;EACA,YAAA;EACA,yBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;AP+vBf;AO5vBY;EACG,yBAAA;EACA,gCAAA;AP8vBf;AO3vBkB;EACG,kBAAA;EACA,YAAA;AP6vBrB;AOxvBY;EACG,aAAA;EACA,SAAA;EACA,qBAAA;AP0vBf;AOxvBe;EACG,WAAA;EACA,WAAA;EACA,yBAAA;AP0vBlB;AOvvBe;EACG,yBAAA;APyvBlB;AOrvBY;EACG,WAAA;EACA,YAAA;EACA,yBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;APuvBf;AOpvBY;EACG,yBAAA;EACA,gCAAA;APsvBf;AOnvBkB;EACG,kBAAA;EACA,YAAA;APqvBrB;;AO1uBA;EACG,WAAA;EACA,yDAAA;EACA,4BAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;AP6uBH;;AO1uBA;EACG,WAAA;EACA,0DAAA;EACA,4BAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,WAAA;AP6uBH;;AO1uBA;EACG,0DAAA;EACA,4BAAA;EACA,0BAAA;AP6uBH;AO3uBG;EACG,aAAA;EACA,8BAAA;ENnOJ,uDAAA;EAAA,0DAAA;ADk9BF;AO1uBS;EACG,eAAA;EACA,kCAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;AP4uBZ;AOzuBS;EACG,eAAA;EACA,kCAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iBAAA;AP2uBZ;AOtuBG;EACG;IACG,aAAA;IACA,8BAAA;IACA,cAAA;IAAA,SAAA;EPwuBP;AACF;;AQngCG;EACG,aAAA;EACA,SAAA;EPwBJ,uDAAA;EAAA,0DAAA;ADg/BF;AQz/BM;EACG,aAAA;EACA,aAAA;EACA,cAAA;EAAA,SAAA;EACA,qBAAA;AR2/BT;AQx/BY;EACG,eAAA;EACA,kCAAA;EACA,sBAAA;EACA,iBAAA;EACA,kBAAA;EACA,oBAAA;AR0/Bf;AQl/BY;EACG,aAAA;ARo/Bf;AQ9+BM;EACG,aAAA;EACA,aAAA;EACA,cAAA;EAAA,SAAA;ARg/BT;AQn+BM;EACG,oCAAA;EACA,2DAAA;ARq+BT;AQn+BS;EACG,kBAAA;EACA,aAAA;ARq+BZ;AQn+BY;EACG,eAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;KAAA,iBAAA;ARq+Bf;AQl+BY;EACG,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,yBAAA;EPvDb,iDAAA;EAAA,kDAAA;EO0Da,YAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,UAAA;ARo+Bf;AQj+Be;EACG,kBAAA;EACA,UAAA;EACA,gCAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;ARm+BlB;AQh+Be;EACG,YAAA;EACA,aAAA;EACA,mBAAA;ARk+BlB;AQ59BY;EACG,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,gCAAA;AR89Bf;AQ59Be;EACG,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,kBAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;EACA,iBAAA;AR89BlB;AQz9Be;EACG,kBAAA;EACA,UAAA;EACA,YAAA;EACA,UAAA;EACA,yBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;AR29BlB;AQz9BkB;EACG,iBAAA;AR29BrB;AQr9BY;EACG,UAAA;ARu9Bf;AQn9BY;EACG,WAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EAGA,4FAAA;EACA,kFAAA;EACA,cAAA;ARq9Bf;AQ78BS;EACG,aAAA;AR+8BZ;AQ78BY;EACG,oBAAA;AR+8Bf;AQ78Be;EACG,eAAA;EACA,sBAAA;EACA,yBAAA;AR+8BlB;AQ38BY;EACG,oBAAA;EACA,eAAA;EACA,sBAAA;EACA,iBAAA;AR68Bf;AQx8BY;EACG,iBAAA;AR08Bf;AQv8Be;EACG,YAAA;EACA,YAAA;EACA,eAAA;ARy8BlB;AQl8BG;EACG;IACG,sBAAA;ERo8BP;AACF;;AS9pCA;EACG,yBAAA;ATiqCH;AS9pCM;EACG,aAAA;EACA,8BAAA;EACA,gCAAA;ERoBP,uDAAA;EAAA,0DAAA;AD8oCF;AS9pCS;EACG,eAAA;EACA,kCAAA;EACA,sBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;ATgqCZ;AS3pCY;EACG,aAAA;EACA,SAAA;EACA,eAAA;EACA,YAAA;AT6pCf;AS1pCkB;ERFhB,oDAAA;EQImB,kCAAA;EACA,sBAAA;EACA,kBAAA;AT4pCrB;ASzpCkB;EACG,WAAA;EACA,kBAAA;EACA,SAAA;EACA,2BAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,sBAAA;EACA,SAAA;EACA,oBAAA;AT2pCrB;ASxpCkB;EACG,WAAA;EACA,WAAA;EACA,sBAAA;EACA,WAAA;AT0pCrB;ASnpCM;EACG,aAAA;EACA,8BAAA;ERnCP,uDAAA;EAAA,0DAAA;EQsCO,mBAAA;ATqpCT;ASnpCS;EACG,eAAA;EACA,kCAAA;EACA,sBAAA;ATqpCZ;ASjpCS;EACG,aAAA;EACA,SAAA;ATmpCZ;AS5oCe;EACG,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AT8oClB;AS3oCe;EACG,WAAA;EACA,oDAAA;EACA,8BAAA;EACA,kBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;AT6oClB;ASzoCe;EACG,WAAA;EACA,mBAAA;AT2oClB;ASxoCe;EACG,qBAAA;AT0oClB;ASxoCkB;EACG,kBAAA;EACA,YAAA;AT0oCrB;ASpoCkB;EACG,kBAAA;EACA,UAAA;ATsoCrB;ASpoCqB;EACG,kBAAA;EACA,yBAAA;ATsoCxB","sourcesContent":["@charset \"UTF-8\";\na,\na:visited {\n  text-decoration: none;\n}\n\nul li {\n  list-style: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n  border: none;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n  line-height: 1;\n  background: #FFFFFF;\n  font-size: 16px;\n  color: rgba(12, 12, 12, 0.702);\n  font-family: \"Poppins\", sans-serif;\n  line-height: 1.625;\n}\n\n/*--------------------------------------*/\n#root {\n  height: 100%;\n  line-height: 1;\n}\n\n.wrapper {\n  overflow: clip;\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\n/*--------------------------------------*/\n.main {\n  flex: 1 1 auto;\n}\n\n[class*=__container] {\n  max-width: 1350px;\n  margin: 0px auto;\n  padding: 0px 15px;\n}\n\n@font-face {\n  font-family: \"Poppins\";\n  src: url(\"fonts/Poppins-Bold.ttf\") format(\"truetype\");\n  font-weight: 700;\n}\n@font-face {\n  font-family: \"Poppins\";\n  src: url(\"fonts/Poppins-Regular.ttf\") format(\"truetype\");\n  font-weight: 400;\n}\n@font-face {\n  font-family: \"Poppins\";\n  src: url(\"fonts/Poppins-SemiBold.ttf\") format(\"truetype\");\n  font-weight: 600;\n}\n.read_more {\n  width: 200px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  border-radius: 40px;\n  color: white;\n  background-color: rgb(0, 99, 255);\n}\n\n.read_more:hover {\n  transition: all ease-in-out 0.3s;\n  background-color: rgb(86, 140, 226);\n}\n\n.main_title {\n  font-size: 38px;\n  font-family: \"Poppins\";\n  color: rgb(12, 12, 12);\n  font-weight: bold;\n  line-height: 1.053;\n  padding-bottom: calc(20px + 20 * ((100vw - 320px) / 1600));\n}\n\n.main_text {\n  font-size: 16px;\n  font-family: \"Poppins\";\n  color: rgba(12, 12, 12, 0.702);\n  line-height: 1.625;\n  padding-bottom: calc(30px + 20 * ((100vw - 320px) / 1600));\n}\n\n.wrapper .header {\n  position: absolute;\n  width: 100%;\n  padding-top: calc(17px + 30 * ((100vw - 320px) / 1600));\n  z-index: 10;\n}\n.wrapper .header .header__container {\n  display: flex;\n  align-items: center;\n}\n.wrapper .header .header__container .header_logo {\n  padding-right: calc(25px + 90 * ((100vw - 320px) / 1600));\n  flex-shrink: 0;\n  position: relative;\n  z-index: 10;\n}\n.wrapper .header .header__container .header_logo .logo {\n  max-width: 100%;\n}\n.wrapper .header .header__container .burger_body {\n  flex: 1 0 auto;\n}\n.wrapper .header .header__container .burger_body .header_menu .header_menu_list {\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 5px;\n}\n.wrapper .header .header__container .burger_body .header_menu .header_menu_list .header_menu_item {\n  padding-right: calc(20px + 40 * ((100vw - 320px) / 1600));\n}\n.wrapper .header .header__container .burger_body .header_menu .header_menu_list .header_menu_item .header_menu_link {\n  font-family: \"Poppins\", sans-serif;\n  color: white;\n  position: relative;\n}\n.wrapper .header .header__container .burger_body .header_menu .header_menu_list .header_menu_item .header_menu_link::before {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: -5px;\n  content: \"\";\n  height: 3px;\n  background-color: #fff;\n  width: 0%;\n  transition: all 0.5s;\n}\n.wrapper .header .header__container .burger_body .header_menu .header_menu_list .header_menu_item .header_menu_link:hover::before {\n  content: \"\";\n  height: 3px;\n  background-color: #fff;\n  width: 100%;\n}\n@media (max-width: 940px) {\n  .wrapper .header .header__container .burger_body {\n    position: fixed;\n    left: 0;\n    top: -100%;\n    width: 100%;\n    height: 100%;\n    background-color: #0063ff;\n    z-index: 7;\n    overflow: auto;\n    transition: all ease-in-out 0.5s;\n  }\n  .wrapper .header .header__container .burger_body .header_menu .header_menu_list {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 200px;\n  }\n  .wrapper .header .header__container .burger_body .header_menu .header_menu_list .header_menu_item {\n    font-size: 50px;\n    padding-bottom: 20px;\n  }\n}\n.wrapper .header .header__container .burgerActive {\n  top: 0%;\n}\n.wrapper .header .header__container .header_social {\n  display: flex;\n  gap: calc(5px + 15 * ((100vw - 320px) / 1600));\n  padding-right: calc(20px + 40 * ((100vw - 320px) / 1600));\n  flex: 1 0 auto;\n}\n.wrapper .header .header__container .header_social .header_social_ikon:hover {\n  transform: scale(1.5);\n  transition: all 200ms ease-in-out;\n}\n.wrapper .header .header__container .header_choose_lng {\n  display: flex;\n  position: relative;\n}\n.wrapper .header .header__container .header_choose_lng .header_lng {\n  cursor: pointer;\n}\n.wrapper .header .header__container .header_choose_lng .lng-EN {\n  margin-right: 12px;\n}\n.wrapper .header .header__container .header_choose_lng::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 2px;\n  height: 100%;\n  transform: translateY(-50%);\n  background-color: #0c0b0b;\n}\n.wrapper .header .header__container .header_discuss {\n  padding-left: calc(25px + 70 * ((100vw - 320px) / 1600));\n}\n.wrapper .header .header__container .header_discuss .discuss img {\n  min-width: 100%;\n}\n@media (max-width: 430px) {\n  .wrapper .header .header__container .header_discuss {\n    display: none;\n  }\n}\n@media (max-width: 940px) {\n  .wrapper .header .header__container .header_burger_wrapper {\n    padding-left: calc(10px + 30 * ((100vw - 320px) / 1600));\n    position: relative;\n    z-index: 10;\n  }\n  .wrapper .header .header__container .header_burger_wrapper .header_burger {\n    width: 24px;\n    height: 14px;\n    position: relative;\n    cursor: pointer;\n  }\n  .wrapper .header .header__container .header_burger_wrapper .header_burger span, .wrapper .header .header__container .header_burger_wrapper .header_burger::before, .wrapper .header .header__container .header_burger_wrapper .header_burger::after {\n    content: \"\";\n    position: absolute;\n    right: 0;\n    height: 2px;\n    width: 100%;\n    background-color: #5f5151;\n    transition: transform 0.5s;\n  }\n  .wrapper .header .header__container .header_burger_wrapper .header_burger span {\n    top: 50%;\n    transform: translateY(-50%);\n    width: 80%;\n    right: 0;\n  }\n  .wrapper .header .header__container .header_burger_wrapper .header_burger::before {\n    bottom: 0;\n  }\n  .wrapper .header .header__container .header_burger_wrapper .header_burger::after {\n    top: 0;\n  }\n  .wrapper .header .header__container .header_burger_wrapper .header_burger:hover span {\n    transform: scale(0);\n  }\n  .wrapper .header .header__container .header_burger_wrapper .header_burger:hover::before {\n    transform: translateY(-6px) rotate(35deg);\n  }\n  .wrapper .header .header__container .header_burger_wrapper .header_burger:hover::after {\n    transform: translateY(6px) rotate(-35deg);\n  }\n}\n\n.main .home {\n  position: relative;\n  z-index: 1;\n  background-image: url(\"img/ellipse.png\");\n  background-position: right bottom 40px;\n  background-repeat: no-repeat;\n}\n.main .home .home__container {\n  display: flex;\n  align-items: center;\n  height: 100vh;\n  justify-content: space-between;\n  position: relative;\n  padding-right: calc(15px + 70 * ((100vw - 320px) / 1600));\n  padding-left: calc(15px + 70 * ((100vw - 320px) / 1600));\n}\n.main .home .home__container .home_content {\n  font-family: \"Poppins\", sans-serif;\n  color: white;\n}\n.main .home .home__container .home_content .home_content_title {\n  max-width: 605px;\n  padding-bottom: calc(10px + 30 * ((100vw - 320px) / 1600));\n}\n.main .home .home__container .home_content .home_content_title h1 {\n  line-height: 1.6;\n  font-size: calc(20px + 20 * ((100vw - 320px) / 1600));\n}\n@media (max-width: 1100px) {\n  .main .home .home__container .home_content .home_content_title h1 {\n    max-width: 405px;\n  }\n}\n.main .home .home__container .home_content .home_content_text {\n  font-size: calc(16px + 5 * ((100vw - 320px) / 1600));\n  max-width: 455px;\n  line-height: 1.6;\n}\n@media (max-width: 768px) {\n  .main .home .home__container .home_content .home_content_title {\n    padding-top: 20px;\n    color: rgb(180, 220, 253);\n  }\n  .main .home .home__container .home_content .home_content_text {\n    color: rgb(180, 220, 253);\n  }\n}\n.main .home .home__container .home_content .home_content_text:not(:last-child) {\n  padding-bottom: calc(10px + 30 * ((100vw - 320px) / 1600));\n}\n.main .home .home__container .home_content .home_content_button .read_more {\n  background-color: #fff;\n  color: #0063ff;\n}\n.main .home .home__container .home_content .home_content_button .read_more:hover {\n  background-color: #f0cdcd;\n}\n.main .home .home__container .home_slider {\n  width: calc(260px + 300 * ((100vw - 320px) / 1600));\n  height: calc(350px + 170 * ((100vw - 320px) / 1600));\n  position: relative;\n}\n.main .home .home__container .home_slider .home_slider_view {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.main .home .home__container .home_slider .home_slider_view .slider {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n}\n.main .home .home__container .home_slider .home_slider_view .slider video {\n  border-radius: 60px 0 60px 0;\n  max-width: 100%;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.main .home .home__container .home_slider .home_slider_view .slider img {\n  border-radius: 60px 0 60px 0;\n  max-width: 100%;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.main .home .home__container .home_slider .home_slider_view .sliderAct {\n  transition: all 1s;\n  opacity: 1;\n}\n.main .home .home__container .home_slider .home_slider_control {\n  display: flex;\n  justify-content: space-between;\n  padding-top: calc(30px + 50 * ((100vw - 320px) / 1600));\n}\n.main .home .home__container .home_slider .home_slider_control .home_slider_control_left {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid #fff;\n  cursor: pointer;\n}\n.main .home .home__container .home_slider .home_slider_control .home_slider_control_left:hover {\n  background-color: white;\n  transition: all 0.3s ease-in-out;\n}\n.main .home .home__container .home_slider .home_slider_control .home_slider_control_left:hover svg * {\n  fill: currentColor;\n  color: #0063ff;\n}\n.main .home .home__container .home_slider .home_slider_control .home_slider_control_right {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid #0063ff;\n  cursor: pointer;\n}\n.main .home .home__container .home_slider .home_slider_control .home_slider_control_right:hover {\n  background-color: #0063ff;\n  transition: all 0.3s ease-in-out;\n}\n.main .home .home__container .home_slider .home_slider_control .home_slider_control_right:hover svg * {\n  fill: currentColor;\n  color: white;\n}\n.main .home .home__container .home_slider .play_slide {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n}\n@media (max-width: 768px) {\n  .main .home .home__container .home_slider {\n    padding-bottom: calc(70px + 10 * ((100vw - 320px) / 1600));\n  }\n}\n.main .home .home__container .slider_active {\n  position: absolute;\n  left: -16px;\n  display: flex;\n  flex-direction: column;\n  gap: 17px;\n}\n.main .home .home__container .slider_active span {\n  border: 2px solid white;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n}\n.main .home .home__container .slider_active .sActive {\n  background-color: #fff;\n}\n@media (max-width: 1400px) {\n  .main .home .home__container .slider_active {\n    left: 16px;\n  }\n}\n@media (max-width: 768px) {\n  .main .home .home__container {\n    flex-direction: column;\n    justify-content: center;\n  }\n  .main .home .home__container .home_content {\n    align-self: flex-start;\n  }\n  .main .home .home__container .home_slider {\n    padding-top: 20px;\n    width: 80%;\n  }\n  .main .home .home__container .slider_active {\n    top: 70%;\n    transform: translateY(-70%);\n  }\n}\n.main .home::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: #0063ff;\n  background-image: url(\"img/bg_line.png\");\n  background-repeat: no-repeat;\n  background-position: 0 bottom;\n  width: 66%;\n  height: 100%;\n  z-index: -1;\n}\n@media (max-width: 1150px) {\n  .main .home::after {\n    content: \"\";\n    width: 70%;\n  }\n}\n.main .home::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  background-image: url(\"img/ellipse_two.png\");\n  background-repeat: no-repeat;\n  background-position: top;\n  z-index: 1;\n  width: 400px;\n  height: 300px;\n}\n.main .partners .partners__container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 35px 0;\n  flex-wrap: wrap;\n}\n.main .partners .partners__container .partner_logo {\n  width: 195px;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.main .partners .partners__container .partner_logo svg * {\n  fill: currentColor;\n  color: rgb(13, 13, 13);\n  opacity: 0.302;\n}\n@media (max-width: 400px) {\n  .main .partners .partners__container .partner_logo {\n    width: 150px;\n  }\n}\n.main .partners .partners__container .active_logo_partner {\n  background-color: rgb(255, 255, 255);\n  box-shadow: 2.63px 5.393px 19.44px 4.56px rgba(12, 12, 12, 0.05);\n}\n.main .partners .partners__container .active_logo_partner svg * {\n  fill: currentColor;\n  color: #f40009;\n  opacity: 1;\n}\n.main .partners .partners__container .partner_logo:hover {\n  background-color: rgb(255, 255, 255);\n  box-shadow: 2.63px 5.393px 19.44px 4.56px rgba(12, 12, 12, 0.05);\n}\n.main .partners .partners__container .partner_logo:hover svg * {\n  fill: currentColor;\n  color: #f40009;\n  opacity: 1;\n}\n.main .mobile {\n  background-image: url(\"img/mobile_bg.png\");\n  background-repeat: no-repeat;\n  background-position: 0 50%;\n}\n.main .mobile .mobile__container {\n  display: flex;\n  align-items: center;\n  padding-top: calc(30px + 50 * ((100vw - 320px) / 1600));\n}\n.main .mobile .mobile__container .mobile_image {\n  flex: 0 1 50%;\n  display: flex;\n  justify-content: center;\n}\n.main .mobile .mobile__container .mobile_image img {\n  max-width: 100%;\n}\n.main .mobile .mobile__container .mobile_content {\n  flex: 0 1 50%;\n}\n@media (max-width: 768px) {\n  .main .mobile .mobile__container {\n    flex-direction: column;\n  }\n  .main .mobile .mobile__container .mobile_image {\n    max-width: 300px;\n    max-height: 500px;\n  }\n}\n@media (max-width: 1250px) {\n  .main .mobile {\n    background-size: 30%;\n  }\n}\n@media (max-width: 768px) {\n  .main .mobile {\n    background-size: 50%;\n    background-position: 0 10%;\n  }\n}\n.main .web {\n  background-image: url(\"img/web_bg.png\");\n  background-repeat: no-repeat;\n  background-position: 100% 0;\n}\n.main .web .web__container {\n  display: flex;\n  align-items: center;\n  padding-top: calc(30px + 50 * ((100vw - 320px) / 1600));\n  padding-bottom: calc(30px + 50 * ((100vw - 320px) / 1600));\n}\n.main .web .web__container .web_content {\n  flex: 0 1 50%;\n}\n.main .web .web__container .web_image {\n  flex: 0 1 50%;\n  display: flex;\n  justify-content: flex-end;\n}\n.main .web .web__container .web_image img {\n  max-width: 100%;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n@media (max-width: 768px) {\n  .main .web .web__container {\n    flex-direction: column;\n  }\n  .main .web .web__container .web_image {\n    padding-top: 50px;\n  }\n}\n@media (max-width: 1250px) {\n  .main .web {\n    background-size: 40%;\n    background-position: 100% 30%;\n  }\n}\n@media (max-width: 768px) {\n  .main .web {\n    background-size: 50%;\n    background-position: 100% 90%;\n  }\n}\n.main .prodcut {\n  background-image: url(\"img/prodcut_bg.png\");\n  background-repeat: no-repeat;\n  background-position: 0 50%;\n  background-size: 20% 80%;\n}\n.main .prodcut .prodcut__container {\n  display: flex;\n  align-items: center;\n  padding-top: calc(30px + 50 * ((100vw - 320px) / 1600));\n  padding-bottom: calc(60px + 90 * ((100vw - 320px) / 1600));\n  padding-left: calc(30px + 20 * ((100vw - 320px) / 1600));\n  gap: calc(30px + 60 * ((100vw - 320px) / 1600));\n}\n.main .prodcut .prodcut__container .prodcut_image {\n  flex: 0 1 50%;\n  display: flex;\n  justify-content: center;\n}\n.main .prodcut .prodcut__container .prodcut_image img {\n  max-width: 100%;\n}\n.main .prodcut .prodcut__container .prodcut_content {\n  flex: 0 1 50%;\n}\n@media (max-width: 768px) {\n  .main .prodcut .prodcut__container {\n    flex-direction: column;\n  }\n}\n@media (max-width: 1250px) {\n  .main .prodcut {\n    background-size: 20% 70%;\n  }\n}\n@media (max-width: 768px) {\n  .main .prodcut {\n    background-size: 50%;\n    background-position: 0 10%;\n  }\n}\n\n.timeline_wrapper {\n  background-color: #0063ff;\n}\n.timeline_wrapper .timeline__container {\n  display: flex;\n  justify-content: space-between;\n   padding-top: calc(20px + 80 * ((100vw - 320px) / 1600));\n   padding-bottom: calc(20px + 80 * ((100vw - 320px) / 1600));\n}\n.timeline_wrapper .timeline__container .timeline_block {\n  flex: 0 1 50%;\n}\n.timeline_wrapper .timeline__container .timeline_block .timeline_block_title {\n  font-size: calc(18px + 20 * ((100vw - 320px) / 1600));\n  font-family: \"Poppins\", sans-serif;\n  color: rgb(255, 255, 255);\n  font-weight: bold;\n  line-height: 1.316;\n   padding-bottom: calc(20px + 15 * ((100vw - 320px) / 1600));\n  font-weight: 400;\n}\n.timeline_wrapper .timeline__container .timeline_block .timeline {\n  position: relative;\n  z-index: 2;\n}\n.timeline_wrapper .timeline__container .timeline_block .timeline .timeline_event {\n  display: flex;\n  justify-content: center;\n}\n.timeline_wrapper .timeline__container .timeline_block .timeline .timeline_event .timeline_event_icon {\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n  background-color: #1a73ff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-family: \"Poppins\", sans-serif;\n  color: rgb(255, 255, 255);\n  position: relative;\n  margin-right: 25px;\n  outline: 4px solid #0063ff;\n}\n.timeline_wrapper .timeline__container .timeline_block .timeline .timeline_event .timeline_event_icon .timeline_event_icon_in {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  background-color: #3181ff;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n}\n.timeline_wrapper .timeline__container .timeline_block .timeline .timeline_event .timeline_event_icon .inView {\n  background-color: #fff;\n  color: #2068b0;\n  -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n@-webkit-keyframes scale-up-center {\n  0% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@keyframes scale-up-center {\n  0% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n.timeline_wrapper .timeline__container .timeline_block .timeline .timeline_event .timeline_event_content .clickView {\n  font-size: calc(16px + 4 * ((100vw - 320px) / 1600));\n  font-family: \"Poppins\", sans-serif;\n  color: #99c1ff;\n  line-height: 1.622;\n  padding-top: 5px;\n  cursor: pointer;\n  font-weight: 400;\n}\n.timeline_wrapper .timeline__container .timeline_block .timeline .timeline_event .timeline_event_content .white {\n  color: white;\n}\n.timeline_wrapper .timeline__container .timeline_block .timeline .timeline_event .timeline_event_content .closeView {\n  font-size: calc(16px + 4 * ((100vw - 320px) / 1600));\n  font-family: \"Poppins\", sans-serif;\n  color: rgba(255, 255, 255, 0.6);\n  line-height: 1.622;\n  transition: all 0.6s ease-out;\n  height: 0;\n  visibility: hidden;\n  opacity: 0;\n  font-weight: 400;\n}\n.timeline_wrapper .timeline__container .timeline_block .timeline .timeline_event .timeline_event_content .openView {\n  height: 100%;\n  opacity: 1;\n  visibility: visible;\n  padding-top: 10px;\n  color: rgb(255, 255, 255);\n}\n.timeline_wrapper .timeline__container .timeline_block .timeline .timeline_event:not(:last-child) {\n  padding-bottom: 25px;\n}\n.timeline_wrapper .timeline__container .timeline_block .timeline::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 18px;\n  background-color: #1a73ff;\n  width: 4px;\n  height: 100%;\n  z-index: -1;\n}\n.timeline_wrapper .timeline__container .timeline_image {\n  flex: 0 1 45%;\n  border-radius: 60px 0 60px 0;\n  max-width: 520px;\n}\n.timeline_wrapper .timeline__container .timeline_image img {\n  max-width: 100%;\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  border-radius: 60px 0 60px 0;\n}\n@media (max-width: 768px) {\n  .timeline_wrapper .timeline__container {\n    flex-direction: column;\n    align-items: center;\n  }\n  .timeline_wrapper .timeline__container .timeline_image {\n    padding-top: 50px;\n  }\n}\n\n.customer {\n  position: relative;\n}\n.customer .customer__container {\n  padding-top: calc(30px + 70 * ((100vw - 320px) / 1600));\n  padding-bottom: calc(100px + 100 * ((100vw - 320px) / 1600));\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.customer .customer__container .customer_title {\n  font-size: calc(18px + 20 * ((100vw - 320px) / 1600));\n  padding-bottom: calc(30px + 50 * ((100vw - 320px) / 1600));\n  font-family: \"Poppins\", sans-serif;\n  color: rgb(12, 12, 12);\n  font-weight: bold;\n  line-height: 1.053;\n  text-align: center;\n}\n.customer .customer__container .customer_slider_wrapper {\n  background-color: rgb(255, 255, 255);\n  box-shadow: 10.603px 29.13px 45.9px 5.1px rgba(12, 12, 12, 0.1);\n  border-radius: 60px 0 60px 0;\n  max-height: 405px;\n  transition: all 0.9s ease-in-out;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider {\n  padding-right: calc(20px + 180 * ((100vw - 320px) / 1600));\n  padding-left: calc(20px + 180 * ((100vw - 320px) / 1600));\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider .customer_slider_title {\n  position: relative;\n  max-width: 550px;\n  margin-top: calc(36px + 70 * ((100vw - 320px) / 1600));\n  font-size: calc(18px + 7 * ((100vw - 320px) / 1600));\n  font-family: \"Poppins\", serif;\n  color: rgb(13, 13, 13);\n  font-style: italic;\n  font-weight: 600;\n  line-height: 1.2;\n  text-align: center;\n  opacity: 0;\n  transition: all 0.5s ease-in-out;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider .title_active {\n  opacity: 1;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider .customer_slider_title::before {\n  content: \"❝\";\n  position: absolute;\n  top: calc(-25px + -45 * ((100vw - 320px) / 1600));\n  left: calc(-25px + -45 * ((100vw - 320px) / 1600));\n  font-size: calc(55px + 50 * ((100vw - 320px) / 1600));\n  font-family: \"Poppins\", sans-serif;\n  color: rgba(13, 13, 13, 0.6);\n  font-style: italic;\n  line-height: 1.2;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider .customer_slider_person {\n  display: flex;\n  gap: 30px;\n  padding-top: calc(30px + 40 * ((100vw - 320px) / 1600));\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider .customer_slider_person .customer_slider_person_avatar {\n  height: 195px;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider .customer_slider_person .customer_slider_person_avatar .customer_avatar {\n  border-radius: 60px 0 60px 0;\n  width: 100%;\n  height: 100%;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider .customer_slider_person .customer_slider_person_avatar .customer_avatar img {\n  max-width: 100%;\n  border-radius: 60px 0 60px 0;\n  height: 100%;\n  object-fit: cover;\n  opacity: 0;\n  transition: opacity 0.5s ease;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider .customer_slider_person .customer_slider_person_avatar .customer_avatar .visible {\n  -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  opacity: 1;\n}\n@-webkit-keyframes scale-up-center {\n  0% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@keyframes scale-up-center {\n  0% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider .customer_slider_person .customer_slider_person_infa {\n  padding-top: 50px;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider .customer_slider_person .customer_slider_person_infa h1 {\n  flex-wrap: nowrap;\n  font-size: calc(18px + 12 * ((100vw - 320px) / 1600));\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider .customer_slider_person .customer_slider_person_infa h2 {\n  flex-wrap: nowrap;\n  padding-top: 10px;\n  font-size: calc(16px + 4 * ((100vw - 320px) / 1600));\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 600;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider_controlled {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 50px;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider_controlled .customer_pre {\n  width: 40px;\n  height: 40px;\n  border: 2px solid #0063ff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider_controlled .customer_pre:hover {\n  background-color: #0063ff;\n  transition: all 0.3s ease-in-out;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider_controlled .customer_pre:hover svg * {\n  fill: currentColor;\n  color: white;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider_controlled .customer_active {\n  display: flex;\n  gap: 18px;\n  align-items: flex-end;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider_controlled .customer_active span {\n  width: 37px;\n  height: 4px;\n  background-color: #cfcfcf;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider_controlled .customer_active .customer_active_point {\n  background-color: #0063ff;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider_controlled .customer_next {\n  width: 40px;\n  height: 40px;\n  border: 2px solid #0063ff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider_controlled .customer_next:hover {\n  background-color: #0063ff;\n  transition: all 0.3s ease-in-out;\n}\n.customer .customer__container .customer_slider_wrapper .customer_slider_controlled .customer_next:hover svg * {\n  fill: currentColor;\n  color: white;\n}\n\n.customer::before {\n  content: \"\";\n  background-image: url(\"img/customer_bgOne.png\");\n  background-repeat: no-repeat;\n  width: 200px;\n  height: 400px;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  z-index: -1;\n}\n\n.customer::after {\n  content: \"\";\n  background-image: url(\"img/customer_bgTwo.png\");\n  background-repeat: no-repeat;\n  width: 110px;\n  height: 400px;\n  position: absolute;\n  right: 0px;\n  top: 80px;\n  z-index: -1;\n}\n\n.counter {\n  background-image: url(\"img/counter_bg.png\");\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n.counter .counter__container {\n  display: flex;\n  justify-content: space-between;\n  padding-top: calc(25px + 50 * ((100vw - 320px) / 1600));\n  padding-bottom: calc(25px + 50 * ((100vw - 320px) / 1600));\n}\n.counter .counter__container .count_block .count_block_number {\n  font-size: 54px;\n  font-family: \"Poppins\", sans-serif;\n  color: rgb(255, 255, 255);\n  line-height: 1.2;\n  text-align: center;\n  font-weight: 600;\n}\n.counter .counter__container .count_block .count_block_name {\n  font-size: 18px;\n  font-family: \"Poppins\", sans-serif;\n  color: rgb(255, 255, 255);\n  line-height: 1.2;\n  text-align: center;\n  padding-top: 10px;\n}\n@media (max-width: 768px) {\n  .counter .counter__container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n  }\n}\n\n.news .news__container {\n  display: flex;\n  gap: 30px;\n  padding-top: calc(20px + 80 * ((100vw - 320px) / 1600));\n  padding-bottom: calc(20px + 80 * ((100vw - 320px) / 1600));\n}\n.news .news__container .news_blockOne {\n  display: grid;\n  flex: 0 1 45%;\n  gap: 30px;\n  align-items: flex-end;\n}\n.news .news__container .news_blockOne .news_head .news_head_title {\n  font-size: 38px;\n  font-family: \"Poppins\", sans-serif;\n  color: rgb(12, 12, 12);\n  font-weight: bold;\n  line-height: 1.053;\n  padding-bottom: 30px;\n}\n.news .news__container .news_blockOne .card-1 .news_card_image {\n  height: 400px;\n}\n.news .news__container .news_blockTwo {\n  display: grid;\n  flex: 0 1 55%;\n  gap: 30px;\n}\n.news .news__container .news_card {\n  background-color: rgb(255, 255, 255);\n  box-shadow: 0.684px 1.879px 32px 0px rgba(12, 12, 12, 0.06);\n}\n.news .news__container .news_card .news_card_image {\n  position: relative;\n  height: 200px;\n}\n.news .news__container .news_card .news_card_image .card_image {\n  max-width: 100%;\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n.news .news__container .news_card .news_card_image .card_image_hover_data {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #0063ff;\n  width: calc(50px + 10 * ((100vw - 320px) / 1600));\n  height: calc(60px + 20 * ((100vw - 320px) / 1600));\n  color: white;\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  z-index: 2;\n}\n.news .news__container .news_card .news_card_image .card_image_hover_data .card_image_hover_data_number {\n  text-align: center;\n  width: 80%;\n  border-bottom: 2px solid #80b1ff;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.news .news__container .news_card .news_card_image .card_image_hover_data .card_image_hover_data_month {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.news .news__container .news_card .news_card_image .card_image_hover {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: all 0.2s ease-in-out;\n}\n.news .news__container .news_card .news_card_image .card_image_hover .card_image_hover_share {\n  cursor: pointer;\n  background-color: rgb(255, 255, 255);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  width: 135px;\n  height: 42px;\n  border-radius: 20px;\n  line-height: 42px;\n}\n.news .news__container .news_card .news_card_image .card_image_hover .card_image_hover_view {\n  position: absolute;\n  left: 20px;\n  bottom: 20px;\n  z-index: 2;\n  background-color: #d09eeb;\n  width: 90px;\n  height: 30px;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.news .news__container .news_card .news_card_image .card_image_hover .card_image_hover_view .card_image_hover_view_count {\n  padding-left: 6px;\n}\n.news .news__container .news_card .news_card_image .hover_visible {\n  opacity: 1;\n}\n.news .news__container .news_card .news_card_image .card_image_hover::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-image: -moz-linear-gradient(-135deg, rgb(244, 81, 108) 0%, rgb(152, 58, 240) 100%);\n  background-image: -webkit-linear-gradient(-135deg, rgb(244, 81, 108) 0%, rgb(152, 58, 240) 100%);\n  background-image: -ms-linear-gradient(-135deg, rgb(244, 81, 108) 0%, rgb(152, 58, 240) 100%);\n  background: linear-gradient(-135deg, rgb(244, 81, 108) 0%, rgb(152, 58, 240) 100%);\n  opacity: 0.702;\n}\n.news .news__container .news_card .news_card_content {\n  padding: 30px;\n}\n.news .news__container .news_card .news_card_content .news_card_content_hash-tag {\n  padding-bottom: 10px;\n}\n.news .news__container .news_card .news_card_content .news_card_content_hash-tag a {\n  font-size: 12px;\n  color: rgb(0, 99, 255);\n  text-transform: uppercase;\n}\n.news .news__container .news_card .news_card_content .news_card_content_title {\n  padding-bottom: 20px;\n  font-size: 18px;\n  color: rgb(12, 12, 12);\n  font-weight: bold;\n}\n.news .news__container .news_card .news_card_content .news_card_content_button {\n  padding-top: 20px;\n}\n.news .news__container .news_card .news_card_content .news_card_content_button .read_more {\n  width: 135px;\n  height: 40px;\n  font-size: 16px;\n}\n@media (max-width: 768px) {\n  .news .news__container {\n    flex-direction: column;\n  }\n}\n\n.footer {\n  background-color: #ebf3ff;\n}\n.footer .footer__container .footer_head {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid #d4dbe6;\n  padding-top: calc(40px + 60 * ((100vw - 320px) / 1600));\n  padding-bottom: calc(20px + 20 * ((100vw - 320px) / 1600));\n}\n.footer .footer__container .footer_head .footer_head_logo {\n  font-size: 35px;\n  font-family: \"Poppins\", sans-serif;\n  color: rgb(0, 99, 255);\n  font-weight: bold;\n  line-height: 1.143;\n  margin-right: 20px;\n}\n.footer .footer__container .footer_head .footer_head_nemu .footer_head_menu_list {\n  display: flex;\n  gap: 40px;\n  flex-wrap: wrap;\n  row-gap: 5px;\n}\n.footer .footer__container .footer_head .footer_head_nemu .footer_head_menu_list .footer_head_menu_item .footer_head_menu_link {\n  font-size: calc(15px + 4 * ((100vw - 320px) / 1600));\n  font-family: \"Poppins\", sans-serif;\n  color: rgb(12, 12, 12);\n  position: relative;\n}\n.footer .footer__container .footer_head .footer_head_nemu .footer_head_menu_list .footer_head_menu_item .footer_head_menu_link::before {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: -5px;\n  content: \"\";\n  height: 3px;\n  background-color: #fff;\n  width: 0%;\n  transition: all 0.5s;\n}\n.footer .footer__container .footer_head .footer_head_nemu .footer_head_menu_list .footer_head_menu_item .footer_head_menu_link:hover::before {\n  content: \"\";\n  height: 3px;\n  background-color: #fff;\n  width: 100%;\n}\n.footer .footer__container .footer_bottom {\n  display: flex;\n  justify-content: space-between;\n  padding-top: calc(10px + 20 * ((100vw - 320px) / 1600));\n  padding-bottom: calc(10px + 20 * ((100vw - 320px) / 1600));\n  align-items: center;\n}\n.footer .footer__container .footer_bottom .footer_bottom_copyright {\n  font-size: 14px;\n  font-family: \"Poppins\", sans-serif;\n  color: rgb(12, 12, 12);\n}\n.footer .footer__container .footer_bottom .footer_bottom_social {\n  display: flex;\n  gap: 50px;\n}\n.footer .footer__container .footer_bottom .footer_bottom_social .footer_social_ikon a {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.footer .footer__container .footer_bottom .footer_bottom_social .footer_social_ikon a::before {\n  content: \"\";\n  background: linear-gradient(45deg, #00B5F5, #002A8F);\n  transition: all 265ms ease-out;\n  position: absolute;\n  display: block;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n.footer .footer__container .footer_bottom .footer_bottom_social .footer_social_ikon a:hover::before {\n  content: \"\";\n  transform: scale(0);\n}\n.footer .footer__container .footer_bottom .footer_bottom_social .footer_social_ikon a:hover svg {\n  transform: scale(1.5);\n}\n.footer .footer__container .footer_bottom .footer_bottom_social .footer_social_ikon a:hover svg * {\n  fill: currentColor;\n  color: black;\n}\n.footer .footer__container .footer_bottom .footer_bottom_social .footer_social_ikon a svg {\n  position: relative;\n  z-index: 2;\n}\n.footer .footer__container .footer_bottom .footer_bottom_social .footer_social_ikon a svg * {\n  fill: currentColor;\n  color: rgb(250, 241, 241);\n}","//Адаптивное свойство\r\n$maxWidth: 1920;\r\n$maxWidthContainer: 1320;\r\n\r\n@mixin adaptiv-value($property, $startSize, $minSize, $type) {\r\n\t$addSize: $startSize - $minSize;\r\n\r\n\t@if $type==1 {\r\n\t\t//Только если меньше контейнера\r\n\t\t#{$property}: $startSize + px;\r\n\r\n\t\t@media (max-width: #{$maxWidthContainer + px}) {\r\n\t\t\t#{$property}: calc(#{$minSize + px} + #{$addSize} * ((100vw - 320px) / #{$maxWidthContainer - 320}));\r\n\t\t}\r\n\t}\r\n\r\n\t@else if $type==2 {\r\n\t\t//Только если больше контейнера\r\n\t\t#{$property}: $startSize + px;\r\n\r\n\t\t@media (min-width: #{$maxWidthContainer + px}) {\r\n\t\t\t#{$property}: calc(#{$minSize + px} + #{$addSize} * ((100vw - 320px) / #{$maxWidth - 320}));\r\n\t\t}\r\n\t}\r\n\r\n\t@else {\r\n\t\t//Всегда\r\n\t\t#{$property}: calc(#{$minSize + px} + #{$addSize} * ((100vw - 320px) / #{$maxWidth - 320}));\r\n\t}\r\n}\r\n\r\n\r\na,\r\na:visited {\r\n\ttext-decoration: none;\r\n\r\n}\r\n\r\nul li {\r\n\tlist-style: none;\r\n}\r\n\r\nbutton {\r\n\tcursor: pointer;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tborder: none;\r\n\tbox-sizing: border-box;\r\n\t-moz-box-sizing: border-box;\r\n\t-webkit-box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tline-height: 1;\r\n\tbackground: #FFFFFF;\r\n\tfont-size: 16px;\r\n\tcolor: rgba(12, 12, 12, 0.702);\r\n\tfont-family: \"Poppins\", sans-serif;\r\n\tline-height: 1.625;\r\n}\r\n\r\n.svg {\r\n\t* {\r\n\t\t// fill: currentColor;\r\n\t\t// color: #263438;\r\n\t\t// fill-opacity: 1;\r\n\t}\r\n}\r\n\r\n/*--------------------------------------*/\r\n#root {\r\n\theight: 100%;\r\n\tline-height: 1;\r\n}\r\n\r\n.wrapper {\r\n\toverflow: clip;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmin-height: 100%;\r\n}\r\n\r\n/*--------------------------------------*/\r\n.main {\r\n\tflex: 1 1 auto;\r\n}\r\n\r\n\r\n[class*=\"__container\"] {\r\n\tmax-width: 1350px;\r\n\tmargin: 0px auto;\r\n\tpadding: 0px 15px;\r\n}","@font-face {\r\n\tfont-family: 'Poppins';\r\n\tsrc: url('fonts/Poppins-Bold.ttf') format('truetype');\r\n\tfont-weight: 700;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Poppins';\r\n\tsrc: url('fonts/Poppins-Regular.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Poppins';\r\n\tsrc: url('fonts/Poppins-SemiBold.ttf') format('truetype');\r\n\tfont-weight: 600;\r\n}",".read_more {\r\n   width: 200px;\r\n   height: 64px;\r\n   display: flex;\r\n   align-items: center;\r\n   justify-content: center;\r\n   background-color: #fff;\r\n   border-radius: 40px;\r\n   color: white;\r\n   background-color: rgb(0, 99, 255);\r\n\r\n}\r\n\r\n.read_more:hover {\r\n   transition: all ease-in-out 0.3s;\r\n   background-color: rgb(86, 140, 226);\r\n}\r\n\r\n.main_title {\r\n   font-size: 38px;\r\n   font-family: \"Poppins\";\r\n   color: rgb(12, 12, 12);\r\n   font-weight: bold;\r\n   line-height: 1.053;\r\n   @include adaptiv-value('padding-bottom', 40, 20, 0);\r\n\r\n}\r\n\r\n.main_text {\r\n   font-size: 16px;\r\n   font-family: \"Poppins\";\r\n   color: rgba(12, 12, 12, 0.702);\r\n   line-height: 1.625;\r\n   @include adaptiv-value('padding-bottom', 50, 30, 0);\r\n}",".wrapper {\r\n\r\n   .header {\r\n      position: absolute;\r\n      width: 100%;\r\n      @include adaptiv-value(\"padding-top\", 47, 17, 0);\r\n      z-index: 10;\r\n\r\n      .header__container {\r\n\r\n         display: flex;\r\n         align-items: center;\r\n\r\n         .header_logo {\r\n            @include adaptiv-value('padding-right', 115, 25, 0);\r\n            flex-shrink: 0;\r\n            position: relative;\r\n            z-index: 10;\r\n\r\n            .logo {\r\n               max-width: 100%;\r\n            }\r\n         }\r\n\r\n         .burger_body {\r\n            flex: 1 0 auto;\r\n\r\n            .header_menu {\r\n\r\n               //@include adaptiv-value('padding-left', 95, 25, 0);\r\n\r\n               .header_menu_list {\r\n                  display: flex;\r\n                  flex-wrap: wrap;\r\n                  row-gap: 5px;\r\n\r\n                  .header_menu_item {\r\n                     @include adaptiv-value('padding-right', 60, 20, 0);\r\n\r\n\r\n                     .header_menu_link {\r\n                        font-family: 'Poppins', sans-serif;\r\n                        color: white;\r\n                        position: relative;\r\n                     }\r\n\r\n                     .header_menu_link::before {\r\n                        content: '';\r\n                        position: absolute;\r\n                        left: 50%;\r\n                        transform: translateX(-50%);\r\n                        bottom: -5px;\r\n                        content: '';\r\n                        height: 3px;\r\n                        background-color: #fff;\r\n                        width: 0%;\r\n                        transition: all 0.5s;\r\n                     }\r\n\r\n                     .header_menu_link:hover::before {\r\n                        content: '';\r\n                        height: 3px;\r\n                        background-color: #fff;\r\n                        width: 100%;\r\n                     }\r\n                  }\r\n\r\n\r\n               }\r\n            }\r\n         }\r\n\r\n         @media (max-width:940px) {\r\n            .burger_body {\r\n               position: fixed;\r\n               left: 0;\r\n               top: -100%;\r\n               width: 100%;\r\n               height: 100%;\r\n               background-color: #0063ff;\r\n               z-index: 7;\r\n               overflow: auto;\r\n               transition: all ease-in-out 0.5s;\r\n\r\n               .header_menu {\r\n\r\n\r\n                  .header_menu_list {\r\n                     display: flex;\r\n                     flex-direction: column;\r\n                     align-items: center;\r\n                     padding-top: 200px;\r\n\r\n\r\n                     .header_menu_item {\r\n                        font-size: 50px;\r\n                        padding-bottom: 20px;\r\n                     }\r\n                  }\r\n               }\r\n            }\r\n         }\r\n\r\n\r\n         .burgerActive {\r\n            top: 0%;\r\n         }\r\n\r\n\r\n         .header_social {\r\n            display: flex;\r\n            @include adaptiv-value('gap', 20, 5, 0);\r\n            @include adaptiv-value('padding-right', 60, 20, 0);\r\n            flex: 1 0 auto;\r\n\r\n            .header_social_ikon {}\r\n\r\n            .header_social_ikon:hover {\r\n               transform: scale(1.5);\r\n               transition: all 200ms ease-in-out;\r\n            }\r\n         }\r\n\r\n         .header_choose_lng {\r\n            display: flex;\r\n            position: relative;\r\n            //flex: 1 0 auto;\r\n\r\n            .header_lng {\r\n               cursor: pointer;\r\n            }\r\n\r\n            .lng-EN {\r\n               margin-right: 12px;\r\n            }\r\n\r\n            .lng-CH {}\r\n         }\r\n\r\n         .header_choose_lng::after {\r\n            content: '';\r\n            position: absolute;\r\n            left: 50%;\r\n            top: 50%;\r\n            width: 2px;\r\n            height: 100%;\r\n            transform: translateY(-50%);\r\n            background-color: #0c0b0b;\r\n         }\r\n\r\n         .header_discuss {\r\n\r\n            @include adaptiv-value('padding-left', 95, 25, 0);\r\n\r\n\r\n            .discuss {\r\n               img {\r\n                  min-width: 100%;\r\n               }\r\n            }\r\n         }\r\n\r\n         @media (max-width:430px) {\r\n            .header_discuss {\r\n               display: none;\r\n            }\r\n         }\r\n\r\n\r\n         @media (max-width:940px) {\r\n            .header_burger_wrapper {\r\n               //padding-left: 40px;\r\n               @include adaptiv-value('padding-left', 40, 10, 0);\r\n               position: relative;\r\n               z-index: 10;\r\n\r\n               .header_burger {\r\n                  width: 24px;\r\n                  height: 14px;\r\n                  position: relative;\r\n                  cursor: pointer;\r\n\r\n                  span,\r\n                  &::before,\r\n                  &::after {\r\n                     content: '';\r\n                     position: absolute;\r\n                     right: 0;\r\n                     height: 2px;\r\n                     width: 100%;\r\n                     background-color: #5f5151;\r\n                     transition: transform 0.5s;\r\n                  }\r\n\r\n                  span {\r\n                     top: 50%;\r\n                     transform: translateY(-50%);\r\n                     width: 80%;\r\n                     right: 0;\r\n                  }\r\n\r\n                  &::before {\r\n                     bottom: 0;\r\n                  }\r\n\r\n                  &::after {\r\n                     top: 0;\r\n                  }\r\n\r\n                  &:hover span {\r\n                     transform: scale(0);\r\n                  }\r\n\r\n                  &:hover::before {\r\n                     transform: translateY(-6px) rotate(35deg);\r\n                  }\r\n\r\n                  &:hover::after {\r\n                     transform: translateY(6px) rotate(-35deg);\r\n                  }\r\n               }\r\n            }\r\n         }\r\n\r\n\r\n      }\r\n\r\n   }\r\n\r\n}",".main {\r\n   .home {\r\n      position: relative;\r\n      z-index: 1;\r\n      background-image: url('img/ellipse.png');\r\n      background-position: right bottom 40px;\r\n      background-repeat: no-repeat;\r\n\r\n      .home__container {\r\n         display: flex;\r\n         align-items: center;\r\n         height: 100vh;\r\n         justify-content: space-between;\r\n         position: relative;\r\n         @include adaptiv-value('padding-right', 85, 15, 0);\r\n         @include adaptiv-value('padding-left', 85, 15, 0);\r\n         //padding-bottom: 100px;\r\n\r\n         .home_content {\r\n            font-family: 'Poppins', sans-serif;\r\n            color: white;\r\n\r\n            .home_content_title {\r\n               max-width: 605px;\r\n               @include adaptiv-value('padding-bottom', 40, 10, 0);\r\n\r\n               h1 {\r\n                  line-height: 1.6;\r\n                  @include adaptiv-value('font-size', 40, 20, 0);\r\n               }\r\n\r\n            }\r\n\r\n            @media (max-width:1100px) {\r\n               .home_content_title {\r\n                  h1 {\r\n                     max-width: 405px;\r\n                  }\r\n\r\n               }\r\n            }\r\n\r\n            .home_content_text {\r\n               @include adaptiv-value('font-size', 21, 16, 0);\r\n               max-width: 455px;\r\n               line-height: 1.6;\r\n\r\n            }\r\n\r\n            @media (max-width:768px) {\r\n               .home_content_title {\r\n                  padding-top: 20px;\r\n                  color: rgb(180, 220, 253);\r\n               }\r\n\r\n               .home_content_text {\r\n                  color: rgb(180, 220, 253);\r\n               }\r\n            }\r\n\r\n\r\n\r\n            .home_content_text:not(:last-child) {\r\n               @include adaptiv-value('padding-bottom', 40, 10, 0);\r\n            }\r\n\r\n            .home_content_button {\r\n               .read_more {\r\n                  background-color: #fff;\r\n                  color: #0063ff;\r\n               }\r\n\r\n               .read_more:hover {\r\n                  background-color: #f0cdcd;\r\n               }\r\n            }\r\n         }\r\n\r\n         .home_slider {\r\n            @include adaptiv-value('width', 560, 260, 0);\r\n            @include adaptiv-value('height', 520, 350, 0);\r\n            position: relative;\r\n\r\n\r\n            .home_slider_view {\r\n               position: relative;\r\n               width: 100%;\r\n               height: 100%;\r\n\r\n               .slider {\r\n                  position: absolute;\r\n                  width: 100%;\r\n                  height: 100%;\r\n                  opacity: 0;\r\n\r\n                  video {\r\n                     border-radius: 60px 0 60px 0;\r\n                     max-width: 100%;\r\n                     width: 100%;\r\n                     height: 100%;\r\n                     object-fit: cover;\r\n                  }\r\n\r\n                  img {\r\n                     border-radius: 60px 0 60px 0;\r\n                     max-width: 100%;\r\n                     width: 100%;\r\n                     height: 100%;\r\n                     object-fit: cover;\r\n                  }\r\n               }\r\n\r\n               .sliderAct {\r\n                  transition: all 1s;\r\n                  opacity: 1;\r\n               }\r\n            }\r\n\r\n\r\n            .home_slider_control {\r\n               display: flex;\r\n               justify-content: space-between;\r\n               //@include adaptiv-value('padding-bottom', 55, 15, 0);\r\n               //transform: translateY(150px);\r\n               @include adaptiv-value('padding-top', 80, 30, 0);\r\n\r\n               .home_slider_control_left {\r\n                  width: 40px;\r\n                  height: 40px;\r\n                  display: flex;\r\n                  align-items: center;\r\n                  justify-content: center;\r\n                  border: 2px solid #fff;\r\n                  cursor: pointer;\r\n               }\r\n\r\n               .home_slider_control_left:hover {\r\n                  background-color: white;\r\n                  transition: all 0.3s ease-in-out;\r\n\r\n                  svg {\r\n                     * {\r\n                        fill: currentColor;\r\n                        color: #0063ff;\r\n                     }\r\n                  }\r\n               }\r\n\r\n               .home_slider_control_right {\r\n                  width: 40px;\r\n                  height: 40px;\r\n                  display: flex;\r\n                  align-items: center;\r\n                  justify-content: center;\r\n                  border: 2px solid #0063ff;\r\n                  cursor: pointer;\r\n               }\r\n\r\n               .home_slider_control_right:hover {\r\n                  background-color: #0063ff;\r\n                  transition: all 0.3s ease-in-out;\r\n\r\n                  svg {\r\n                     * {\r\n                        fill: currentColor;\r\n                        color: white;\r\n                     }\r\n                  }\r\n               }\r\n            }\r\n\r\n            @media (max-width: 768px) {\r\n               .home_slider_control {\r\n                  // transform: translateY(75px);\r\n               }\r\n            }\r\n\r\n            .play_slide {\r\n               position: absolute;\r\n               left: 50%;\r\n               top: 50%;\r\n               transform: translate(-50%, -50%);\r\n               cursor: pointer;\r\n\r\n            }\r\n         }\r\n\r\n         @media (max-width:768px) {\r\n            .home_slider {\r\n               @include adaptiv-value('padding-bottom', 80, 70, 0);\r\n            }\r\n         }\r\n\r\n\r\n\r\n\r\n         .slider_active {\r\n            position: absolute;\r\n            left: -16px;\r\n            display: flex;\r\n            flex-direction: column;\r\n            gap: 17px;\r\n\r\n            span {\r\n               border: 2px solid white;\r\n               width: 16px;\r\n               height: 16px;\r\n               border-radius: 50%;\r\n            }\r\n\r\n            .sActive {\r\n               background-color: #fff;\r\n            }\r\n         }\r\n\r\n         @media (max-width:1400px) {\r\n            .slider_active {\r\n               left: 16px;\r\n            }\r\n         }\r\n      }\r\n\r\n      @media (max-width:768px) {\r\n         .home__container {\r\n            flex-direction: column;\r\n            justify-content: center;\r\n\r\n            .home_content {\r\n               align-self: flex-start;\r\n               //max-width: 400px;\r\n               //padding-top: 100px;\r\n            }\r\n\r\n            .home_slider {\r\n               padding-top: 20px;\r\n               width: 80%;\r\n            }\r\n\r\n            .slider_active {\r\n               top: 70%;\r\n               transform: translateY(-70%);\r\n            }\r\n         }\r\n      }\r\n   }\r\n\r\n   .home::after {\r\n      content: '';\r\n      position: absolute;\r\n      left: 0;\r\n      top: 0;\r\n      background-color: #0063ff;\r\n      background-image: url(\"img/bg_line.png\");\r\n      background-repeat: no-repeat;\r\n      background-position: 0 bottom;\r\n      width: 66%;\r\n      height: 100%;\r\n      z-index: -1;\r\n   }\r\n\r\n   @media (max-width: 1150px) {\r\n      .home::after {\r\n         content: '';\r\n\r\n         width: 70%;\r\n      }\r\n   }\r\n\r\n   .home::before {\r\n      content: '';\r\n      position: absolute;\r\n      top: 0;\r\n      left: 50%;\r\n      background-image: url('img/ellipse_two.png');\r\n      background-repeat: no-repeat;\r\n      background-position: top;\r\n      z-index: 1;\r\n      width: 400px;\r\n      height: 300px;\r\n   }\r\n\r\n   //partners\r\n   .partners {\r\n      .partners__container {\r\n         display: flex;\r\n         align-items: center;\r\n         justify-content: space-between;\r\n         padding: 35px 0;\r\n         flex-wrap: wrap;\r\n\r\n         .partner_logo {\r\n            width: 195px;\r\n            height: 100px;\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n\r\n            svg {\r\n               * {\r\n                  fill: currentColor;\r\n                  color: rgb(13, 13, 13);\r\n                  opacity: 0.302;\r\n\r\n\r\n               }\r\n            }\r\n         }\r\n\r\n         @media (max-width: 400px) {\r\n            .partner_logo {\r\n               width: 150px;\r\n            }\r\n         }\r\n\r\n         .active_logo_partner {\r\n            background-color: rgb(255, 255, 255);\r\n            box-shadow: 2.63px 5.393px 19.44px 4.56px rgba(12, 12, 12, 0.05);\r\n\r\n            svg {\r\n               * {\r\n                  fill: currentColor;\r\n                  color: #f40009;\r\n                  opacity: 1;\r\n               }\r\n            }\r\n         }\r\n\r\n         .partner_logo:hover {\r\n            background-color: rgb(255, 255, 255);\r\n            box-shadow: 2.63px 5.393px 19.44px 4.56px rgba(12, 12, 12, 0.05);\r\n\r\n            svg {\r\n               * {\r\n                  fill: currentColor;\r\n                  color: #f40009;\r\n                  opacity: 1;\r\n               }\r\n            }\r\n\r\n         }\r\n      }\r\n   }\r\n\r\n   //mobile\r\n   .mobile {\r\n      background-image: url(\"img/mobile_bg.png\");\r\n      background-repeat: no-repeat;\r\n      background-position: 0 50%;\r\n      //background-size: 20%;\r\n\r\n      .mobile__container {\r\n         display: flex;\r\n         align-items: center;\r\n         @include adaptiv-value('padding-top', 80, 30, 0);\r\n\r\n         .mobile_image {\r\n            flex: 0 1 50%;\r\n            display: flex;\r\n            justify-content: center;\r\n\r\n            img {\r\n               max-width: 100%;\r\n            }\r\n         }\r\n\r\n         .mobile_content {\r\n            flex: 0 1 50%;\r\n\r\n            .mobile_content_title {}\r\n\r\n            .mobile_content_text {}\r\n\r\n\r\n            .mobile_content_button {\r\n               .read_more {}\r\n            }\r\n         }\r\n      }\r\n\r\n      @media (max-width:768px) {\r\n\r\n         .mobile__container {\r\n            flex-direction: column;\r\n\r\n            .mobile_image {\r\n               max-width: 300px;\r\n               max-height: 500px;\r\n            }\r\n         }\r\n      }\r\n   }\r\n\r\n   @media (max-width:1250px) {\r\n      .mobile {\r\n         background-size: 30%;\r\n      }\r\n   }\r\n\r\n   @media (max-width:768px) {\r\n      .mobile {\r\n         background-size: 50%;\r\n         background-position: 0 10%;\r\n      }\r\n   }\r\n\r\n   //web\r\n   .web {\r\n      background-image: url(\"img/web_bg.png\");\r\n      background-repeat: no-repeat;\r\n      background-position: 100% 0;\r\n\r\n      .web__container {\r\n         display: flex;\r\n         align-items: center;\r\n         @include adaptiv-value('padding-top', 80, 30, 0);\r\n         @include adaptiv-value('padding-bottom', 80, 30, 0);\r\n         //justify-content: space-between;\r\n\r\n         .web_content {\r\n            flex: 0 1 50%;\r\n\r\n            .web_content_title {}\r\n\r\n            .web_content_text {}\r\n\r\n\r\n            .web_content_button {\r\n               .read_more {}\r\n            }\r\n         }\r\n\r\n         .web_image {\r\n            flex: 0 1 50%;\r\n            display: flex;\r\n            justify-content: flex-end;\r\n\r\n            img {\r\n               max-width: 100%;\r\n               width: 100%;\r\n               height: 100%;\r\n               object-fit: cover;\r\n            }\r\n         }\r\n\r\n      }\r\n\r\n\r\n\r\n      @media (max-width:768px) {\r\n\r\n         .web__container {\r\n            flex-direction: column;\r\n\r\n            .web_image {\r\n               padding-top: 50px;\r\n            }\r\n         }\r\n      }\r\n   }\r\n\r\n   @media (max-width:1250px) {\r\n      .web {\r\n         background-size: 40%;\r\n         background-position: 100% 30%;\r\n      }\r\n   }\r\n\r\n   @media (max-width:768px) {\r\n      .web {\r\n         background-size: 50%;\r\n         background-position: 100% 90%;\r\n      }\r\n   }\r\n\r\n   //prodcut\r\n   .prodcut {\r\n      background-image: url(\"img/prodcut_bg.png\");\r\n      background-repeat: no-repeat;\r\n      background-position: 0 50%;\r\n      background-size: 20% 80%;\r\n\r\n      .prodcut__container {\r\n         display: flex;\r\n         align-items: center;\r\n         @include adaptiv-value('padding-top', 80, 30, 0);\r\n         @include adaptiv-value('padding-bottom', 150, 60, 0);\r\n         @include adaptiv-value('padding-left', 50, 30, 0);\r\n         @include adaptiv-value('gap', 90, 30, 0);\r\n\r\n         .prodcut_image {\r\n            flex: 0 1 50%;\r\n            display: flex;\r\n            justify-content: center;\r\n\r\n            img {\r\n               max-width: 100%;\r\n            }\r\n         }\r\n\r\n         .prodcut_content {\r\n            flex: 0 1 50%;\r\n\r\n            .prodcut_content_title {}\r\n\r\n            .prodcut_content_text {}\r\n\r\n\r\n            .prodcut_content_button {\r\n               .read_more {}\r\n            }\r\n         }\r\n      }\r\n\r\n      @media (max-width:768px) {\r\n\r\n         .prodcut__container {\r\n            flex-direction: column;\r\n\r\n            .prodcut_image {\r\n               // max-width: 300px;\r\n               // max-height: 500px;\r\n            }\r\n         }\r\n      }\r\n   }\r\n\r\n   @media (max-width:1250px) {\r\n      .prodcut {\r\n         background-size: 20% 70%;\r\n      }\r\n   }\r\n\r\n   @media (max-width:768px) {\r\n      .prodcut {\r\n         background-size: 50%;\r\n         background-position: 0 10%;\r\n      }\r\n   }\r\n}",".timeline_wrapper {\r\n   background-color: #0063ff;\r\n\r\n   .timeline__container {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      @include adaptiv-value(' padding-top', 100, 20, 0);\r\n      @include adaptiv-value(' padding-bottom', 100, 20, 0);\r\n      //@include adaptiv-value(' gap', 50, 50, 0);\r\n\r\n\r\n      .timeline_block {\r\n         flex: 0 1 50%;\r\n\r\n         .timeline_block_title {\r\n            @include adaptiv-value('font-size', 38, 18, 0);\r\n            font-family: \"Poppins\", sans-serif;\r\n            color: rgb(255, 255, 255);\r\n            font-weight: bold;\r\n            line-height: 1.316;\r\n            @include adaptiv-value(' padding-bottom', 35, 20, 0);\r\n            font-weight: 400;\r\n         }\r\n\r\n         .timeline {\r\n            position: relative;\r\n            z-index: 2;\r\n\r\n\r\n            .timeline_event {\r\n               display: flex;\r\n               //align-items: center;\r\n               justify-content: center;\r\n\r\n\r\n               .timeline_event_icon {\r\n                  width: 40px;\r\n                  height: 40px;\r\n                  flex-shrink: 0;\r\n                  background-color: #1a73ff;\r\n                  border-radius: 50%;\r\n                  display: flex;\r\n                  align-items: center;\r\n                  justify-content: center;\r\n                  font-size: 20px;\r\n                  font-family: \"Poppins\", sans-serif;\r\n                  color: rgb(255, 255, 255);\r\n                  position: relative;\r\n                  margin-right: 25px;\r\n                  outline: 4px solid #0063ff;\r\n\r\n                  .timeline_event_icon_in {\r\n                     display: flex;\r\n                     align-items: center;\r\n                     justify-content: center;\r\n                     position: absolute;\r\n                     background-color: #3181ff;\r\n                     width: 30px;\r\n                     height: 30px;\r\n                     border-radius: 50%;\r\n                  }\r\n\r\n                  .inView {\r\n                     background-color: #fff;\r\n                     color: #2068b0;\r\n                     -webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n                     animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n                  }\r\n\r\n                  @-webkit-keyframes scale-up-center {\r\n                     0% {\r\n                        -webkit-transform: scale(0.5);\r\n                        transform: scale(0.5);\r\n                     }\r\n\r\n                     100% {\r\n                        -webkit-transform: scale(1);\r\n                        transform: scale(1);\r\n                     }\r\n                  }\r\n\r\n                  @keyframes scale-up-center {\r\n                     0% {\r\n                        -webkit-transform: scale(0.5);\r\n                        transform: scale(0.5);\r\n                     }\r\n\r\n                     100% {\r\n                        -webkit-transform: scale(1);\r\n                        transform: scale(1);\r\n                     }\r\n                  }\r\n\r\n\r\n               }\r\n\r\n\r\n\r\n\r\n               .timeline_event_content {\r\n\r\n\r\n                  .clickView {\r\n                     @include adaptiv-value('font-size', 20, 16, 0);\r\n                     font-family: \"Poppins\", sans-serif;\r\n                     color: #99c1ff;\r\n                     line-height: 1.622;\r\n                     padding-top: 5px;\r\n                     cursor: pointer;\r\n                     font-weight: 400;\r\n                  }\r\n\r\n                  .white {\r\n                     color: white;\r\n                  }\r\n\r\n                  .closeView {\r\n                     @include adaptiv-value('font-size', 20, 16, 0);\r\n                     font-family: \"Poppins\", sans-serif;\r\n                     color: rgba(255, 255, 255, 0.6);\r\n                     line-height: 1.622;\r\n                     transition: all 0.6s ease-out;\r\n                     height: 0;\r\n                     visibility: hidden;\r\n                     opacity: 0;\r\n                     font-weight: 400;\r\n                  }\r\n\r\n                  .openView {\r\n                     height: 100%;\r\n                     opacity: 1;\r\n                     visibility: visible;\r\n                     padding-top: 10px;\r\n                     color: rgb(255, 255, 255);\r\n                  }\r\n\r\n               }\r\n\r\n\r\n            }\r\n\r\n            .timeline_event:not(:last-child) {\r\n               padding-bottom: 25px;\r\n            }\r\n         }\r\n\r\n         .timeline::after {\r\n            content: '';\r\n            position: absolute;\r\n            top: 0;\r\n            left: 18px;\r\n            background-color: #1a73ff;\r\n            width: 4px;\r\n            height: 100%;\r\n            z-index: -1;\r\n         }\r\n\r\n\r\n\r\n      }\r\n\r\n      .timeline_image {\r\n         flex: 0 1 45%;\r\n         border-radius: 60px 0 60px 0;\r\n         max-width: 520px;\r\n         //max-height: 570px;\r\n\r\n         img {\r\n            max-width: 100%;\r\n            height: 100%;\r\n            width: 100%;\r\n            object-fit: cover;\r\n            border-radius: 60px 0 60px 0;\r\n         }\r\n      }\r\n\r\n   }\r\n\r\n   @media (max-width:768px) {\r\n      .timeline__container {\r\n         flex-direction: column;\r\n         align-items: center;\r\n\r\n         .timeline_image {\r\n            padding-top: 50px;\r\n         }\r\n      }\r\n   }\r\n}",".customer {\r\n   position: relative;\r\n\r\n   .customer__container {\r\n      @include adaptiv-value('padding-top', 100, 30, 0);\r\n      @include adaptiv-value('padding-bottom', 200, 100, 0);\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n\r\n      .customer_title {\r\n         @include adaptiv-value('font-size', 38, 18, 0);\r\n         @include adaptiv-value('padding-bottom', 80, 30, 0);\r\n         font-family: \"Poppins\", sans-serif;\r\n         color: rgb(12, 12, 12);\r\n         font-weight: bold;\r\n         line-height: 1.053;\r\n         text-align: center;\r\n      }\r\n\r\n      .customer_slider_wrapper {\r\n         background-color: rgb(255, 255, 255);\r\n         box-shadow: 10.603px 29.13px 45.9px 5.1px rgba(12, 12, 12, 0.1);\r\n         border-radius: 60px 0 60px 0;\r\n\r\n         max-height: 405px;\r\n         transition: all 0.9s ease-in-out;\r\n\r\n         .customer_slider {\r\n            @include adaptiv-value('padding-right', 200, 20, 0);\r\n            @include adaptiv-value('padding-left', 200, 20, 0);\r\n\r\n            .customer_slider_title {\r\n               position: relative;\r\n               max-width: 550px;\r\n               @include adaptiv-value('margin-top', 106, 36, 0);\r\n               @include adaptiv-value('font-size', 25, 18, 0);\r\n               font-family: \"Poppins\", serif;\r\n               color: rgb(13, 13, 13);\r\n               font-style: italic;\r\n               font-weight: 600;\r\n               line-height: 1.2;\r\n               text-align: center;\r\n               opacity: 0;\r\n               transition: all 0.5s ease-in-out;\r\n            }\r\n\r\n            .title_active {\r\n               opacity: 1;\r\n            }\r\n\r\n\r\n\r\n\r\n\r\n            .customer_slider_title::before {\r\n               content: '❝';\r\n               position: absolute;\r\n               @include adaptiv-value('top', -70, -25, 0);\r\n               @include adaptiv-value('left', -70, -25, 0);\r\n               @include adaptiv-value('font-size', 105, 55, 0);\r\n               font-family: \"Poppins\", sans-serif;\r\n               color: rgba(13, 13, 13, 0.6);\r\n               font-style: italic;\r\n               line-height: 1.2;\r\n\r\n            }\r\n\r\n            .customer_slider_person {\r\n               display: flex;\r\n               gap: 30px;\r\n               @include adaptiv-value('padding-top', 70, 30, 0);\r\n\r\n               .customer_slider_person_avatar {\r\n                  height: 195px;\r\n\r\n\r\n                  .customer_avatar {\r\n                     border-radius: 60px 0 60px 0;\r\n                     width: 100%;\r\n                     height: 100%;\r\n\r\n\r\n                     img {\r\n                        max-width: 100%;\r\n                        border-radius: 60px 0 60px 0;\r\n                        height: 100%;\r\n                        object-fit: cover;\r\n                        opacity: 0;\r\n                        transition: opacity 0.5s ease;\r\n                     }\r\n\r\n                     .visible {\r\n                        -webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n                        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n\r\n                        opacity: 1;\r\n                     }\r\n\r\n\r\n                  }\r\n\r\n\r\n\r\n                  @-webkit-keyframes scale-up-center {\r\n                     0% {\r\n                        -webkit-transform: scale(0.5);\r\n                        transform: scale(0.5);\r\n                     }\r\n\r\n                     100% {\r\n                        -webkit-transform: scale(1);\r\n                        transform: scale(1);\r\n                     }\r\n                  }\r\n\r\n                  @keyframes scale-up-center {\r\n                     0% {\r\n                        -webkit-transform: scale(0.5);\r\n                        transform: scale(0.5);\r\n                     }\r\n\r\n                     100% {\r\n                        -webkit-transform: scale(1);\r\n                        transform: scale(1);\r\n                     }\r\n                  }\r\n\r\n\r\n               }\r\n\r\n               .customer_slider_person_infa {\r\n                  padding-top: 50px;\r\n\r\n                  h1 {\r\n                     flex-wrap: nowrap;\r\n                     @include adaptiv-value('font-size', 30, 18, 0);\r\n                  }\r\n\r\n                  h2 {\r\n                     flex-wrap: nowrap;\r\n                     padding-top: 10px;\r\n                     @include adaptiv-value('font-size', 20, 16, 0);\r\n                     font-family: 'Poppins', sans-serif;\r\n                     font-weight: 600;\r\n                  }\r\n\r\n\r\n               }\r\n            }\r\n         }\r\n\r\n         .customer_slider_controlled {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            padding-top: 50px;\r\n\r\n            .customer_pre {\r\n               width: 40px;\r\n               height: 40px;\r\n               border: 2px solid #0063ff;\r\n               display: flex;\r\n               align-items: center;\r\n               justify-content: center;\r\n               cursor: pointer;\r\n            }\r\n\r\n            .customer_pre:hover {\r\n               background-color: #0063ff;\r\n               transition: all 0.3s ease-in-out;\r\n\r\n               svg {\r\n                  * {\r\n                     fill: currentColor;\r\n                     color: white;\r\n                  }\r\n               }\r\n            }\r\n\r\n            .customer_active {\r\n               display: flex;\r\n               gap: 18px;\r\n               align-items: flex-end;\r\n\r\n               span {\r\n                  width: 37px;\r\n                  height: 4px;\r\n                  background-color: #cfcfcf;\r\n               }\r\n\r\n               .customer_active_point {\r\n                  background-color: #0063ff;\r\n               }\r\n            }\r\n\r\n            .customer_next {\r\n               width: 40px;\r\n               height: 40px;\r\n               border: 2px solid #0063ff;\r\n               display: flex;\r\n               align-items: center;\r\n               justify-content: center;\r\n               cursor: pointer;\r\n            }\r\n\r\n            .customer_next:hover {\r\n               background-color: #0063ff;\r\n               transition: all 0.3s ease-in-out;\r\n\r\n               svg {\r\n                  * {\r\n                     fill: currentColor;\r\n                     color: white;\r\n                  }\r\n               }\r\n            }\r\n         }\r\n      }\r\n   }\r\n\r\n\r\n}\r\n\r\n.customer::before {\r\n   content: '';\r\n   background-image: url('img/customer_bgOne.png');\r\n   background-repeat: no-repeat;\r\n   width: 200px;\r\n   height: 400px;\r\n   position: absolute;\r\n   left: 0;\r\n   bottom: 0;\r\n   z-index: -1;\r\n}\r\n\r\n.customer::after {\r\n   content: '';\r\n   background-image: url('img/customer_bgTwo.png');\r\n   background-repeat: no-repeat;\r\n   width: 110px;\r\n   height: 400px;\r\n   position: absolute;\r\n   right: 0px;\r\n   top: 80px;\r\n   z-index: -1;\r\n}\r\n\r\n.counter {\r\n   background-image: url('img/counter_bg.png');\r\n   background-repeat: no-repeat;\r\n   background-size: 100% 100%;\r\n\r\n   .counter__container {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      @include adaptiv-value('padding-top', 75, 25, 0);\r\n      @include adaptiv-value('padding-bottom', 75, 25, 0);\r\n\r\n      .count_block {\r\n         .count_block_number {\r\n            font-size: 54px;\r\n            font-family: \"Poppins\", sans-serif;\r\n            color: rgb(255, 255, 255);\r\n            line-height: 1.2;\r\n            text-align: center;\r\n            font-weight: 600;\r\n         }\r\n\r\n         .count_block_name {\r\n            font-size: 18px;\r\n            font-family: \"Poppins\", sans-serif;\r\n            color: rgb(255, 255, 255);\r\n            line-height: 1.2;\r\n            text-align: center;\r\n            padding-top: 10px;\r\n         }\r\n      }\r\n   }\r\n\r\n   @media (max-width:768px) {\r\n      .counter__container {\r\n         display: grid;\r\n         grid-template-columns: 1fr 1fr;\r\n         gap: 20px;\r\n      }\r\n   }\r\n}",".news {\r\n   .news__container {\r\n      display: flex;\r\n      gap: 30px;\r\n\r\n\r\n      // display: grid;\r\n      // grid-template-columns: 1fr 1.4fr;\r\n      // grid-template-rows: 18.18% 22.725% 18.18% 22.725%;\r\n      // gap: 30px;\r\n      @include adaptiv-value('padding-top', 100, 20, 0);\r\n      @include adaptiv-value('padding-bottom', 100, 20, 0);\r\n\r\n      // grid-template-areas:\r\n      //    \"head card2\"\r\n      //    \"card1 card3\"\r\n      // ;\r\n      //align-items: center;\r\n      .news_blockOne {\r\n         display: grid;\r\n         flex: 0 1 45%;\r\n         gap: 30px;\r\n         align-items: flex-end;\r\n\r\n         .news_head {\r\n            .news_head_title {\r\n               font-size: 38px;\r\n               font-family: \"Poppins\", sans-serif;\r\n               color: rgb(12, 12, 12);\r\n               font-weight: bold;\r\n               line-height: 1.053;\r\n               padding-bottom: 30px;\r\n\r\n            }\r\n\r\n            .news_head_text {}\r\n         }\r\n\r\n         .card-1 {\r\n            .news_card_image {\r\n               height: 400px;\r\n            }\r\n\r\n         }\r\n      }\r\n\r\n      .news_blockTwo {\r\n         display: grid;\r\n         flex: 0 1 55%;\r\n         gap: 30px;\r\n\r\n         .card-2 {}\r\n\r\n         .card-3 {}\r\n      }\r\n\r\n      // .card-1 {\r\n      //    grid-area: card1;\r\n      //    grid-row: 2 / span 3;\r\n      // }\r\n\r\n\r\n      .news_card {\r\n         background-color: rgb(255, 255, 255);\r\n         box-shadow: 0.684px 1.879px 32px 0px rgba(12, 12, 12, 0.06);\r\n\r\n         .news_card_image {\r\n            position: relative;\r\n            height: 200px;\r\n\r\n            .card_image {\r\n               max-width: 100%;\r\n               height: 100%;\r\n               width: 100%;\r\n               object-fit: cover;\r\n            }\r\n\r\n            .card_image_hover_data {\r\n               display: flex;\r\n               flex-direction: column;\r\n               align-items: center;\r\n               justify-content: center;\r\n               background-color: #0063ff;\r\n               @include adaptiv-value('width', 60, 50, 0);\r\n               @include adaptiv-value('height', 80, 60, 0);\r\n               color: white;\r\n               position: absolute;\r\n               left: 20px;\r\n               top: 20px;\r\n               z-index: 2;\r\n\r\n\r\n               .card_image_hover_data_number {\r\n                  text-align: center;\r\n                  width: 80%;\r\n                  border-bottom: 2px solid #80b1ff;\r\n                  height: 100%;\r\n                  display: flex;\r\n                  align-items: center;\r\n                  justify-content: center;\r\n               }\r\n\r\n               .card_image_hover_data_month {\r\n                  height: 100%;\r\n                  display: flex;\r\n                  align-items: center;\r\n               }\r\n            }\r\n\r\n\r\n\r\n            .card_image_hover {\r\n               position: absolute;\r\n               left: 0;\r\n               top: 0;\r\n               width: 100%;\r\n               height: 100%;\r\n               opacity: 0;\r\n               transition: all 0.2s ease-in-out;\r\n\r\n               .card_image_hover_share {\r\n                  cursor: pointer;\r\n                  background-color: rgb(255, 255, 255);\r\n                  position: absolute;\r\n                  top: 50%;\r\n                  left: 50%;\r\n                  transform: translate(-50%, -50%);\r\n                  text-align: center;\r\n                  width: 135px;\r\n                  height: 42px;\r\n                  border-radius: 20px;\r\n                  line-height: 42px;\r\n\r\n                  .card_share {}\r\n               }\r\n\r\n               .card_image_hover_view {\r\n                  position: absolute;\r\n                  left: 20px;\r\n                  bottom: 20px;\r\n                  z-index: 2;\r\n                  background-color: #d09eeb;\r\n                  width: 90px;\r\n                  height: 30px;\r\n                  border-radius: 20px;\r\n                  display: flex;\r\n                  align-items: center;\r\n                  justify-content: center;\r\n                  color: white;\r\n\r\n                  .card_image_hover_view_count {\r\n                     padding-left: 6px;\r\n                  }\r\n               }\r\n\r\n            }\r\n\r\n            .hover_visible {\r\n               opacity: 1;\r\n            }\r\n\r\n\r\n            .card_image_hover::before {\r\n               content: '';\r\n               position: absolute;\r\n               width: 100%;\r\n               height: 100%;\r\n               background-image: -moz-linear-gradient(-135deg, rgb(244, 81, 108) 0%, rgb(152, 58, 240) 100%);\r\n               background-image: -webkit-linear-gradient(-135deg, rgb(244, 81, 108) 0%, rgb(152, 58, 240) 100%);\r\n               background-image: -ms-linear-gradient(-135deg, rgb(244, 81, 108) 0%, rgb(152, 58, 240) 100%);\r\n               background: linear-gradient(-135deg, rgb(244, 81, 108) 0%, rgb(152, 58, 240) 100%);\r\n               opacity: 0.702;\r\n            }\r\n\r\n\r\n\r\n\r\n         }\r\n\r\n         .news_card_content {\r\n            padding: 30px;\r\n\r\n            .news_card_content_hash-tag {\r\n               padding-bottom: 10px;\r\n\r\n               a {\r\n                  font-size: 12px;\r\n                  color: rgb(0, 99, 255);\r\n                  text-transform: uppercase;\r\n               }\r\n            }\r\n\r\n            .news_card_content_title {\r\n               padding-bottom: 20px;\r\n               font-size: 18px;\r\n               color: rgb(12, 12, 12);\r\n               font-weight: bold;\r\n            }\r\n\r\n            .news_card_content_text {}\r\n\r\n            .news_card_content_button {\r\n               padding-top: 20px;\r\n\r\n\r\n               .read_more {\r\n                  width: 135px;\r\n                  height: 40px;\r\n                  font-size: 16px;\r\n               }\r\n            }\r\n         }\r\n      }\r\n   }\r\n\r\n   @media (max-width:768px) {\r\n      .news__container {\r\n         flex-direction: column;\r\n      }\r\n   }\r\n}",".footer {\r\n   background-color: #ebf3ff;\r\n\r\n   .footer__container {\r\n      .footer_head {\r\n         display: flex;\r\n         justify-content: space-between;\r\n         border-bottom: 1px solid #d4dbe6;\r\n         @include adaptiv-value('padding-top', 100, 40, 0);\r\n         @include adaptiv-value('padding-bottom', 40, 20, 0);\r\n\r\n         .footer_head_logo {\r\n            font-size: 35px;\r\n            font-family: \"Poppins\", sans-serif;\r\n            color: rgb(0, 99, 255);\r\n            font-weight: bold;\r\n            line-height: 1.143;\r\n            margin-right: 20px;\r\n\r\n         }\r\n\r\n         .footer_head_nemu {\r\n            .footer_head_menu_list {\r\n               display: flex;\r\n               gap: 40px;\r\n               flex-wrap: wrap;\r\n               row-gap: 5px;\r\n\r\n               .footer_head_menu_item {\r\n                  .footer_head_menu_link {\r\n                     @include adaptiv-value('font-size', 19, 15, 0);\r\n                     font-family: \"Poppins\", sans-serif;\r\n                     color: rgb(12, 12, 12);\r\n                     position: relative;\r\n                  }\r\n\r\n                  .footer_head_menu_link::before {\r\n                     content: '';\r\n                     position: absolute;\r\n                     left: 50%;\r\n                     transform: translateX(-50%);\r\n                     bottom: -5px;\r\n                     content: '';\r\n                     height: 3px;\r\n                     background-color: #fff;\r\n                     width: 0%;\r\n                     transition: all 0.5s;\r\n                  }\r\n\r\n                  .footer_head_menu_link:hover::before {\r\n                     content: '';\r\n                     height: 3px;\r\n                     background-color: #fff;\r\n                     width: 100%;\r\n                  }\r\n               }\r\n            }\r\n         }\r\n      }\r\n\r\n      .footer_bottom {\r\n         display: flex;\r\n         justify-content: space-between;\r\n         @include adaptiv-value('padding-top', 30, 10, 0);\r\n         @include adaptiv-value('padding-bottom', 30, 10, 0);\r\n         align-items: center;\r\n\r\n         .footer_bottom_copyright {\r\n            font-size: 14px;\r\n            font-family: \"Poppins\", sans-serif;\r\n            color: rgb(12, 12, 12);\r\n\r\n         }\r\n\r\n         .footer_bottom_social {\r\n            display: flex;\r\n            gap: 50px;\r\n\r\n\r\n\r\n            .footer_social_ikon {\r\n               //background-color: #754545;\r\n\r\n               a {\r\n                  position: relative;\r\n                  display: flex;\r\n                  align-items: center;\r\n                  justify-content: center;\r\n               }\r\n\r\n               a::before {\r\n                  content: '';\r\n                  background: linear-gradient(45deg, #00B5F5, #002A8F);\r\n                  transition: all 265ms ease-out;\r\n                  position: absolute;\r\n                  display: block;\r\n                  width: 40px;\r\n                  height: 40px;\r\n                  border-radius: 50%;\r\n\r\n               }\r\n\r\n               a:hover::before {\r\n                  content: '';\r\n                  transform: scale(0);\r\n               }\r\n\r\n               a:hover svg {\r\n                  transform: scale(1.5);\r\n\r\n                  * {\r\n                     fill: currentColor;\r\n                     color: black;\r\n\r\n                  }\r\n               }\r\n\r\n               a {\r\n                  svg {\r\n                     position: relative;\r\n                     z-index: 2;\r\n\r\n                     * {\r\n                        fill: currentColor;\r\n                        color: rgb(250, 241, 241);\r\n                     }\r\n                  }\r\n               }\r\n            }\r\n\r\n            .footer_social_ikon::before {}\r\n\r\n\r\n\r\n\r\n            // .footer_social_ikon:hover {\r\n            //    background: none;\r\n            //    transform: scale(2.2);\r\n\r\n            //    svg {\r\n            //       * {\r\n            //          fill: currentColor;\r\n            //          color: black;\r\n            //       }\r\n            //    }\r\n            // }\r\n         }\r\n      }\r\n   }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icon.png */ "./src/img/icon.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/header_logo.png */ "./src/img/header_logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/header_smile.png */ "./src/img/header_smile.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/videoplayback.mp4 */ "./src/img/videoplayback.mp4"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/poster.png */ "./src/img/poster.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Watch Citadel's high-speed trading in action.mp4 */ "./src/img/Watch Citadel's high-speed trading in action.mp4"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/mobile.png */ "./src/img/mobile.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/tablet.png */ "./src/img/tablet.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/prodcut.png */ "./src/img/prodcut.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/timeline.jpg */ "./src/img/timeline.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/avatar.jpg */ "./src/img/avatar.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/news1.webp */ "./src/img/news1.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/news2.jpg */ "./src/img/news2.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/news3.png */ "./src/img/news3.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n\r\n<head>\r\n\t<meta charset=\"UTF-8\">\r\n\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n\t<title>MS.</title>\r\n\t<link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" />\r\n</head>\r\n\r\n\r\n<body>\r\n\t<div class=\"wrapper\">\r\n\t\t<header class=\"header \">\r\n\t\t\t<div class=\"header__container\">\r\n\t\t\t\t<div class=\"header_logo\">\r\n\t\t\t\t\t<a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"logo\" class=\"logo\"></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"burger_body\">\r\n\t\t\t\t\t<nav class=\"header_menu\">\r\n\t\t\t\t\t\t<ul class=\"header_menu_list\">\r\n\t\t\t\t\t\t\t<li class=\"header_menu_item\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"header_menu_link\" data-lang=\"text_translate-1\">Home</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"header_menu_item\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"header_menu_link\" data-lang=\"text_translate-2\">Process</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"header_menu_item\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"header_menu_link\" data-lang=\"text_translate-3\">Services</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"header_menu_item\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"header_menu_link\" data-lang=\"text_translate-4\">Blog</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"header_menu_item\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"header_menu_link\" data-lang=\"text_translate-5\">About</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</nav>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"header_social\">\r\n\t\t\t\t\t<div class=\"header_social_ikon\">\r\n\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"7px\"\r\n\t\t\t\t\t\t\t\theight=\"15px\">\r\n\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" fill=\"rgb(255, 255, 255)\"\r\n\t\t\t\t\t\t\t\t\td=\"M6.449,7.274 L4.497,7.274 L4.497,14.266 L1.585,14.266 L1.585,7.274 L0.209,7.274 L0.209,4.810 L1.585,4.810 L1.585,3.210 C1.585,2.751 1.659,2.330 1.809,1.946 C2.001,1.445 2.294,1.055 2.689,0.778 C3.169,0.436 3.777,0.266 4.513,0.266 L6.673,0.282 L6.673,2.682 L5.105,2.682 C4.945,2.682 4.811,2.724 4.705,2.810 C4.566,2.927 4.497,3.108 4.497,3.354 L4.497,4.810 L6.705,4.810 L6.449,7.274 Z\" />\r\n\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"header_social_ikon\">\r\n\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"15px\"\r\n\t\t\t\t\t\t\t\theight=\"15px\">\r\n\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" fill=\"rgb(255, 255, 255)\"\r\n\t\t\t\t\t\t\t\t\td=\"M14.449,10.346 C14.449,11.060 14.273,11.716 13.921,12.314 C13.569,12.911 13.094,13.386 12.497,13.738 C11.899,14.090 11.243,14.266 10.529,14.266 C9.782,14.266 9.094,14.074 8.465,13.690 C8.134,13.743 7.798,13.770 7.457,13.770 C6.283,13.770 5.190,13.471 4.177,12.874 C3.195,12.298 2.417,11.524 1.841,10.554 C1.254,9.540 0.961,8.447 0.961,7.274 C0.961,6.943 0.987,6.602 1.041,6.250 C0.657,5.620 0.459,4.938 0.449,4.202 C0.449,3.487 0.625,2.828 0.977,2.226 C1.329,1.623 1.806,1.146 2.409,0.794 C3.011,0.442 3.670,0.266 4.385,0.266 C5.131,0.266 5.819,0.463 6.449,0.858 C6.790,0.805 7.126,0.778 7.457,0.778 C8.630,0.778 9.723,1.071 10.737,1.658 C11.718,2.234 12.497,3.013 13.073,3.994 C13.659,5.007 13.953,6.100 13.953,7.274 C13.953,7.615 13.926,7.951 13.873,8.282 C14.267,8.922 14.459,9.610 14.449,10.346 L14.449,10.346 ZM10.961,8.890 C10.961,8.474 10.881,8.124 10.721,7.842 C10.561,7.559 10.339,7.325 10.057,7.138 C9.774,6.951 9.430,6.791 9.025,6.658 C8.619,6.525 8.171,6.404 7.681,6.297 C7.297,6.212 7.019,6.146 6.849,6.098 C6.678,6.050 6.510,5.983 6.345,5.898 C6.179,5.813 6.051,5.714 5.961,5.601 C5.870,5.490 5.825,5.353 5.825,5.193 C5.825,4.948 5.961,4.735 6.233,4.554 C6.505,4.372 6.865,4.282 7.313,4.282 C7.803,4.282 8.158,4.364 8.377,4.530 C8.595,4.695 8.779,4.932 8.929,5.242 C9.057,5.455 9.174,5.610 9.281,5.706 C9.387,5.802 9.553,5.850 9.777,5.850 C10.001,5.850 10.190,5.770 10.345,5.610 C10.499,5.450 10.577,5.263 10.577,5.049 C10.577,4.836 10.515,4.615 10.393,4.386 C10.270,4.156 10.078,3.941 9.817,3.738 C9.555,3.535 9.227,3.372 8.833,3.249 C8.438,3.127 7.974,3.060 7.441,3.050 C6.769,3.050 6.182,3.146 5.681,3.338 C5.179,3.530 4.795,3.802 4.529,4.154 C4.262,4.506 4.129,4.911 4.129,5.370 C4.129,5.829 4.254,6.218 4.505,6.538 C4.755,6.858 5.094,7.111 5.521,7.298 C5.947,7.485 6.475,7.647 7.105,7.786 C7.563,7.871 7.934,7.959 8.217,8.050 C8.499,8.140 8.726,8.269 8.897,8.434 C9.067,8.599 9.153,8.809 9.153,9.066 C9.153,9.396 8.993,9.671 8.673,9.890 C8.353,10.108 7.931,10.217 7.409,10.217 C7.025,10.217 6.721,10.164 6.497,10.057 C6.273,9.951 6.097,9.812 5.969,9.642 C5.841,9.471 5.723,9.258 5.617,9.002 C5.521,8.778 5.406,8.610 5.273,8.498 C5.139,8.386 4.977,8.329 4.785,8.329 C4.539,8.329 4.339,8.402 4.185,8.546 C4.030,8.690 3.953,8.868 3.953,9.082 C3.953,9.423 4.078,9.778 4.329,10.145 C4.579,10.514 4.907,10.810 5.313,11.034 C5.878,11.333 6.593,11.481 7.457,11.481 C8.182,11.481 8.809,11.372 9.337,11.154 C9.865,10.935 10.267,10.628 10.545,10.234 C10.822,9.828 10.961,9.380 10.961,8.890 L10.961,8.890 Z\" />\r\n\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"header_social_ikon\">\r\n\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"15px\"\r\n\t\t\t\t\t\t\t\theight=\"15px\">\r\n\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" fill=\"rgb(255, 255, 255)\"\r\n\t\t\t\t\t\t\t\t\td=\"M13.377,0.266 C13.665,0.266 13.910,0.364 14.113,0.562 C14.315,0.759 14.417,0.996 14.417,1.273 L14.417,13.274 C14.417,13.551 14.315,13.786 14.113,13.977 C13.910,14.170 13.670,14.266 13.393,14.266 L1.521,14.266 C1.243,14.266 1.003,14.170 0.801,13.977 C0.598,13.786 0.497,13.551 0.497,13.274 L0.497,1.273 C0.497,0.996 0.598,0.759 0.801,0.562 C1.003,0.364 1.249,0.266 1.537,0.266 L13.393,0.266 L13.377,0.266 ZM4.721,5.673 L2.625,5.673 L2.625,11.994 L4.721,11.994 L4.721,5.673 ZM4.529,4.497 C4.742,4.290 4.849,4.029 4.849,3.713 C4.849,3.399 4.742,3.138 4.529,2.929 C4.315,2.722 4.033,2.618 3.681,2.618 C3.329,2.618 3.043,2.722 2.825,2.929 C2.606,3.138 2.497,3.399 2.497,3.713 C2.497,4.029 2.603,4.290 2.817,4.497 C3.030,4.706 3.307,4.810 3.649,4.810 L3.665,4.810 C4.027,4.810 4.315,4.706 4.529,4.497 ZM12.289,8.362 C12.289,7.434 12.059,6.719 11.601,6.218 C11.174,5.759 10.598,5.530 9.873,5.530 C9.382,5.530 8.961,5.647 8.609,5.882 C8.385,6.042 8.177,6.271 7.985,6.570 L7.985,5.673 L5.889,5.673 C5.899,5.919 5.899,7.044 5.889,9.050 L5.889,11.994 L7.985,11.994 L7.985,8.458 C7.985,8.234 8.006,8.063 8.049,7.946 C8.134,7.732 8.262,7.557 8.433,7.418 C8.625,7.258 8.859,7.178 9.137,7.178 C9.499,7.178 9.771,7.311 9.953,7.578 C10.113,7.823 10.193,8.165 10.193,8.602 L10.193,11.994 L12.289,11.994 L12.289,8.362 Z\" />\r\n\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"header_choose_lng\">\r\n\t\t\t\t\t<div class=\"header_lng lng-EN\" data-btn=\"en\">EN</div>\r\n\t\t\t\t\t<div class=\"header_lng lng-UA\" data-btn=\"ua\">UA</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"header_discuss\">\r\n\t\t\t\t\t<a href=\"#\" class=\"discuss\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"discuss\">\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"header_burger_wrapper\">\r\n\t\t\t\t\t<div class=\"header_burger\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</header>\r\n\t\t<main class=\"main\">\r\n\t\t\t<div class=\"home\">\r\n\t\t\t\t<div class=\"home__container\">\r\n\t\t\t\t\t<div class=\"home_content\">\r\n\t\t\t\t\t\t<div class=\"home_content_title\">\r\n\t\t\t\t\t\t\t<h1 data-lang=\"text_translate-6\">We build Intelligent Enterprise Software</h1>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"home_content_text\" data-lang=\"text_translate-7\">\r\n\t\t\t\t\t\t\tWe are a technology company that understands complexity of businesses, and with our technical\r\n\t\t\t\t\t\t\texpertise, we help them transform and scale\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"home_content_button\">\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"read_more\" data-lang=\"text_translate-42\">Read More</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"home_slider\">\r\n\r\n\t\t\t\t\t\t<div class=\"home_slider_view\">\r\n\t\t\t\t\t\t\t<div class=\"slider\">\r\n\t\t\t\t\t\t\t\t<video class=\"videoSlide\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" poster=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"></video>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"slider\">\r\n\t\t\t\t\t\t\t\t<video class=\"videoSlide\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"></video>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"slider\">\r\n\t\t\t\t\t\t\t\t<video class=\"videoSlide\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" poster=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"></video>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"home_slider_control\">\r\n\t\t\t\t\t\t\t<div class=\"home_slider_control_left\">\r\n\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"11px\"\r\n\t\t\t\t\t\t\t\t\theight=\"18px\">\r\n\t\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" fill=\"rgb(255, 255, 255)\"\r\n\t\t\t\t\t\t\t\t\t\td=\"M10.615,2.193 C10.880,1.943 11.013,1.639 11.013,1.282 C11.013,0.925 10.880,0.621 10.615,0.371 C10.351,0.121 10.029,-0.004 9.650,-0.004 C9.272,-0.004 8.950,0.121 8.684,0.371 L0.451,8.139 C-0.154,8.710 -0.136,9.299 0.507,9.907 L8.684,17.622 C8.950,17.871 9.272,17.996 9.650,17.996 C10.029,17.996 10.351,17.871 10.615,17.622 C10.880,17.371 11.013,17.067 11.013,16.711 C11.013,16.353 10.880,16.050 10.615,15.800 L3.403,8.997 L10.615,2.193 Z\" />\r\n\t\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"home_slider_control_right\">\r\n\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"11px\"\r\n\t\t\t\t\t\t\t\t\theight=\"18px\">\r\n\t\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" fill=\"rgb(0, 99, 255)\"\r\n\t\t\t\t\t\t\t\t\t\td=\"M0.385,15.806 C0.119,16.057 -0.013,16.360 -0.013,16.717 C-0.013,17.074 0.119,17.378 0.385,17.628 C0.649,17.878 0.971,18.003 1.350,18.003 C1.728,18.003 2.050,17.878 2.315,17.628 L10.549,9.860 C11.154,9.289 11.136,8.700 10.492,8.092 L2.315,0.378 C2.050,0.128 1.728,0.003 1.350,0.003 C0.971,0.003 0.649,0.128 0.385,0.378 C0.119,0.628 -0.013,0.932 -0.013,1.288 C-0.013,1.646 0.119,1.949 0.385,2.199 L7.596,9.002 L0.385,15.806 Z\" />\r\n\t\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"play_slide\">\r\n\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"92px\"\r\n\t\t\t\t\t\t\t\theight=\"92px\">\r\n\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" fill=\"rgb(255, 255, 255)\"\r\n\t\t\t\t\t\t\t\t\td=\"M0.974,45.997 C0.974,58.440 5.385,69.072 14.210,77.894 C23.033,86.720 33.665,91.131 46.108,91.131 C58.548,91.131 69.181,86.720 78.006,77.894 C86.829,69.072 91.243,58.440 91.243,45.997 C91.243,33.557 86.829,22.924 78.006,14.099 C69.181,5.277 58.548,0.862 46.108,0.862 C33.665,0.862 23.033,5.277 14.210,14.099 C5.385,22.924 0.974,33.557 0.974,45.997 ZM34.608,64.875 C34.316,65.167 33.991,65.201 33.631,64.984 C33.269,64.766 33.089,64.441 33.089,64.007 L33.089,27.986 C33.089,27.552 33.269,27.226 33.631,27.010 C33.991,26.792 34.316,26.830 34.608,27.118 L64.336,45.129 C65.204,45.709 65.204,46.288 64.336,46.865 L34.608,64.875 Z\" />\r\n\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t\t{{!-- <div class=\"play_slide_cicle\">\r\n\t\t\t\t\t\t\t\t<div class=\"play_slide_click\"></div>\r\n\t\t\t\t\t\t\t</div> --}}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"slider_active\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"partners\">\r\n\t\t\t\t<div class=\"partners__container\">\r\n\t\t\t\t\t<div class=\"partner_logo active_logo_partner\">\r\n\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"101px\"\r\n\t\t\t\t\t\t\theight=\"58px\">\r\n\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" opacity=\"0.302\" fill=\"rgb(13, 13, 13)\"\r\n\t\t\t\t\t\t\t\td=\"M29.749,57.520 L3.449,57.520 L0.549,52.620 L19.849,41.120 L29.749,57.520 ZM100.549,57.520 L74.349,57.520 L46.949,11.920 L66.149,0.320 L84.249,30.320 L100.549,57.520 ZM65.149,57.520 L38.949,57.520 L23.749,32.320 L42.949,20.720 L65.149,57.520 Z\" />\r\n\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"partner_logo\">\r\n\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"121px\"\r\n\t\t\t\t\t\t\theight=\"30px\">\r\n\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" opacity=\"0.302\" fill=\"rgb(13, 13, 13)\"\r\n\t\t\t\t\t\t\t\td=\"M120.429,3.040 L119.469,5.560 C119.229,6.202 118.828,6.520 118.269,6.520 L118.149,6.520 C116.628,6.441 113.988,6.400 110.229,6.400 C106.468,6.400 104.268,7.600 103.629,10.000 L98.349,28.240 C98.188,28.882 97.668,29.200 96.789,29.200 L90.909,29.200 C90.429,29.200 90.108,29.101 89.949,28.900 C89.788,28.702 89.748,28.441 89.829,28.120 L94.749,11.200 C92.589,14.320 88.269,16.321 81.789,17.200 L67.509,19.000 C67.428,21.082 68.268,22.441 70.029,23.080 C71.229,23.560 73.428,23.800 76.629,23.800 C78.388,23.800 80.788,23.721 83.829,23.560 L88.269,23.320 C88.828,23.320 89.068,23.560 88.989,24.040 L88.029,27.160 C87.789,27.880 87.189,28.402 86.229,28.720 C85.029,29.041 80.908,29.200 73.869,29.200 C67.149,29.200 62.788,27.681 60.789,24.640 L60.429,26.680 C60.189,27.321 59.848,27.801 59.409,28.120 C58.968,28.441 58.228,28.681 57.189,28.840 C55.509,29.161 52.308,29.320 47.589,29.320 C38.308,29.320 33.748,26.080 33.909,19.600 L31.989,26.080 C31.749,26.721 31.348,27.201 30.789,27.520 C30.228,27.841 29.388,28.120 28.269,28.360 C24.508,28.921 19.948,29.200 14.589,29.200 C3.708,29.200 -0.850,26.320 0.909,20.560 C2.268,16.321 7.188,13.681 15.669,12.640 C18.789,12.241 22.869,11.602 27.909,10.720 C28.548,10.641 28.948,10.282 29.109,9.640 C29.988,6.921 27.708,5.560 22.269,5.560 C20.508,5.560 17.709,5.722 13.869,6.040 L8.829,6.400 C8.268,6.400 8.068,6.202 8.229,5.800 L8.949,3.280 C9.348,2.001 10.468,1.240 12.309,1.000 C14.709,0.681 18.669,0.520 24.189,0.520 C34.108,0.520 38.388,3.562 37.029,9.640 C40.629,3.562 47.068,0.520 56.349,0.520 L56.469,0.520 C57.669,0.520 59.148,0.601 60.909,0.760 C62.668,0.921 63.628,1.642 63.789,2.920 L64.149,5.440 C64.149,5.680 64.089,5.902 63.969,6.100 C63.849,6.301 63.669,6.400 63.429,6.400 C63.748,6.400 63.009,6.340 61.209,6.220 C59.409,6.100 57.748,6.040 56.229,6.040 C52.629,6.040 49.728,6.721 47.529,8.080 C45.328,9.442 43.828,11.560 43.029,14.440 C41.908,17.962 41.788,20.361 42.669,21.640 C43.708,23.080 46.389,23.800 50.709,23.800 C52.468,23.800 54.708,23.680 57.429,23.440 L60.189,23.200 C59.308,20.961 59.428,18.121 60.549,14.680 C63.429,5.242 70.708,0.520 82.389,0.520 C92.388,0.520 96.988,2.881 96.189,7.600 C98.908,2.881 104.188,0.520 112.029,0.520 C114.909,0.520 116.709,0.561 117.429,0.640 C118.308,0.721 118.948,0.841 119.349,1.000 C119.748,1.162 120.069,1.441 120.309,1.840 C120.549,2.161 120.588,2.560 120.429,3.040 L120.429,3.040 ZM27.309,15.520 L13.629,17.440 C10.989,17.761 9.388,18.802 8.829,20.560 C8.109,22.960 10.749,24.160 16.749,24.160 C20.268,24.160 22.948,24.040 24.789,23.800 L27.309,15.520 ZM81.429,5.560 C77.508,5.560 74.688,6.121 72.969,7.240 C71.248,8.361 69.909,10.441 68.949,13.480 L68.709,14.440 L80.109,12.760 C84.828,12.121 87.508,10.840 88.149,8.920 C88.869,6.682 86.628,5.560 81.429,5.560 L81.429,5.560 Z\" />\r\n\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"partner_logo\">\r\n\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"96px\"\r\n\t\t\t\t\t\t\theight=\"62px\">\r\n\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" opacity=\"0.302\" fill=\"rgb(13, 13, 13)\"\r\n\t\t\t\t\t\t\t\td=\"M11.664,32.998 C9.446,35.310 8.339,38.223 8.339,41.738 C8.339,45.253 9.446,48.167 11.664,50.478 C13.880,52.790 16.683,53.945 20.071,53.945 C23.459,53.945 26.546,52.520 29.334,49.670 L29.524,49.480 L33.894,54.800 L33.799,54.895 C30.125,59.203 25.660,61.355 20.404,61.355 C17.680,61.355 15.115,60.913 12.709,60.025 C10.301,59.139 8.211,57.873 6.439,56.225 C4.539,54.453 3.081,52.330 2.069,49.860 C1.055,47.390 0.549,44.683 0.549,41.738 C0.549,38.793 1.055,36.085 2.069,33.615 C3.081,31.145 4.539,29.024 6.439,27.250 C8.211,25.604 10.301,24.353 12.709,23.498 C15.115,22.643 17.680,22.215 20.404,22.215 C25.724,22.215 30.189,24.338 33.799,28.580 L33.894,28.770 L29.524,33.995 L29.334,33.900 C26.484,30.988 23.411,29.530 20.119,29.530 C16.699,29.530 13.880,30.686 11.664,32.998 ZM38.264,60.595 L46.054,60.595 L46.054,22.785 L38.264,22.785 L38.264,60.595 ZM76.454,52.330 L76.929,52.045 L75.029,59.360 L74.934,59.455 C72.906,60.659 70.612,61.229 68.046,61.165 C65.481,61.103 63.406,60.168 61.824,58.363 C60.240,56.558 59.449,54.199 59.449,51.285 L59.449,29.910 L52.894,29.910 L52.894,22.785 L59.449,22.785 L59.449,15.090 L67.049,11.005 L67.049,22.785 L74.934,22.785 L74.934,29.910 L67.049,29.910 L67.049,49.955 C67.049,51.475 67.349,52.568 67.951,53.233 C68.553,53.898 69.455,54.230 70.659,54.230 C72.369,54.230 74.300,53.598 76.454,52.330 L76.454,52.330 ZM82.819,60.595 L90.609,60.595 L90.609,22.785 L82.819,22.785 L82.819,60.595 ZM42.064,16.515 L33.134,16.515 L33.514,16.040 C36.996,11.038 41.509,7.110 47.051,4.260 C52.593,1.410 58.371,-0.015 64.389,-0.015 C70.405,-0.015 76.169,1.410 81.679,4.260 C87.189,7.110 91.716,11.038 95.264,16.040 L95.549,16.515 L86.619,16.515 L86.524,16.420 C83.546,13.318 80.143,10.943 76.312,9.295 C72.479,7.649 68.505,6.825 64.389,6.825 C60.271,6.825 56.298,7.649 52.466,9.295 C48.634,10.943 45.199,13.318 42.159,16.420 L42.064,16.515 Z\" />\r\n\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"partner_logo\">\r\n\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"116px\"\r\n\t\t\t\t\t\t\theight=\"25px\">\r\n\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" opacity=\"0.302\" fill=\"rgb(13, 13, 13)\"\r\n\t\t\t\t\t\t\t\td=\"M19.294,12.670 L24.239,4.390 C22.782,3.547 21.094,3.125 19.179,3.125 C16.572,3.125 14.329,4.045 12.452,5.885 C10.572,7.725 9.634,9.987 9.634,12.670 C9.634,15.355 10.572,17.615 12.452,19.455 C14.329,21.295 16.609,22.215 19.294,22.215 C20.979,22.215 22.552,21.813 24.009,21.008 C25.464,20.203 26.614,19.110 27.459,17.730 L27.919,19.110 C26.692,20.720 25.004,22.025 22.859,23.020 C20.634,24.095 18.104,24.630 15.269,24.630 C12.202,24.630 9.519,24.055 7.219,22.905 C5.072,21.833 3.424,20.375 2.274,18.535 C1.124,16.695 0.549,14.722 0.549,12.613 C0.549,10.505 1.142,8.550 2.331,6.748 C3.519,4.947 5.187,3.510 7.334,2.435 C9.634,1.285 12.279,0.710 15.269,0.710 C21.324,0.710 25.849,2.820 28.839,7.035 L19.294,12.670 ZM70.699,5.770 C71.389,6.460 71.734,7.305 71.734,8.300 L71.734,24.055 L64.719,24.055 L64.719,10.025 C64.719,9.565 64.546,9.163 64.201,8.818 C63.856,8.473 63.454,8.300 62.994,8.300 C62.534,8.300 62.132,8.473 61.786,8.818 C61.441,9.163 61.269,9.565 61.269,10.025 L61.269,24.055 L54.254,24.055 L54.254,8.300 L49.539,8.300 L56.324,5.080 C56.859,4.927 57.319,4.850 57.704,4.850 C58.624,4.850 59.409,5.120 60.061,5.655 C60.712,6.193 61.114,6.883 61.269,7.725 L66.789,5.080 C67.324,4.850 67.824,4.735 68.284,4.735 C69.204,4.735 70.009,5.080 70.699,5.770 ZM45.054,5.655 C46.509,6.500 47.429,7.650 47.814,9.105 L52.069,24.055 L45.054,24.055 L44.134,20.720 C43.367,21.795 42.274,22.695 40.856,23.423 C39.437,24.152 37.866,24.515 36.141,24.515 C34.416,24.515 32.824,23.940 31.369,22.790 C29.759,21.488 28.954,19.955 28.954,18.190 C28.954,16.428 29.759,14.895 31.369,13.590 C32.824,12.440 34.434,11.865 36.199,11.865 C38.574,11.943 40.569,12.595 42.179,13.820 L40.569,8.300 L31.484,8.300 L39.764,5.195 C41.679,4.505 43.444,4.660 45.054,5.655 L45.054,5.655 ZM42.179,20.720 C42.869,20.030 43.214,19.188 43.214,18.190 C43.214,17.195 42.869,16.350 42.179,15.660 C41.489,14.970 40.644,14.625 39.649,14.625 C38.652,14.625 37.809,14.970 37.119,15.660 C36.429,16.350 36.084,17.195 36.084,18.190 C36.084,19.188 36.429,20.030 37.119,20.720 C37.809,21.410 38.652,21.755 39.649,21.755 C40.644,21.755 41.489,21.410 42.179,20.720 ZM84.039,4.850 C86.799,4.850 89.137,5.810 91.054,7.725 C92.969,9.643 93.929,11.962 93.929,14.683 C93.929,17.405 92.969,19.743 91.054,21.698 C89.137,23.653 86.799,24.630 84.039,24.630 C81.279,24.630 78.939,23.653 77.024,21.698 C75.107,19.743 74.149,17.405 74.149,14.683 C74.149,11.962 75.107,9.623 77.024,7.668 C78.939,5.713 81.279,4.735 84.039,4.735 L84.039,4.850 ZM87.662,22.158 C87.929,21.660 87.987,21.105 87.834,20.490 L84.384,7.725 C84.229,7.190 83.904,6.768 83.406,6.460 C82.907,6.155 82.352,6.078 81.739,6.230 C81.124,6.385 80.684,6.730 80.416,7.265 C80.147,7.802 80.089,8.340 80.244,8.875 L83.694,21.640 C83.847,22.178 84.192,22.600 84.729,22.905 C85.264,23.212 85.802,23.290 86.339,23.135 C86.952,22.982 87.392,22.657 87.662,22.158 ZM114.514,5.770 C115.204,6.460 115.549,7.305 115.549,8.300 L115.549,24.055 L108.534,24.055 L108.534,10.025 C108.534,9.565 108.361,9.163 108.017,8.818 C107.671,8.473 107.249,8.300 106.751,8.300 C106.252,8.300 105.832,8.473 105.486,8.818 C105.142,9.163 104.969,9.565 104.969,10.025 L104.969,24.055 L97.954,24.055 L97.954,8.300 L93.354,8.300 L100.024,5.080 C100.559,4.850 101.059,4.775 101.519,4.850 C102.362,4.850 103.109,5.120 103.761,5.655 C104.412,6.193 104.814,6.883 104.969,7.725 L110.604,5.080 C111.139,4.850 111.599,4.735 111.984,4.735 C112.979,4.735 113.824,5.080 114.514,5.770 Z\" />\r\n\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"partner_logo\">\r\n\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"116px\"\r\n\t\t\t\t\t\t\theight=\"42px\">\r\n\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" opacity=\"0.302\" fill=\"rgb(13, 13, 13)\"\r\n\t\t\t\t\t\t\t\td=\"M6.414,23.890 C6.949,23.507 7.639,23.162 8.484,22.855 C9.174,22.625 9.824,22.473 10.439,22.395 C12.202,22.243 14.042,22.473 15.959,23.085 C17.492,23.545 19.447,24.350 21.824,25.500 C20.367,27.418 18.737,28.912 16.936,29.985 C15.134,31.060 13.352,31.595 11.589,31.595 C9.594,31.595 8.004,31.155 6.816,30.273 C5.627,29.392 5.014,28.337 4.976,27.110 C4.937,25.885 5.454,24.810 6.529,23.890 L6.414,23.890 ZM39.361,2.270 C40.626,3.575 41.259,5.108 41.259,6.870 L41.259,27.915 L39.879,27.685 C38.422,27.303 36.504,26.690 34.129,25.845 L27.804,23.660 C29.337,21.055 30.487,18.180 31.254,15.035 L23.204,15.035 L23.204,12.160 L33.094,12.160 L33.094,10.550 L23.204,10.550 L23.204,5.720 L19.179,5.720 C18.872,5.720 18.679,5.835 18.604,6.065 L18.489,6.410 L18.489,10.550 L8.599,10.550 L8.599,12.160 L18.489,12.160 L18.489,15.035 L10.324,15.035 L10.324,16.645 L26.194,16.645 C25.657,18.640 24.889,20.517 23.894,22.280 C17.299,20.058 12.584,19.290 9.749,19.980 C7.754,20.517 6.259,21.360 5.264,22.510 C3.959,24.120 3.384,25.845 3.539,27.685 C3.692,29.525 4.534,31.060 6.069,32.285 C7.679,33.665 9.749,34.355 12.279,34.355 C14.654,34.355 16.974,33.723 19.236,32.458 C21.497,31.193 23.509,29.450 25.274,27.225 C27.574,28.300 30.909,29.795 35.279,31.710 L41.259,34.240 L41.259,34.470 C41.259,36.235 40.626,37.768 39.361,39.070 C38.097,40.375 36.544,41.025 34.704,41.025 L7.104,41.025 C5.264,41.025 3.711,40.375 2.446,39.070 C1.181,37.768 0.549,36.235 0.549,34.470 L0.549,6.870 C0.549,5.108 1.181,3.575 2.446,2.270 C3.711,0.967 5.264,0.315 7.104,0.315 L34.704,0.315 C36.544,0.315 38.097,0.967 39.361,2.270 ZM99.219,9.055 L95.079,9.055 L95.079,5.145 L102.899,5.145 L102.899,2.960 L107.269,2.960 L107.269,5.145 L113.939,5.145 C114.244,5.145 114.514,5.260 114.744,5.490 C114.974,5.720 115.089,5.990 115.089,6.295 L115.089,9.055 L110.949,9.055 L110.949,6.755 L99.219,6.755 L99.219,9.055 ZM74.034,3.190 L78.059,3.190 L75.299,9.400 L76.564,9.400 L76.564,25.270 L72.999,25.270 L72.999,13.310 L69.779,13.310 L74.034,3.190 ZM115.549,24.810 L95.079,24.810 L95.079,23.315 L103.129,23.315 L103.129,16.645 L95.079,16.645 L95.079,15.150 L103.129,15.150 L103.129,12.045 L95.079,12.045 L95.079,10.435 L115.089,10.435 L115.089,12.045 L107.039,12.045 L107.039,15.150 L115.089,15.150 L115.089,16.645 L107.039,16.645 L107.039,23.315 L111.179,23.315 L110.144,19.865 L113.594,19.865 C113.899,19.865 114.129,20.020 114.284,20.325 L115.549,24.810 L115.549,24.810 ZM85.419,18.600 L81.739,18.600 L79.324,11.010 L82.429,11.010 C82.812,11.010 83.079,11.165 83.234,11.470 L85.419,18.600 ZM91.054,7.330 L92.549,7.330 L92.549,8.825 L91.054,8.825 L91.054,23.545 C91.054,23.930 90.919,24.275 90.651,24.580 C90.382,24.888 90.057,25.040 89.674,25.040 L84.844,25.040 L84.844,23.430 L86.684,23.430 C87.067,23.430 87.259,23.240 87.259,22.855 L87.259,8.825 L78.174,8.825 L78.174,7.330 L87.259,7.330 L87.259,3.420 L91.054,3.420 L91.054,7.330 ZM69.204,25.615 L67.594,25.270 C66.289,24.888 64.987,24.465 63.684,24.005 C61.844,23.240 60.157,22.395 58.624,21.475 C57.014,22.395 55.289,23.240 53.449,24.005 C52.144,24.465 50.804,24.888 49.424,25.270 L47.814,25.615 L47.814,23.775 C51.034,22.780 53.832,21.515 56.209,19.980 C53.679,18.140 51.724,16.032 50.344,13.655 L54.024,13.655 L55.059,15.035 C55.979,16.110 57.129,17.183 58.509,18.255 C59.659,17.335 60.617,16.340 61.384,15.265 C61.997,14.500 62.457,13.732 62.764,12.965 L63.109,12.045 L49.309,12.045 L49.309,10.435 L56.209,10.435 L56.209,7.905 L48.044,7.905 L48.044,6.295 L56.209,6.295 L56.209,3.880 C56.209,3.650 56.284,3.460 56.439,3.305 C56.592,3.152 56.784,3.075 57.014,3.075 L60.694,3.075 L60.694,6.295 L68.974,6.295 L68.974,7.905 L60.694,7.905 L60.694,10.435 L67.824,10.435 C66.904,14.115 64.642,17.298 61.039,19.980 C63.339,21.437 66.059,22.740 69.204,23.890 L69.204,25.615 ZM55.059,28.605 L58.394,37.805 L56.669,37.805 L56.094,35.965 L52.644,35.965 L52.069,37.805 L50.344,37.805 L53.679,28.605 L55.059,28.605 ZM55.634,34.815 L54.369,31.020 L53.104,34.815 L55.634,34.815 ZM65.524,36.540 L69.549,36.540 L69.549,37.805 L63.914,37.805 L63.914,28.605 L65.524,28.605 L65.524,36.540 ZM75.644,37.805 L77.254,37.805 L77.254,28.605 L75.644,28.605 L75.644,37.805 ZM89.846,29.410 C90.421,29.948 90.709,30.637 90.709,31.480 C90.709,32.325 90.421,32.995 89.846,33.493 C89.272,33.992 88.524,34.240 87.604,34.240 L85.764,34.240 L85.764,37.805 L84.039,37.805 L84.039,28.605 L87.604,28.605 C88.524,28.605 89.272,28.875 89.846,29.410 ZM88.582,32.515 C88.849,32.210 88.984,31.845 88.984,31.423 C88.984,31.002 88.849,30.637 88.582,30.330 C88.312,30.025 87.987,29.870 87.604,29.870 L85.764,29.870 L85.764,32.975 L87.604,32.975 C87.987,32.975 88.312,32.822 88.582,32.515 ZM99.449,28.605 L102.899,37.805 L101.059,37.805 L100.484,35.965 L97.034,35.965 L96.459,37.805 L94.734,37.805 L98.069,28.605 L99.449,28.605 ZM100.139,34.815 L98.759,31.020 L97.494,34.815 L100.139,34.815 ZM112.099,28.605 L113.939,28.605 L111.064,34.010 L111.064,37.805 L109.454,37.805 L109.454,34.010 L106.694,28.605 L108.419,28.605 L110.259,32.515 L112.099,28.605 Z\" />\r\n\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"partner_logo\">\r\n\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"116px\"\r\n\t\t\t\t\t\t\theight=\"36px\">\r\n\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" fill=\"rgb(244, 0, 9)\"\r\n\t\t\t\t\t\t\t\td=\"M45.399,31.125 C47.009,32.045 48.542,33.235 49.999,34.690 C48.619,34.155 47.314,33.655 46.089,33.195 C45.322,32.965 44.784,32.850 44.479,32.850 L43.789,32.735 C43.174,32.735 42.562,32.812 41.949,32.965 C40.414,33.195 38.844,33.848 37.234,34.920 C36.697,34.308 36.179,33.790 35.681,33.368 C35.182,32.947 34.646,32.602 34.071,32.333 C33.496,32.065 32.844,31.873 32.117,31.758 C31.387,31.643 30.524,31.585 29.529,31.585 C27.919,31.510 26.039,31.740 23.894,32.275 L15.154,34.345 C13.084,34.805 11.244,34.997 9.634,34.920 C8.714,34.920 7.851,34.863 7.046,34.748 C6.241,34.633 5.551,34.460 4.976,34.230 C4.401,34.000 3.902,33.752 3.481,33.483 C3.059,33.215 2.714,32.947 2.446,32.678 C2.177,32.410 1.929,32.103 1.699,31.758 C1.469,31.413 1.277,31.030 1.124,30.608 C0.969,30.187 0.854,29.745 0.779,29.285 C0.549,28.365 0.511,27.255 0.664,25.950 C0.739,24.955 0.894,23.995 1.124,23.075 C1.507,21.925 1.967,20.737 2.504,19.510 C3.884,16.520 5.839,13.492 8.369,10.425 C9.749,8.893 11.089,7.532 12.394,6.343 C13.697,5.155 15.039,4.100 16.419,3.180 C17.492,2.490 18.564,1.915 19.639,1.455 C20.559,0.995 21.402,0.670 22.169,0.478 C22.934,0.287 23.664,0.190 24.354,0.190 C24.814,0.190 25.197,0.230 25.504,0.305 C25.809,0.382 26.079,0.517 26.309,0.708 C26.539,0.900 26.692,1.073 26.769,1.225 C27.304,1.993 27.304,3.065 26.769,4.445 L26.424,5.250 L25.849,5.940 C24.929,6.938 24.162,7.168 23.549,6.630 C23.394,6.630 23.261,6.515 23.147,6.285 C23.031,6.055 23.012,5.865 23.089,5.710 C23.089,5.405 23.279,5.020 23.664,4.560 L24.124,4.100 C24.659,3.640 25.234,3.257 25.849,2.950 L25.849,2.490 C25.849,2.185 25.772,1.973 25.619,1.858 C25.464,1.743 25.216,1.685 24.871,1.685 C24.526,1.685 24.142,1.743 23.721,1.858 C23.299,1.973 22.819,2.165 22.284,2.433 C21.747,2.702 21.134,3.065 20.444,3.525 C19.599,4.140 18.719,4.905 17.799,5.825 C16.724,6.900 15.652,8.125 14.579,9.505 C13.199,11.193 11.952,12.917 10.841,14.680 C9.729,16.445 8.789,18.170 8.024,19.855 C7.334,21.235 6.834,22.540 6.529,23.765 C6.222,24.762 6.029,25.605 5.954,26.295 C5.877,26.833 5.857,27.330 5.896,27.790 C5.934,28.250 6.011,28.673 6.126,29.055 C6.241,29.440 6.374,29.822 6.529,30.205 C6.682,30.590 6.892,30.935 7.161,31.240 C7.429,31.548 7.754,31.815 8.139,32.045 C8.522,32.275 8.924,32.487 9.346,32.678 C9.767,32.870 10.284,33.023 10.899,33.138 C11.512,33.253 12.202,33.310 12.969,33.310 C14.424,33.310 16.379,33.005 18.834,32.390 L24.009,31.010 C26.384,30.397 28.149,29.937 29.299,29.630 C31.829,29.095 33.974,28.865 35.739,28.940 C37.654,28.940 39.457,29.095 41.144,29.400 C42.677,29.785 44.094,30.360 45.399,31.125 L45.399,31.125 ZM58.394,12.380 L55.059,12.380 L56.784,9.160 L60.349,9.160 L58.394,12.380 ZM115.549,0.190 C115.164,1.110 114.629,2.030 113.939,2.950 C113.249,3.870 112.404,4.752 111.409,5.595 C109.339,7.360 107.039,8.547 104.509,9.160 C103.359,9.468 102.247,9.620 101.174,9.620 C100.637,9.698 100.139,9.698 99.679,9.620 L98.989,9.505 L102.094,5.825 C103.704,5.902 105.274,5.750 106.809,5.365 C108.189,4.982 109.607,4.370 111.064,3.525 C112.597,2.605 114.092,1.495 115.549,0.190 L115.549,0.190 ZM107.844,26.295 C107.154,27.600 106.464,28.730 105.774,29.688 C105.084,30.647 104.394,31.470 103.704,32.160 C103.167,32.775 102.669,33.253 102.209,33.598 C101.749,33.943 101.289,34.270 100.829,34.575 C99.754,35.035 98.874,35.190 98.184,35.035 C97.799,34.882 97.569,34.615 97.494,34.230 L97.379,33.770 L97.264,33.080 L97.264,32.045 C96.804,32.582 96.304,33.080 95.769,33.540 C95.462,33.770 95.097,34.020 94.677,34.288 C94.254,34.557 93.814,34.730 93.354,34.805 L92.664,34.920 C92.279,34.920 91.954,34.845 91.687,34.690 C91.417,34.538 91.244,34.345 91.169,34.115 L90.939,33.655 L90.824,33.080 L90.824,32.275 L90.824,31.010 C90.287,31.625 89.731,32.218 89.156,32.793 C88.582,33.368 88.064,33.770 87.604,34.000 C86.684,34.690 85.764,35.035 84.844,35.035 C84.537,35.035 84.287,34.997 84.097,34.920 C83.904,34.845 83.712,34.748 83.521,34.633 C83.329,34.518 83.176,34.365 83.061,34.173 C82.946,33.982 82.849,33.790 82.774,33.598 C82.697,33.407 82.639,33.120 82.602,32.735 C82.562,32.352 82.619,31.740 82.774,30.895 C82.849,30.435 82.964,29.900 83.119,29.285 C83.579,27.982 84.039,26.755 84.499,25.605 L82.889,25.605 C81.969,27.063 81.107,28.327 80.302,29.400 C79.497,30.475 78.749,31.355 78.059,32.045 C77.369,32.735 76.754,33.272 76.219,33.655 C75.834,33.963 75.414,34.270 74.954,34.575 C74.187,34.882 73.497,35.035 72.884,35.035 C72.577,35.035 72.289,34.997 72.022,34.920 C71.752,34.845 71.522,34.710 71.332,34.518 C71.139,34.327 70.967,34.097 70.814,33.828 C70.659,33.560 70.564,33.253 70.527,32.908 C70.487,32.563 70.487,32.160 70.527,31.700 C70.564,31.240 70.659,30.780 70.814,30.320 C70.967,29.630 71.197,28.940 71.504,28.250 C72.269,26.565 73.344,24.877 74.724,23.190 C75.414,22.347 76.104,21.600 76.794,20.948 C77.484,20.297 78.134,19.740 78.749,19.280 C79.362,18.820 79.899,18.475 80.359,18.245 C80.819,18.015 81.221,17.862 81.566,17.785 C81.912,17.710 82.237,17.670 82.544,17.670 C83.234,17.747 83.809,18.015 84.269,18.475 C84.344,18.630 84.459,18.820 84.614,19.050 C84.844,19.665 84.844,20.470 84.614,21.465 C84.614,21.773 84.517,22.175 84.326,22.673 C84.134,23.172 83.847,23.765 83.464,24.455 L85.074,24.455 C86.299,22.003 87.584,19.665 88.926,17.440 C90.267,15.217 91.744,13.070 93.354,11.000 C94.809,9.085 96.229,7.397 97.609,5.940 C98.759,4.790 99.869,3.755 100.944,2.835 C101.787,2.145 102.629,1.570 103.474,1.110 C104.009,0.805 104.584,0.575 105.199,0.420 C106.042,0.190 106.694,0.152 107.154,0.305 C107.307,0.382 107.459,0.460 107.614,0.535 C108.074,0.995 108.304,1.570 108.304,2.260 L108.189,2.720 C108.112,2.875 108.034,3.065 107.959,3.295 L107.384,4.330 L106.234,4.445 L106.809,2.835 L107.039,2.375 C107.114,1.993 107.039,1.725 106.809,1.570 C106.732,1.495 106.637,1.455 106.521,1.455 C106.406,1.455 106.214,1.513 105.947,1.628 C105.677,1.743 105.352,1.955 104.969,2.260 C104.432,2.645 103.799,3.180 103.071,3.870 C102.342,4.560 101.479,5.520 100.484,6.745 C99.334,8.050 98.202,9.487 97.091,11.058 C95.979,12.630 94.829,14.393 93.641,16.348 C92.452,18.303 91.359,20.162 90.364,21.925 C91.974,20.775 93.487,19.588 94.906,18.360 C96.324,17.135 97.609,15.888 98.759,14.623 C99.909,13.358 100.904,12.113 101.749,10.885 L103.129,10.655 C101.979,12.420 100.771,14.048 99.506,15.543 C98.241,17.038 96.842,18.400 95.309,19.625 C93.622,21.083 91.589,22.577 89.214,24.110 C88.754,25.337 88.389,26.353 88.121,27.158 C87.852,27.963 87.642,28.692 87.489,29.343 C87.334,29.995 87.259,30.512 87.259,30.895 C87.334,31.050 87.431,31.203 87.546,31.355 C87.661,31.510 87.794,31.585 87.949,31.585 C88.102,31.585 88.254,31.548 88.409,31.470 L88.869,31.240 C89.174,31.010 89.482,30.742 89.789,30.435 C90.249,29.900 90.939,28.980 91.859,27.675 L95.654,22.845 C96.419,21.850 97.149,21.045 97.839,20.430 C98.374,19.970 98.816,19.588 99.162,19.280 C99.506,18.975 99.869,18.705 100.254,18.475 C101.327,17.862 102.324,17.555 103.244,17.555 L103.819,17.555 C104.049,17.632 104.279,17.728 104.509,17.843 C104.739,17.958 105.084,18.170 105.544,18.475 L106.464,17.555 L109.454,17.555 L103.474,27.790 L101.864,30.895 C101.864,31.125 101.939,31.260 102.094,31.298 C102.247,31.337 102.477,31.280 102.784,31.125 L103.244,30.780 L104.049,30.090 C104.432,29.708 104.854,29.248 105.314,28.710 C105.849,28.020 106.424,27.255 107.039,26.410 L107.844,26.295 ZM81.854,25.490 C81.394,25.337 80.972,25.185 80.589,25.030 C80.204,24.877 79.937,24.725 79.784,24.570 L79.324,24.110 C79.017,23.805 78.787,23.497 78.634,23.190 C77.177,24.418 76.142,25.797 75.529,27.330 C75.299,27.790 75.144,28.175 75.069,28.480 C74.992,28.788 74.934,29.133 74.896,29.515 C74.857,29.900 74.877,30.282 74.954,30.665 L75.184,31.010 C75.489,31.395 75.834,31.585 76.219,31.585 L76.564,31.470 L77.139,31.240 C77.369,31.010 77.674,30.723 78.059,30.378 C78.442,30.033 78.844,29.612 79.266,29.113 C79.687,28.615 80.129,28.060 80.589,27.445 C81.049,26.755 81.469,26.105 81.854,25.490 L81.854,25.490 ZM83.464,20.545 C83.387,20.162 83.252,19.855 83.061,19.625 C82.869,19.395 82.582,19.280 82.199,19.280 C81.814,19.280 81.469,19.395 81.164,19.625 C80.014,20.392 79.629,21.428 80.014,22.730 C80.089,22.960 80.204,23.190 80.359,23.420 L80.589,23.650 C80.742,23.805 80.934,23.938 81.164,24.053 C81.394,24.168 81.739,24.303 82.199,24.455 C82.582,23.690 82.849,23.133 83.004,22.788 C83.157,22.443 83.252,22.155 83.292,21.925 C83.329,21.695 83.349,21.465 83.349,21.235 L83.464,20.545 ZM103.474,21.695 L103.934,20.775 L104.164,20.085 C104.239,19.780 104.239,19.568 104.164,19.453 C104.087,19.338 103.952,19.280 103.762,19.280 C103.569,19.280 103.397,19.320 103.244,19.395 L102.669,19.740 C102.362,19.895 101.959,20.182 101.461,20.603 C100.962,21.025 100.464,21.505 99.967,22.040 C99.467,22.577 98.949,23.210 98.414,23.938 C97.877,24.667 97.436,25.300 97.091,25.835 C96.746,26.373 96.439,26.910 96.172,27.445 C95.902,27.982 95.692,28.405 95.539,28.710 L95.309,29.630 L95.194,30.320 C95.194,30.780 95.289,31.107 95.481,31.298 C95.672,31.490 95.999,31.510 96.459,31.355 C96.689,31.280 96.937,31.125 97.206,30.895 C97.474,30.665 97.724,30.360 97.954,29.975 C98.414,29.363 98.834,28.788 99.219,28.250 L103.474,21.695 ZM71.734,24.800 C70.967,26.565 69.894,28.250 68.514,29.860 C66.979,31.548 65.254,32.890 63.339,33.885 C62.572,34.345 61.804,34.690 61.039,34.920 C59.889,35.305 58.699,35.305 57.474,34.920 C56.937,34.768 56.419,34.538 55.921,34.230 C55.422,33.925 55.001,33.540 54.657,33.080 C54.311,32.620 54.024,32.142 53.794,31.643 C53.564,31.145 53.409,30.590 53.334,29.975 C53.257,29.363 53.257,28.673 53.334,27.905 C53.409,27.140 53.582,26.220 53.851,25.145 C54.119,24.073 54.484,22.960 54.944,21.810 C55.479,20.430 56.132,19.128 56.899,17.900 C57.742,16.445 58.699,14.987 59.774,13.530 C60.999,11.920 62.379,10.368 63.914,8.873 C65.447,7.378 66.999,6.037 68.571,4.848 C70.142,3.660 71.657,2.682 73.114,1.915 C74.339,1.303 75.529,0.805 76.679,0.420 C77.982,0.037 79.094,-0.078 80.014,0.075 C80.319,0.152 80.704,0.305 81.164,0.535 C81.624,0.765 82.122,1.035 82.659,1.340 C83.732,0.957 84.689,0.650 85.534,0.420 C86.147,0.267 86.644,0.152 87.029,0.075 C87.949,-0.000 88.829,0.037 89.674,0.190 C90.364,0.345 91.092,0.593 91.859,0.938 C92.624,1.283 93.429,1.725 94.274,2.260 C95.347,2.950 96.419,3.755 97.494,4.675 L94.274,8.125 C92.587,6.670 90.977,5.442 89.444,4.445 C88.217,3.680 87.087,3.162 86.051,2.893 C85.016,2.625 83.924,2.490 82.774,2.490 L82.774,4.330 C82.774,4.790 82.697,5.250 82.544,5.710 C82.314,6.785 81.854,7.895 81.164,9.045 C80.779,9.660 80.377,10.253 79.956,10.828 C79.534,11.403 79.112,11.902 78.691,12.323 C78.269,12.745 77.867,13.090 77.484,13.358 C77.099,13.627 76.717,13.875 76.334,14.105 C75.719,14.335 75.144,14.490 74.609,14.565 C74.379,14.490 74.149,14.432 73.919,14.393 C73.689,14.355 73.517,14.298 73.401,14.220 C73.286,14.145 73.171,14.030 73.056,13.875 C72.941,13.723 72.844,13.570 72.769,13.415 C72.692,13.262 72.634,13.090 72.596,12.898 C72.557,12.707 72.557,12.400 72.596,11.978 C72.634,11.557 72.712,11.155 72.827,10.770 C72.941,10.387 73.132,9.908 73.401,9.333 C73.669,8.758 73.994,8.202 74.379,7.665 C75.299,6.363 76.524,5.097 78.059,3.870 C78.902,3.180 79.822,2.530 80.819,1.915 C79.362,1.915 78.174,2.108 77.254,2.490 C76.717,2.645 76.179,2.893 75.644,3.238 C75.107,3.583 74.494,3.985 73.804,4.445 C73.037,5.060 72.269,5.750 71.504,6.515 C70.507,7.435 69.509,8.510 68.514,9.735 C67.287,11.270 66.099,12.917 64.949,14.680 C63.569,16.750 62.342,18.820 61.269,20.890 C60.349,22.730 59.582,24.455 58.969,26.065 C58.584,27.140 58.354,28.040 58.279,28.768 C58.202,29.497 58.279,30.167 58.509,30.780 C58.662,31.087 58.854,31.395 59.084,31.700 C59.544,32.238 60.079,32.582 60.694,32.735 C60.924,32.812 61.211,32.850 61.557,32.850 C61.901,32.850 62.264,32.812 62.649,32.735 C63.644,32.352 64.776,31.663 66.042,30.665 C67.306,29.670 68.399,28.520 69.319,27.215 C69.779,26.603 70.162,26.027 70.469,25.490 C70.774,24.955 71.004,24.418 71.159,23.880 C71.619,22.655 71.849,21.580 71.849,20.660 C71.772,20.277 71.657,20.010 71.504,19.855 C71.119,19.473 70.544,19.395 69.779,19.625 C69.319,19.855 68.897,20.200 68.514,20.660 L67.939,21.350 L67.364,22.385 C67.057,23.152 66.789,24.035 66.559,25.030 L64.949,25.835 C64.412,26.065 63.952,26.335 63.569,26.640 C62.879,27.178 62.149,27.752 61.384,28.365 C61.614,27.445 61.862,26.603 62.131,25.835 C62.399,25.070 62.687,24.360 62.994,23.708 C63.299,23.057 63.664,22.425 64.086,21.810 C64.507,21.198 64.872,20.700 65.179,20.315 C66.559,18.860 68.014,17.977 69.549,17.670 C69.932,17.595 70.257,17.555 70.527,17.555 C70.794,17.555 71.044,17.575 71.274,17.613 C71.504,17.652 71.694,17.710 71.849,17.785 C72.154,17.940 72.384,18.130 72.539,18.360 C72.692,18.590 72.807,18.783 72.884,18.935 C73.037,19.320 73.074,19.817 72.999,20.430 C72.922,21.045 72.807,21.735 72.654,22.500 C72.424,23.267 72.117,24.035 71.734,24.800 L71.734,24.800 ZM79.151,4.503 C78.422,5.078 77.752,5.653 77.139,6.228 C76.524,6.803 76.027,7.340 75.644,7.838 C75.259,8.337 74.954,8.778 74.724,9.160 C74.494,9.545 74.302,9.890 74.149,10.195 C73.764,11.115 73.649,11.845 73.804,12.380 C73.804,12.610 73.919,12.802 74.149,12.955 C74.684,13.262 75.317,13.262 76.046,12.955 C76.774,12.650 77.522,11.998 78.289,11.000 C78.672,10.540 78.979,10.042 79.209,9.505 C79.592,8.893 79.956,8.165 80.302,7.320 C80.646,6.478 80.914,5.710 81.107,5.020 C81.297,4.330 81.432,3.640 81.509,2.950 C80.664,3.410 79.879,3.928 79.151,4.503 ZM51.954,17.670 L52.529,17.785 C51.839,19.090 51.109,20.240 50.344,21.235 C49.729,22.155 49.039,22.960 48.274,23.650 C47.659,24.265 47.084,24.762 46.549,25.145 C45.552,25.835 44.632,26.180 43.789,26.180 L43.214,26.065 C42.677,25.990 42.294,25.835 42.064,25.605 C41.987,25.452 41.909,25.260 41.834,25.030 L41.834,24.570 L41.834,23.650 C41.297,24.188 40.759,24.648 40.224,25.030 C39.917,25.260 39.534,25.490 39.074,25.720 C38.154,26.180 37.309,26.295 36.544,26.065 C36.237,25.912 36.007,25.720 35.854,25.490 L35.624,25.145 L35.509,24.685 C35.509,24.455 35.509,24.150 35.509,23.765 C35.509,23.230 35.547,22.540 35.624,21.695 C34.704,22.615 33.917,23.382 33.266,23.995 C32.614,24.610 32.019,25.070 31.484,25.375 C30.334,26.065 29.184,26.410 28.034,26.410 C27.574,26.410 27.171,26.353 26.827,26.238 C26.481,26.123 26.174,25.950 25.906,25.720 C25.637,25.490 25.389,25.222 25.159,24.915 C24.699,24.150 24.622,22.1000 24.929,21.465 C25.004,21.005 25.197,20.470 25.504,19.855 C26.039,18.705 26.654,17.517 27.344,16.290 L24.929,16.865 C23.854,18.475 22.859,19.855 21.939,21.005 C21.249,21.925 20.519,22.770 19.754,23.535 C19.139,24.073 18.604,24.513 18.144,24.858 C17.684,25.203 17.262,25.472 16.879,25.663 C16.494,25.855 16.112,25.990 15.729,26.065 C15.344,26.143 14.999,26.180 14.694,26.180 C14.387,26.180 14.119,26.143 13.889,26.065 C13.659,25.990 13.447,25.875 13.256,25.720 C13.064,25.567 12.911,25.415 12.796,25.260 C12.681,25.107 12.567,24.897 12.451,24.628 C12.336,24.360 12.279,24.110 12.279,23.880 C12.279,23.650 12.297,23.305 12.336,22.845 C12.374,22.385 12.451,21.868 12.567,21.293 C12.681,20.718 12.892,20.125 13.199,19.510 C13.889,17.900 14.847,16.330 16.074,14.795 C16.687,13.953 17.339,13.205 18.029,12.553 C18.719,11.902 19.409,11.327 20.099,10.828 C20.789,10.330 21.402,9.947 21.939,9.678 C22.474,9.410 22.974,9.238 23.434,9.160 C24.277,8.930 25.004,8.930 25.619,9.160 C25.924,9.315 26.194,9.545 26.424,9.850 C26.499,10.005 26.577,10.157 26.654,10.310 C26.807,10.695 26.844,11.155 26.769,11.690 C26.769,11.998 26.729,12.265 26.654,12.495 L26.194,13.875 L25.504,15.600 C26.039,15.525 26.539,15.390 26.999,15.198 C27.459,15.007 27.957,14.757 28.494,14.450 C29.184,13.990 29.912,13.415 30.679,12.725 L33.669,10.195 C34.204,9.735 34.704,9.430 35.164,9.275 C35.624,9.123 36.007,9.008 36.314,8.930 C36.619,8.855 36.946,8.815 37.291,8.815 C37.636,8.815 37.999,8.930 38.384,9.160 C39.227,9.775 39.534,10.655 39.304,11.805 C39.149,12.342 38.882,12.917 38.499,13.530 L38.039,14.105 C37.272,15.102 36.582,15.332 35.969,14.795 C35.739,14.643 35.624,14.450 35.624,14.220 C35.547,13.530 35.814,12.955 36.429,12.495 L36.774,12.265 L37.349,12.035 C37.579,11.960 37.847,11.920 38.154,11.920 L38.269,11.460 C38.192,11.155 38.097,10.943 37.981,10.828 C37.866,10.713 37.732,10.655 37.579,10.655 C37.424,10.655 37.252,10.695 37.061,10.770 C36.869,10.847 36.602,11.020 36.256,11.288 C35.912,11.557 35.469,11.920 34.934,12.380 C33.707,13.530 32.594,14.910 31.599,16.520 C31.139,17.210 30.736,17.843 30.391,18.418 C30.046,18.993 29.797,19.510 29.644,19.970 C29.489,20.430 29.374,20.852 29.299,21.235 C29.144,22.003 29.087,22.558 29.127,22.903 C29.164,23.248 29.299,23.460 29.529,23.535 C29.834,23.843 30.334,23.920 31.024,23.765 C31.254,23.690 31.484,23.593 31.714,23.478 C31.944,23.363 32.249,23.190 32.634,22.960 C33.169,22.577 33.707,22.080 34.244,21.465 C35.087,20.622 36.159,19.358 37.464,17.670 C39.764,14.987 41.182,13.340 41.719,12.725 C42.484,11.805 43.214,11.078 43.904,10.540 C44.439,10.157 44.862,9.890 45.169,9.735 C46.012,9.200 46.817,8.930 47.584,8.930 L48.274,9.045 C48.504,9.045 48.772,9.103 49.079,9.218 C49.384,9.333 49.769,9.545 50.229,9.850 L50.804,9.045 L54.024,9.045 L48.964,17.670 L46.894,21.695 L46.779,22.155 C46.779,22.233 46.817,22.310 46.894,22.385 C46.969,22.462 47.047,22.500 47.124,22.500 C47.429,22.577 47.699,22.500 47.929,22.270 L48.389,21.925 C48.694,21.620 49.039,21.235 49.424,20.775 C50.189,19.855 51.034,18.820 51.954,17.670 L51.954,17.670 ZM23.779,16.750 C23.319,16.520 22.934,16.310 22.629,16.118 C22.322,15.927 22.014,15.697 21.709,15.428 C21.402,15.160 21.094,14.795 20.789,14.335 C20.099,15.180 19.466,16.022 18.891,16.865 C18.316,17.710 17.874,18.437 17.569,19.050 C17.339,19.588 17.147,20.067 16.994,20.488 C16.839,20.910 16.744,21.275 16.706,21.580 C16.667,21.888 16.724,22.155 16.879,22.385 C17.262,22.1000 17.874,23.115 18.719,22.730 L19.179,22.500 L19.754,22.040 C20.059,21.735 20.444,21.275 20.904,20.660 C21.669,19.588 22.629,18.285 23.779,16.750 L23.779,16.750 ZM25.389,11.805 C25.389,11.500 25.254,11.212 24.986,10.943 C24.717,10.675 24.239,10.655 23.549,10.885 L23.089,11.230 L22.629,11.575 C21.784,12.342 21.632,13.185 22.169,14.105 L22.744,14.795 L23.319,15.140 C23.624,15.217 23.969,15.332 24.354,15.485 L25.044,14.105 C25.119,13.800 25.197,13.530 25.274,13.300 C25.349,13.070 25.389,12.840 25.389,12.610 L25.389,11.805 ZM48.504,12.265 L48.734,11.805 L48.849,11.230 C48.849,11.078 48.752,10.943 48.561,10.828 C48.369,10.713 48.119,10.695 47.814,10.770 L47.239,11.115 C47.009,11.270 46.664,11.538 46.204,11.920 C45.667,12.457 45.129,13.032 44.594,13.645 C43.904,14.413 43.271,15.198 42.697,16.003 C42.121,16.808 41.642,17.537 41.259,18.188 C40.874,18.840 40.569,19.435 40.339,19.970 L39.994,21.005 L39.879,21.580 C39.879,21.965 39.974,22.290 40.166,22.558 C40.357,22.827 40.607,22.903 40.914,22.788 C41.219,22.673 41.489,22.540 41.719,22.385 L42.179,21.925 C42.409,21.695 42.639,21.447 42.869,21.178 C43.099,20.910 43.404,20.470 43.789,19.855 L48.504,12.265 Z\" />\r\n\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"mobile\">\r\n\t\t\t\t<div class=\"mobile__container\">\r\n\t\t\t\t\t<div class=\"mobile_image\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"mobile\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"mobile_content\">\r\n\t\t\t\t\t\t<div class=\"mobile_content_title\">\r\n\t\t\t\t\t\t\t<h1 class=\"main_title\" data-lang=\"text_translate-8\">Mobile App Development </h1>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"mobile_content_text main_text\" data-lang=\"text_translate-11\">Lorem ipsum dolor sit amet\r\n\t\t\t\t\t\t\tconsectetur adipisicing elit.\r\n\t\t\t\t\t\t\tEsse ut est voluptatem nihil. Sapiente incidunt dicta neque exercitationem, hic minima reiciendis\r\n\t\t\t\t\t\t\tdoloribus placeat dolorem eveniet animi iste provident impedit ducimus vero quis tempora officiis\r\n\t\t\t\t\t\t\tquidem architecto perspiciatis? Ut fugit reprehenderit ab fuga quo cum assumenda voluptatum animi\r\n\t\t\t\t\t\t\tsimilique facilis ea dignissimos, expedita nihil illum, ullam perspiciatis? Molestiae, minima ullam\r\n\t\t\t\t\t\t\tducimus rem quo, sequi, repellat a similique dolor exercitationem sint maxime aliquam pariatur\r\n\t\t\t\t\t\t\tobcaecati numquam accusamus! Vitae, molestiae vel nemo voluptates repellat enim maiores laboriosam\r\n\t\t\t\t\t\t\tvoluptatem cumque, minus exercitationem minima beatae nihil placeat, consectetur ipsum. Nisi\r\n\t\t\t\t\t\t\tdolorem similique error tenetur harum explicabo, sed rerum?\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"mobile_content_button\">\r\n\t\t\t\t\t\t\t<button class=\"read_more\" data-lang=\"text_translate-42\">Read More</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"web\">\r\n\t\t\t\t<div class=\"web__container\">\r\n\t\t\t\t\t<div class=\"web_content\">\r\n\t\t\t\t\t\t<div class=\"web_content_title\">\r\n\t\t\t\t\t\t\t<h1 class=\"main_title\" data-lang=\"text_translate-9\">Web Development Services copy</h1>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"web_content_text main_text\" data-lang=\"text_translate-20\">Lorem ipsum dolor sit amet\r\n\t\t\t\t\t\t\tconsectetur adipisicing elit.\r\n\t\t\t\t\t\t\tEsse ut est voluptatem nihil. Sapiente incidunt dicta neque exercitationem, hic minima reiciendis\r\n\t\t\t\t\t\t\tdoloribus placeat dolorem eveniet animi iste provident impedit ducimus vero quis tempora officiis\r\n\t\t\t\t\t\t\tquidem architecto perspiciatis? Ut fugit reprehenderit ab fuga quo cum assumenda voluptatum animi\r\n\t\t\t\t\t\t\tsimilique facilis ea dignissimos, expedita nihil illum, ullam perspiciatis? Molestiae, minima ullam\r\n\t\t\t\t\t\t\tducimus rem quo, sequi, repellat a similique dolor exercitationem sint maxime aliquam pariatur\r\n\t\t\t\t\t\t\tobcaecati numquam accusamus! Vitae, molestiae vel nemo voluptates repellat enim maiores laboriosam\r\n\t\t\t\t\t\t\tvoluptatem cumque, minus exercitationem minima beatae nihil placeat, consectetur ipsum. Nisi\r\n\t\t\t\t\t\t\tdolorem similique error tenetur harum explicabo, sed rerum?\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"web_content_button\">\r\n\t\t\t\t\t\t\t<button class=\"read_more\" data-lang=\"text_translate-42\">Read More</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"web_image\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"tablet\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"prodcut\">\r\n\t\t\t\t<div class=\"prodcut__container\">\r\n\t\t\t\t\t<div class=\"prodcut_image\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"design\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"prodcut_content\">\r\n\t\t\t\t\t\t<div class=\"prodcut_content_title\">\r\n\t\t\t\t\t\t\t<h1 class=\"main_title\" data-lang=\"text_translate-10\">Prodcut design</h1>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"prodcut_content_text main_text\" data-lang=\"text_translate-21\">Lorem ipsum dolor sit amet\r\n\t\t\t\t\t\t\tconsectetur adipisicing elit.\r\n\t\t\t\t\t\t\tEsse ut est voluptatem nihil. Sapiente incidunt dicta neque exercitationem, hic minima reiciendis\r\n\t\t\t\t\t\t\tdoloribus placeat dolorem eveniet animi iste provident impedit ducimus vero quis tempora officiis\r\n\t\t\t\t\t\t\tquidem architecto perspiciatis? Ut fugit reprehenderit ab fuga quo cum assumenda voluptatum animi\r\n\t\t\t\t\t\t\tsimilique facilis ea dignissimos, expedita nihil illum, ullam perspiciatis? Molestiae, minima ullam\r\n\t\t\t\t\t\t\tducimus rem quo, sequi, repellat a similique dolor exercitationem sint maxime aliquam pariatur\r\n\t\t\t\t\t\t\tobcaecati numquam accusamus! Vitae, molestiae vel nemo voluptates repellat enim maiores laboriosam\r\n\t\t\t\t\t\t\tvoluptatem cumque, minus exercitationem minima beatae nihil placeat, consectetur ipsum. Nisi\r\n\t\t\t\t\t\t\tdolorem similique error tenetur harum explicabo, sed rerum?\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"prodcut_content_button\">\r\n\t\t\t\t\t\t\t<button class=\"read_more\" data-lang=\"text_translate-42\">Read More</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"timeline_wrapper\">\r\n\t\t\t\t<div class=\"timeline__container\">\r\n\t\t\t\t\t<div class=\"timeline_block\">\r\n\t\t\t\t\t\t<div class=\"timeline_block_title\" data-lang=\"text_translate-12\">\r\n\t\t\t\t\t\t\tLorem ipsum dolor sit amet consectetur adipisicing elit?\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ul class=\"timeline\">\r\n\t\t\t\t\t\t\t<li class=\"timeline_event\">\r\n\t\t\t\t\t\t\t\t<div class=\"timeline_event_icon\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"timeline_event_icon_in inView\">1</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"timeline_event_content\">\r\n\t\t\t\t\t\t\t\t\t<h1 class=\"clickView white\" data-lang=\"text_translate-13\">Javascript Development</h1>\r\n\t\t\t\t\t\t\t\t\t<p class=\"closeView openView\" data-lang=\"text_translate-18\">Complain Management System is a\r\n\t\t\t\t\t\t\t\t\t\tplatform which is double\r\n\t\t\t\t\t\t\t\t\t\timplied between customer and seller. It helps the seller to keep track of all the\r\n\t\t\t\t\t\t\t\t\t\tcomplaints lodged by the customer in respect of the product.\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"timeline_event\">\r\n\t\t\t\t\t\t\t\t<div class=\"timeline_event_icon\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"timeline_event_icon_in\">2</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"timeline_event_content\">\r\n\t\t\t\t\t\t\t\t\t<h1 class=\"clickView\" data-lang=\"text_translate-14\">How can I uninstall Dummy Content?</h1>\r\n\t\t\t\t\t\t\t\t\t<p class=\"closeView\" data-lang=\"text_translate-18\">Complain Management System is a platform\r\n\t\t\t\t\t\t\t\t\t\twhich is double implied between\r\n\t\t\t\t\t\t\t\t\t\tcustomer and seller. It helps the seller to keep track of all the complaints lodged by the\r\n\t\t\t\t\t\t\t\t\t\tcustomer in respect of the product.\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"timeline_event\">\r\n\t\t\t\t\t\t\t\t<div class=\"timeline_event_icon\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"timeline_event_icon_in\">3</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"timeline_event_content\">\r\n\t\t\t\t\t\t\t\t\t<h1 class=\"clickView\" data-lang=\"text_translate-15\">Where can I download earlier versions?\r\n\t\t\t\t\t\t\t\t\t</h1>\r\n\t\t\t\t\t\t\t\t\t<p class=\"closeView\" data-lang=\"text_translate-18\">Complain Management System is a platform\r\n\t\t\t\t\t\t\t\t\t\twhich is double implie Lorem\r\n\t\t\t\t\t\t\t\t\t\tipsum dolor sit amet\r\n\t\t\t\t\t\t\t\t\t\tconsectetur adipisicing elit. Id veniam, aliquid neque cupiditate repellat iure ipsam\r\n\t\t\t\t\t\t\t\t\t\tearum dolorem laudantium atque debitis doloribus ratione rem sint facere est et sed\r\n\t\t\t\t\t\t\t\t\t\tdolorum.\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"timeline_event\">\r\n\t\t\t\t\t\t\t\t<div class=\"timeline_event_icon\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"timeline_event_icon_in\">4</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"timeline_event_content\">\r\n\t\t\t\t\t\t\t\t\t<h1 class=\"clickView\" data-lang=\"text_translate-16\">Under what license are Regular Labs\r\n\t\t\t\t\t\t\t\t\t\textensions released? </h1>\r\n\t\t\t\t\t\t\t\t\t<p class=\"closeView\" data-lang=\"text_translate-18\">Complain Management System is a platform\r\n\t\t\t\t\t\t\t\t\t\twhich is double implie Lorem\r\n\t\t\t\t\t\t\t\t\t\tipsum dolor sit amet\r\n\t\t\t\t\t\t\t\t\t\tconsectetur adipisicing elit. Id veniam, aliquid neque cupiditate repellat iure ipsam\r\n\t\t\t\t\t\t\t\t\t\tearum dolorem laudantium atque debitis doloribus ratione rem sint facere est et sed\r\n\t\t\t\t\t\t\t\t\t\tdolorum.\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"timeline_event\">\r\n\t\t\t\t\t\t\t\t<div class=\"timeline_event_icon\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"timeline_event_icon_in\">5</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"timeline_event_content\">\r\n\t\t\t\t\t\t\t\t\t<h1 class=\"clickView\" data-lang=\"text_translate-17\">Do I still need the NoNumber Framework\r\n\t\t\t\t\t\t\t\t\t\tplugin?</h1>\r\n\t\t\t\t\t\t\t\t\t<p class=\"closeView\" data-lang=\"text_translate-18\">Complain Management System is a platform\r\n\t\t\t\t\t\t\t\t\t\twhich is double implie Lorem\r\n\t\t\t\t\t\t\t\t\t\tipsum dolor sit amet\r\n\t\t\t\t\t\t\t\t\t\tconsectetur adipisicing elit. Id veniam, aliquid neque cupiditate repellat iure ipsam\r\n\t\t\t\t\t\t\t\t\t\tearum dolorem laudantium atque debitis doloribus ratione rem sint facere est et sed\r\n\t\t\t\t\t\t\t\t\t\tdolorum.\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"timeline_image\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"timeline\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"customer\">\r\n\t\t\t\t<div class=\"customer__container\">\r\n\t\t\t\t\t<div class=\"customer_title\" data-lang=\"text_translate-19\">Words from our customer</div>\r\n\t\t\t\t\t<div class=\"customer_slider_wrapper\">\r\n\t\t\t\t\t\t<div class=\"customer_slider\">\r\n\t\t\t\t\t\t\t<div class=\"customer_slider_title\">\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"customer_slider_person\">\r\n\t\t\t\t\t\t\t\t<div class=\"customer_slider_person_avatar\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"customer_avatar \">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"avatar\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"customer_slider_person_infa\">\r\n\t\t\t\t\t\t\t\t\t<h1></h1>\r\n\t\t\t\t\t\t\t\t\t<h2></h2>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"customer_slider_controlled\">\r\n\t\t\t\t\t\t\t<div class=\"customer_pre\">\r\n\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"11px\"\r\n\t\t\t\t\t\t\t\t\theight=\"18px\">\r\n\t\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" fill=\"rgb(0, 99, 255)\"\r\n\t\t\t\t\t\t\t\t\t\td=\"M10.615,2.193 C10.880,1.943 11.013,1.639 11.013,1.282 C11.013,0.925 10.880,0.621 10.615,0.371 C10.351,0.121 10.029,-0.004 9.650,-0.004 C9.272,-0.004 8.950,0.121 8.684,0.371 L0.451,8.140 C-0.154,8.710 -0.136,9.299 0.508,9.907 L8.684,17.621 C8.950,17.871 9.272,17.996 9.650,17.996 C10.029,17.996 10.351,17.871 10.615,17.621 C10.880,17.371 11.013,17.067 11.013,16.711 C11.013,16.353 10.880,16.050 10.615,15.800 L3.404,8.997 L10.615,2.193 Z\" />\r\n\t\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"customer_active\">\r\n\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"customer_next\">\r\n\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"11px\"\r\n\t\t\t\t\t\t\t\t\theight=\"18px\">\r\n\t\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" fill=\"rgb(0, 99, 255)\"\r\n\t\t\t\t\t\t\t\t\t\td=\"M0.385,15.806 C0.119,16.057 -0.013,16.360 -0.013,16.717 C-0.013,17.074 0.119,17.378 0.385,17.627 C0.649,17.878 0.971,18.003 1.350,18.003 C1.728,18.003 2.050,17.878 2.315,17.627 L10.549,9.860 C11.154,9.289 11.136,8.700 10.492,8.092 L2.315,0.377 C2.050,0.128 1.728,0.003 1.350,0.003 C0.971,0.003 0.649,0.128 0.385,0.377 C0.119,0.628 -0.013,0.932 -0.013,1.288 C-0.013,1.646 0.119,1.950 0.385,2.199 L7.596,9.003 L0.385,15.806 Z\" />\r\n\t\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"counter\">\r\n\t\t\t\t<div class=\"counter__container\">\r\n\t\t\t\t\t<div class=\"count_block happy\">\r\n\t\t\t\t\t\t<div class=\"count_block_number\">72+</div>\r\n\t\t\t\t\t\t<div class=\"count_block_name\" data-lang=\"text_translate-26\">Happy Clients</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"count_block project\">\r\n\t\t\t\t\t\t<div class=\"count_block_number\">312+</div>\r\n\t\t\t\t\t\t<div class=\"count_block_name\" data-lang=\"text_translate-27\">Project lunched</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"count_block startups\">\r\n\t\t\t\t\t\t<div class=\"count_block_number\">102+</div>\r\n\t\t\t\t\t\t<div class=\"count_block_name\" data-lang=\"text_translate-28\">Startups</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"count_block team\">\r\n\t\t\t\t\t\t<div class=\"count_block_number\">32+</div>\r\n\t\t\t\t\t\t<div class=\"count_block_name\" data-lang=\"text_translate-30\">Team Member</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"news\">\r\n\t\t\t\t<div class=\"news__container\">\r\n\t\t\t\t\t<div class=\"news_blockOne\">\r\n\t\t\t\t\t\t<div class=\"news_head\">\r\n\t\t\t\t\t\t\t<div class=\"news_head_title\" data-lang=\"text_translate-29\">News/ Blogs</div>\r\n\t\t\t\t\t\t\t<div class=\"news_head_text\" data-lang=\"text_translate-32\">Lorem ipsum dolor sit amet consectetur\r\n\t\t\t\t\t\t\t\tadipisicing elit. Placeat\r\n\t\t\t\t\t\t\t\tofficiis perspiciatis explicabo laudantium architecto, libero doloremque iusto, amet ducimus\r\n\t\t\t\t\t\t\t\timpedit animi voluptates, quasi fugit quidem nesciunt optio deserunt suscipit quisquam!\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"news_card card-1\">\r\n\t\t\t\t\t\t\t<div class=\"news_card_image card-1_image\">\r\n\t\t\t\t\t\t\t\t<img class=\"card_image\" src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"photo\">\r\n\t\t\t\t\t\t\t\t<div class=\"card_image_hover_data\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"card_image_hover_data_number\">23</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"card_image_hover_data_month\">Mar</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"card_image_hover card-1_hover \">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card_image_hover_share\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"card_share\">\r\n\t\t\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n\t\t\t\t\t\t\t\t\t\t\t\twidth=\"12px\" height=\"11px\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" fill=\"rgb(12, 12, 12)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\td=\"M7.009,0.469 L7.009,3.126 C3.197,3.667 0.863,6.115 0.009,10.469 C0.842,9.282 1.806,8.418 2.900,7.875 C3.994,7.334 5.363,7.063 7.009,7.063 L7.009,9.813 L12.009,5.219 L7.009,0.469 Z\" />\r\n\t\t\t\t\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t\t\t\t\t\tShare\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"card_image_hover_view\">\r\n\t\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n\t\t\t\t\t\t\t\t\t\t\twidth=\"14px\" height=\"11px\">\r\n\t\t\t\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" fill=\"rgb(255, 255, 255)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\td=\"M0.009,5.469 C0.572,6.886 1.488,8.027 2.759,8.891 C4.030,9.756 5.447,10.188 7.009,10.188 C8.572,10.188 9.988,9.756 11.259,8.891 C12.530,8.027 13.447,6.886 14.009,5.469 C13.447,4.053 12.530,2.912 11.259,2.047 C9.988,1.183 8.572,0.751 7.009,0.751 C5.447,0.751 4.030,1.183 2.759,2.047 C1.488,2.912 0.572,4.053 0.009,5.469 L0.009,5.469 ZM3.822,5.469 C3.822,4.615 4.134,3.876 4.759,3.250 C5.384,2.626 6.134,2.313 7.009,2.313 C7.884,2.313 8.634,2.626 9.259,3.250 C9.884,3.876 10.197,4.615 10.197,5.469 C10.197,6.324 9.884,7.063 9.259,7.688 C8.634,8.313 7.884,8.625 7.009,8.625 C6.134,8.625 5.384,8.313 4.759,7.688 C4.134,7.063 3.822,6.324 3.822,5.469 ZM5.103,5.469 C5.103,5.990 5.291,6.433 5.666,6.797 C6.041,7.162 6.488,7.344 7.009,7.344 C7.530,7.344 7.978,7.162 8.353,6.797 C8.728,6.433 8.916,5.990 8.916,5.469 C8.916,4.949 8.728,4.506 8.353,4.141 C7.978,3.777 7.530,3.594 7.009,3.594 C6.488,3.594 6.041,3.777 5.666,4.141 C5.291,4.506 5.103,4.949 5.103,5.469 Z\" />\r\n\t\t\t\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"card_image_hover_view_count\">200</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"news_card_content card-1_content\">\r\n\t\t\t\t\t\t\t\t<div class=\"news_card_content_hash-tag\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">#PRODUCT</a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">#DESIGN</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"news_card_content_title\" data-lang=\"text_translate-31\">\r\n\t\t\t\t\t\t\t\t\tWhat is Product design?\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"news_card_content_text\" data-lang=\"text_translate-33\">\r\n\t\t\t\t\t\t\t\t\tLorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus aperiam corrupti voluptas\r\n\t\t\t\t\t\t\t\t\tcumque ex! Quidem eaque recusandae rem ullam, dolorem pariatur! Dolore, ad iste. Dicta alias\r\n\t\t\t\t\t\t\t\t\todit quisquam qui, labore nihil numquam aliquam dolore magnam quod laudantium accusantium\r\n\t\t\t\t\t\t\t\t\tassumenda molestias consequuntur nulla enim nesciunt sit omnis voluptatum tempore animi\r\n\t\t\t\t\t\t\t\t\tducimus.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"news_card_content_button\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"read_more\" data-lang=\"text_translate-42\">Read More</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"news_blockTwo\">\r\n\t\t\t\t\t\t<div class=\"news_card card-2\">\r\n\t\t\t\t\t\t\t<div class=\"news_card_image\">\r\n\t\t\t\t\t\t\t\t<img class=\"card_image\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"photo\">\r\n\t\t\t\t\t\t\t\t<div class=\"card_image_hover_data\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"card_image_hover_data_number\">23</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"card_image_hover_data_month\">Mar</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"card_image_hover card-2_hover\">\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"card_image_hover_share\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"card_share\"><svg xmlns=\"http://www.w3.org/2000/svg\"\r\n\t\t\t\t\t\t\t\t\t\t\t\txmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"12px\" height=\"11px\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" fill=\"rgb(12, 12, 12)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\td=\"M7.009,0.469 L7.009,3.126 C3.197,3.667 0.863,6.115 0.009,10.469 C0.842,9.282 1.806,8.418 2.900,7.875 C3.994,7.334 5.363,7.063 7.009,7.063 L7.009,9.813 L12.009,5.219 L7.009,0.469 Z\" />\r\n\t\t\t\t\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t\t\t\t\t\tShare\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"card_image_hover_view\">\r\n\t\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n\t\t\t\t\t\t\t\t\t\t\twidth=\"14px\" height=\"11px\">\r\n\t\t\t\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" fill=\"rgb(255, 255, 255)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\td=\"M0.009,5.469 C0.572,6.886 1.488,8.027 2.759,8.891 C4.030,9.756 5.447,10.188 7.009,10.188 C8.572,10.188 9.988,9.756 11.259,8.891 C12.530,8.027 13.447,6.886 14.009,5.469 C13.447,4.053 12.530,2.912 11.259,2.047 C9.988,1.183 8.572,0.751 7.009,0.751 C5.447,0.751 4.030,1.183 2.759,2.047 C1.488,2.912 0.572,4.053 0.009,5.469 L0.009,5.469 ZM3.822,5.469 C3.822,4.615 4.134,3.876 4.759,3.250 C5.384,2.626 6.134,2.313 7.009,2.313 C7.884,2.313 8.634,2.626 9.259,3.250 C9.884,3.876 10.197,4.615 10.197,5.469 C10.197,6.324 9.884,7.063 9.259,7.688 C8.634,8.313 7.884,8.625 7.009,8.625 C6.134,8.625 5.384,8.313 4.759,7.688 C4.134,7.063 3.822,6.324 3.822,5.469 ZM5.103,5.469 C5.103,5.990 5.291,6.433 5.666,6.797 C6.041,7.162 6.488,7.344 7.009,7.344 C7.530,7.344 7.978,7.162 8.353,6.797 C8.728,6.433 8.916,5.990 8.916,5.469 C8.916,4.949 8.728,4.506 8.353,4.141 C7.978,3.777 7.530,3.594 7.009,3.594 C6.488,3.594 6.041,3.777 5.666,4.141 C5.291,4.506 5.103,4.949 5.103,5.469 Z\" />\r\n\t\t\t\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"card_image_hover_view_count\">300</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"news_card_content\">\r\n\t\t\t\t\t\t\t\t<div class=\"news_card_content_hash-tag\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">#PRODUCT</a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">#DESIGN</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"news_card_content_title\" data-lang=\"text_translate-31\">\r\n\t\t\t\t\t\t\t\t\tWhat is Product design?\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"news_card_content_text\" data-lang=\"text_translate-34\">\r\n\t\t\t\t\t\t\t\t\tLorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus aperiam corrupti voluptas\r\n\t\t\t\t\t\t\t\t\tcumque ex! Quidem eaque recusandae rem ullam, dolorem pariatur! Dolore, ad iste. Dicta alias\r\n\t\t\t\t\t\t\t\t\todit quisquam qui, labore nihil numquam aliquam dolore magnam quod laudantium accusantium\r\n\t\t\t\t\t\t\t\t\tassumenda molestias consequuntur nulla enim nesciunt sit omnis voluptatum tempore animi\r\n\t\t\t\t\t\t\t\t\tducimus.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"news_card_content_button\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"read_more\" data-lang=\"text_translate-42\">Read More</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"news_card card-3\">\r\n\t\t\t\t\t\t\t<div class=\"news_card_image\">\r\n\t\t\t\t\t\t\t\t<img class=\"card_image\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"photo\">\r\n\t\t\t\t\t\t\t\t<div class=\"card_image_hover_data\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"card_image_hover_data_number\">23</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"card_image_hover_data_month\">Mar</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"card_image_hover card-3_hover\">\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"card_image_hover_share\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"card_share\"><svg xmlns=\"http://www.w3.org/2000/svg\"\r\n\t\t\t\t\t\t\t\t\t\t\t\txmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"12px\" height=\"11px\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" fill=\"rgb(12, 12, 12)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\td=\"M7.009,0.469 L7.009,3.126 C3.197,3.667 0.863,6.115 0.009,10.469 C0.842,9.282 1.806,8.418 2.900,7.875 C3.994,7.334 5.363,7.063 7.009,7.063 L7.009,9.813 L12.009,5.219 L7.009,0.469 Z\" />\r\n\t\t\t\t\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t\t\t\t\t\tShare\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"card_image_hover_view\">\r\n\t\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n\t\t\t\t\t\t\t\t\t\t\twidth=\"14px\" height=\"11px\">\r\n\t\t\t\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" fill=\"rgb(255, 255, 255)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\td=\"M0.009,5.469 C0.572,6.886 1.488,8.027 2.759,8.891 C4.030,9.756 5.447,10.188 7.009,10.188 C8.572,10.188 9.988,9.756 11.259,8.891 C12.530,8.027 13.447,6.886 14.009,5.469 C13.447,4.053 12.530,2.912 11.259,2.047 C9.988,1.183 8.572,0.751 7.009,0.751 C5.447,0.751 4.030,1.183 2.759,2.047 C1.488,2.912 0.572,4.053 0.009,5.469 L0.009,5.469 ZM3.822,5.469 C3.822,4.615 4.134,3.876 4.759,3.250 C5.384,2.626 6.134,2.313 7.009,2.313 C7.884,2.313 8.634,2.626 9.259,3.250 C9.884,3.876 10.197,4.615 10.197,5.469 C10.197,6.324 9.884,7.063 9.259,7.688 C8.634,8.313 7.884,8.625 7.009,8.625 C6.134,8.625 5.384,8.313 4.759,7.688 C4.134,7.063 3.822,6.324 3.822,5.469 ZM5.103,5.469 C5.103,5.990 5.291,6.433 5.666,6.797 C6.041,7.162 6.488,7.344 7.009,7.344 C7.530,7.344 7.978,7.162 8.353,6.797 C8.728,6.433 8.916,5.990 8.916,5.469 C8.916,4.949 8.728,4.506 8.353,4.141 C7.978,3.777 7.530,3.594 7.009,3.594 C6.488,3.594 6.041,3.777 5.666,4.141 C5.291,4.506 5.103,4.949 5.103,5.469 Z\" />\r\n\t\t\t\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"card_image_hover_view_count\">400</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"news_card_content\">\r\n\t\t\t\t\t\t\t\t<div class=\"news_card_content_hash-tag\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">#PRODUCT</a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\">#DESIGN</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"news_card_content_title\" data-lang=\"text_translate-31\">\r\n\t\t\t\t\t\t\t\t\tWhat is Product design?\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"news_card_content_text\" data-lang=\"text_translate-35\">\r\n\t\t\t\t\t\t\t\t\tLorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus aperiam corrupti voluptas\r\n\t\t\t\t\t\t\t\t\tcumque ex! Quidem eaque recusandae rem ullam, dolorem pariatur! Dolore, ad iste. Dicta alias\r\n\t\t\t\t\t\t\t\t\todit quisquam qui, labore nihil numquam aliquam dolore magnam quod laudantium accusantium\r\n\t\t\t\t\t\t\t\t\tassumenda molestias consequuntur nulla enim nesciunt sit omnis voluptatum tempore animi\r\n\t\t\t\t\t\t\t\t\tducimus.\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"news_card_content_button\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"read_more\" data-lang=\"text_translate-42\">Read More</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</main>\r\n\t\t<footer class=\"footer\">\r\n\t\t\t<div class=\"footer__container\">\r\n\r\n\r\n\t\t\t\t<div class=\"footer_head\">\r\n\t\t\t\t\t<div class=\"footer_head_logo\">\r\n\t\t\t\t\t\tMS.\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<nav class=\"footer_head_nemu\">\r\n\t\t\t\t\t\t<ul class=\"footer_head_menu_list\">\r\n\t\t\t\t\t\t\t<li class=\"footer_head_menu_item\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"footer_head_menu_link\" data-lang=\"text_translate-36\">\r\n\t\t\t\t\t\t\t\t\tHome\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"footer_head_menu_item\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"footer_head_menu_link\" data-lang=\"text_translate-37\">\r\n\t\t\t\t\t\t\t\t\tFeatures\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"footer_head_menu_item\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"footer_head_menu_link\" data-lang=\"text_translate-38\">\r\n\t\t\t\t\t\t\t\t\tServices\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"footer_head_menu_item\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"footer_head_menu_link\" data-lang=\"text_translate-39\">\r\n\t\t\t\t\t\t\t\t\tTestimonials\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"footer_head_menu_item\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"footer_head_menu_link\" data-lang=\"text_translate-40\">\r\n\t\t\t\t\t\t\t\t\tPricing\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"footer_head_menu_item\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"footer_head_menu_link\" data-lang=\"text_translate-41\">\r\n\t\t\t\t\t\t\t\t\tContact\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</nav>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"footer_bottom\">\r\n\t\t\t\t\t<div class=\"footer_bottom_copyright\">\r\n\t\t\t\t\t\t© Mobiosolutions 2019, All Rights Reserved.\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"footer_bottom_social\">\r\n\t\t\t\t\t\t<div class=\"footer_social_ikon\">\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"7px\"\r\n\t\t\t\t\t\t\t\t\theight=\"15px\">\r\n\t\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" fill=\"rgb(255, 255, 255)\"\r\n\t\t\t\t\t\t\t\t\t\td=\"M6.449,7.274 L4.497,7.274 L4.497,14.266 L1.585,14.266 L1.585,7.274 L0.209,7.274 L0.209,4.810 L1.585,4.810 L1.585,3.210 C1.585,2.751 1.659,2.330 1.809,1.946 C2.001,1.445 2.294,1.055 2.689,0.778 C3.169,0.436 3.777,0.266 4.513,0.266 L6.673,0.282 L6.673,2.682 L5.105,2.682 C4.945,2.682 4.811,2.724 4.705,2.810 C4.566,2.927 4.497,3.108 4.497,3.354 L4.497,4.810 L6.705,4.810 L6.449,7.274 Z\" />\r\n\t\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"footer_social_ikon\">\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"15px\"\r\n\t\t\t\t\t\t\t\t\theight=\"15px\">\r\n\t\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" fill=\"rgb(255, 255, 255)\"\r\n\t\t\t\t\t\t\t\t\t\td=\"M14.449,10.346 C14.449,11.060 14.273,11.716 13.921,12.314 C13.569,12.911 13.094,13.386 12.497,13.738 C11.899,14.090 11.243,14.266 10.529,14.266 C9.782,14.266 9.094,14.074 8.465,13.690 C8.134,13.743 7.798,13.770 7.457,13.770 C6.283,13.770 5.190,13.471 4.177,12.874 C3.195,12.298 2.417,11.524 1.841,10.554 C1.254,9.540 0.961,8.447 0.961,7.274 C0.961,6.943 0.987,6.602 1.041,6.250 C0.657,5.620 0.459,4.938 0.449,4.202 C0.449,3.487 0.625,2.828 0.977,2.226 C1.329,1.623 1.806,1.146 2.409,0.794 C3.011,0.442 3.670,0.266 4.385,0.266 C5.131,0.266 5.819,0.463 6.449,0.858 C6.790,0.805 7.126,0.778 7.457,0.778 C8.630,0.778 9.723,1.071 10.737,1.658 C11.718,2.234 12.497,3.013 13.073,3.994 C13.659,5.007 13.953,6.100 13.953,7.274 C13.953,7.615 13.926,7.951 13.873,8.282 C14.267,8.922 14.459,9.610 14.449,10.346 L14.449,10.346 ZM10.961,8.890 C10.961,8.474 10.881,8.124 10.721,7.842 C10.561,7.559 10.339,7.325 10.057,7.138 C9.774,6.951 9.430,6.791 9.025,6.658 C8.619,6.525 8.171,6.404 7.681,6.297 C7.297,6.212 7.019,6.146 6.849,6.098 C6.678,6.050 6.510,5.983 6.345,5.898 C6.179,5.813 6.051,5.714 5.961,5.601 C5.870,5.490 5.825,5.353 5.825,5.193 C5.825,4.948 5.961,4.735 6.233,4.554 C6.505,4.372 6.865,4.282 7.313,4.282 C7.803,4.282 8.158,4.364 8.377,4.530 C8.595,4.695 8.779,4.932 8.929,5.242 C9.057,5.455 9.174,5.610 9.281,5.706 C9.387,5.802 9.553,5.850 9.777,5.850 C10.001,5.850 10.190,5.770 10.345,5.610 C10.499,5.450 10.577,5.263 10.577,5.049 C10.577,4.836 10.515,4.615 10.393,4.386 C10.270,4.156 10.078,3.941 9.817,3.738 C9.555,3.535 9.227,3.372 8.833,3.249 C8.438,3.127 7.974,3.060 7.441,3.050 C6.769,3.050 6.182,3.146 5.681,3.338 C5.179,3.530 4.795,3.802 4.529,4.154 C4.262,4.506 4.129,4.911 4.129,5.370 C4.129,5.829 4.254,6.218 4.505,6.538 C4.755,6.858 5.094,7.111 5.521,7.298 C5.947,7.485 6.475,7.647 7.105,7.786 C7.563,7.871 7.934,7.959 8.217,8.050 C8.499,8.140 8.726,8.269 8.897,8.434 C9.067,8.599 9.153,8.809 9.153,9.066 C9.153,9.396 8.993,9.671 8.673,9.890 C8.353,10.108 7.931,10.217 7.409,10.217 C7.025,10.217 6.721,10.164 6.497,10.057 C6.273,9.951 6.097,9.812 5.969,9.642 C5.841,9.471 5.723,9.258 5.617,9.002 C5.521,8.778 5.406,8.610 5.273,8.498 C5.139,8.386 4.977,8.329 4.785,8.329 C4.539,8.329 4.339,8.402 4.185,8.546 C4.030,8.690 3.953,8.868 3.953,9.082 C3.953,9.423 4.078,9.778 4.329,10.145 C4.579,10.514 4.907,10.810 5.313,11.034 C5.878,11.333 6.593,11.481 7.457,11.481 C8.182,11.481 8.809,11.372 9.337,11.154 C9.865,10.935 10.267,10.628 10.545,10.234 C10.822,9.828 10.961,9.380 10.961,8.890 L10.961,8.890 Z\" />\r\n\t\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"footer_social_ikon\">\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"15px\"\r\n\t\t\t\t\t\t\t\t\theight=\"15px\">\r\n\t\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" fill=\"rgb(255, 255, 255)\"\r\n\t\t\t\t\t\t\t\t\t\td=\"M13.377,0.266 C13.665,0.266 13.910,0.364 14.113,0.562 C14.315,0.759 14.417,0.996 14.417,1.273 L14.417,13.274 C14.417,13.551 14.315,13.786 14.113,13.977 C13.910,14.170 13.670,14.266 13.393,14.266 L1.521,14.266 C1.243,14.266 1.003,14.170 0.801,13.977 C0.598,13.786 0.497,13.551 0.497,13.274 L0.497,1.273 C0.497,0.996 0.598,0.759 0.801,0.562 C1.003,0.364 1.249,0.266 1.537,0.266 L13.393,0.266 L13.377,0.266 ZM4.721,5.673 L2.625,5.673 L2.625,11.994 L4.721,11.994 L4.721,5.673 ZM4.529,4.497 C4.742,4.290 4.849,4.029 4.849,3.713 C4.849,3.399 4.742,3.138 4.529,2.929 C4.315,2.722 4.033,2.618 3.681,2.618 C3.329,2.618 3.043,2.722 2.825,2.929 C2.606,3.138 2.497,3.399 2.497,3.713 C2.497,4.029 2.603,4.290 2.817,4.497 C3.030,4.706 3.307,4.810 3.649,4.810 L3.665,4.810 C4.027,4.810 4.315,4.706 4.529,4.497 ZM12.289,8.362 C12.289,7.434 12.059,6.719 11.601,6.218 C11.174,5.759 10.598,5.530 9.873,5.530 C9.382,5.530 8.961,5.647 8.609,5.882 C8.385,6.042 8.177,6.271 7.985,6.570 L7.985,5.673 L5.889,5.673 C5.899,5.919 5.899,7.044 5.889,9.050 L5.889,11.994 L7.985,11.994 L7.985,8.458 C7.985,8.234 8.006,8.063 8.049,7.946 C8.134,7.732 8.262,7.557 8.433,7.418 C8.625,7.258 8.859,7.178 9.137,7.178 C9.499,7.178 9.771,7.311 9.953,7.578 C10.113,7.823 10.193,8.165 10.193,8.602 L10.193,11.994 L12.289,11.994 L12.289,8.362 Z\" />\r\n\t\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</footer>\r\n\t</div>\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
  defineProperty(
    GeneratorFunctionPrototype,
    "constructor",
    { value: GeneratorFunction, configurable: true }
  );
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", { value: enqueue });
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/avatar.jpg":
/*!****************************!*\
  !*** ./src/img/avatar.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/6f303c5435aee4fbc2b5.jpg";

/***/ }),

/***/ "./src/img/bg_line.png":
/*!*****************************!*\
  !*** ./src/img/bg_line.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/31d39fbbc93ad27056de.png";

/***/ }),

/***/ "./src/img/counter_bg.png":
/*!********************************!*\
  !*** ./src/img/counter_bg.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/cdb10a06b7a896bb601e.png";

/***/ }),

/***/ "./src/img/customer_bgOne.png":
/*!************************************!*\
  !*** ./src/img/customer_bgOne.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/3ab4152dcd705f10055f.png";

/***/ }),

/***/ "./src/img/customer_bgTwo.png":
/*!************************************!*\
  !*** ./src/img/customer_bgTwo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/1ceacdd6ce6885b0c7ca.png";

/***/ }),

/***/ "./src/img/ellipse.png":
/*!*****************************!*\
  !*** ./src/img/ellipse.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/908b4d03b48e84de3ebb.png";

/***/ }),

/***/ "./src/img/ellipse_two.png":
/*!*********************************!*\
  !*** ./src/img/ellipse_two.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/4e659783f05749d73a6e.png";

/***/ }),

/***/ "./src/img/header_logo.png":
/*!*********************************!*\
  !*** ./src/img/header_logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/5d060646fbe04712ff9b.png";

/***/ }),

/***/ "./src/img/header_smile.png":
/*!**********************************!*\
  !*** ./src/img/header_smile.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/f9f724c8975acf05365f.png";

/***/ }),

/***/ "./src/img/icon.png":
/*!**************************!*\
  !*** ./src/img/icon.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/9ee1cc73bc737abd3386.png";

/***/ }),

/***/ "./src/img/mobile.png":
/*!****************************!*\
  !*** ./src/img/mobile.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/b7b72215b271754bdef8.png";

/***/ }),

/***/ "./src/img/mobile_bg.png":
/*!*******************************!*\
  !*** ./src/img/mobile_bg.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/4ef094bf41cd5d8d9ee1.png";

/***/ }),

/***/ "./src/img/news2.jpg":
/*!***************************!*\
  !*** ./src/img/news2.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/c3069bf803c21e1f2059.jpg";

/***/ }),

/***/ "./src/img/news3.png":
/*!***************************!*\
  !*** ./src/img/news3.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/27ec3e1a9e5ad93a33a3.png";

/***/ }),

/***/ "./src/img/poster.png":
/*!****************************!*\
  !*** ./src/img/poster.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/e74959cdd900535203f3.png";

/***/ }),

/***/ "./src/img/prodcut.png":
/*!*****************************!*\
  !*** ./src/img/prodcut.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/5d8f0b8e47dc20206b38.png";

/***/ }),

/***/ "./src/img/prodcut_bg.png":
/*!********************************!*\
  !*** ./src/img/prodcut_bg.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/da15c1965fed0b315b0f.png";

/***/ }),

/***/ "./src/img/tablet.png":
/*!****************************!*\
  !*** ./src/img/tablet.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/f1b2d142ccfe79da93ec.png";

/***/ }),

/***/ "./src/img/timeline.jpg":
/*!******************************!*\
  !*** ./src/img/timeline.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/23c5a4544ee05c120772.jpg";

/***/ }),

/***/ "./src/img/web_bg.png":
/*!****************************!*\
  !*** ./src/img/web_bg.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/db33e3cff770758227e0.png";

/***/ }),

/***/ "./src/fonts/Poppins-Bold.ttf":
/*!************************************!*\
  !*** ./src/fonts/Poppins-Bold.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Poppins-Bold.ttf";

/***/ }),

/***/ "./src/fonts/Poppins-Regular.ttf":
/*!***************************************!*\
  !*** ./src/fonts/Poppins-Regular.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Poppins-Regular.ttf";

/***/ }),

/***/ "./src/fonts/Poppins-SemiBold.ttf":
/*!****************************************!*\
  !*** ./src/fonts/Poppins-SemiBold.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Poppins-SemiBold.ttf";

/***/ }),

/***/ "./src/img/Watch Citadel's high-speed trading in action.mp4":
/*!******************************************************************!*\
  !*** ./src/img/Watch Citadel's high-speed trading in action.mp4 ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/793bea61448c96d0f23b.mp4";

/***/ }),

/***/ "./src/img/news1.webp":
/*!****************************!*\
  !*** ./src/img/news1.webp ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/c06f8d4d0d1818a60354.webp";

/***/ }),

/***/ "./src/img/videoplayback.mp4":
/*!***********************************!*\
  !*** ./src/img/videoplayback.mp4 ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/015222aa7cfc386b0e63.mp4";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/index.js ***!
  \***************************************************/


__webpack_require__(/*! ./noConflict */ "./node_modules/@babel/polyfill/lib/noConflict.js");

var _global = _interopRequireDefault(__webpack_require__(/*! core-js/library/fn/global */ "./node_modules/core-js/library/fn/global.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (_global["default"]._babelPolyfill && typeof console !== "undefined" && console.warn) {
  console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
}

_global["default"]._babelPolyfill = true;
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _modules_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/index */ "./src/modules/index.js");
/* harmony import */ var _modules_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_index__WEBPACK_IMPORTED_MODULE_2__);



})();

/******/ })()
;
//# sourceMappingURL=main.f8f05a6ec08fbfae3c27.js.map