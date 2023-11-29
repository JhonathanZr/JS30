const hr = document.querySelector("#hr")
const mn = document.querySelector("#mn")
const sc = document.querySelector("#sc")
const deg = 6;


setInterval(()=>{

    let time = new Date();
    let minutes = time.getMinutes() * deg;
    let seconds = time.getSeconds() * deg;
    let hours = time.getHours() * 30

    hr.style.transform = `rotateZ(${(hours) + (minutes/12)}deg)`;
    mn.style.transform= `rotateZ(${minutes}deg)`
    sc.style.transform= `rotateZ(${seconds}deg)`
})