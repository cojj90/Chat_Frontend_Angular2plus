import { ChatFrontendAngular2plusPage } from './app.po';

describe('chat-frontend-angular2plus App', () => {
  let page: ChatFrontendAngular2plusPage;

  beforeEach(() => {
    page = new ChatFrontendAngular2plusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
