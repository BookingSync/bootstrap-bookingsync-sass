import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bsy-textarea', function(hooks) {
  setupRenderingTest(hooks);

  test('It renders a textarea', async function(assert) {
    await render(hbs`{{bsy-textarea}}`);
    assert.dom('textarea').exists('a textarea was rendered');
  });
});
