class SearchingPage {
    getSearchBar() {
        return cy.get('#search-form > #container')
    }
    getSearchInput() {
        return cy.get('#search-input > #search')
    }
    getSearchButton() {
        return cy.get('#search-icon-legacy')
    }
    getSearchedVideo() {
        return cy.get(':nth-child(3) > :nth-child(2) > #dismissible')
    }
}
export default SearchingPage