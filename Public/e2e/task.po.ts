import { browser, by, element, protractor, Key } from 'protractor';

export class Task {
    navigateTo() {
        const navigate_button = element(
            by.id('listtask'));
        navigate_button.click();
    }
    FindTask() {
        expect(element(by.
            // tslint:disable-next-line:max-line-length
            xpath('.//*[.="TestTest"]'))
            .isPresent()).toBeTruthy();

    }





}
