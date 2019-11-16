export default class HideOrVisualBlock{
  constructor(element, curentClass){
    this.element = element;
    this.curentClass = curentClass;
    this.hide = true;
    this.makeHide = this.makeHide.bind(this, this.element, this.curentClass);
    this.makeVisible = this.makeVisible.bind(this, this.element, this.curentClass);
  }
  makeHide(element, curentClass){
    this.hide = true;
    element.classList.add(curentClass + '_closed')
  }
  makeVisible(element, curentClass){
    this.hide = false;
    element.classList.remove(curentClass + '_closed')
  }
  toggleHideVisible(){
    if (this.hide) {
      this.makeHide();
    } else {
      this.hide = false;
      this.makeVisible();
    }
  }
}