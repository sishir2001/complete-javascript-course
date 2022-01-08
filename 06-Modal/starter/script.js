'use strict';

// ? DOM initiliazations
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsModal = document.querySelectorAll('.show-modal');

const closeModal= ()=>{
    if(!modal.classList.contains('hidden')){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
};
const openModal = ()=>{
    // TODO : show modal with respective content
    // TODO : change the contents of the modal according to the button
    if(modal.classList.contains('hidden')){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
};

for (let i = 0; i < btnsModal.length; i++) {
    // ? adding event listeners to btnsModal
    btnsModal[i].addEventListener('click', openModal);
}

// ? adding click listeners to btnCloseModal
btnCloseModal.addEventListener('click',closeModal);
// ? adding click listeners to overlay
overlay.addEventListener('click', closeModal);

// ! responding to keyboard events 
// ? ESC event listener
document.addEventListener('keydown',(event)=>{
    // @param event : an event object passed by the java script when a keyboard key is clicked
    console.log(event.key);
    if(event.key === 'Escape')
        closeModal();
});