 
let span = document.querySelector(".up")
window.onscroll = function(){
  if(this.scrollY >= 1000){
    span.classList.add("show");
}
else{
    span.classList.remove("show");
}

this.scrollY >= 1000 ? span.classList.add("show")  : span.classList.remove("show");
};

span.onclick = function(){
    window.scrollTo({
        top:0 ,
        behavior:"smooth",


    });


};





$("document").ready(function(){

    $(".loding").fadeOut(1000) 
       
})
 
$('.owl-carousel').owlCarousel({
    autoplay:true,
    slidespeed:2000,
    items:30,
    loop:true,
    dots:false,
    nav:true,
    navText:['<i class="fa-solid fa-arrow-left-long" style="color: #f3f4f7;"></i>','<i class="fa-solid fa-arrow-right-long" style="color: #f3f4f7;"></i>'],
    responsive:{
        100:{
            items:1
        },
        500:{
            items:2
        },
     
        1000:{
            items:3
        },
        
    }
    })



  