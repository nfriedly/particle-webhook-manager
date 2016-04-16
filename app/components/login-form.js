import Ember from 'ember';
import particle from '../services/particle';

export default Ember.Component.extend({
  particle: particle, //Ember.inject.service(),
  actions: {
    login: function() {
      // todo: figure out if there's a more appropriate way to grab the values
      this.particle.login({
        username: this.element.querySelector('.username').value,
        password: this.element.querySelector('.password').value
      }).then(() => {
        this.flashMessage('success', "You're now logged in!");
      }).catch((data) => {
        console.log(data);
        this.flashMessage({
          content: "There was an error logging you in: " + data.errorDescription,
          duration: 0, // Number in milliseconds, 0=infinity
          type: 'error'
        });
      });
    }
  }
});
