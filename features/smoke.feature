@Smoke
Feature: Verify basic E2E workflow

    @Samsung
    Scenario: Basic E2E scenario with login and play - No GeoBlock
        Given 'Samsung' application is open
        And accept all cookies
        When login is successful with email 'email@e.com' and password 'Password'
        Then profile page is accessed and displayed correctly
        And Home Screen is accessed and displayed correctly
        And video is played and navigated
        And logout is successful

