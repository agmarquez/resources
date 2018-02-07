import { AppPage } from './app.po';

describe('resources App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('buscar series para Spider-Woman (Mattie Franklin)', () => {
    const searchCharacter = 'Spider-Woman (Mattie Franklin)';
    const searchSeries = 'sil';
    page.navigateTo('/');

    page.search(searchCharacter);

    page.hitButton('i.material-icons');

    page.search(searchSeries);

    expect(page.getContent('mat-row .mat-column-title:first-child')).toContain('Silk (2015 - Present)');
  });
});
