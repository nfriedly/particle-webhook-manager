import DS from 'ember-data';

// https://docs.particle.io/guide/tools-and-features/webhooks/#webhook-options
export default DS.Model.extend({
  event: DS.attr(),
  // data: DS.attr(), data is apparently not an allowed property on ember data models
  url: DS.attr(),
  requestType: DS.attr(), // Usually one of GET, POST, PUT, DELETE
  deviceID: DS.attr(), // limit this webhook to responding to this device
  mydevices: DS.attr('boolean', {default: true}),
  headers: DS.attr(), // object
  form: DS.attr(), // object, will change the content-type header to application/x-www-form-urlencoded
  json: DS.attr(), // object, will change the content-type header to application/json
  query: DS.attr(), // object
  auth: DS.attr(), // object w/ username and password fields
  noDefaults: DS.attr(),
  rejectUnauthorized: DS.attr(),
  azure_sas_token: DS.attr(),
  responseTemplate: DS.attr(),
  errorResponseTopic: DS.attr()
});
