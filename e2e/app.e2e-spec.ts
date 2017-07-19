import { MySelfPage } from './app.po';

describe('my-self App', () => {
  let page: MySelfPage;

  beforeEach(() => {
    page = new MySelfPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
