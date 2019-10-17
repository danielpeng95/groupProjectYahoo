# groupProjectYahoo

This is a QA Automation project with JavaScript/Selenium Webdriver/Nightwatch.js/Node.js

DevMountain Coding Bootcamp (Software QA | Test Automation Engineering Course)



Here is how you can run my test!

Make a folder called testing-resources first

Download:
1. Selenium Server Standalone
2. Chromedriver (should be the current version) (put it in your testing-resources folder)
3. Node.js

In your terminal:
1. type: npm i -g nightwatch (you have nightwatch installed now)


You need to create a file called: nightwatch.props.js in your testing-resources folder
Here is an example: make sure the path will need to be your own path to your testing-resources folder

module.exports = {
    resourcePath: "C:\\Users\\benpe\\DevMountain\\testing-resources\\",
    seleniumServer: "selenium-server-standalone-3.141.59.jar",
    chromedriver: "chromedriver.exe"
 }
