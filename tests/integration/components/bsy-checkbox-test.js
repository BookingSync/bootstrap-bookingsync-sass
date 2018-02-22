import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find, click } from 'ember-native-dom-helpers';

moduleForComponent('bsy-checkbox', 'Integration | Component | bsy-checkbox', {
  integration: true
});

test('It renders a checkbox', function(assert) {
  this.render(hbs`{{bsy-checkbox}}`);
  assert.ok(find('input[type="checkbox"]'), 'Checkbox is rendered');
});

test('It sets the checked value', function(assert) {
  this.render(hbs`{{bsy-checkbox}}`);
  assert.notOk(find('input').checked, 'Checkbox is not checked');

  this.render(hbs`{{bsy-checkbox checked=true}}`);
  assert.ok(find('input').checked, 'Checkbox is checked');

  this.render(hbs`{{bsy-checkbox checked=false}}`);
  assert.notOk(find('input').checked, 'Checkbox is not checked');
});

test('The first positional param is checked', function(assert) {
  this.render(hbs`{{bsy-checkbox true}}`);
  assert.ok(find('input:checked'), 'Checkbox is checked');
});

test('Clicking the checkbox triggers the update action', async function(assert) {
  this.render(hbs`{{bsy-checkbox value update=(action (mut value))}}`);
  await click('input');
  assert.equal(this.get('value'), true);

  await click('input');
  assert.equal(this.get('value'), false);
});

test('It can accept an outside toggle of checked', async function(assert) {
  this.render(hbs`{{bsy-checkbox checked=checked update=(action (mut checked))}}`);

  await click('input');
  this.set('checked', false);
  await click('input');

  assert.strictEqual(this.get('checked'), true);
});

test('It can accept an outside toggle of checked - using positional param', async function(assert) {
  this.render(hbs`{{bsy-checkbox checked update=(action (mut checked))}}`);

  await click('input');
  this.set('checked', false);
  await click('input');

  assert.strictEqual(this.get('checked'), true);
});

test('Outside value of null', function(assert) {
  this.set('checked', true);
  this.render(hbs`{{bsy-checkbox checked}}`);
  this.set('checked', null);
  assert.notOk(find('input').checked, 'Checkbox is not checked');
});

test('Outside value of undefined', function(assert) {
  this.set('checked', true);
  this.render(hbs`{{bsy-checkbox checked}}`);
  this.set('checked', undefined);
  assert.notOk(find('input').checked, 'Checkbox is not checked');
});

test('classNames is not passed as an html attribute', function(assert) {
  this.render(hbs`{{bsy-checkbox classNames="testing"}}`);
  assert.equal(find('input').getAttribute('classnames'), undefined);
});
