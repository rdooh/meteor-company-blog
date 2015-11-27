/* globals Player: false, Song: false */

describe('Post', function() {
  var post;

  beforeEach(function() {
    post = new Post();
  });

  describe('when post has been added', function() {
    beforeEach(function() {
      //
    });

    it('should run a test that returns true', function() {
      expect(post.test()).toBe(true);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  // it('tells the current song if the user has made it a favorite', function() {
  //   spyOn(song, 'persistFavoriteStatus');
  //
  //   player.play(song);
  //   player.makeFavorite();
  //
  //   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  // });
});
