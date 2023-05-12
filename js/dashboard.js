// Logins Card Dropdowns
const loginsDropdowns = document.querySelectorAll('.logins__dropdown');
toggleDropdown(loginsDropdowns);

// Domains Card Dropdowns
const doaminsDropdowns = document.querySelectorAll('.domains__dropdown');
toggleDropdown(doaminsDropdowns);

// Contacts Card Dropdowns
const contactDropdowns = document.querySelectorAll('.contacts__dropdown');
toggleDropdown(contactDropdowns);

// SubscriptionDropdowns Card Dropdowns
const subscriptionDropdowns = document.querySelectorAll('.subscription__dropdown');
toggleDropdown(subscriptionDropdowns);

function toggleDropdown(dropdownItems) {
    dropdownItems.forEach((dropdown) => {
        const dropdownBtn = dropdown.querySelector('.dropdown__btn');

        dropdownBtn.addEventListener('click', () => {
            if (!dropdown.classList.contains('active')) {
                dropdownItems.forEach((otherItem) => {
                    otherItem.classList.remove('active');
                });
            }

            dropdown.classList.toggle('active');
        });
    });
}

const loginsItems = document.querySelectorAll('.logins__list-texts');
const drawerContents = document.querySelectorAll('.drawer__content');
const drawer = document.querySelector('.drawer');
const drawerBackdrop = document.querySelector('.drawer__backdrop');
const drawerBtn = document.querySelector('.drawer__btn');

const loginEditBtns = document.querySelectorAll('.edit-logins-btn');
const drawerDropdowns = document.querySelectorAll('.drawer__dropdown');
const drawerDropdownsItems = document.querySelectorAll('.drawer__dropdown-list li');
const cancelBtns = document.querySelectorAll('.cancel-btn');

drawer.style.height = window.innerHeight + 'px';

const passwordInputs = document.querySelectorAll('.password-input');
const showPasswordBtns = document.querySelectorAll('.show-password-btn');
passwordInputs.forEach((input) => (input.value = 'my_password23'));

loginsItems.forEach((item) => {
    const drawerContent = item.dataset.content;

    item.addEventListener('click', () => {
        drawer.classList.add('show');
        drawerBackdrop.classList.add('show');
        drawerContents.forEach((content) => {
            content.classList.remove('show');
        });
        document.querySelector(`.${drawerContent}`).classList.add('show');
    });
});

window.addEventListener('resize', () => {
    drawer.style.height = window.innerHeight + 'px';
});

drawerBtn.addEventListener('click', hiderDrawer);
drawerBackdrop.addEventListener('click', hiderDrawer);
cancelBtns.forEach((btn) => {
    btn.addEventListener('click', hiderDrawer);
});

function hiderDrawer() {
    drawer.classList.remove('show');
    drawerBackdrop.classList.remove('show');
    drawerContents.forEach((content) => {
        content.classList.remove('show');
    });
    closeLoginsEditDropdown();
    passwordInputs.forEach((input) => input.setAttribute('type', 'password'));
}

loginEditBtns.forEach((btn) => {
    const editContent = btn.dataset.toggle;

    btn.addEventListener('click', () => {
        drawer.classList.add('show');
        drawerBackdrop.classList.add('show');

        document.querySelector(`.${editContent}`).classList.add('show');
    });
});

drawerDropdowns.forEach((dropdown) => {
    const dropdownBtn = dropdown.querySelector('.drawer__dropdown-btn');

    dropdownBtn.addEventListener('click', () => {
        if (!dropdown.classList.contains('active')) {
            closeLoginsEditDropdown();
        }

        dropdown.classList.toggle('active');
    });
});

drawerDropdownsItems.forEach((item) => {
    const editContent = item.dataset.edit;

    item.addEventListener('click', () => {
        drawerContents.forEach((content) => {
            content.classList.remove('show');
        });
        document.querySelector(`.${editContent}`).classList.add('show');
        closeLoginsEditDropdown();
    });
});

function closeLoginsEditDropdown() {
    drawerDropdowns.forEach((item) => {
        item.classList.remove('active');
    });
}

// Show & Hide Password
showPasswordBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const btnData = btn.dataset.id;

        passwordInputs.forEach((input) => {
            const inputData = input.dataset.id;

            if (inputData === btnData) {
                showHidePassword(input);
            }
        });
    });
});

function showHidePassword(input) {
    if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
}

// Tooltips for Copy Buttons
const copyBtns = document.querySelectorAll('.copy-btn');

copyBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
        this.classList.add('active');

        setTimeout(() => {
            this.classList.remove('active');
        }, 1000);
    });
});

// Outside clicking
window.addEventListener('click', function (e) {
    const activeDropdown = document.querySelector('.dropdown.active');
    if (activeDropdown && !activeDropdown.contains(e.target)) {
        activeDropdown.classList.remove('active');
    }
});
