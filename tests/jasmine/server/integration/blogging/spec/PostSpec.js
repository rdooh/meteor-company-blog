/* globals Player: false, Song: false */

describe('Post', function() {
  let post;

  beforeEach(function() {
    post = new Post();
  });

  describe('when there is a post class', function() {
    // not really bdd
    beforeEach(function() {
      //
    });

    it('should have a method called datestamp', function() {
      expect(post.datestamp()).toBeDefined();
    });

    it('should return today\'s date when datestamp is called', function() {
      expect(post.datestamp()).toEqual(moment().format('YYYY-MM-DD'));
    });
  });





  describe('when a post is created', function() {
    let newPostId;
    let currentUserId = 'asdfasdfasdfads'
    beforeEach(function() {
      newPostId = Posts.insert({
        "title": 'Why I Love Meteor',
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
