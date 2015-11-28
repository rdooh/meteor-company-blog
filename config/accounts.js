Accounts.config({
  forbidClientAccountCreation : false
});

if(Meteor.isClient){
  Accounts.ui.config({
    forceUsernameLowercase: true,
    forceEmailLowercase: true,
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });
}
