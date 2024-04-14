const burgerIcon = document.getElementById('burger-icon');
const modal = document.getElementById('modal');


burgerIcon.addEventListener('click', () => {
    modal.classList.toggle('show');
});
