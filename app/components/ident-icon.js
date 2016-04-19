import Ember from 'ember';

// built with https://www.npmjs.com/package/ember-cli-identicon
export default Ember.Component.extend({
  identicon: Ember.inject.service(),
  id: '',
  // default options:
  // 48x48px square
  // 20% margin between the edge of the image and the generated pattern
  // background color RGB(224, 224, 224)
  margin: 0.2,
  size: 48,
  bgColors: [224,224,224],
  src: Ember.computed(['id', 'size', 'margin', 'bgColors'], function() {
    // generate an identicon using the user's email address and any provided
    // options, with
    return this.get('identicon').create(this.get('id'), {
      size: this.get('size'),
      margin: this.get('margin'),
      bgColors: this.get('bgColors')
    });
  })
});
