import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bsy-switch', 'Integration | Component | bsy switch', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{bsy-switch}}`);

  assert.equal(this.$().text().trim().search(/Off/) !== -1, true,
    'should render default Off label');
  assert.equal(this.$().text().trim().search(/On/) !== -1, true,
    'should render default On label');
});
