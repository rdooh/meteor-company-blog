(function () {

  'use strict';

  module.exports = function () {
    this.Before(function () {
      this.server.call('addUsers');
      this.server.call('addPost');
    });

  };
})();
