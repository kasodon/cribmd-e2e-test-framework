import Page from './page';

class PatientLogin extends Page  {
  /**
  * define elements
  */
   get usernameInput()   { return $('//*[@id="mat-input-0"]'); }
   get passwordInput()   { return $('//*[@id="mat-input-1"]'); }
   get loginButton()     { return $('button*=Continue'); }

   get welcomeText()     { return $('p*=Welcome back!'); }

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

  getWelcomeMessage (){
    return this.welcomeText.getText();
  }

}

export default new PatientLogin();