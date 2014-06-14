# UI Tests

This repository contains the source code to show how to write end-to-end UI automation tests that can be run in a browser directly. This is production ready version of [Browser Tests](https://github.com/yguan/browser-tests).

## The Key Ideas Behind This Repository

You can find the details [here](http://yguan.github.io/repos/writings/#test-automation?article=browser-tests).

## Development

#### Overview of Folder Structure

* `css` contains css files used by the tests for reporting.
* `js` contains test code to be injected to a site under test.
 * `base.js` is the main entry point to the test code.
 * `lib` contains common code used by tests.
   * `async-chain.js` is a really simple implementation that supports the chaining of asynchronous calls.
   * `wait.js` is a really solid implementation of "wait for condition".
   * `browser.js` is the abstraction of browser interaction.
 * `spec` contains the tests.
 * `test-runner` contains node.js code that uses WebDriver to inject test code to the site under test.
   * `runner-config.js` contains all the configuration for get the tests running automatically.
   * `script-injector.js` contains the code to inject test code, and it can be run in a brower's developer tools' console.
   * `test-runner.js` is the node.js code that starts a server to host test code, starts Selenium server, uses WebDriver to open a browser window that points to the site under test, and injects the test code to the browser window.

## Run the Tests Automatically

Here are the steps;

* Get the git repository.
* Run `npm install`.
* In your command line consoles
 * go to the `test-runner` folder
 * run `node test-runner.js`


## License

[MIT](http://opensource.org/licenses/MIT)