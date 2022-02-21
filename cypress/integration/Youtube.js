/// <reference types="cypress" />

import MenuBar from '../support/PageObjects/MenuBar'
import SearchingPage from '../support/PageObjects/SearchingPage'
import Creator from '../support/PageObjects/Creator'

describe('Youtube Scenario', () => {
    before(() => {
        cy.visit('https://www.youtube.com')
    })

    const menuBar = new MenuBar()
    const searchingPage = new SearchingPage()
    const creator = new Creator()

    it('Go To Home Page', () => {
        menuBar.getHomePage().click()
        menuBar.getMainPage().should('be.visible')
    })

    it('Go To Explore Page', () => {
        menuBar.getExplorePage().click()
        menuBar.getMainPage().should('be.visible')
    })

    it('Go To Subscriptions Page', () => {
        menuBar.getSubscriptionPage().click()
        menuBar.getMainPage().should('be.visible')
    })

    it('Go To Library Page', () => {
        menuBar.getLibraryPage().click()
        menuBar.getMainPage().should('be.visible')
    })

    it('Go To History Page', () => {
        menuBar.getHistoryPage().click()
        menuBar.getMainPage().should('be.visible')
    })

    it('Display Search Bar', () => {
        searchingPage.getSearchBar().should('be.visible')
    })

    it('Type And Serch', () => {
        searchingPage.getSearchInput().type('Cleverse')
        searchingPage.getSearchButton().click()
    })

    it('Click On The Video', () => {
        searchingPage.getSearchedVideo().click()
    })

    it('See Creator Info', () => {
        creator.getCreatorInfo().scrollIntoView().should('be.visible')
        creator.getCreatorName().click()
    })

    it('See All Uploaded Videos', () => {
        creator.getUploadedVideo().click()
    })
})
