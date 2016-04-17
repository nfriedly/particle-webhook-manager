import Ember from 'ember';
import particle from '../services/particle';

export default Ember.Component.extend({
  init () {
    this.events = [];
    particle.getEventStream()
      .then(function(stream) {
        console.log(stream);
      })
      .catch(function(e) {
        console.error('Error getting event stream', e)
      }); 
  }

});
