export class List{
  public list: string[];
  constructor(
    public listType: 'a' | 'span' ,
    public titleType?: 'h3' | 'h4',
    public title?: string,
    public htmlClass?: string,
    ...list: string[]

    ){
    this.list = list;
  }

  build(){
    const div = document.createElement('div');
    const title = document.createElement(this.titleType);
    title.textContent = this.title;
    div.append(title);
    const container = document.createElement('ul');
    container.className = this.htmlClass;

    this.list.forEach((item)=>{
      const li = document.createElement('li');
      const text = document.createElement(this.listType);
      li.append(text);
      container.append(li);
    })
    div.append(container);
    return div;


  }
}
