import Ember from 'ember';

export default Ember.Route.extend({
  particle: Ember.inject.service(),
  model(path_params /*, transition */) {
    console.log('webhook route model', arguments)
    return this.store.findRecord('webhook', path_params.webhook_id) || {id: path_params.webhook_id, event: 'not found'};
  },
  parsed: Ember.computed('model', function() {
    console.log('parsed')
    var text = this.get('model');
    try {
      return JSON.parse(text);
    } catch(er) {
      return null;
    }
  }),
  error: Ember.computed('model', function() {
    console.log('error')
    var text = this.get('model');
    var error = null;
    try {
      JSON.parse(text);
    } catch(er) {
      error = er.message;
    }
    return error;
  }),
  isValid: Ember.computed.none('error')
});
