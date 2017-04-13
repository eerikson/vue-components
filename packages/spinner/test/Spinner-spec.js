import Vue from 'vue';
import Spinner from '../src/Spinner.vue';
import 'jquery';
import 'jasmine-jquery';

describe('Spinner', function() {
  const fixtureClass = 'js-fixture';
  const fixtureSelector = `.${fixtureClass}`;

  beforeEach(function() {
    setFixtures(`<div class="${fixtureClass}"></div>`);
    this.spinner = new Vue(Spinner).$mount(fixtureSelector);
  });

  afterEach(function() {
    this.spinner.$destroy();
  });

  it('should show only the progress state when no label has been defined in props.', function() {
    expect(typeof this.spinner.$refs.text).toBe('undefined');
  });

  it('should render a label when it has been defined in props.', function(doneAsync) {
    const exampleText = 'Some great informational text';
    this.spinner.$on('updated', function() {
      expect(this.$refs.text.innerText).toBe(exampleText);
      doneAsync();
    });
    this.spinner.text = exampleText;
  });
});
