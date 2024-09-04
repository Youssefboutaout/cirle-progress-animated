const circle = document.querySelector(".progress-circle");
const loading = document.querySelector(".loading");

let i = 0;
const fakeUploaPerc = [0, 10, 25, 40, 42, 60, 70, 75, 90, 100];

const circumference = circle.getTotalLength();

const interval = setInterval(() => {
    circle.style.strokeDashoffset = circumference - (fakeUploaPerc[i]  / 100) * circumference;
    loading.innerHTML = fakeUploaPerc[i] + "%";
    i++;
    if(i==fakeUploaPerc.length){
        clearInterval(interval);
        loading.innerHTML = "Ok"
    }
}, 1000);
