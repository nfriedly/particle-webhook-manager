import Ember from 'ember';

export default Ember.Component.extend({
  model: Ember.computed.alias('particle.webhooks')
});
