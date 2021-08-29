import { BempromotoraPage } from './app.po';

describe('bempromotora App', () => {
  let page: BempromotoraPage;

  beforeEach(() => {
    page = new BempromotoraPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
