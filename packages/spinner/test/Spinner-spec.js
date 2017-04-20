import Vue from 'vue';
import Spinner from '../src/Spinner.vue';
import 'jquery';
import 'jasmine-jquery';

describe('Spinner', function() {
  const fixture = setFixtures(`<div class=".js-fixture"></div>`);
  
  afterEach(function() {
    this.spin.$destroy();
  });

  function mountSpinnerInstance(propsData = {}) {
    const ExtSpin = Vue.extend(Spinner);
    const extSpin = new ExtSpin({ propsData });
    extSpin.$mount(fixture[0]);
    return extSpin;
  };

  it('should show only the progress state when no "text" has been defined in props.', function() {
    this.spin = mountSpinnerInstance();
    expect(typeof this.spin.$refs.text).toBe('undefined');
  });

  it('should render "text" (as a label) when it has been defined in props.', function() {
    const text = 'Some great informational text';
    this.spin = mountSpinnerInstance({ text });
    expect(this.spin.$refs.text.innerText).toBe(text);
  });
});
