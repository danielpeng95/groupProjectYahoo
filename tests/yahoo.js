var Yahoo
module.exports = {
    beforeEach: browser => {
        Yahoo = browser.page.yahooPage()
        Yahoo.navigate()
    },
    after: browser => {
        Yahoo.end()
    },
    'Can we Log in & Log out?': browser => {
        Yahoo
            
    },
    'Can we Search & Check Results?': browser => {
        Yahoo
            .waitForElementVisible('@searchBar')
            .setValue('@searchBar', 'pizza')
            .click('@searchButton')
            .verify.containsText('[class=" reg searchCenterMiddle"]', 'pizza')
            
    },
    'Can we change Tabs/Categories?': browser => {
        Yahoo
            
    },
    'Can we Sign up?': browser => {
        Yahoo
            
    },
    'Do we get Daily news?': browser => {
        Yahoo
            
    },
    'Can we Upvote?': browser => {
        Yahoo
            
    },
    'Can we ask/post questions?': browser => {
        Yahoo
            
    }
}