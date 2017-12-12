import { browser, by, element, protractor } from 'protractor';

export class BacklogList {
    navigateTo() {
        const equipe = element(by.id('equipeslink'));
        equipe.click();
        const project = element(by.id('CDP'));
        project.click();
    }
    checkbacklog() {
        expect(element(by.
            // tslint:disable-next-line:max-line-length
            xpath('.//*[.="En tant que développeur, je souhaite pouvoir obtenir la liste des équipes dont je suis membre afin de voir leur composition."]'))
            .isPresent()).toBeTruthy();
    }


}
