describe('App', function() {
  beforeEach(function() {
  });

  describe('when App is in the Lib folder', function() {
    // not really bdd
    beforeEach(function() {
      //
    });

    it('should have a property called Utils', function() {
      expect(App.Utils).toBeDefined();
    });

    it('should have a method called Utils.formatSlug', function() {
      expect(App.Utils.formatSlug).toBeDefined();
    });

    it('should have a method called Utils.formatSlug', function() {
      expect(App.Utils.formatSlug).toBeDefined();
    });

  });


  describe('when App.Utils.formatSlug is run on "This is a Test!!"', function() {
    it('should convert this to "this-is-a-test"', function() {
      expect(App.Utils.formatSlug("This is a Test!!")).toEqual("this-is-a-test");
    });

  });
});
