import FavoriteRestoSearchPresenter from '../src/scripts/views/pages/liked-resto/favorite-resto-search-presenter'
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Searching restos', () => {
  beforeEach(() => {
    document.body.innerHTML = `
        <div id="resto-search-container">
            <input id="query" type="text">
            <div class="resto-result-container">
                <ul class="restos">
                </ul>
            </div>
        </div>
        `;
  });

  it('should be able to capture the query typed by the user', () => {
    spyOn(FavoriteRestoIdb, 'searchRestos');
    const presenter = new FavoriteRestoSearchPresenter({
      favoriteRestos: FavoriteRestoIdb,
    });

    const queryElement = document.getElementById('query');
    queryElement.value = 'film a';
    queryElement.dispatchEvent(new Event('change'));

    expect(presenter.latestQuery).toEqual('film a');
  });

  // test double; test double
  it('should ask the model to search for liked movies', () => {
    spyOn(FavoriteRestoIdb, 'searchRestos');
    const presenter = new FavoriteRestoSearchPresenter({ favoriteRestos: FavoriteRestoIdb });

    const queryElement = document.getElementById('query');
    queryElement.value = 'film a';
    queryElement.dispatchEvent(new Event('change'));

    expect(FavoriteRestoIdb.searchRestos)
      .toHaveBeenCalledWith('film a');
  });

});