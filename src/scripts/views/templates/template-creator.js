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
    <p class="detail-item__date"> 
      <b class="detail-item__date__author">Foods:</b>
    </p>
    <div id="foodItem">
      <p class="detail-item__date">
      ${menus.foods.map((element) => ` [ ${element.name} ]`)}
      </P>
    </div>
  
  </div>
</article >
  `;

const createRestoItemTemplate = (resto) => `
  <article class="post-item" >
    <img class="post-item__thumbnail" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="foto ${resto.name}">
      <div class="post-item__content">
        <p class="post-item__date">&#9992; ${resto.city} :
        <b class="post-item__date__author">&#9733; ${resto.rating}</b>
        </p>
        <h1 class="post-item__title"><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h1>
        <p class="post-item__description">${resto.description}</p>
      </div>
  </article>
`;

const createLikeButtonTemplate = () => `
  <button aria - label="like this resto" id = "likeButton" class="like" >
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button >
  `;

const createLikedButtonTemplate = () => `
  <button aria - label="unlike this resto" id = "likeButton" class="like" >
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button >
  `;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createMenuItemTemplate,
};
