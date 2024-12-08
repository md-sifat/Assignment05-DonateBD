const donate = document.querySelector('.btn-donate');
const history = document.querySelector('.btn-history');

const donateCompt = document.querySelector('.donate');
const hisCompt = document.querySelector('.history');

donate.addEventListener('click' , ()=>{
    history.classList.add('bg-white');
    history.classList.add('border-2');
    hisCompt.classList.add('hidden');
    donateCompt.classList.remove('hidden');
    history.classList.remove('bg-lime-400');
    donate.classList.remove('bg-white');
    donate.classList.remove('border-2');
    donate.classList.add('bg-lime-400');
});

history.addEventListener('click' , ()=>{
    donate.classList.add('bg-white');
    donate.classList.add('border-2');
    donateCompt.classList.add('hidden');
    hisCompt.classList.remove('hidden');
    donate.classList.remove('bg-lime-400');
    history.classList.remove('bg-white');
    history.classList.remove('border-2');
    history.classList.add('bg-lime-400');
});


