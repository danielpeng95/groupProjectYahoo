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