var checkPoint2
module.exports = {
    beforeEach: browser => {
        checkPoint2 = browser.page.checkPoint2()
        checkPoint2.navigate()
    },
    after: browser => {
        checkPoint2.end()
    },
    'Test name': browser => {
        checkPoint2
            
    }
}