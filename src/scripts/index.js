import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';


console.log('Hello Coders! :)');

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', function (_) {
  drawer.classList.remove('open');
});

main.addEventListener('click', function (_) {
  drawer.classList.remove('open');
});

const data = require('../DATA.json');
const posts = document.querySelector('.posts');
data['restaurants'].forEach(item => {
  posts.innerHTML += `
  <article class="post-item">
      <img class="post-item__thumbnail" src="${item.pictureId}"
          alt="foto ${item.name}">
      <div class="post-item__content">
          <p class="post-item__date">&#9992; ${item.city} : 
          <b class="post-item__date__author">&#9733; ${item.rating}</b>
          </p>
          <h1 class="post-item__title"><a href="#">${item.name}</a></h1>
          <p class="post-item__description">${item.description}</p>
      </div>
  </article>
  `;
})