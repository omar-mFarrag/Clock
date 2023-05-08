let hours = document.getElementById('hh');
let minutes = document.getElementById('mm');
let seconds = document.getElementById('ss');

setInterval(() => {
    var hh = new Date().getHours();
    var mm = new Date().getMinutes();
    var ss = new Date().getSeconds();

    if(hh > 12){
        hh = hh - 12;
    }

    hours.style.transform = `rotate( calc( ${hh + (mm / 60)} * 30deg ) )`;
    minutes.style.transform = `rotate( calc( ${mm + (ss / 60)} * 6deg ) )`;
    seconds.style.transform = `rotate( calc( ${ss} * 6deg ) )`;
}, 1000);