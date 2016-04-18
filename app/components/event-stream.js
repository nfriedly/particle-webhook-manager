import Ember from 'ember';

export default Ember.Component.extend({
  particle: Ember.inject.service(),
  model: Ember.computed.alias('particle.events')
});
