import { JuiceItPage } from './app.po';

describe('juice-it App', function() {
  let page: JuiceItPage;

  beforeEach(() => {
    page = new JuiceItPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
