Meteor.startup(function() {
  Accounts.ui.config({
    passwordSignupFields: 'EMAIL_ONLY'
  });

  AccountsEntry.config({
    homeRoute: '/',
    dashboardRoute: '/blog',
    language: 'en',
    showSignupCode: false
  });
});
