import { MyCrudkitPage } from './app.po';

describe('my-crudkit App', () => {
  let page: MyCrudkitPage;

  beforeEach(() => {
    page = new MyCrudkitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
