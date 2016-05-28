module.exports = {
  normalizeEntityName: function() {},

  beforeInstall: function() {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-cli-sass', target: 'latest' },
        { name: 'ember-cli-bootstrap-sassy', target: 'latest' },
        { name: 'ember-one-way-controls', target: 'latest' },
        { name: 'ember-power-select', target: 'latest' },
        { name: 'ember-modal-dialog', target: 'latest' }
      ]
    });
  }
};
