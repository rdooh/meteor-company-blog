if (Meteor.users.find().count() === 0) {
  Accounts.createUser({
    email: 'rob@company.com',
    password: 'rob'
  });
  Accounts.createUser({
    email: 'joe@company.com',
    password: 'joe'
  });
}
