@Smoke
Feature: Verify basic E2E workflow

    # Suitest credentials should be located in C:\Users\<USERNAME>\.suitest
    # This file should be created with content like:
    # {
    #   "username": "name@mail.com",
    #   "password": "password"
    # }

    # To build project run:
    # tsc

    # To run in interactive mode run the command below:
    # npm start --cucumberOpts.tags @Smoke

    # To run in automatic mode run the command below:
    # suitest automated -k=297RVkvzd4 -p=b1493567f925050fa249f5857f085606fa215ee2c1b9358e54032669af042c19 -t=14195 node node_modules/cucumber/bin/cucumber-js features/**/*.feature --require step-definitions/**/*.ts --require cucumber/**/*.ts --require-module ts-node/register --cucumberOpts.tags @Samsung

    @Samsung
    Scenario: Basic E2E scenario with login and play - No GeoBlock
        Given 'Samsung' application is open
        And accept all cookies
        When login is successful with email 'name@mail.com' and password 'Password'
        Then profile page is accessed and displayed correctly
        And Home Screen is accessed and displayed correctly
        And video is played and navigated
        And logout is successful

    @LG
    Scenario: Basic E2E scenario with login and play - No GeoBlock
        Given 'LG' application is open
        And accept all cookies
        When login is successful with email 'name@mail.com' and password 'Password'
        Then profile page is accessed and displayed correctly
        And Home Screen is accessed and displayed correctly
        And video is played and navigated
        And logout is successful

