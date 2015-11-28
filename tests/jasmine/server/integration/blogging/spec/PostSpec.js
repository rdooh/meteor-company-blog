/* globals Player: false, Song: false */

describe('Post', function() {
  let post;

  beforeEach(function() {
    post = new Post();
  });

  describe('when a post is created', function() {
    let newPostId;
    let currentUserId = 'asdfasdfasdfads'
    beforeEach(function() {
      Posts.remove({});
      newPostId = Posts.insert({
        "title": 'Why I Love Meteor',
        "slug": 'why-i-love-meteor',
        "description": 'This is a cool blog post',
        createdAt: ( new Date(2015, 3, 14 ).getTime() / 1000 ),
        updatedAt: ( new Date(2015, 5, 18 ).getTime() / 1000 ),
        "ownerId": currentUserId
      });
    });

    it('should exist with methods attached', function() {
      let newPost = Posts.findOne(newPostId);
      expect(newPost.datestamp()).toBeDefined();
    });

    it('should belong to currentUserId', function() {
      let newPost = Posts.findOne(newPostId);
      expect(newPost.ownerId).toEqual(currentUserId);
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
