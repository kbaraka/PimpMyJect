import { browser, by, element, protractor, Key } from 'protractor';

export class CreateTask {
    navigateTo() {
        const equipe = element(by.id('equipeslink'));
        equipe.click();
        const project = element(by.id('CDP'));
        project.click();
        const sprintbutton = element(by.xpath('//*[@id="navbarCollapse"]/ul[1]/li[4]/a'));
        sprintbutton.click();
        const sprint = element(
            by.xpath('/html/body/app-root/app-equipes/app-workspace/app-sprint/app-listersprint/table/tbody/tr[1]/td[1]/button/a'));
        sprint.click();
        const createtask = element(
            by.id('createtask'));
        createtask.click();
    }

    CreateTask() {
         const numero_tache = element(by.id('tasknumber'));
        const numero_us = element(by.id('usnumber'));
        const description = element(by.id('description'));
        const personne_charge = element(by.id('person'));
        const statut = element(by.id('status'));
        const e2e = element(by.id('teste2e'));

        numero_tache.sendKeys(8);
        numero_us.sendKeys(7);
        description.sendKeys('TestTest');
        personne_charge.sendKeys('Moi');
        statut.sendKeys('Todo');
        e2e.sendKeys('Vrai');

        const submit_button = element(by.id('btn-invitation'));
        submit_button.click();

    }





}
