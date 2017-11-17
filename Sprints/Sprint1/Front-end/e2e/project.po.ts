import { browser, by, element } from 'protractor';

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
        browser.sleep(1000);
        const alertDialog = browser.switchTo().alert();
        browser.sleep(1000);
        expect(alertDialog.getText()).toEqual('Projet créer avec succes');
        browser.sleep(1000);
        alertDialog.accept();
        browser.sleep(1000);

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
        browser.sleep(300);
        const alertDialog = browser.switchTo().alert();
        expect(alertDialog.getText()).toEqual('!!!! Impossible d insérer !!!!');
        alertDialog.accept();
        browser.sleep(300);

    }



}
