// Таблист

$(function() {
    var tab = $('#tabs .tabs-items > div'); 
    tab.hide().filter(':first').show(); 
    
    // Клики по вкладкам.
    $('#tabs .tabs-nav a').click(function(){
        tab.hide(); 
        tab.filter(this.hash).show(); 
        $('#tabs .tabs-nav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':first').click();
  
    // Клики по якорным ссылкам.
    $('.tabs-target').click(function(){
        $('#tabs .tabs-nav a[href=' + $(this).attr('href')+ ']').click();
    });
    
    // Отрытие вкладки из хеша URL
    if(window.location.hash){
        $('#tabs-nav a[href=' + window.location.hash + ']').click();
        window.scrollTo(0, $("#" . window.location.hash).offset().top);
    }
});


// получаем элементы табов и контента
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
// получаем кнопку продолжить
const button = document.querySelector('button');

// добавляем обработчик событий на клик по табу
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // удаляем активный класс со всех табов и контента
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    // добавляем активный класс на нажатый таб и соответствующий контент
    tab.classList.add('active');
    const tabId = tab.getAttribute('data-tab');
    const tabContent = document.querySelector(`.tab-content[data-tab="${tabId}"]`);
    tabContent.classList.add('active');
    // проверяем все ли табы нажаты, если да - удаляем атрибут disabled с кнопки продолжить
    const activeTabs = document.querySelectorAll('.tab .active');
    if (activeTabs.length === tabs.length) {
      button.removeAttribute('disabled');
      button.classList.remove('.btn-disabled');
    }
  });
});









// // Получаем все табы и кнопку "Продолжить"
// const tabs = document.querySelectorAll('.tabs-nav');
// const continueBtn = document.querySelector('.button');

// // Создаем объект для хранения состояний табов
// const states = {};

// // Добавляем обработчики клика на каждый таб
// tabs.forEach(tab => {
//   tab.addEventListener('click', () => {
//     // Запоминаем состояние таба
//     states[tab.id] = true;
//     // Проверяем, были ли нажаты все табы
//     const allTabsPressed = Object.values(states).every(value => value);
//     // Если все табы были нажаты, разблокируем кнопку
//     if (allTabsPressed) {
//       continueBtn.disabled = false;
//     }
//   });
// });
  
// Таблист