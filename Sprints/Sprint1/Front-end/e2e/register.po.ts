import { browser, by, element } from 'protractor';

export class Register {
    navigateTo() {
        return browser.get('/login');
    }
    register() {
        const email = element(by.id('login-email'));
        const password = element(by.id('login-password'));
        const submit = element(by.id('btn-registration'));
        email.sendKeys('test3@gmail.com');
        password.sendKeys('0000');
        submit.click();
        const alertDialog = browser.switchTo().alert();
        expect(alertDialog.getText()).toEqual('Vous  êtes bien inscrit veuillez vous connecter');
        browser.sleep(1000);
        alertDialog.accept();
        browser.sleep(1000);

    }

    unregister() {
        const email = element(by.id('login-email'));
        const password = element(by.id('login-password'));
        const submit = element(by.id('btn-registration'));
        email.sendKeys('test3@gmail.com');
        password.sendKeys('0000');
        submit.click();
        const alertDialog = browser.switchTo().alert();
        expect(alertDialog.getText()).toEqual('!!!! Information Incorrect !!!!');
        browser.sleep(1000);
        alertDialog.accept();
        browser.sleep(1000);

    }
}
