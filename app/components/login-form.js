import Ember from 'ember';
import particle from 'particle-api-js';

export default Ember.Component.extend({
  actions: {
    login: function() {
      // todo: figure out if there's a more appropriate way to grab the values
      particle.login({
        username: this.element.querySelector('.username').value,
        password: this.element.querySelector('.password').value
      }).then(function() {
        console.log(arguments);
        alert('logged in!');
      });
    }
  }
});
