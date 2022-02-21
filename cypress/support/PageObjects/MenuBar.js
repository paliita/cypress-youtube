class MenuBar {
    getHomePage() {
        return cy.get('[aria-label="หน้าแรก"] > #endpoint')
    }
    getExplorePage() {
        return cy.get('[aria-label="สำรวจ"] > #endpoint')
    }
    getSubscriptionPage() {
        return cy.get('[aria-label="การติดตาม"] > #endpoint')
    }
    getLibraryPage() {
        return cy.get('[aria-label="คลังวิดีโอ"] > #endpoint')
    }
    getHistoryPage() {
        return cy.get('[aria-label="ประวัติการเข้าชม"] > #endpoint')
    }
    getMainPage() {
        return cy.get('[role="main"]')
    }

}
export default MenuBar