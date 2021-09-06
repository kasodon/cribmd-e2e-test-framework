import { Given} from 'cucumber';
import patientLogin from '../pageobjects/patient-login.page';
import PatientBookAppointment from '../pageobjects/patient-book-appointment.page';
import PatientSubscribe from '../pageobjects/patient-subscribe.page';

Given('I open CribMD sandbox login page', function () {
  // Write code here that turns the phrase above into concrete actions
  patientLogin.open();     // navigating to login page
});

Given('I open CribMD sandbox login page on browser', function () {
  // Write code here that turns the phrase above into concrete actions
  PatientBookAppointment.open();     // navigating to login page
});

Given('I open CribMD sandbox login page to subscribe', function () {
  // Write code here that turns the phrase above into concrete actions
  PatientSubscribe.open();     // navigating to login page
});