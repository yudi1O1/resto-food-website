//=========================(start)================================
const search = document.querySelector('#search-icon');
const form = document.querySelector('.form');
const close =document.querySelector('#close');
const navToggle = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');
const navlinks =document.querySelector('.nav-links');




//--------------------------(end)---------------------------------



//=========================(navbar start)===============================
navToggle.addEventListener('click', function(){
    navbar.classList.toggle('shownav')
    navToggle.classList.toggle('fa-times')
})


search.addEventListener('click', function(){
    form.classList.add('show2')
})
close.addEventListener('click', function(){
    form.classList.remove('show2')
})
//--------------------------(navbar end)---------------------------------


//=========================(banner start)================================
const slides = document.querySelectorAll('.banner');
const banners =document.querySelector('.bannerss');
console.log(banners);



slides.forEach(function(slide,index,index1){
  slide.style.left = `${index * 100}%`;
  console.log(slide);
})

// var counter = 1;
//     setInterval(function(){
//       document.getElementById('radio' + counter).checked = true;
//       counter++;
//       if(counter > 4){
//         counter = 1;
//       }
//     }, 5000);
debugger;
let count = -1;

setInterval(function(){
 
  count++
  // console.log((count));
  banners.style.left  = `${-count*100}%`;
  if(count>1){
    count = -1;
  }
},3000)

//

//scroll============================================

const navHeight = navbar.clientHeight;

let section = document.querySelectorAll('section');
const link = document.querySelectorAll('.link');
 
link.forEach(function(lin){
  lin.addEventListener('click',function(e){

    e.preventDefault()
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop-navHeight
    console.log(position);
    window.scrollTo({
      left:0,
      top:position,
    })
  })
})


window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{
    
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');
    console.log(id);

    if(top >= offset && top < offset + height){
      link.forEach(lin =>{
        lin.classList.remove('active');
        document.querySelector('.navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}



























//=========================(start)================================
//--------------------------(end)-------------------------------