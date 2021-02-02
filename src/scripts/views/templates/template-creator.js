/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
/* eslint-disable no-unused-expressions */
import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
<article class="detail-item">
    <img class="detail-item__thumbnail" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"alt="foto ${resto.name}">
    <div class="detail-item__content">
      <p class="detail-item__date"> 
        <b class="detail-item__date__author">Rating: &#9733; ${resto.rating}</b>
      </p>
      <h1 class="detail-item__title">${resto.name}</h1>
      <p class="detail-item__date">&#9992;: ${resto.address} - ${resto.city}</p><br/>
      <p><b class="detail-item__date__author">Categories: ${resto.categories.map((category) => category.name)}</b></p>
      <p class="detail-item__description">${resto.description}</p>
    </div>
  </article>
`;

const createMenuItemTemplate = (menus) => `
<article class="detail-item">
  <div class="detail-item__content">
  <h2 class="detail-item__title">Menu</h2>
  <br/><br/>
    <p class="detail-item__date"> 
      <b class="detail-item__date__author">Foods:</b>
    </p>    
    <p class="detail-item__date">
    ${menus.foods.map((element) => ` [ ${element.name} ]`)}
    </P>

    <br/>

    <p class="detail-item__date"> 
      <b class="detail-item__date__author">Drinks:</b>
    </p>    
    <p class="detail-item__date">
    ${menus.drinks.map((element) => ` [ ${element.name} ]`)}
    </P>
  
  </div>
</article >
  `;

const createReviewTemplate = (reviews) => `
<article class="detail-item">
  <div class="detail-item__content">
  <h2 class="detail-item__title">Reviews</h2>
  <br/><br/>
        
  ${reviews.map((element) =>
  `
      <p class="detail-item__date"> 
      <b class="detail-item__date__author">${element.name}</b> - ${element.date}
      </p>
      <p class="post-item__description">${element.review}</p>

    `)} 
  </div>
</article >
`;

const createRestoItemTemplate = (resto) => `
  <article class="post-item" >
    <img class="post-item__thumbnail" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name || "-"}">
      <div class="post-item__content">
        <p class="post-item__date">&#9992; ${resto.city || "-"} :
        <b class="post-item__date__author">&#9733; ${resto.rating || "-"}</b>
        </p>
        <h1 class="resto__title post-item__title"><a href="${`/#/detail/${resto.id}`}">${resto.name || "-"}</a></h1>
        <p class="post-item__description">${resto.description || "-"}</p>
      </div>
  </article>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like" >
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button >
  `;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like" >
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button >
  `;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createLikedButtonTemplate,
  createMenuItemTemplate,
  createReviewTemplate,
};
