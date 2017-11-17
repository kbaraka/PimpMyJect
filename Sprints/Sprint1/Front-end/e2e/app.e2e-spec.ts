import { AppPage } from './app.po';
import { Authentification } from './auth.po';
import { Invitation } from './invitation.po';
import { Equipes } from './equipes.po';
import { Project } from './project.po';
import { Register } from './register.po';
import { browser, by, element, protractor } from 'protractor';

describe('CDP App', () => {
  let page: AppPage;
  let auth: Authentification;
  let invit: Invitation;
  let equipes: Equipes;
  let project: Project;
  let register: Register;

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
    invit = new Invitation();
    equipes = new Equipes();
    project = new Project();
    register = new Register();
  });
  it('Test scénario d`inscription avec succes ', () => {
    register.navigateTo();
    register.register();
  });

  it('Test scénario d`inscription échoué ', () => {
    register.navigateTo();
    register.unregister();
  });
  it('Test scénario d`authentification échoue ', () => {
    auth.navigateTo();
    auth.checkunauth();
  });
  it('Test scénario d`authentification avec succes ', () => {
    auth.navigateTo();
    auth.checkauth();
  });


  it('Test scénario de création de projet avec succes ', () => {

    project.AddProject();
  });


  it('Test scénario de création de projet échoué ', () => {

    project.noAddProject();
  });
  it('Test scénario d`invitation avec succes ', () => {

    invit.AddMember();
  });

  it('Test scénario d`invitation échoue ', () => {

    invit.noAddMember();
  });

  it('Test scénario de liste des équipes  ', () => {

    equipes.Checkproject();
  });

});
