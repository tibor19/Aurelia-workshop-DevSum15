import {App} from '../../src/app';

class RouterStub {
  configure(handler) {
    handler(this);
  }
  map(routes) {
    this.routes = routes;
  }
}

describe('the App module', () => {
  var sut;
  beforeEach(() => { sut = new App(new RouterStub()); });

  it('contains a router property', () => {
    expect(sut.router).toBeDefined();
  });

  it('configures the router title', () => {
    expect(sut.router.title).toEqual('The spaghetti code files');
  });

  it('should have a welcome route', () => {
    expect(sut.router.routes).toContain({ route: ['','home'],  moduleId: './home', nav: true, title:'Home' });
  });
});
