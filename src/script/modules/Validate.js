export default class Validate{
  constructor(formElement, button, warningField){
    this.formElement = formElement;
    this.fieldInput = this.formElement.querySelector('input');
    this._makeDisable = this._makeDisable.bind(this);
    this.button = button;
    this.warningField = warningField;
    this._checkField = this._checkField.bind(this);
    this.fieldInput.addEventListener('input', this._checkField);

  }
  _checkField(){
    const pattern = /^([А-ЯЁёа-яёA-Za-z0-9_-\s№:?()!])*$/g;
    if (this.fieldInput.value.length < 1){
      this.warningField.textContent = 'Нужно ввести ключевое слово';
      this.warningField.classList.remove('header__error_closed');
      return this._makeDisable(this.button, true);
    }
    if (this.fieldInput.value.length < 2){
      this.warningField.textContent = 'Длинна должна быть > 2-х букв';
      this.warningField.classList.remove('header__error_closed');
      return this._makeDisable(this.button, true);
    }
    if (!pattern.test(this.fieldInput.value)) {
      this.warningField.textContent = 'В поиске недопустимый символ';
      this.warningField.classList.remove('header__error_closed');
      return this._makeDisable(this.button, true)
    }
    this.warningField.classList.add('header__error_closed');
    return this._makeDisable(this.button, false)
  }
  _makeDisable(elementButton, flag) {
    elementButton.disabled = flag
  }
}

