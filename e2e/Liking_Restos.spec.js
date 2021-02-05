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