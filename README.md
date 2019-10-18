# groupProjectYahoo

This is a QA Automation project with JavaScript/Selenium Webdriver/Nightwatch.js/Node.js

DevMountain Coding Bootcamp (Software QA | Test Automation Engineering Course)



Here is how you can run my test!

Make a folder called testing-resources first

Download:
1. Selenium Server Standalone (put it in your testing-resources folder)
2. Chromedriver.exe (should be the current version) (put it in your testing-resources folder)
3. Node.js

In your terminal:
1. type: npm i -g nightwatch (you have nightwatch installed now)



You need to create a file called: nightwatch.props.js in your testing-resources folder.
Here is an example below: make sure the path will need to be your own path.
module.exports = {
    resourcePath: "C:\\Users\\danielpeng95\\testing-resources\\",
    seleniumServer: "selenium-server-standalone-3.141.59.jar",
    chromedriver: "chromedriver.exe"
 }


Clone Repo and Run my program:
Clone from my repo and type "nightwatch" in the terminal
