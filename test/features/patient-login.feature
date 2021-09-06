Feature: Patient login on CribMd

    As a user on the cribmd login page
    I want to login
    Because I want to book appointment

    Background:

        Given I open CribMD sandbox login page

    Scenario Outline: Patient login on CribMd
        When I login with username and password <user> <password> into the text box for patient
        Then I should see the message "Welcome back!" on the patient dashboard page

        Examples:
        |user| |password|
        |"hectaretoken@gmail.com"| |"start12345"|