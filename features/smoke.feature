@Smoke
Feature: Verify basic E2E workflow

    @Samsung
    Scenario: Basic E2E scenario with login and play - No GeoBlock
        Given 'Samsung' application is open
        And accept all cookies
        When login is successful with email 'Vitalli.rurenko@rtl.nl' and password 'President2@'
        Then profile page is accessed and displayed correctly
        And Home Screen is accessed and displayed correctly
        And video is played and navigated
        And logout is successful

