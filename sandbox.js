const form = document.querySelector('form');
const message = document.querySelector('.message');

form.addEventListener('submit', e => {
    e.preventDefault();

    message.textContent = 'Your username has been saved';
    
    setTimeout(() => {
    message.textContent = '';
    }, 2000);
});