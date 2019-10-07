module.exports = {
    url: 'https://answers.yahoo.com/',
    
    elements: { //Daniel
        //selectors for log in & log out
        signIn: '[class="SharedUH_signIn_PIot1"]',
        logIn: '[id="login-username"]',
        next: '[type="submit"]',
        pass: '[id="login-passwd"]',
        submit: '[name="verifyPassword"]',
        check: '[class="D(ib) Maw(100px) Ov(h) Whs(nw) Tov(e) Lh($userNavTextLh) Pstart(8px) Fz(14px) Fw(b) Va(t) ua-ie7_D(n) C(#4d00ae)"]'
    },


    elements: { //Nate
        searchBar: '[name="p"]',
        searchButton: '.SharedUH_button1_2fHd_',
        searchResults: '[class=" reg searchCenterMiddle"]'
    }

    // elements: { //xPath Selector
    //     searchBar: {selector: '//input[@type="text"]', locateStrategy: 'xpath'},
    //     resultCity: {selector: '//h3[@class="current-weather__location"]', locateStrategy: 'xpath'},
    //     errorMessage: {selector: '//h3[@class="error-message__message"]', locateStrategy: 'xpath'},
    //     searchButton: {selector: '//button[@class="enter-location__submit"]', locateStrategy: 'xpath'},
    //     searchAgainButton: {selector: '//button[@class="current-weather__search-again"]', locateStrategy: 'xpath'},
    //     tryAgainButton: {selector: '//button[@class="error-message__try-again"]', locateStrategy: 'xpath'}
    // }
    
}