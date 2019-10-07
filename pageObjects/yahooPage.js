module.exports = {
    url: 'https://answers.yahoo.com/',
    
    // elements: { //one way to write CSS selector
    //     searchBar: '[type="text"]',
    //     resultCity: '[class="current-weather__location"]',
    //     errorMessage: '[class="error-message__message"]',
    //     searchButton: '[class="enter-location__submit"]',
    //     searchAgainButton: '[class="current-weather__search-again"]',
    //     tryAgainButton: '[class="error-message__try-again"]'
    // }


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