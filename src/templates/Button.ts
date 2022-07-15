export class Button {

  constructor(
    public funcionality: 'a' | 'button',
    public icon?: string,
    public htmlClass?: string,
    public text?: string,
    public id?:string
  ){}

  build(){

    const button = document.createElement(this.funcionality);
    button.className = this.htmlClass;
    button.innerHTML = this.icon;
    button.append(this.text);
    return button;
  }
}
