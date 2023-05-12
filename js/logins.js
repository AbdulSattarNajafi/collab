// Dropdowns
const dropdowns = document.querySelectorAll('.dropdown');
toggleDropdown(dropdowns);

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

// Show & Hide Password
const passwords = document.querySelectorAll('.logins-page__card-password');

passwords.forEach((item) => {
    const showPasswordBtn = item.querySelector('.eye-btn');
    const input = item.querySelector('.password-input');

    showPasswordBtn.addEventListener('click', () => {
        showHidePassword(input);
    });
});

function showHidePassword(input) {
    if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
}

// Outside clicking
window.addEventListener('click', function (e) {
    const activeDropdown = document.querySelector('.dropdown.active');
    if (activeDropdown && !activeDropdown.contains(e.target)) {
        activeDropdown.classList.remove('active');
    }
});
