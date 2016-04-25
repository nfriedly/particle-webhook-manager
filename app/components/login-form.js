import Ember from 'ember';

export default Ember.Component.extend({
  particle: Ember.inject.service(),
  username: '',
  password: '',
  actions: {
    login: function() {
      this.get('particle').login({
        username: this.get('username'),
        password: this.get('password')
      }).then(() => {
        this.flashMessage('success', "You're now logged in!");
      }).catch((err) => {
        console.log(err);
        this.flashMessage({
          content: "There was an error logging you in: " + (err.errorDescription || err.message),
          duration: 0, // Number in milliseconds, 0=infinity
          type: 'error'
        });
      });
    }
  }
});
