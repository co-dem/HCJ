var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

function change_to_red_theme(){
    let body_bg = document.querySelector('body');
    let time_color = document.querySelector('div.row')
    let date_color = document.getElementById('dat');

    body_bg.style.backgroundColor = '#4E4351';

    for (i of ['time_theme_blue', 'time_theme_green']){
        time_color.classList.replace(i,'time_theme_red');
    }
    for (i of ['date_theme_blue', 'date_theme_green']){
        date_color.classList.replace(i,'date_theme_red');

    }
}

function change_to_green_theme(){
    let body_bg = document.querySelector('body');
    let time_color = document.querySelector('div.row')
    let date_color = document.getElementById('dat');
    
    body_bg.style.backgroundColor = '#483838';

    for (i of ['time_theme_blue', 'time_theme_red']){
        time_color.classList.replace(i,'time_theme_green');
    }
    for (i of ['date_theme_blue', 'date_theme_red']){
        date_color.classList.replace(i,'date_theme_green');
    }

}

function change_to_blue_theme(){
    let body_bg = document.querySelector('body');
    let time_color = document.querySelector('div.row')
    let date_color = document.getElementById('dat');
    
    body_bg.style.backgroundColor = '#06283D';

    for (i of ['time_theme_green', 'time_theme_red']){
        time_color.classList.replace(i,'time_theme_blue');
    }
    for (i of ['date_theme_green', 'date_theme_red']){
        date_color.classList.replace(i,'date_theme_blue');
    }

}

function set_time_reg(){
    let date = new Date();
    let html_hours = document.getElementById('hours');
    let html_minutes = document.getElementById('minutes');
    let html_seconds = document.getElementById('seconds');
    let time_arr = [hours = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds()];
    
    // this block is checking if number is less than ten
    // and is so it will add a 0 to the strat of the num
    // it turns this -> 2 | to this -> 02.
    for (let i = 0; i < time_arr.length; i++){
        if (time_arr[i] < 10){
            time_arr[i] = `0${time_arr[i]}`;
            html_hours.innerText = time_arr[0];
            html_minutes.innerText = time_arr[1];
            html_seconds.innerText = time_arr[2];
            // html_time.innerText = `${time_arr[0]} : ${time_arr[1]} : ${time_arr[2]}`;
        }else{
            html_hours.innerText = time_arr[0];
            html_minutes.innerText = time_arr[1];
            html_seconds.innerText = time_arr[2];
            // html_time.innerText = `${time_arr[0]} : ${time_arr[1]} : ${time_arr[2]}`;
        }
    }
}

function set_date_reg(){
    let date = new Date();
    let html_date = document.getElementById('dat');

    html_date.innerText = `${date.getDate()}th of ${months[date.getMonth()]}`;
}

set_time_reg();
set_date_reg();

setInterval(set_time_reg, 1000);
setInterval(set_date_reg, 86400);