Feature('Liking Restos');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restos', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');
});

Scenario('liking one resto', ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');

  I.amOnPage('/');
  // pause();
  I.seeElement('.resto__title a');
  I.click(locate('.resto__title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
});