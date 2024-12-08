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



const totalAC = document.querySelector('.amt');
let totalAmmount = document.querySelector('.amt').innerHTML;
totalAmmount = parseInt(totalAmmount);
console.log(totalAmmount);


const submitbtn1 = document.querySelector('.submitD1');
const submitbtn2 = document.querySelector('.submitD2');
const submitbtn3 = document.querySelector('.submitD3');

const in1 = document.querySelector('.in1');
const in2 = document.querySelector('.in2');
const in3 = document.querySelector('.in3');

const val1 = document.querySelector('.value1');
const val2 = document.querySelector('.value2');
const val3 = document.querySelector('.value3');

submitbtn1.addEventListener('click' , ()=>{
    let val = in1.value;
    console.log(val);
    val = parseInt(val);
    if(val>totalAmmount){
        alert("Insufficient Balance");
    }else if(val<totalAmmount){
        totalAmmount-=val;
        totalAC.innerHTML = totalAmmount;
        let value1 = val1.innerHTML;
        value1 = parseInt(value1);
        value1+=val;
        val1.innerHTML = value1;
    }
});


