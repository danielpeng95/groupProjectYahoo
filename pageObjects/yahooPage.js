
var today = new Date();
console.log(`This is the current year ${today.getFullYear()}, current month ${today.getMonth()+1}, day of the month ${today.getDate()}, day of the week ${today.getDay()+1}.`)

module.exports = {
    url: 'https://answers.yahoo.com/',
    commands: [{
        scrollDownBy: function(pixels){ //custom command for scrolling down
            this.api.execute(`window.scrollBy(0, ${pixels})`)
            return this
        }
    }],
    
    elements: { //Daniel
    elements: {
        //Daniel
        //selectors for log in & log out
        signIn: '[class="SharedUH_signIn_PIot1"]',
        logIn: '[id="login-username"]',
        next: '[type="submit"]',
        pass: '[id="login-passwd"]',
        submit: '[name="verifyPassword"]',
        check: '[class="D(ib) Maw(100px) Ov(h) Whs(nw) Tov(e) Lh($userNavTextLh) Pstart(8px) Fz(14px) Fw(b) Va(t) ua-ie7_D(n) C(#4d00ae)"]',
        ID: 'span[class="D(ib) Maw(100px) Ov(h) Whs(nw) Tov(e) Lh($userNavTextLh) Pstart(8px) Fz(14px) Fw(b) Va(t) ua-ie7_D(n) C(#4d00ae)"]',
        out: '[id="uh-signout"]',

        //selectors for tabs/categories
        cat: {selector: '(//a[@class=" Mstart-3 unselected D-ib"])[1]', locateStrategy: 'xpath'},
        catTitle: '[id="ya-sub-category-title"]',

        catResult: '[class="Bgc-bl06 Px-14 Pb-14 Pt-10 Clr-w"]',

        //selectors for posting questions
        word: '[id="random"]',
        qBox: '.ask-ques-title',
        qSubmit: '[data-ylk="slk:submit"]',
        qResult: '[class="Fz-24 Fw-300 Mb-10 Wow-bw"]',



        //Nate
        //selectors for search & check results
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
        currentDate: 'today',
        //Sort
        relevance1: 'div[class="dd algo fst AnswrsV2"]',
        relevance2: {
            selector: '(//div[@class="dd algo AnswrsV2"])[4]',
            locateStrategy: 'xpath',
        },
        relevance3: {
            selector: 'div[class="dd algo lst AnswrsV2"]',
            locateStrategy: 'xpath',
        },
        timeSort: {
            selector: '(//span[@class="txt"])[2]',
            locateStrategy: 'xpath'
        },
        // timeSort1: 'div[class="dd algo fst AnswrsV2"]',
        // timeSort2: {
        //     selector: '(//div[@class="dd algo AnswrsV2"])[3]',
        //     locateStrategy: 'xpath'
        // },
        // timeSort3: '(//div[@class="dd algo AnswrsV2"])[5]',
        // timeSort4: 'div[class="dd algo lst AnswrsV2"]',
        articleDate1: {
            selector: '(//span[@class=" fc-4th"])[2]',
            locateStrategy: 'xpath'
        }, 
        articleDate2: {
            selector: '(//span[@class=" fc-4th"])[8]',
            locateStrategy: 'xpath'
        },
        articleDate3: {
            selector: '(//span[@class=" fc-4th"])[12]',
            locateStrategy: 'xpath'
        },
        articleDate4: {
            selector: '(//span[@class=" fc-4th"])[20]',
            locateStrategy: 'xpath'
        }
        
    }   
}