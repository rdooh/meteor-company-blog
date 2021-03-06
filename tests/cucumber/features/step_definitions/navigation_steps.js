// You can include npm dependencies for support files in tests/cucumber/package.json
var _ = require('underscore');

module.exports = function () {

  // You can use normal require here, cucumber is NOT run in a Meteor context (by design)
  var url = require('url');

  this.Given(/^I am a guest$/, function () {
    server.call('reset'); // server is a connection to the mirror
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

  this.Then(/^I should see the H2 heading "([^"]*)"$/, function (expectedH2) {
    client.waitForExist('h2');
    expect(client.getText('h2')).toEqual(expectedH2);
  });

  this.Then(/^I should see the H3 heading "([^"]*)"$/, function (expectedH3) {
    client.waitForExist('h3');
    expect(client.getText('h3')).toEqual(expectedH3);
  });

  this.Then(/^I should see a button "([^"]*)"$/, function (buttonText) {
    client.waitForExist('.editing-tools');
    client.waitForExist('button#create-new-post');
    expect(client.getText('button#create-new-post')).toEqual(buttonText);
  });

  this.Then(/^I should not see a button "([^"]*)"$/, function () {
    client.waitForExist('.editing-tools');
    expect(client.isExisting('button#create-new-post')).toEqual(false);
  });

  this.Then(/^I should see a first post called "([^"]*)"$/, function (postTitle) {
    client.waitForExist('.contact-box');
    expect(client.getText('.contact-box > a > h2')[0]).toEqual(postTitle);
  });

  this.Then(/^I should see the only post called "([^"]*)"$/, function (postTitle) {
    client.waitForExist('.contact-box');
    expect(client.getText('.contact-box > a > h2')).toEqual(postTitle);
  });



  this.Then(/^I should see an edit button "([^"]*)"$/, function (buttonText) {
    client.waitForExist('.editing-tools');
    expect(client.isExisting('button#editPost')).toEqual(true);
  });

  this.Then(/^I should see a delete button "([^"]*)"$/, function (buttonText) {
    client.waitForExist('.editing-tools');
    expect(client.isExisting('button#deletePost')).toEqual(true);
  });

  this.Then(/^I should not see an edit button "([^"]*)"$/, function (buttonText) {
    client.waitForExist('.editing-tools');
    expect(client.isExisting('button#editPost')).toEqual(false);
  });

  this.Then(/^I should not see a delete button "([^"]*)"$/, function (buttonText) {
    client.waitForExist('.editing-tools');
    expect(client.isExisting('button#deletePost')).toEqual(false);
  });







};
