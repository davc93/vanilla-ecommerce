export const svgCreate = (svg:string): Element =>{
  const svgContainer = document.createElement('div');
  svgContainer.innerHTML = svg;
  return svgContainer;
}
