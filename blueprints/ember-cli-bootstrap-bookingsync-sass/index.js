module.exports = {
  normalizeEntityName: function() {},

  beforeInstall: function() {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-cli-sass', target: 'latest' },
        { name: 'ember-cli-bootstrap-sassy', target: 'latest' }
      ]
    });
  }
};
