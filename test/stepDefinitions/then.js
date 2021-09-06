import { Then }     from 'cucumber';
import patientLogin from '../pageobjects/patient-login.page';
import PatientBookAppointment from '../pageobjects/patient-book-appointment.page';
import PatientSubscribe from '../pageobjects/patient-subscribe.page';

Then(/^I should see the message "([^"]*)" on the patient dashboard page$/, function (message) {
  patientLogin.getWelcomeMessage().should.equal(message);
});

Then(/^Patient book appointment with a doctor$/, function () {
  PatientBookAppointment.bookAppointment();
});

Then(/^Patient subscribe to a health plan$/, function () {
  PatientSubscribe.subscribe();
});
