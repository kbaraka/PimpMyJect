import { browser, by, element } from 'protractor';

export class Equipes {
    navigateTo(url: string) {
        return browser.get(url);
    }

    Checkproject() {
        const equipe = element(by.id('equipeslink'));
        equipe.click();
        expect(element(by.xpath('.//*[.="cdp-projet"]')).isPresent()).toBeTruthy();
    }



}
