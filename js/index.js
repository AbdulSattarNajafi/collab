// Search
const searchBtn = document.getElementById('search_btn');
const searchForm = document.querySelector('.header__search-form');

searchBtn.addEventListener('click', toggleSeachForm);

function toggleSeachForm() {
    searchForm.classList.toggle('show');
}

// Menu
const menuContent = document.querySelector('.navigation__list');
const menuBtn = document.querySelector('.navigation__toggler-btn');

menuBtn.addEventListener('click', () => {
    menuContent.classList.toggle('show');
});
