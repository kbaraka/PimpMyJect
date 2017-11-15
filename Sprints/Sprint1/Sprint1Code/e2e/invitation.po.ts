import { browser, by, element } from 'protractor';

export class Invitation {
    navigateTo(url: string) {
        return browser.get(url);
    }
    auth()
    {       const email = element(by.id('login-email'));
            const password = element(by.id('login-password'));
            const submit = element(by.id('btn-login'));
            email.sendKeys('test@gmail.com');
            password.sendKeys('0000');
            submit.click();
    }
    AddMember() {
        expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/');
        const invitation = element(by.id('invitlink'));
           invitation.click();
        const email = element(by.id('invitEmail'));
        const project = element(by.id('projectName'));
        const submit = element(by.id('btn-invitation'));
        email.sendKeys('test@gmail.com');
        project.sendKeys('cdp');
        submit.click();
        browser.sleep(1000);
        const alertDialog = browser.switchTo().alert();
        expect(alertDialog.getText()).toEqual('Insertion avec succes');
        alertDialog.accept();
        browser.sleep(1000);
        const logout = element(by.id('logout'));
        logout.click();
    }
    noAddMember() {
        expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/');
        const invitation = element(by.id('invitlink'));
        invitation.click();
        const email = element(by.id('invitEmail'));
        const project = element(by.id('projectName'));
        const submit = element(by.id('btn-invitation'));
        email.sendKeys('klklklklk@gmail.com');
        project.sendKeys('azzz');
        submit.click();
        browser.sleep(1000);
        const alertDialog = browser.switchTo().alert();
        expect(alertDialog.getText()).toEqual('!!!! Impossible d insérer !!!!');
        alertDialog.accept();
        browser.sleep(1000);
        const logout = element(by.id('logout'));
        logout.click();
    }


}
