import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bsy-nav/link', 'Integration | Component | bsy nav/link', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{bsy-nav/link}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#bsy-nav/link}}
      template block text
    {{/bsy-nav/link}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
