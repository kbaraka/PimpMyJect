import { browser, by, element, protractor, Key } from 'protractor';

export class CreateSprint {
    navigateTo() {
        const navigatbutton = element(by.id('addsprint'));
        navigatbutton.click();
    }

    addsprint() {
        const numero_input = element(by.id('numberSprint'));
        numero_input.sendKeys(7);
        const datedebut_input = element(by.id('startDate'));
        datedebut_input.sendKeys('12-12-2017');
        const end_input = element(by.id('endDate'));
        end_input.sendKeys('01-12-2017');
        const submit_button = element(by.id('btn-createSprint'));
        submit_button.click();

    }





}
