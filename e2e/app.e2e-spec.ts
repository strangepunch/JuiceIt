import { Juiceit2Page } from './app.po';

describe('juiceit2 App', function() {
  let page: Juiceit2Page;

  beforeEach(() => {
    page = new Juiceit2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
