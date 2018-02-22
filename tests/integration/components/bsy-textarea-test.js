import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

moduleForComponent('bsy-textarea', 'Integration | Component | bsy-textarea', {
  integration: true
});

test('It renders a textarea', function(assert) {
  this.render(hbs`{{bsy-textarea}}`);
  assert.ok(find('textarea'), 'a textarea was rendered');
});
