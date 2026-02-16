Feature: Booking.com hotel search and currency selection
  As a user visiting Booking.com
  I want to select currency, destination, dates, and number of guests
  So that I can find a suitable hotel and view its availability

  Background:
    Given I am on the Booking.com homepage

  Scenario: Search for a hotel in London with specific filters and select the third hotel
    When click on currency button
    And select TRY from currency options
    And fill the destination with London
    And select first suggestion
    And open the calendar
    And click flexible button
    And select A month option
    And choose Mar2026 as the month
    And click on Select dates button in calendar
    And open adults part
    And set adults to 8
    And enable the Travelling with pets option
    And click Done button
    And click Search button
    Then I should see the list of hotels matching my criteria
    And click See availability button for the third hotel in the list

