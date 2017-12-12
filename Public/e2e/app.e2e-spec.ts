import { AppPage } from './app.po';
import { Authentification } from './auth.po';
import { browser, by, element, protractor } from 'protractor';
import { BacklogList } from './backloglist.po';
import { Priorite } from './priorite.po';
import { AjouterUs } from './ajouterus.po';
import { CreateSprint } from './createsprint.po';
describe('CDP App', () => {
  let auth: Authentification;
  let backloglist: BacklogList;
  let prio: Priorite;
  let addus: AjouterUs;
  let create_sprint: CreateSprint;

  beforeEach(() => {

    auth = new Authentification();
    backloglist = new BacklogList();
    prio = new Priorite();
    addus = new AjouterUs();
    create_sprint = new CreateSprint();
  });

  it('Test scénario d`authentification avec succes ', () => {
    auth.navigateTo();
    auth.checkauth();
  });

  it('Test scénario du liste du backlog ', () => {
    backloglist.navigateTo();
    backloglist.checkbacklog();
  });

  it('Test scénario de modification des priorités ', () => {
    prio.changerpriorité();
  });

  it('Test scénario d`ajout d`une us  ', () => {
    addus.navigateTo();
    addus.addus();
    backloglist.navigateTo();
    addus.checkus();
  });

  it('Test scénario de création d`un sprint  ', () => {
    create_sprint.navigateTo();
    create_sprint.addsprint();
  });


});
