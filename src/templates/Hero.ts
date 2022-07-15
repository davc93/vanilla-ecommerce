import { Nav } from "./Nav";

export class Hero {

  constructor(
    public htmlClass: string,
    public h1: string,
    public p1?: string,
    public p2?: string,
    public img?: string,
    public nav?: Nav
  ){

  }
  build(){
    const header = document.createElement('header');
    header.className = this.htmlClass
    const nav = this.nav;

    const headerContainer = document.createElement('div');
    headerContainer.className = `${this.htmlClass}__container`;
    const headerContainerText = document.createElement('div');
    headerContainer.className = `${this.htmlClass}__text`
    const h1 = document.createElement('h1');
    h1.textContent = this.h1
    const p1 = document.createElement('p');
    p1.textContent = this.p1;
    const p2 = document.createElement('p');
    p2.textContent = this.p2
    const img = document.createElement('img');
    img.className = `${this.htmlClass}__img`
    img.src = this.img
    headerContainerText.append(p1,h1,p2);
    headerContainer.append(headerContainerText,img);
    header.append(nav.build(),headerContainer);
    return header;
  }


}
