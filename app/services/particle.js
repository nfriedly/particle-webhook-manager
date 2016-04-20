import Ember from 'ember';
import Particle from 'npm:particle-api-js';

export default Ember.Service.extend({
  username: null,
  auth: null,
  token: Ember.computed('auth', function() {
    var auth = this.get('auth');
    return auth && auth.access_token || '';
  }),
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
    console.log('handlelogin');
    this.set('auth', data.body);
    return Ember.RSVP.all([
      this.fetchWebhooks(),
      this.initEventStream()
    ]);
  },

  fetchWebhooks() {
    return this.particle.listWebhooks({
      auth: this.get('token')
    }).then( (data) => {
      this.set('webhooks', data.body);
    });
  },

  initEventStream() {
    return this.particle.getEventStream({
      auth: this.get('token'),
      deviceId: 'mine' // special case for "all of my devices"
    }).then( (stream) => {
      stream.on('event', (event) => {
        var events = this.get('events');
        events.pushObject(event);
      });
    });
  }
  /*
   publishEvent

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
