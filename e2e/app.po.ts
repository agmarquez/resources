import { browser, by, element, protractor, until } from 'protractor';

export class AppPage {
  navigateTo(path: string) {
    return browser.get(path);
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  search(value: string) {
    this.writeInput('app-root', 'filter_search', value);
    this.writeInput('app-root', 'filter_search', protractor.Key.ENTER);
  }

  hitButton(path: string) {
    element(by.css(path)).click();
  }

  writeInput(path: string, input: string, value: string) {
    element(by.css(path + ' input[name="' + input + '"]')).sendKeys(value);
  }

  getContent(path: string) {
    return element(by.css(path)).getText();
  }
}
