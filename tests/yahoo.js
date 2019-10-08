function Categ(pageObject) {
    var number
    for (number = 10; number < 28; number++) {
        pageObject
        // .api.resizeWindow(1600, 900) //don't need this now that we have scrollDown
        if (number > 10) {
            pageObject
                .scrollDownBy(30) //custom command in the page object
        }
        pageObject
            .useXpath()
            .waitForElementVisible(`(//a[@class=" Mstart-3 unselected D-ib"])[${number}]`, 10000)
            .click(`(//a[@class=" Mstart-3 unselected D-ib"])[${number}]`)
            .useCss()
            .waitForElementVisible('@catTitle')
            .getText('@catTitle', function (result) {
                let t = result.value
                console.log(result.value)
                pageObject.waitForElementVisible('@catResult')
                pageObject.verify.containsText('@catResult', t)
            })
        pageObject.api.back()
    }
}

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
            .api.pause(5000)
        Yahoo
            .waitForElementVisible('@ID')
            .click('@ID')
            // .moveToElement('@ID', 10, 10) //this will hover over //will work too
            .waitForElementVisible('@out')
            .click('@out')
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
        Categ(Yahoo) //function on top of this page
    },
    'Do we get Daily news?': browser => { //Nate
        Yahoo

    },
    'Can we ask/post questions?': browser => { //Daniel 
        var originalWindow = ''
        var newWindow = ''
        var t = ''

        Yahoo
            .api.windowHandles(function (result) { //"nameing" the first window
                originalWindow = result.value[0]
            })
        Yahoo
            .api.openNewWindow()
        Yahoo
            .api.windowHandles(function (result) { //"naming" the second window and switching over
                newWindow = result.value[1]
                Yahoo
                    .api.switchWindow(newWindow)
            })
        Yahoo
            .api.url('https://www.conversationstarters.com/generator.php')
        Yahoo
            .waitForElementVisible('@word')
            .getText('@word', function (result) {
                t = result.value
                console.log(result.value)

                Yahoo
                    .api.windowHandles(function (result) {
                        Yahoo
                            .api.switchWindow(originalWindow)
                    })
                Yahoo
                    .waitForElementVisible('@qBox', 8000)
                console.log(t)
                Yahoo
                    .setValue('@qBox', t)

                Yahoo
                    .api.pause(3000)
                Yahoo
                    .api.maximizeWindow()
                Yahoo
                    .waitForElementVisible('@qSubmit')
                    .click('@qSubmit')
                Yahoo
                    .waitForElementVisible('@logIn')
                    .setValue('@logIn', ['softwareqa10@yahoo.com', browser.Keys.ENTER])
                    .waitForElementVisible('@pass')
                    .setValue('@pass', ['SoftQA1995', browser.Keys.ENTER])
                    // .waitForElementVisible('@qResult', 8000) //there is a daily question limit. once i reach it, this will not work
                    // .verify.containsText('@qResult', t)
            })

    }
}