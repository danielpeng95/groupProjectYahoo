

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
        ID: '[id="yui_3_18_0_4_1570550030871_1006"]',
        out: '[id="uh-signout"]',


        //selectors for tabs/categories
        cat: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        catTitle: '[id="ya-sub-category-title"]',
        catResult: '[class="Bgc-bl06 Px-14 Pb-14 Pt-10 Clr-w"]',



        //Nate
        //selectors for search & check results
        searchBar: '[name="p"]',
        searchButton: '.SharedUH_button1_2fHd_',
        searchResults: '[class=" reg searchCenterMiddle"]'


    }    
}