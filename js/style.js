
const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const menu_Items = document.querySelector('.menu-items');
const menu_Item = document.querySelector('.menu-item');

hamburger.addEventListener('click',()=>{
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
    menu_Items .classList.toggle('active');
    menu_Item .classList.toggle('active');
});
document.querySelectorAll('.menu-items').forEach((link)=>{
    link.addEventListener('click', ()=>{
    menu.classList.remove('active');
    hamburger.classList.remove('active');
    menu_Items.classList.remove('active');
  

});
});

//..............................................................
//      FEATURED SECTION 
//..............................................................



const featured = [{
image:'./images/face2.jpg',
title:'Professional photographer and graphic designer',
Name:'Lucy Letty',
description:'combine technical proficiency with artistry to create images of people, animals, events and objects.',
},
{image:'./images/face3.jpg',
title:'Water color artist and canvas painter.',
Name:'Brian Show',
description:'Professional-grade paints use high-quality pigments and make little to no use of fillers or extenders.',
},
{image:'./images/face4.jpg',
title:'Professional graphic designer and artist.',
Name:'Alfred Kinyua',
description:'the entire process of defining requirements, visualizing and creating graphics including illustrations, logos, layouts and photos.',
},
{image:'./images/face5.jpg',
title:'Abstarct art director and current CEO.',
Name:'McMaccanon Keinan',
description:'determine which artistic elements to use; articulate the vision to their team; review and approve copy, and timelines.',
}];
let myString='';
let detailsArray=[];
for(let staff of featured){
    myString=` 
    <div class="card-item-child-featured">
    <div class="portfolio">
    <img src=${staff.image} alt="" class="port"></div>
    <div class="card-one">
        <h3 class="lecture">${staff.Name}</h3>
        <p class="red-paragraph"${staff.description}</p>
        <p class="car-paragraph"> ${staff.description}</p>
    </div>
</div>`
                detailsArray.push(myString);   
};

window.onload=()=>{
    document.querySelector('.featured-section').innerHTML=detailsArray;
    if(screen.width <= 768){
        document.querySelector('.featured-section').innerHTML=detailsArray.slice(0,2);
        
    let more = document.querySelector('.more');
    more.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('.featured-section').innerHTML=arr.join("");
    document.querySelector('.more').style.display='none';
  
});
    }
}







