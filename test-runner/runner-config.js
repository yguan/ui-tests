
var config = {
    webdriver: {
        capabilities: {
            browserName: 'chrome'
        }
    },
    testScriptServer: {
        port: 9000,
        url: 'http://localhost:9000/',
        appDir: 'C:\\Users\\coding\\Documents\\GitHub\\ui-tests\\'
    },
    jquerySiteUrl: 'http://www.jquery.com/',
    extjsSiteUrl: 'http://docs.sencha.com/extjs/4.2.2/',
    runExtjsTests: true
};

module.exports = config;
