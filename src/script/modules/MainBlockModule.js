export default class HidenOrShowedBlock {
  constructor(element, currentClass) {
    this.element = element;
    this.currentClass = currentClass;
    this.hide = true;
    this.makeHide = this._makeHide.bind(this, this.element, this.currentClass);
    this.makeVisible = this._makeVisible.bind(this, this.element, this.currentClass);
  };
  _makeHide(element, currentClass) {
    this.hide = true;
    element.classList.add(currentClass + '_closed');
  };
  _makeVisible(element, currentClass) {
    this.hide = false;
    element.classList.remove(currentClass + '_closed');
  };
  _toggleHideVisible() {
    if (this.hide) {
      this.makeHide();
    } else {
      this.hide = false;
      this.makeVisible();
    };
  };
};