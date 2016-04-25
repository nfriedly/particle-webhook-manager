import Ember from 'ember';
import Particle from 'npm:particle-api-js';

export default Ember.Service.extend({
  store: Ember.inject.service('store'),

  username: null,
  auth: null,
  // todo: look at moving these to the store and creating proper models and adapters
  webhooks: [],
  eventStream: null,
  events: [],

  init() {
    this.particle = new Particle();
  },

  login(data) {
    this.set('username', data.username);
    return this.particle.login(data).then( this.handleLogin.bind(this) );
  },

  handleLogin(data) {
    // todo: see if I need to start a run loop here and in my event handler - https://guides.emberjs.com/v2.5.0/applications/run-loop/#toc_how-do-i-tell-ember-to-start-a-run-loop
    this.set('auth', data.body);
    return this.initEventStream();
  },

  fetchWebhooks() {
    return this.particle.listWebhooks({
      auth: this.get('auth.access_token')
    });
  },

  initEventStream() {
    return this.particle.getEventStream({
      auth: this.get('auth.access_token'),
      deviceId: 'mine' // special case for "all of my devices"
    }).then( (stream) => {
      stream.on('event', (event) => {
        var events = this.get('events');
        events.pushObject(event);
      });
    });
  }
  /*
   todo: publishEvent

   src/Particle.js:308-314

   Publish a event to the Particle Cloud

   Parameters

   $0 Object
     $0.name String Event name
     $0.data String Event data
     $0.isPrivate Boolean Should the event be publicly available?
     $0.auth String Access Token

   Returns Promise
   */


});
