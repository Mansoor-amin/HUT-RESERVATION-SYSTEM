import { HUTRESERVATIONSYSTEMPage } from './app.po';

describe('hut-reservation-system App', () => {
  let page: HUTRESERVATIONSYSTEMPage;

  beforeEach(() => {
    page = new HUTRESERVATIONSYSTEMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
