Feature: Patient Book Appointment on CribMd

    As a user on the cribmd login app
    I want to login
    Because I want to book appointment

    Background:

        Given I open CribMD sandbox login page on browser

    Scenario Outline: Patient Book Appointment on CribMd
        When I enter correct login details <user> <password> & I click on the login button
        Then Patient book appointment with a doctor

        Examples:
        |user| |password|
        |"hectaretoken@gmail.com"| |"start12345"|