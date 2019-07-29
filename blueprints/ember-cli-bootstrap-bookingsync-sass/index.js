module.exports = {
  normalizeEntityName() {},

  beforeInstall() {
    return this.addAddonsToProject({
      packages: [
        'ember-cli-sass',
        'ember-cli-bootstrap-sassy',
        'ember-power-select',
        'ember-modal-dialog',
        'ember-toggle',
        'ember-tooltips'
      ]
    });
  }
};
