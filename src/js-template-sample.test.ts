import { JsTemplateSample } from './js-template-sample';

let parentContainer;

QUnit.module('Js Template Sample test', {
    beforeEach: () => parentContainer = document.createElement('div') 
});

QUnit.test('should create Js Template Sample', assert => {
    const templateSample = new JsTemplateSample(parentContainer);
    assert.notEqual(parentContainer.innerHTML, null);
});
