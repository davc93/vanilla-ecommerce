export class Card {

  constructor(
    public img: string,
    public titleType: 'h2' | 'h3' | 'h4' = 'h3',
    public titleText: string,
    public htmlClass: string = 'card',
    public text: string,

  ){  }

  build(){
    const article = document.createElement('article');
    article.className = this.htmlClass;
    const img = document.createElement('img');
    img.className = `${this.htmlClass}__img`
    img.src = this.img
    const title = document.createElement(this.titleType);
    title.textContent = this.titleText;
    const textNode = document.createElement('p');
    textNode.textContent = this.text;
    article.append(img,title,textNode);
    return article;

  }

}
