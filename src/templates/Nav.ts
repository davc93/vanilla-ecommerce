export class Nav {
  public pages: string[];
  constructor(
    public logo:string,
    public menuIcon:string,
    ...pages: string[]
  ){
    this.pages = pages
  }

  build(){
    const nav = document.createElement('nav');
    const logoContainer = document.createElement('div');
    logoContainer.className = 'nav__logo-container'
    const logo = document.createElement('img');
    logo.className = 'nav__logo';
    logo.src = this.logo
    const menuContainer = document.createElement('div');
    menuContainer.className = 'nav__menus';
    const menuMobile = document.createElement('ul');
    menuMobile.className = 'nav__mobile hidden';
    const menuDesktop = document.createElement('ul');
    menuDesktop.className = 'nav__desktop'
    const mobileIcon = document.createElement('button');
    mobileIcon.className = 'nav__menu-icon'
    mobileIcon.innerHTML = this.menuIcon;

    this.pages.forEach((page)=>{
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = page;
      a.href = `/#${page}`;
      li.append(a);
      menuMobile.append(li);
    });
    this.pages.forEach((page)=>{
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = page;
      a.href = `/#${page}`;
      li.append(a);
      menuDesktop.append(li);
    });
    menuContainer.append(menuMobile,menuDesktop,mobileIcon);
    logoContainer.append(logo);
    nav.append(logoContainer,menuContainer);
    return nav;
  }

}
