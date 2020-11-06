import addEntityHTML from '../html/add-entity.html';

export default class AddEntity {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.els = {
      addEntity: null,
      btns: {
        primaryAdd: null,
        secondaryAdd: null,
        cancel: null,
      },
      additionForm: null,
      textField: null,
    };

    this.selectors = {
      addEntity: '[data-widget="addEntity"]',
      btns: {
        primaryAdd: '[data-btn="primaryAdd"]',
        cancel: '[data-btn="cancel"]',
      },
      additionForm: '[data-form="addition"]',
      textField: '[data-field="cardText"]',
    };

    // Задается в Column.js в методе init()
    this.onPrimaryAddClick = null;

    this.init();
  }

  init() {
    this.parentEl.insertAdjacentHTML('beforeend', addEntityHTML);

    this.els.addEntity = this.parentEl.querySelector(this.selectors.addEntity);
    this.els.addEntity.addEventListener('click', this.onAddEntityClick.bind(this));

    this.els.btns.primaryAdd = this.els.addEntity.querySelector(this.selectors.btns.primaryAdd);
    this.els.btns.cancel = this.els.addEntity.querySelector(this.selectors.btns.cancel);

    // Вставка крестика. Если прописать символ сразу в html файле,
    // то в итоговой разметке до и после крестика будут переносы строк и пробелы.
    this.els.btns.cancel.insertAdjacentHTML('afterbegin', '&#10006');

    this.els.additionForm = this.els.addEntity.querySelector(this.selectors.additionForm);
    this.els.textField = this.els.addEntity.querySelector(this.selectors.textField);
  }

  onAddEntityClick(event) {
    event.preventDefault();
    const { target } = event;
    if (!target.dataset.btn) return;

    const { btn } = target.dataset;
    if (btn === 'primaryAdd') {
      target.dataset.visibility = 'hidden';
      this.els.additionForm.removeAttribute('data-visibility');
      this.els.textField.focus();
      return;
    }

    if (btn === 'cancel') {
      this.els.additionForm.dataset.visibility = 'hidden';
      this.els.btns.primaryAdd.removeAttribute('data-visibility');
      return;
    }

    if (btn === 'secondaryAdd') {
      if (this.els.textField.value === '') return;
      const cardText = this.els.textField.value;
      this.els.textField.value = '';
      this.els.textField.focus();
      this.onPrimaryAddClick(cardText);
    }
  }
}
