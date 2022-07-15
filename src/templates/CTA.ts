import { Button } from "./Button";

export class CTA {
  public icons: string[]

  constructor(
    public titleType: 'h1' | 'h2' | 'h3',
    public title: string,
    public textType?: 'p' | 'span',
    public text?: string,
    public button?: Button,
    public htmlClass?: string,

  ){
  }

  build(){
    const container = document.createElement('div');
    container.className = this.htmlClass;
    const title = document.createElement(this.titleType);
    title.textContent = this.title;
    const text = document.createElement(this.textType);
    text.textContent = this.text;
    const button = this.button.build();
    container.append(title,text,button);


    return container;
  }
}
