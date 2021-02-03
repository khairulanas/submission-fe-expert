Feature('Liking Restos');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restos', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');
});

Scenario('liking one resto', ({ I }) => {
  I.see('Tidak ada film untuk ditampilkan', '.resto-item__not__found');

  I.amOnPage('/');
  // … kita akan mengisi uji coba berikutnya …
});