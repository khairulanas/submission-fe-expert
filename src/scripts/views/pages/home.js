import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
    <section class="content">
      <div class="latest">
          <h1 class="latest__label">Explore Restaurant</h1>
          <div class="posts">
              
          </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restos = await RestoDbSource.listResto();
    const restosContainer = document.querySelector('.posts');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });

    // TODO: tampilkan movies di dalam DOM
  },
};

export default HomePage;
