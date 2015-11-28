// You can include npm dependencies for support files in tests/cucumber/package.json
var _ = require('underscore');

module.exports = function () {

  // You can use normal require here, cucumber is NOT run in a Meteor context (by design)
  var url = require('url');

  this.Given(/^I am a guest$/, function () {
    return this.server.call('reset'); // server is a connection to the mirror
  });

  this.Given(/^I am a blog owner$/, function () {
    return this.server.call('reset'); // server is a connection to the mirror
  });

  this.When(/^I navigate to "([^"]*)"$/, function (relativePath) {
    // process.env.ROOT_URL always points to the mirror
    client.url(url.resolve(process.env.ROOT_URL, relativePath));
  });

  this.Then(/^I should see the title "([^"]*)"$/, function (expectedTitle) {
    // no callbacks, no promises, just simple synchronous code!
    client.waitForExist('title');
    expect(client.getTitle()).toEqual(expectedTitle);
  });

  this.Then(/^I should see the H1 heading "([^"]*)"$/, function (expectedH1) {
    client.waitForExist('H1');
    expect(client.getText('H1')).toEqual(expectedH1);
  });

};
