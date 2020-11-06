import cardBtnDeleteHTML from '../html/card-btn-delete.html';
import HiddenTempEl from './utility';

export default class CardBtnDelete {
  constructor() {
    this.parentEl = null;
    this.els = {
      btn: null,
    };

    this.selectors = {
      btn: '[data-card-btn="delete"]',
    };

    // Задается в Board.js в методе onBoardMouseover()
    this.onClick = null;

    this.init();
  }

  init() {
    let htEl = new HiddenTempEl(cardBtnDeleteHTML).el;
    this.els.btn = htEl.querySelector(this.selectors.btn);
    this.els.btn.insertAdjacentHTML('afterbegin', '&#10006');
    this.els.btn.addEventListener('click', this.onBtnClick.bind(this));

    htEl.remove();
    htEl = null;
  }

  appendToDOM(parentEl) {
    this.parentEl = parentEl;
    this.parentEl.append(this.els.btn);
  }

  removeFromDOM() {
    this.parentEl = null;
    this.els.btn.remove();
  }

  onBtnClick() {
    this.onClick(this.parentEl);
  }
}
