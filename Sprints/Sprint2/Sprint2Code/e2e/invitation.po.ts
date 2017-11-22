import { browser, by, element, protractor } from 'protractor';

export class Invitation {
    navigateTo(url: string) {
        return browser.get(url);
    }

    AddMember() {
        const invitation = element(by.id('invitlink'));
        invitation.click();
        const email = element(by.id('invitEmail'));
        const project = element(by.id('projectName'));
        const submit = element(by.id('btn-invitation'));
        email.sendKeys('second@gmail.com');
        project.sendKeys('cdp-projet');
        submit.click();
        const alertDialog = browser.switchTo().alert();
        browser.wait(protractor.ExpectedConditions.alertIsPresent(), 1500);
        expect(alertDialog.getText()).toEqual('Insertion avec succes');
        alertDialog.accept();

    }
    noAddMember() {
        const invitation = element(by.id('invitlink'));
        invitation.click();
        const email = element(by.id('invitEmail'));
        const project = element(by.id('projectName'));
        const submit = element(by.id('btn-invitation'));
        email.sendKeys('klklklklk@gmail.com');
        project.sendKeys('azzz');
        submit.click();
        const alertDialog = browser.switchTo().alert();
        browser.wait(protractor.ExpectedConditions.alertIsPresent(), 1500);
        expect(alertDialog.getText()).toEqual('!!!! Impossible d insérer !!!!');
        alertDialog.accept();

    }


}
