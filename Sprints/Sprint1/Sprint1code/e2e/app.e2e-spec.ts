import { AppPage } from './app.po';
import { Authentification } from './auth.po';
import { browser, by, element, protractor } from 'protractor';

describe('CDP App', () => {
  let page: AppPage;
  let auth: Authentification;


  beforeEach(() => {

    var origFn = browser.driver.controlFlow().execute;
    browser.driver.controlFlow().execute = function () {
      var args = arguments;
      origFn.call(browser.driver.controlFlow(), function () {
        return protractor.promise.delayed(5);
      });
      return origFn.apply(browser.driver.controlFlow(), args);
    };
    page = new AppPage();
    auth = new Authentification();

  });

  it('Test scénario d`authentification échoue ', () => {
    auth.navigateTo();
    auth.checkunauth();
  });
  it('Test scénario d`authentification avec succes ', () => {
    auth.navigateTo();
    auth.checkauth();
  });



});
