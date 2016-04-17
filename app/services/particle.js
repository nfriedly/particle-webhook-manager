import Ember from 'ember';
import Particle from 'npm:particle-api-js';

export default Ember.Service.extend({
  username: null,
  auth: null,
  token: Ember.computed('auth', function() {
    var auth = this.get('auth');
    return auth && auth.access_token || '';
  }),

  init() {
    this.particle = new Particle();
    this.webhooks = [];
  },

  login(data) {
    this.set('username', data.username);
    return this.particle.login(data).then( this.handleLogin.bind(this) );
  },

  handleLogin(data) {
    this.set('auth', data.body);
    return this.particle.listWebhooks({
      auth: this.get('token')
    }).then( (data) => this.set('webhooks', data.body));
  }
});
