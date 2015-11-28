/* globals Player: false, Song: false */

describe('Post', function() {
  var post;

  beforeEach(function() {
    post = new Post();
  });

  // describe('when post has been added', function() {
  //   beforeEach(function() {
  //     //
  //   });
  //
  //   it('should have a method called datestamp', function() {
  //     expect(post.datestamp()).toBeDefined();
  //   });
  //
  //   it('should return today\'s date when datestamp is called', function() {
  //     expect(post.datestamp()).toEqual(moment().format('YYYY-MM-DD'));
  //   });
  // });

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
