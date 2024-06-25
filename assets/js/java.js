"use strict";
const iconEl = document.getElementById('myMenu');

iconEl.addEventListener('click', function(){
    iconEl.classList.toggle('responsive');
}
);

$(document).ready(function(){

    $('.access-btn').hide(); 

    $('.teacher-info').click(function(e){
        e.preventDefault();
        $('.access-btn').slideToggle(); 
        $('.card-body').toggleClass('card-body-h')
    })

})

