// UI

const getmenubtn = document.getElementById('menu-btn');
const getmobilemenu = document.getElementById('mobilemenu');

getmenubtn.addEventListener('click',function(){
    getmenubtn.classList.toggle('crossx');
    getmobilemenu.classList.toggle('hidden');
});

