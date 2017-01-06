export interface TemplateSample{

}

export class JsTemplateSample {
  private templateContainer: Element; 

  public output(): void {
    this.templateContainer = document.createElement('div');
    this.parentContainer.appendChild(this.templateContainer);
  }

  public remove(): void {
    this.parentContainer.removeChild(this.templateContainer);
  }

  constructor(private parentContainer: Element){ }
}
