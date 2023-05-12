const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const imagesEl = document.querySelector('.gallery')
const lineEl = images
.map(image => `<li><img class="img" width='250' height='100%' src=${image.url} alt='${image.alt}'></img></li>`)
  .join('')
imagesEl.insertAdjacentHTML('beforeend', lineEl)

const styleEl = document.querySelectorAll('img')
imagesEl.style.display = 'flex';
imagesEl.style.gap = '24px';
imagesEl.style.justifyContent = 'flex-start';
imagesEl.style.listStyle = 'none';