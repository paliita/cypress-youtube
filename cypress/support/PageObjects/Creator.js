class Creator {
    getCreatorInfo() {
        return cy.get('#meta-contents > .ytd-watch-flexy > :nth-child(1)')
    }
    getCreatorName() {
        return cy.get('#upload-info > #channel-name > #container > #text-container > #text > .yt-simple-endpoint')
    }
    getUploadedVideo() {
        return cy.get('#tabsContent > :nth-child(4)')
    }
}
export default Creator