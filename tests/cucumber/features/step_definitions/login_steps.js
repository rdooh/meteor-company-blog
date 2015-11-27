var assert = require('assert');

module.exports = function () {

  var helper = this;
  var url = require('url');


  this.Given(/^I am on the home page$/, function (callback) {
    client.url(url.resolve(process.env.ROOT_URL,''));
    callback();
  });

  this.When(/^I click on sign in link$/, function (callback) {
    client.waitForExist('#login-dropdown-list > a.dropdown-toggle', 7000);
    client.waitForVisible('#login-dropdown-list > a.dropdown-toggle');
    client.click('#login-dropdown-list > a.dropdown-toggle');
    callback();
  });

  this.When(/^I enter my authentication information$/, function (callback) {
    client.setValue('input#login-email', 'robdooh@example.com');
    client.setValue('input#login-password', 'test');
    client.click('#login-buttons-password');
    callback();
  });

  this.When(/^I enter incorrect authentication information$/, function (callback) {
      client.setValue('input#login-email', 'nobody@example.com');
      client.setValue('input#login-password', 'nothing');
      client.click('#login-buttons-password');
      callback();
    }
  );

  this.Then(/^I should be logged in$/, function (callback) {
    client.waitForExist('#login-buttons-open-change-password', 7000);
    client.waitForVisible('#login-dropdown-list > a.dropdown-toggle');
    client.getText('#login-dropdown-list > a.dropdown-toggle', function (err, username) {
        assert.equal(username, 'rob@example.com');
      });
    callback();
  });


  this.Then(/^I should see a user not found error$/, function (callback) {
    client.waitForExist('#login-dropdown-list > div.dropdown-menu > .alert-danger', 5000);
    client.getText('#login-dropdown-list > div.dropdown-menu > .alert-danger', function (err, errorMessage) {
        assert.equal(errorMessage, 'User not found');
      });
    callback();
  });

};
