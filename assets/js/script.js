'use strict';

const modal = document.getElementById('modal');
const mask = document.getElementById('mask');

document.getElementById('open-modal').addEventListener('click', ()=>{
    mask.style.display = 'block'
    modal.style.display = 'block';
});
document.getElementById('close-modal').addEventListener('click', ()=>{
    mask.style.display = 'none'
    modal.style.display = 'none';
    
});