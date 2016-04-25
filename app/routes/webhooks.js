import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log('finding all webhooks for route');
    return this.store.findAll('webhook');
  }
});
