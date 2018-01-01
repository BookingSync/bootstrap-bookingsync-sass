module.exports = {
  normalizeEntityName: function() {},

  beforeInstall: function() {
    return this.addAddonsToProject({
      packages: [
        'ember-cli-sass',
        'ember-cli-bootstrap-sassy',
        'ember-one-way-controls',
        'ember-power-select',
        'ember-modal-dialog',
        'ember-toggle',
        'ember-tooltips@3.0.0-beta.2'
      ]
    });
  }
};
