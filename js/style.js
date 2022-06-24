// .....................................................................
// CREATE THE MODAL SECTION
// .....................................................................
const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const menuItems = document.querySelector('.menu-items');
const menuItem = document.querySelector('.menu-item');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  hamburger.classList.toggle('active');
  menuItems.classList.toggle('active');
  menuItem.classList.toggle('active');
});
document.querySelectorAll('.menu-items').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.classList.remove('active');
    menuItems.classList.remove('active');
  });
});

// ..............................................................
//     CREATE THE FEATURED SECTION
// ..............................................................

const featured = [{
  image: './images/face2.jpg',
  title: 'photographer and graphic designer',
  Name: 'Lucy Letty',
  description: 'combine technical proficiency with artistry to create images of people, animals, events and objects.',
},
{
  image: './images/face3.jpg',
  title: 'Water color artist and canvas painter.',
  Name: 'Brian Show',
  description: 'Professional-grade paints use high-quality pigments and make little to no use of fillers or extenders.',
},
{
  image: './images/face4.jpg',
  title: 'Professional graphic designer and artist.',
  Name: 'Alfred Kinyua',
  description: 'the entire process of defining requirements, visualizing and creating graphics including illustrations, logos, layouts and photos.',
},
{
  image: './images/face5.jpg',
  title: 'Abstarct art director and current CEO.',
  Name: 'McMaccanon Keinan',
  description: 'determine which artistic elements to use; articulate the vision to their team; review and approve copy, and timelines.',
},
{
  image: './images/face5.jpg',
  title: 'Abstarct art director and current CEO.',
  Name: 'McMaccanon Keinan',
  description: 'determine which artistic elements to use; articulate the vision to their team; review and approve copy, and timelines.',
},
{
  image: './images/face5.jpg',
  title: 'Abstarct art director and current CEO.',
  Name: 'McMaccanon Keinan',
  description: 'determine which artistic elements to use; articulate the vision to their team; review and approve copy, and timelines.',
}];
let myString = '';
const detailsArray = [];
for (let i = 0; i < featured.length; i += 1) {
  myString = ` 
    <div class="card-item-child-featured">
    <div class="portfolio"><img src=${featured[i].image} alt="" class="port"></div>
    <div class="card-one">
        <h3 class="lecture">${featured[i].Name}</h3>
        <p class="red-paragraph">${featured[i].title}</p>
        <p class="car-paragraph">${featured[i].description}</p>
    </div>
</div>`;
  detailsArray.push(myString);
}

window.onload = () => {
  document.querySelector('.featured-section').innerHTML = detailsArray.join('');
  if (window.screen.width <= 768) {
    document.querySelector('.featured-section').innerHTML = detailsArray.slice(0, 2);

    const more = document.querySelector('.more');
    more.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.featured-section').innerHTML = detailsArray.join('');
      document.querySelector('.more').style.display = 'none';
    });
  }
};
