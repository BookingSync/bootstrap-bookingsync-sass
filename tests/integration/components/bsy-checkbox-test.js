import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { find, click } from 'ember-native-dom-helpers';

module('Integration | Component | bsy-checkbox', function(hooks) {
  setupRenderingTest(hooks);

  test('It renders a checkbox', async function(assert) {
    await render(hbs`{{bsy-checkbox}}`);
    assert.dom('input[type="checkbox"]').exists('Checkbox is rendered');
  });

  test('It sets the checked value', async function(assert) {
    await render(hbs`{{bsy-checkbox}}`);
    assert.dom('input').isNotChecked('Checkbox is not checked');

    await render(hbs`{{bsy-checkbox checked=true}}`);
    assert.dom('input').isChecked('Checkbox is checked');

    await render(hbs`{{bsy-checkbox checked=false}}`);
    assert.dom('input').isNotChecked('Checkbox is not checked');
  });

  test('The first positional param is checked', async function(assert) {
    await render(hbs`{{bsy-checkbox true}}`);
    assert.dom('input').isChecked('Checkbox is checked');
  });

  test('Clicking the checkbox triggers the update action', async function(assert) {
    await render(hbs`{{bsy-checkbox value update=(action (mut value))}}`);
    await click('input');
    assert.equal(this.get('value'), true);

    await click('input');
    assert.equal(this.get('value'), false);
  });

  test('It can accept an outside toggle of checked', async function(assert) {
    await render(hbs`{{bsy-checkbox checked=checked update=(action (mut checked))}}`);

    await click('input');
    this.set('checked', false);
    await click('input');

    assert.strictEqual(this.get('checked'), true);
  });

  test('It can accept an outside toggle of checked - using positional param', async function(assert) {
    await render(hbs`{{bsy-checkbox checked update=(action (mut checked))}}`);

    await click('input');
    this.set('checked', false);
    await click('input');

    assert.strictEqual(this.get('checked'), true);
  });

  test('Outside value of null', async function(assert) {
    this.set('checked', true);
    await render(hbs`{{bsy-checkbox checked}}`);
    this.set('checked', null);
    assert.dom('input').isNotChecked('Checkbox is not checked');
  });

  test('Outside value of undefined', async function(assert) {
    this.set('checked', true);
    await render(hbs`{{bsy-checkbox checked}}`);
    this.set('checked', undefined);
    assert.dom('input').isNotChecked('Checkbox is not checked');
  });

  test('classNames is not passed as an html attribute', async function(assert) {
    await render(hbs`{{bsy-checkbox classNames="testing"}}`);
    assert.dom('input').hasAttribute('classnames', undefined);
  });
});
