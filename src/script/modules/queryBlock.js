export default class QueryBlock{
  constructor(inputElement, buttonElement, callBack){
    this.buttonElement = buttonElement;
    this.inputElement = inputElement;
    this.callBack = callBack();
    this.func()
  }
  func(){
    this.buttonElement.addEventListener('click', this.callBack);
  }
}






