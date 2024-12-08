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
    if(val>totalAmmount || val<=0){
        alert("Insufficient Balance");
    }else if(val<totalAmmount){
        const title1 = document.querySelector('.title1').innerHTML;
        createHistory(title1 , val);
        totalAmmount-=val;
        totalAC.innerHTML = totalAmmount;
        let value1 = val1.innerHTML;
        value1 = parseInt(value1);
        value1+=val;
        val1.innerHTML = value1;
    }
});
submitbtn2.addEventListener('click' , ()=>{
    let val = in2.value;
    console.log(val);
    val = parseInt(val);
    if(val>totalAmmount || val<=0){
        alert("Insufficient Balance");
    }else if(val<totalAmmount){
        const title2 = document.querySelector('.title1').innerHTML;
        createHistory(title2 , val);
        totalAmmount-=val;
        totalAC.innerHTML = totalAmmount;
        let value2 = val2.innerHTML;
        value2 = parseInt(value2);
        value2+=val;
        val2.innerHTML = value2;
    }
});
submitbtn3.addEventListener('click' , ()=>{
    let val = in3.value;
    console.log(val);
    val = parseInt(val);
    if(val>totalAmmount || val<=0){
        alert("Insufficient Balance");
    }else if(val<totalAmmount){
        const title3 = document.querySelector('.title1').innerHTML;
        createHistory(title3 , val);
        totalAmmount-=val;
        totalAC.innerHTML = totalAmmount;
        let value3 = val3.innerHTML;
        value3 = parseInt(value3);
        value3+=val;
        val3.innerHTML = value3;
    }
});






const hisCont = document.querySelector('.history')

function createHistory(title , val ){
    const date = getCurrentDate();
    const newPost = document.createElement('div');
    newPost.classList.add('border' , 'border-2' , 'border-black' , 'my-5' , 'py-5' , 'px-2');
    hisCont.classList.add('new-component');
    newPost.innerHTML = `
        <p>Ammount ${val} tk is  Donated to ${title}</p>
        <p>DATE : ${date}</p>
    
    `;
    hisCont.appendChild(newPost);

}


function getCurrentDate() {
    const today = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = daysOfWeek[today.getDay()]; // Get the day of the week
    const date = today.getDate().toString().padStart(2, '0'); // Add leading zero if needed
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = today.getFullYear(); // Get the full year

    let hours = today.getHours(); // Hours in 24-hour format
    const minutes = today.getMinutes().toString().padStart(2, '0'); // Add leading zero if needed
    const seconds = today.getSeconds().toString().padStart(2, '0'); // Add leading zero if needed
    const ampm = hours >= 12 ? 'PM' : 'AM'; // Determine AM/PM

    hours = hours % 12 || 12; // Adjust 0 to 12 for midnight
    hours = hours.toString().padStart(2, '0'); // Add leading zero if needed

    const formattedDate = `${day}, ${date}-${month}-${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    return `${formattedDate} ${formattedTime}`;
}

