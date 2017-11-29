import { browser, by, element, protractor } from 'protractor';

export class AjouterUs {
    random_text;
    random_numero;
    random_priorite;
    random_difficulte;
    navigateTo() {
        const navigatbutton = element(by.id('ajoutus'));
        navigatbutton.click();
    }

    addus() {
        const numero_input = element(by.id('inputNumber'));
        this.random_numero = Math.floor(Math.random() * 90);
        numero_input.sendKeys(this.random_numero.toString());

        const priorite_input = element(by.id('inputPriority'));
        this.random_priorite = Math.floor(Math.random() * 90);
        priorite_input.sendKeys(this.random_priorite.toString());

        const difficulte_input = element(by.id('inputDifficulty'));
        this.random_difficulte = Math.floor(Math.random() * 90);
        difficulte_input.sendKeys(this.random_difficulte.toString());

        const description_input = element(by.id('inputDescription'));
        this.random_text = Math.random().toString(36).substr(2, 900);
        description_input.sendKeys(this.random_text);

        const button_submit = element(by.id('insertus'));
        button_submit.click();
        browser.refresh();


    }
    checkus() {
        expect(element(by.
            // tslint:disable-next-line:max-line-length
            xpath('.//*[.="' + this.random_text + '"]'))
            .isPresent()).toBeTruthy();
        expect(element(by.
            // tslint:disable-next-line:max-line-length
            xpath('.//*[.="' + this.random_numero + '"]'))
            .isPresent()).toBeTruthy();
        expect(element(by.
            // tslint:disable-next-line:max-line-length
            xpath('.//*[.="' + this.random_priorite + '"]'))
            .isPresent()).toBeTruthy();
        expect(element(by.
            // tslint:disable-next-line:max-line-length
            xpath('.//*[.="' + this.random_difficulte + '"]'))
            .isPresent()).toBeTruthy();
    }


}
