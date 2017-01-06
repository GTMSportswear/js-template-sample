export class JsTemplateSample {
    public output(){
        const container = document.createElement('div');
        this.parentContainer.appendChild(container);
    }

    constructor(private parentContainer: Element){ }
}
