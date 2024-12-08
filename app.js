
// the code is auto formatted 

const donate = document.querySelector('.btn-donate');
const history = document.querySelector('.btn-history');

const donateCompt = document.querySelector('.donate');
const hisCompt = document.querySelector('.history');

donate.addEventListener('click', () => toggleView(donate, history, donateCompt, hisCompt));
history.addEventListener('click', () => toggleView(history, donate, hisCompt, donateCompt));

function toggleView(activeBtn, inactiveBtn, activeSection, inactiveSection) {
    activeBtn.classList.remove('bg-white', 'border-2');
    activeBtn.classList.add('bg-lime-400');
    inactiveBtn.classList.add('bg-white', 'border-2');
    inactiveBtn.classList.remove('bg-lime-400');
    activeSection.classList.remove('hidden');
    inactiveSection.classList.add('hidden');
}

const totalAC = document.querySelector('.amt');
let totalAmmount = parseInt(totalAC.innerHTML);

const submitButtons = document.querySelectorAll('.submitD1, .submitD2, .submitD3');
const inputs = document.querySelectorAll('.in1, .in2, .in3');
const values = document.querySelectorAll('.value1, .value2, .value3');
const titles = document.querySelectorAll('.title1, .title2, .title3');

submitButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let val = parseInt(inputs[index].value);
        if (isNaN(val) || val <= 0) {
            alert("Please enter a valid donation amount.");
            return;
        }
        if (val > totalAmmount) {
            alert("Insufficient Balance");
            return;
        }
        const title = titles[index].innerHTML;
        createHistory(title, val);

        totalAmmount -= val;
        totalAC.innerHTML = totalAmmount;

        let currentValue = parseInt(values[index].innerHTML);
        values[index].innerHTML = currentValue + val;

        showPopup(`You have successfully donated <strong>${val}</strong> to <strong>${title}</strong>.`);
    });
});

function showPopup(message) {
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.width = '50%';
    popup.style.height = '60%';
    popup.style.backgroundColor = 'white';
    popup.style.border = '3px solid black';
    popup.style.borderRadius = '10px';
    popup.style.padding = '20px';
    popup.style.boxShadow = '0 0 15px rgba(0,0,0,0.7)';
    popup.style.zIndex = '1000';
    popup.style.display = 'flex';
    popup.style.flexDirection = 'column';
    popup.style.alignItems = 'center';
    popup.style.justifyContent = 'space-between';

    popup.innerHTML = `
        <h2 style="font-size: 3rem; color: limegreen; margin-bottom: 20px;">Congratulations!</h2>
        <img src="assets/coin.png" alt="Coin Logo" style="width: 100px; height: 100px; margin-bottom: 20px;">
        <p style="font-size: 1.5rem; text-align: center; color: #333;">${message}</p>
        <button id="popup-ok-btn" style="
            margin-top: 20px; 
            padding: 10px 20px; 
            font-size: 1.2rem; 
            background-color: limegreen; 
            color: white; 
            border: none; 
            border-radius: 5px; 
            cursor: pointer;">
            Close
        </button>
    `;
    document.body.appendChild(popup);
    document.getElementById('popup-ok-btn').addEventListener('click', () => popup.remove());
}


function createHistory(title, val) {
    const date = getCurrentDate();
    const newPost = document.createElement('div');
    newPost.classList.add('border', 'border-2', 'border-black', 'my-5', 'py-5', 'px-2');
    newPost.innerHTML = `
        <p>Ammount ${val} tk is  Donated to ${title}</p>
        <p>DATE : ${date}</p>
    
    `;
    hisCompt.appendChild(newPost);
}


function getCurrentDate() {
    const today = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = daysOfWeek[today.getDay()];
    const date = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear();

    let hours = today.getHours();
    const minutes = today.getMinutes().toString().padStart(2, '0');
    const seconds = today.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, '0');

    const formattedDate = `${day}, ${date}-${month}-${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    return `${formattedDate} ${formattedTime}`;
}


// for the faq page js 

function toggleFAQ(id) {
    const content = document.getElementById(`faq-${id}`);
    const allContents = document.querySelectorAll('.collapse-content');

    allContents.forEach((item) => {
        if (item !== content) {
            item.classList.remove('open');
        }
    });

    content.classList.toggle('open');
}