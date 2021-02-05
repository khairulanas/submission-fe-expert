const assert = require('assert');

Feature('Liking Restos');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restos', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');
});

Scenario('liking one resto', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');

  I.amOnPage('/');
  // pause();
  I.seeElement('.resto__title a');
  const firstresto = locate('.resto__title a').first();

  const firstRestoTitle = await I.grabTextFrom(firstresto);
  I.click(firstresto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');

  const likedRestoTitle = await I.grabTextFrom('.resto__title');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('searching restos', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');

  I.amOnPage('/');

  I.seeElement('.resto__title a');

  const titles = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.resto__title a').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    titles.push(await I.grabTextFrom('.detail-item__title'));
    I.amOnPage('/');
  }

  //search
  I.amOnPage('/#/favorite');
  I.seeElement('#query');

  const searchQuery = titles[1].substring(1, 3);
  const matchingRestos = titles.filter((title) => title.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedRestos = await I.grabNumberOfVisibleElements('.post-item');
  assert.strictEqual(matchingRestos.length, visibleLikedRestos);

  matchingRestos.forEach(async (title, index) => {
    const visibleTitle = await I.grabTextFrom(locate('.resto__title').at(index + 1));
    assert.strictEqual(title, visibleTitle);
  });
});