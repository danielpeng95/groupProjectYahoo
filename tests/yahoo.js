var Yahoo
module.exports = {
    beforeEach: browser => {
        Yahoo = browser.page.yahooPage()
        Yahoo.navigate()
    },
    after: browser => {
        Yahoo.end()
    },
    'Can we Log in & Log out?': browser => { //Daniel
        Yahoo
            .click('@signIn')
            .waitForElementVisible('@logIn')
            .setValue('@logIn', ['softwareqa10@yahoo.com', browser.Keys.ENTER])
            .waitForElementVisible('@pass')
            .setValue('@pass', ['SoftQA1995', browser.Keys.ENTER])
            .verify.containsText('@check', 'Software')
    },
    'Can we Search & Check Results?': browser => { //Nate
        Yahoo
            .waitForElementVisible('@searchBar')
            .setValue('@searchBar', 'pizza')
            .click('@searchButton')
            .verify.containsText('[class=" reg searchCenterMiddle"]', 'pizza')
            
    },
    'Can we change Tabs/Categories?': browser => { //Daniel
        Yahoo

    },
    'Can we Sign up?': browser => { //Nate
        Yahoo

    },
    'Do we get Daily news?': browser => { //Daniel
        Yahoo

    },
    'Can we Upvote?': browser => { //Nate
        Yahoo

    },
    'Can we ask/post questions?': browser => { //Daniel
        Yahoo

    }
}