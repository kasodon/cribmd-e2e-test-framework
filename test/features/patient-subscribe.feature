Feature: Patient Subscribe on CribMd

    As a user on the cribmd login app
    I want to login
    Because I want to subscribe

    Background:

        Given I open CribMD sandbox login page to subscribe

    Scenario Outline: Patient Subscribe on CribMd
        When I enter correct login details <user> <password> & and click login button
        Then Patient subscribe to a health plan

        Examples:
        |user| |password|
        |"hectaretoken@gmail.com"| |"start12345"|