
var fs = require("fs")

function Categ(pageObject) {
    var number
    for (number = 1; number < 28; number++) {
        if (number > 10) {
            pageObject
                .scrollDownBy(30) //custom command in the page object
        }
        let count = number; // <----- added this so that there'd be a local variable that held the right value of "number" by the time nightwatch executed the queue'd commands
        pageObject
            .useXpath()
            .waitForElementVisible(`(//a[@class=" Mstart-3 unselected D-ib"])[${count}]`, 10000)
        pageObject
            .getText(`(//a[@class=" Mstart-3 unselected D-ib"])[${count}]`, function (result) {
                console.log(result.value)
                pageObject
                    .click(`(//a[@class=" Mstart-3 unselected D-ib"])[${count}]`) //moved this so that we'd get text then click and not confuse it maybe getting text during a load.
                    .useCss()
                    // I commented this out, because I think it's pulling the value before the page has moved.
                    // .waitForElementVisible('@catTitle', 10000) //not yet ready
                    // .verify.containsText('@catTitle', result.value) //not yet ready\
                    .expect.element("@catTitle").text.to.contain(result.value).before(10000)//just saying it should load before 10 seconds
                pageObject
                    .api.back()
            })
    }
}

function dateComp(browser, date1, date2) {
    browser
    var yearDate1 = date1.slice(8)
    var yearDate2 = date2.slice(8)
    var monthDate1 = date1.slice(5, 7)
    var monthDate2 = date2.slice(5, 7)
    var dayDate1 = date1.slice(1, 4)
    var dayDate2 = date2.slice(1, 4)
    console.log(yearDate1, monthDate1, dayDate1)
    if (yearDate1 > yearDate2) {

        console.log('2nd article year', yearDate2, 'is less than', yearDate1)

    }
    else if (yearDate1 = yearDate2) {
        if (monthDate1 > monthDate2) {
            console.log('2nd article month', monthDate2, 'is less than', monthDate1)
            return true
        }
        else if (monthDate1 = monthDate2) {
            if (dayDate1 >= dayDate2) {
                console.log('2nd article day', dayDate2, 'is less than or equal to', dayDate1)
                return true
            }
            else {
                return false
            }
        }
        else {
            return false
        }
    }
    else {
        console.log('Year 1 is less')
        return false
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
            .api.pause(2000)
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
    'Do we get relevant replies to tech questions?': browser => { //Nate
        fs.writeFileSync('./testAssets/timeCheck.txt', " ")
        Yahoo
            .click('@compTab')
            .waitForElementVisible('@article1')
            .api.pause(1000)
        Yahoo
            .click('@article1')
            .api.pause(1000)
        Yahoo
            .waitForElementVisible('@articleDate')
            .getText('@articleDate', function (result) {
                console.log(result.value)
                var t = result.value
                let splitText = t.split(" ")
                splitText.pop()
                splitText.shift()
                splitText.shift()
                t = splitText
                console.log(`this is the sliced and diced t: ${t}`)
                if (t == "hour" || t == "mins" || t == "hours" || t == "min") {
                    fs.writeFileSync('./testAssets/timeCheck.txt', "reply is within a day")
                }
                else {
                    fs.writeFileSync('./testAssets/timeCheck.txt', "reply is over a day")
                }
            })
    },
    'Can we change Tabs/Categories?': browser => { //Daniel
        Yahoo
        Categ(Yahoo) //function on top of this page
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
                // console.log(t)
            })
        Yahoo
            .api.windowHandles(function (result) {
                Yahoo
                    .api.switchWindow(originalWindow)
            })
        Yahoo
            .api.maximizeWindow()
        Yahoo
            .waitForElementVisible('@qBox', 8000)
        // .perform(() => console.log(`This is post getText: ${t}`)) //perform is unique, it ques it up normallly now
        Yahoo
            .perform(() => Yahoo.setValue('@qBox', t))

        Yahoo
            .api.pause(3000)
        Yahoo
            .waitForElementVisible('@qSubmit', 8000)
            .click('@qSubmit')
        Yahoo
            .waitForElementVisible('@logIn')
            .setValue('@logIn', ['softwareqa10@yahoo.com', browser.Keys.ENTER])
            .waitForElementVisible('@pass')
            .setValue('@pass', ['SoftQA1995', browser.Keys.ENTER])
            .waitForElementVisible('@qResult', 8000) //there is a daily question limit. once i reach it, this will not work
            .verify.containsText('@qResult', t)
    },



    'Check sort by relevance/time': browser => {
        var date1
        var date2
        Yahoo
            .setValue('@searchBar', ['walrus', browser.Keys.ENTER])
            .pause(5000)
            // .verify.containsText('@relevance1','walrus'||'Walrus') 
            // .verify.containsText('@relevance2','walrus')
            // .verify.containsText('@relevance3','walrus')
            .click('@timeSort')

            .getText('@articleDate1', function (result) {
                date1 = result.value
            })
            .getText('@articleDate1', function (result) {
                date2 = result.value
            })
            .perform(() => {
                Yahoo
                dateComp(Yahoo, date1, date2)
            })
    }
}


