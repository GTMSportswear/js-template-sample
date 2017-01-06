import { JsTemplateSample } from './js-template-sample';

let parentContainer, templateSample;

QUnit.module('Js Template Sample test', {
  beforeEach: () => {
    parentContainer = document.createElement('div');
    templateSample = new JsTemplateSample(parentContainer);
  } 
});

QUnit.test('should create Js Template Sample', assert => {
  assert.notEqual(parentContainer.innerHTML, null);
});

QUnit.test('should append element to parentContainer when output method is called', assert => {
  templateSample.output();
  assert.equal(parentContainer.innerHTML, '<div></div>');
});

QUnit.test('should remove element from parentContainer when remove method is called', assert => {
  templateSample.output();
  templateSample.remove();
  assert.equal(parentContainer.innerHTML, '');
}); 
