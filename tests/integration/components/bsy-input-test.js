import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { fillIn, blur } from 'ember-native-dom-helpers';

module('Integration | Component | bsy-input', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.actions = {};
    this.send = (actionName, ...args) => this.actions[actionName].apply(this, args);
  });

  test('It renders an input', async function(assert) {
    await render(hbs`{{bsy-input}}`);
    assert.dom('input').exists('Input is rendered');
  });

  test('The default type of the input is "text"', async function(assert) {
    await render(hbs`{{bsy-input}}`);
    assert.dom('input[type="text"]').exists('Input type is text');
  });

  test('The type param changes the type of the input', async function(assert) {
    await render(hbs`{{bsy-input type="password"}}`);
    assert.dom('input[type="password"]').exists('Input type is password');
  });

  test('It puts the value into the input', async function(assert) {
    await render(hbs`{{bsy-input value="test"}}`);
    assert.dom('input').hasValue('test', 'input\'s value is \'test\'');
  });

  test('Changing the value updates the input', async function(assert) {
    this.set('value', 'foo');
    await render(hbs`{{bsy-input value}}`);
    assert.dom('input').hasValue('foo', 'Input\'s value is \'foo\'');
    this.set('value', 'bar');
    assert.dom('input').hasValue('bar', 'Input\'s value is \'bar\'');
  });

  test('Value can be the first positional param', async function(assert) {
    await render(hbs`{{bsy-input "test"}}`);
    assert.dom('input').hasValue('test', 'input\'s value is \'test\'');
  });

  test('Outside positional param value of null', async function(assert) {
    this.set('value', 'hello world');
    await render(hbs`{{bsy-input value}}`);
    this.set('value', null);
    assert.dom('input').hasValue('');
  });

  test('Outside positional param value of undefined', async function(assert) {
    this.set('value', 'hello world');
    await render(hbs`{{bsy-input value}}`);
    this.set('value', undefined);
    assert.dom('input').hasValue('');
  });

  test('Typing in the input triggers the update action', async function(assert) {
    await render(hbs`{{bsy-input value update=(action (mut value))}}`);
    await fillIn('input', 'foo');
    assert.equal(this.get('value'), 'foo', 'Value is updated to \'foo\'');
  });

  test('Changing the input value triggers the update action', async function(assert) {
    await render(hbs`{{bsy-input value update=(action (mut value))}}`);
    await fillIn('input', 'foo');
    await blur('input');
    assert.equal(this.get('value'), 'foo', 'Value is updated to \'foo\'');
  });

  test('Updating the value binding does not send an update action', async function(assert) {
    assert.expect(1);
    let fired = false;
    this.actions.update = () => fired = true;
    this.set('value', 'hey');
    await render(hbs`{{bsy-input value update=(action 'update')}}`);
    this.set('value', 'ho');
    assert.equal(fired, false, 'The update action should not have fired');
  });

  test('Does not throw an error updating an number input', async function(assert) {
    assert.expect(0);
    this.set('value', 1);

    await render(hbs`{{bsy-input value update=(action (mut value))}}`);

    fillIn('input', '12');
  });

  test('Can bind the placeholder attribute', async function(assert) {
    await render(hbs`{{bsy-input placeholder="testing"}}`);
    assert.dom('input').hasAttribute('placeholder', 'testing');
  });

  test('positionalParamValue is not passed as an html attribute', async function(assert) {
    await render(hbs`{{bsy-input "testing"}}`);
    assert.dom('input').hasAttribute('positionalparamvalue', undefined);
  });

  test('classNames is not passed as an html attribute', async function(assert) {
    await render(hbs`{{bsy-input classNames="testing"}}`);
    assert.dom('input').hasAttribute('classnames', undefined);
  });

  test('update is not passed as an html attribute', async function(assert) {
    await render(hbs`{{bsy-input update=(action (mut value))}}`);
    assert.dom('input').hasAttribute('update', undefined);
  });

  test('Does not update value when it is destroyed', async function(assert) {
    this.set('value', 'foo');
    await render(hbs`{{bsy-input value update=(action (mut value))}}`);
    run(() => this.clearRender());
    assert.equal(this.get('value'), 'foo', 'Value is still foo');
  });
});
