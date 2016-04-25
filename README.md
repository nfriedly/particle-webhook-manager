# Particle-webhook-manager

Online tool to create, manage, and test particle [Webhooks]. Currently very early stage.

Todo:

* Webhook management: view/create/delete, "update" button that creates new and then deletes old
* Event creator
* Tests
* CI & CD - https://github.com/poetic/ember-cli-github-pages
* layout & design
* Automatic redirect to login and back
* Use serializer instead of tweaking in adapter
* Gravitar for currently logged in user 
* use gravitar instead of identicon for manual events
* Remember user and offer a logout option
* Perhaps show a stream of public events on homepage (because it can be shown before login).

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


[Webhooks]: https://docs.particle.io/guide/tools-and-features/webhooks/
