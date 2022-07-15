export const toggle = (event: Event) => {
  const menu = document.querySelector('.nav__mobile')
  if(menu.classList.contains('hidden')){
    console.log('Debe aparecer');
    menu.classList.remove('hidden');
    return
  }
  menu.classList.add('hidden');
}

