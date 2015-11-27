(function () {

  'use strict';

  module.exports = function () {
    this.Before(function () {
      this.server.call('addUser', {email: "robdooh@example.com",password: "test",username:'robdooh'});
    });

  };
})();
