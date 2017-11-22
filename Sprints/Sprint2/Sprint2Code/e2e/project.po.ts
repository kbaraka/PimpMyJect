import { browser, by, element, protractor } from 'protractor';

export class Project {
    navigateTo(url: string) {
        return browser.get(url);
    }

    AddProject() {
        const project = element(by.id('projectlink'));
        project.click();
        const projectname = element(by.id('projectName'));
        const submit = element(by.id('btn-invitation'));
        projectname.sendKeys('cdp-projet');
        submit.click();

        const alertDialog = browser.switchTo().alert();
        browser.wait(protractor.ExpectedConditions.alertIsPresent(), 1500);
        expect(alertDialog.getText()).toEqual('Projet créer avec succes');

        alertDialog.accept();


    }


    noAddProject() {
        const project = element(by.id('projectlink'));
        project.click();
        const projectname = element(by.id('projectName'));
        const submit = element(by.id('btn-invitation'));
        projectname.clear().then(function () {
            projectname.sendKeys('cdp-projet');
        });
        submit.click();
        const alertDialog = browser.switchTo().alert();
        browser.wait(protractor.ExpectedConditions.alertIsPresent(), 1500);
        expect(alertDialog.getText()).toEqual('!!!! Impossible d insérer !!!!');
        alertDialog.accept();


    }



}
