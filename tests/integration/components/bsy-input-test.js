import { run } from '@ember/runloop';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find, fillIn, blur } from 'ember-native-dom-helpers';

moduleForComponent('bsy-input', 'Integration | Component | bsy-input', {
  integration: true
});

test('It renders an input', function(assert) {
  this.render(hbs`{{bsy-input}}`);
  assert.ok(find('input'), 'Input is rendered');
});

test('The default type of the input is "text"', function(assert) {
  this.render(hbs`{{bsy-input}}`);
  assert.ok(find('input[type="text"]'), 'Input type is text');
});

test('The type param changes the type of the input', function(assert) {
  this.render(hbs`{{bsy-input type="password"}}`);
  assert.ok(find('input[type="password"]'), 'Input type is password');
});

test('It puts the value into the input', function(assert) {
  this.render(hbs`{{bsy-input value="test"}}`);
  assert.equal(find('input').value, 'test', 'input\'s value is \'test\'');
});

test('Changing the value updates the input', function(assert) {
  this.set('value', 'foo');
  this.render(hbs`{{bsy-input value}}`);
  assert.equal(find('input').value, 'foo', 'Input\'s value is \'foo\'');
  this.set('value', 'bar');
  assert.equal(find('input').value, 'bar', 'Input\'s value is \'bar\'');
});

test('Value can be the first positional param', function(assert) {
  this.render(hbs`{{bsy-input "test"}}`);
  assert.equal(find('input').value, 'test', 'input\'s value is \'test\'');
});

test('Outside positional param value of null', function(assert) {
  this.set('value', 'hello world');
  this.render(hbs`{{bsy-input value}}`);
  this.set('value', null);
  assert.equal(find('input').value, '');
});

test('Outside positional param value of undefined', function(assert) {
  this.set('value', 'hello world');
  this.render(hbs`{{bsy-input value}}`);
  this.set('value', undefined);
  assert.equal(find('input').value, '');
});

test('Typing in the input triggers the update action', async function(assert) {
  this.render(hbs`{{bsy-input value update=(action (mut value))}}`);
  await fillIn('input', 'foo');
  assert.equal(this.get('value'), 'foo', 'Value is updated to \'foo\'');
});

test('Changing the input value triggers the update action', async function(assert) {
  this.render(hbs`{{bsy-input value update=(action (mut value))}}`);
  await fillIn('input', 'foo');
  await blur('input');
  assert.equal(this.get('value'), 'foo', 'Value is updated to \'foo\'');
});

test('Updating the value binding does not send an update action', function(assert) {
  assert.expect(1);
  let fired = false;
  this.on('update', () => fired = true);
  this.set('value', 'hey');
  this.render(hbs`{{bsy-input value update=(action 'update')}}`);
  this.set('value', 'ho');
  assert.equal(fired, false, 'The update action should not have fired');
});

test('Does not throw an error updating an number input', function(assert) {
  assert.expect(0);
  this.set('value', 1);

  this.render(hbs`{{bsy-input value update=(action (mut value))}}`);

  fillIn('input', '12');
});

test('Can bind the placeholder attribute', function(assert) {
  this.render(hbs`{{bsy-input placeholder="testing"}}`);
  assert.equal(find('input').getAttribute('placeholder'), 'testing');
});

test('positionalParamValue is not passed as an html attribute', function(assert) {
  this.render(hbs`{{bsy-input "testing"}}`);
  assert.equal(find('input').getAttribute('positionalparamvalue'), undefined);
});

test('classNames is not passed as an html attribute', function(assert) {
  this.render(hbs`{{bsy-input classNames="testing"}}`);
  assert.equal(find('input').getAttribute('classnames'), undefined);
});

test('update is not passed as an html attribute', function(assert) {
  this.render(hbs`{{bsy-input update=(action (mut value))}}`);
  assert.equal(find('input').getAttribute('update'), undefined);
});

test('Does not update value when it is destroyed', async function(assert) {
  this.set('value', 'foo');
  this.render(hbs`{{bsy-input value update=(action (mut value))}}`);
  run(() => this.clearRender());
  assert.equal(this.get('value'), 'foo', 'Value is still foo');
});
