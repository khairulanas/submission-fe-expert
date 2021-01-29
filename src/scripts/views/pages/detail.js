import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../data/restodb-source';
import { createRestoDetailTemplate, createMenuItemTemplate, createReviewTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
    <section class="content">
      <div class="latest">
        <h1 class="latest__label">Detail Restaurant</h1>
        <div class="detail"></div>
        <br/> <br/>
        <div class="menus"></div>
        <br/> <br/>
        <div class="reviews"></div>
      </div>
    </section>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('.detail');
    const menusContainer = document.querySelector('.menus');
    const reviewsContainer = document.querySelector('.reviews');
    restoContainer.innerHTML = createRestoDetailTemplate(resto);
    menusContainer.innerHTML = createMenuItemTemplate(resto.menus);
    reviewsContainer.innerHTML = createReviewTemplate(resto.customerReviews);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestos: FavoriteRestoIdb,
      resto: {
        id: resto.id,
        pictureId: resto.pictureId,
        name: resto.name,
        description: resto.description,
        city: resto.city,
        rating: resto.rating,
      },
    });
  },
};

export default Detail;
