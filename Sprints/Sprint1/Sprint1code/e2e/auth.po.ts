import { browser, by, element, protractor} from 'protractor';

export class Authentification {
    navigateTo() {
        return browser.get('/login');
    }
    checkauth() {
        const email = element(by.id('login-email'));
        const password = element(by.id('login-password'));
        const submit = element(by.id('btn-login'));
        email.sendKeys('test@gmail.com');
        password.sendKeys('0000');
        submit.click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/equipes');

    }

    checkunauth() {
        const email = element(by.id('login-email'));
        const password = element(by.id('login-password'));
        const submit = element(by.id('btn-login'));
        email.sendKeys('hello@gmail.com');
        password.sendKeys('0000');
        submit.click();
        const alertDialog = browser.switchTo().alert();
        browser.wait(protractor.ExpectedConditions.alertIsPresent(), 1500);
        expect(alertDialog.getText()).toEqual('!!!!Utilisteur Inconu Veuillez resaisir un Email et Password Valid !!!!');
        alertDialog.accept();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/login');
    }
}
