var Yahoo

function Categ(pageObject) {
    var number = 1
    pageObject
        .waitForElementVisible(`(//a[@class=" Mstart-3 unselected D-ib"])[${number}]`)
        .click(`(//a[@class=" Mstart-3 unselected D-ib"])[${number}]`)
        number+= 1

}


module.exports = {
    beforeEach: browser => {
        Yahoo = browser.page.yahooPage()
        Yahoo.navigate()
    },
    after: browser => {
        Yahoo.end()
    },
    // 'Can we Log in & Log out?': browser => { //Daniel
    //     Yahoo
    //         .click('@signIn')
    //         .waitForElementVisible('@logIn')
    //         .setValue('@logIn', ['softwareqa10@yahoo.com', browser.Keys.ENTER])
    //         .waitForElementVisible('@pass')
    //         .setValue('@pass', ['SoftQA1995', browser.Keys.ENTER])
    //         .verify.containsText('@check', 'Software')
    // },
    'Can we Search & Check Results?': browser => { //Nate
        Yahoo
            .waitForElementVisible('@searchBar')
            .setValue('@searchBar', 'pizza')
            .click('@searchButton')
            .verify.containsText('[class=" reg searchCenterMiddle"]', 'pizza')

    // },
    // 'Can we change Tabs/Categories?': browser => { //Daniel
    //     Yahoo
    //         Categ(Yahoo)

    },
    'Do we get Daily news?': browser => { //Nate
        Yahoo
            .click('@compTab')
            .waitForElementVisible('@article1')
            .click('@article1')
            .verify.containsText('@articleDate', 'hours')
            

    // },
    // 'Can we ask/post questions?': browser => { //Daniel
    //     Yahoo

    }
}