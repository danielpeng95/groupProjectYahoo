
var today = new Date();
console.log(`This is the current year ${today.getFullYear()}, current month ${today.getMonth()+1}, day of the month ${today.getDate()}, day of the week ${today.getDay()+1}.`)
module.exports = {
    url: 'https://answers.yahoo.com/',

    elements: { //Daniel
        //selectors for log in & log out
        signIn: '[class="SharedUH_signIn_PIot1"]',
        logIn: '[id="login-username"]',
        next: '[type="submit"]',
        pass: '[id="login-passwd"]',
        submit: '[name="verifyPassword"]',
        check: '[class="D(ib) Maw(100px) Ov(h) Whs(nw) Tov(e) Lh($userNavTextLh) Pstart(8px) Fz(14px) Fw(b) Va(t) ua-ie7_D(n) C(#4d00ae)"]',
        //selectors for tabs/categories
        cat: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        art: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        beauty: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        bus: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        car: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        comp: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        con: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        din: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        edu: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        ent: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        env: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        fam: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        foo: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        gam: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        hea: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        hom: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        loc: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        new: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        pet: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        pol: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        pre: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        sci: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        soc: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        socc: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        spo: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        tra: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        pro: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},

        //Nate
        //Search and Check results
        searchBar: '[name="p"]',
        searchButton: '.SharedUH_button1_2fHd_',
        searchResults: '[class=" reg searchCenterMiddle"]',
        //Daily News
        compTab: '[href="/dir/index?sid=396545660"]',
        article1: {
            selector: '(//a[@class="Fz-14 Fw-b Clr-b Wow-bw title"])[1]',
            locateStrategy: 'xpath'
        },
        articleDate: 'span[class="Clr-88 ya-localtime"]',
        currentDate: 'today'

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