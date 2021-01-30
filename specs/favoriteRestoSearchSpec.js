import FavoriteRestoSearchPresenter from '../src/scripts/views/pages/liked-resto/favorite-resto-search-presenter'
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Searching restos', () => {
  let presenter;

  const searchRestos = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestoSearchContainer = () => {
    document.body.innerHTML = `
        <div id="resto-search-container">
            <input id="query" type="text">
            <div class="resto-result-container">
                <ul class="restos">
                </ul>
            </div>
        </div>
        `;
  };
  const constructPresenter = () => {
    spyOn(FavoriteRestoIdb, 'searchRestos');
    presenter = new FavoriteRestoSearchPresenter({
      favoriteRestos: FavoriteRestoIdb,
    });
  };

  beforeEach(() => {
    setRestoSearchContainer();
    constructPresenter();
  });

  it('should be able to capture the query typed by the user', () => {
    searchRestos('resto a');

    expect(presenter.latestQuery).toEqual('resto a');
  });

  // test double; test double
  it('should ask the model to search for liked restos', () => {
    searchRestos('resto a');

    expect(FavoriteRestoIdb.searchRestos)
      .toHaveBeenCalledWith('resto a');
  });

  it('should show the found restos', () => {
    presenter._showFoundRestos([{ id: 1, title: 'Satu' }]);
    expect(document.querySelectorAll('.resto__title').item(0).textContent)
      .toEqual('Satu');

    presenter._showFoundRestos(
      [{ id: 1, title: 'Satu' }, { id: 2, title: 'Dua' }],
    );

    const restoTitles = document.querySelectorAll('.resto__title');
    expect(restoTitles.item(0).textContent).toEqual('Satu');
    expect(restoTitles.item(1).textContent).toEqual('Dua');
  });

  it('should show - for found resto without title', () => {
    presenter._showFoundRestos([{ id: 1 }]);

    expect(document.querySelectorAll('.resto__title').item(0).textContent)
      .toEqual('-');
  });

  it('should show the restos found by Favorite Restos', (done) => {
    document.getElementById('resto-search-container')
      .addEventListener('restos:searched:updated', () => {
        expect(document.querySelectorAll('.resto').length).toEqual(3);
        done();
      });

    FavoriteRestoIdb.searchRestos.withArgs('film a').and.returnValues([
      { id: 111, title: 'film abc' },
      { id: 222, title: 'ada juga film abcde' },
      { id: 333, title: 'ini juga boleh film a' },
    ]);

    searchRestos('film a');
  });

  it('should show the name of the restos found by Favorite Restos', (done) => {
    document.getElementById('resto-search-container').addEventListener('restos:searched:updated', () => {
      const restoTitles = document.querySelectorAll('.resto__title');
      expect(restoTitles.item(0).textContent).toEqual('film abc');
      expect(restoTitles.item(1).textContent).toEqual('ada juga film abcde');
      expect(restoTitles.item(2).textContent).toEqual('ini juga boleh film a');

      done();
    });

    FavoriteRestoIdb.searchRestos.withArgs('film a').and.returnValues([
      { id: 111, title: 'film abc' },
      { id: 222, title: 'ada juga film abcde' },
      { id: 333, title: 'ini juga boleh film a' },
    ]);

    searchRestos('film a');
  });

});