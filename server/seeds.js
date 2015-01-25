Meteor.startup(function() {

  Factory.define('item', Items, {
    name: function() { return Fake.sentence(); },
    rating: function() { return _.random(1, 5); }
  });

  if (Items.find({}).count() === 0) {

    _(10).times(function(n) {
      Factory.create('item');
    });

  }

  if( Meteor.users.find().count() === 0 ){
    var uid = Accounts.createUser({
      email: "test@test.com",
      password: "password1"
    });
    Meteor.users.update({'_id': uid},{$set: {'profile': {name: "John Doe"}}});
    Roles.addUsersToRoles(uid, "blog_admin", Roles.GLOBAL_GROUP);
  }
});
