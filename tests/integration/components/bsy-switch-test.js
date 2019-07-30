import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bsy switch', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(3);

    await render(hbs`{{bsy-switch}}`);

    assert.dom('[data-test-toggle]').exists();
    assert.dom('[data-test-toggle] [aria-checked]').doesNotExist();

    await click('[data-test-toggle] input');

    assert.dom('[data-test-toggle] [aria-checked]').exists();
  });
});
