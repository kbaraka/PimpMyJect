import { AppPage } from './app.po';
import { Authentification } from './auth.po';
import { browser, by, element, protractor } from 'protractor';
import { BacklogList } from './backloglist.po';
import { Priorite } from './priorite.po';
import { AjouterUs } from './ajouterus.po';
import { CreateSprint } from './createsprint.po';
import { CreateTask } from './createtask.po';
import { Task } from './task.po';
import { DeleteTask } from './deletetask.po';
import { CreateBuild } from './create_build.po';
describe('CDP App', () => {
  let auth: Authentification;
  let backloglist: BacklogList;
  let prio: Priorite;
  let addus: AjouterUs;
  let create_sprint: CreateSprint;
  let create_task: CreateTask;
  let list_task: Task;
  let delete_task: DeleteTask;
  let create_build: CreateBuild;

  beforeEach(() => {

    auth = new Authentification();
    backloglist = new BacklogList();
    prio = new Priorite();
    addus = new AjouterUs();
    create_sprint = new CreateSprint();
    create_task = new CreateTask();
    list_task = new Task();
    delete_task = new DeleteTask();
    create_build = new CreateBuild();
  });



 it('Test scénario d`authentification avec succes ', () => {
    auth.navigateTo();
    auth.checkauth();
  });
  it('Test scénario d`ajout d`une tache  ', () => {
    create_task.navigateTo();
    create_task.CreateTask();
  });
  it('Test scénario d`affichage des taches ', () => {
    list_task.navigateTo();
    list_task.FindTask();
  });
  it('Test scénario de suppression d`une tache ', () => {
    delete_task.DeleteTask();
  });
  it('Test scénario d`ajout d`un build  ', () => {
    create_build.navigateTo();
    //create_build.CreateBuild();
  });
/*
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
  }); */


});
