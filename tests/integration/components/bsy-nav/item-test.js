import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bsy-nav/item', 'Integration | Component | bsy nav/item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{bsy-nav/item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#bsy-nav/item}}
      template block text
    {{/bsy-nav/item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
