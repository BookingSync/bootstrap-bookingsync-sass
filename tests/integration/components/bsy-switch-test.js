import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bsy switch', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{bsy-switch}}`);

    assert.equal(find('*').textContent.trim().search(/Off/) !== -1, true,
      'should render default Off label');
    assert.equal(find('*').textContent.trim().search(/On/) !== -1, true,
      'should render default On label');
  });
});
