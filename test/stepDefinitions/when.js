import {Given, When, Then} from 'cucumber';
import patientLogin from '../pageobjects/patient-login.page';
import PatientBookAppointment from '../pageobjects/patient-book-appointment.page';
import PatientSubscribe from '../pageobjects/patient-subscribe.page';

// *** belongs to patient-loging  feature
When(/^I login with username and password "([^"]*)" "([^"]*)" into the text box for patient$/, function (arg1, arg2) {
    patientLogin.login(arg1, arg2);    // entering user name, password and and submiting the page
});

// *** belongs to patient-booking  feature
When(/^I enter correct login details "([^"]*)" "([^"]*)" & I click on the login button$/, function (arg1, arg2) {
    PatientBookAppointment.login(arg1, arg2);    // entering user name, password and and submiting the page
});

// *** belongs to patient-booking  feature
When(/^I enter correct login details "([^"]*)" "([^"]*)" & and click login button$/, function (arg1, arg2) {
    PatientSubscribe.login(arg1, arg2);    // entering user name, password and and submiting the page
});