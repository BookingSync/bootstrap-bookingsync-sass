import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bsy-sheet.header', 'Integration | Component | bsy sheet.header', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{bsy-sheet.header}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#bsy-sheet.header}}
      template block text
    {{/bsy-sheet.header}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
