import Page from './page';

class PatientBookAppointment extends Page  {
  /**
  * define elements
  */
   get usernameInput()   { return $('//*[@id="mat-input-0"]'); }
   get passwordInput()   { return $('//*[@id="mat-input-1"]'); }
   get loginButton()     { return $('button*=Continue'); }

   get menuButton()   { return $('<app-sidebar-toggler />').$('button'); }
   get appButton()   { return $('*=Consultation'); }
   get consultButton()   { return $('*=Book an Appointment'); }
   get selectDocButton() { 
    browser.waitUntil(
      async () => (await $$('*=Book now')[0].getText()) === 'Book now',
      {
          timeout: 5000,
          timeoutMsg: 'expected text to be different after 5s'
      }
  );
     }
   get clickDocBtn() { return $$('*=Book now')[0]; }
   get date() { return $('<mat-datepicker-toggle />'); }
   get dateActive() { return $('.mat-calendar-body-active'); }
   get time() { return $('[formcontrolname="time_slot_id"]'); }
   get timeActive() { return $('.mat-active'); }
   get mode() { return $('[formcontrolname="mode_of_delivery"]'); }
   get modeSelect() { return $('[value="Telemedicine"]'); }
   get purpose() { return $('[formcontrolname="reason_for_appointment"]'); }
   get careType() { return $('[formcontrolname="type_of_care"]'); }
   get careSelect() { return $('[value="Primary Care"]'); }
   get bookButton()     { return $('button*=Book Doctor'); }

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

  bookAppointment(){
    // this.menuButton.click();
    this.appButton.click();
    this.consultButton.click();
    this.selectDocButton;
    this.clickDocBtn.click();
    this.date.click();
    this.dateActive.click();
    this.time.click();
    this.timeActive.click();
    this.mode.click();
    this.modeSelect.click();
    this.purpose.setValue('John Doe Lifestyle');
    this.careType.scrollIntoView();
    this.careType.click();
    this.careSelect.click();
    this.bookButton.click();
    browser.pause(2000);
  }

}

export default new PatientBookAppointment();