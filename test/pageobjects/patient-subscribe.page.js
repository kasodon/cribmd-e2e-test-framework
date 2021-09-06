import Page from './page';

class PatientSubscribe extends Page  {
  /**
  * define elements
  */
   get usernameInput()   { return $('//*[@id="mat-input-0"]'); }
   get passwordInput()   { return $('//*[@id="mat-input-1"]'); }
   get loginButton()     { return $('button*=Continue'); }

   // get menuButton()   { return $('<app-sidebar-toggler />').$('button'); }
   get subscribeButton()   { return $('*=Subscription'); }
   get subBtnLoaded(){ 
    browser.waitUntil(
      async () => (await $$('button*=Subscribe')[0].isDisplayed()) == true,
      {
          timeout: 5000,
          timeoutMsg: 'expected text to not be different after 5s'
      }
  );
     }
   get subBtn() { return $$('*=Subscribe')[0]; }
   get popUp() { return $('.container--popup'); }
   get popTabLoaded(){ 
    browser.waitUntil(
      async () => (await $('.instructions__message').getText()) === 'Use any of the test cards below to complete this payment',
      {
          timeout: 5000,
          timeoutMsg: 'expected text to not be different after 5s'
      }
  );
     }
   get popBtn() { return $$('.card')[0]; }
   get payButton()     { return $('button*=Pay NGN 500'); }

  /**
   * define or overwrite page methods
   */

  open () {
      super.open('https://sandbox.cribmd.dev/login')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
      browser.pause(1000);
  }

  get textDisplayed () { return $('h2*=Welcome back!'); }

  waitForloginPageToLoad () {
    if(!this.textDisplayed.isDisplayed()){
      this.textDisplayed.waitForDisplayed(10000);
    }
  }

  login (username, password) {
    //this.waitForloginPageToLoad();
    this.usernameInput.setValue(username);
    this.passwordInput.setValue(password);
    this.loginButton.click();
  }

  subscribe(){
    // this.menuButton.click();
    this.subscribeButton.click();
    this.subBtnLoaded;
    this.subBtn.click();
    this.popTabLoaded;
    browser.switchWindow(this.popUp);
    this.popBtn.click();
    this.payButton.click();
    browser.pause(2000);
  }

}

export default new PatientSubscribe();