import Ember from 'ember'
import DS from 'ember-data';

export default DS.Adapter.extend({
  particle: Ember.inject.service(),
  findRecord(store, type, id, snapshot) {
    // particle webhooks are immutable - if we have a snapshot already, then it's guaranteed to be correct
    if (snapshot) {
      return snapshot;
    }
    // otherwise fetch it.
    // there's no way to fetch a single webhook via particle.js,
    // so we're just going to fetch all of them and pull out the one we want.
    // The HTTP response should already be in cache in most cases
    return this.findAll().then(function(webhooks) {
      return webhooks.findBy('id', id);
    });
  },
  createRecord() {},
  updateRecord() {},
  deleteRecord() {},
  findAll( /*store, type, sinceToken*/) {
    return this.get('particle').fetchWebhooks().then((data) => {
      console.log(data);

      // todo: move this logic to a serializer
      var webhooks = data.body;
      webhooks.forEach( (wh) => {
        wh.type = 'webhook';
        // data is a reserved word on ember data models
        wh._data = wh.data;
        delete wh.data;
      });

      return webhooks;
    });
  },
  query() {}
});
