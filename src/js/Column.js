import columnHTML from '../html/column.html';
import columnCardHTML from '../html/column__card.html';
import HiddenTempEl from './utility';

import AddEntity from './AddEntity';

export default class Column {
  constructor(title, dataFromLS) {
    this.parentEl = null;
    this.els = {
      column: null,
      title: null,
      cardsList: null,
    };

    this.selectors = {
      column: '[data-board="column"]',
      title: '[data-column="title"]',
      cardsList: '[data-column="cards-list"]',
      card: '[data-cards-list="card"]',
    };

    this.entity = {
      addCard: null,
    };

    // Массив с данными карточек в виде объекта { el, text }
    this.cardsList = [];

    // Задаем в Board.js в методе init()
    this.updateLS = null;

    this.init(title, dataFromLS);
  }

  init(title, dataFromLS) {
    let htEL = new HiddenTempEl(columnHTML).el;
    this.els.column = htEL.querySelector(this.selectors.column);
    this.els.title = this.els.column.querySelector(this.selectors.title);
    this.els.title.textContent = title;

    this.els.cardsList = this.els.column.querySelector(this.selectors.cardsList);
    dataFromLS.forEach((cardText) => this.onAddCard(cardText, true));

    this.entity.addCard = new AddEntity(this.els.column);
    this.entity.addCard.onPrimaryAddClick = this.onAddCard.bind(this);
    this.els.column.remove();

    htEL.remove();
    htEL = null;
  }

  appendToDOM(parentEl) {
    this.parentEl = parentEl;
    this.parentEl.append(this.els.column);
  }

  onAddCard(text, isFromLS = false) {
    let htEl = new HiddenTempEl(columnCardHTML).el;
    const el = htEl.querySelector(this.selectors.card);
    el.textContent = text;
    htEl.remove();
    htEl = null;

    this.cardsList.push({ el, text });
    this.els.cardsList.append(el);
    if (!isFromLS) this.updateLS();
  }

  // Метод передается через Board в CardBtnDelete
  // currentCard - приходит из Board
  // cardEl - из CatBtnDelete
  onDeleteCard(currentCard, cardEl) {
    // Нужно обнулить currentCard.el чтобы сымитировать выход курсора из удаленного элемента.
    // eslint-disable-next-line no-param-reassign
    currentCard.el = null;
    this.deleteCardFromData(cardEl);
    cardEl.remove();
    this.updateLS();
  }

  insertDraggedCard(draggedCard, cursorY, isSameColumn) {
    // Находим первую карточку, по отношению к которой курсор будет выше,
    // т.е. Y координата курсора меньше Y координаты середины карточки.
    let closestCardIndex = this.cardsList.findIndex((card) => {
      const cardRect = card.el.getBoundingClientRect();
      const cardMiddleY = cardRect.top + cardRect.height / 2;
      return cursorY < cardMiddleY;
    });

    // Если такая карточка есть
    if (closestCardIndex !== -1) {
      const closestCard = this.cardsList[closestCardIndex];

      // Если ближайшая карточка и перемещаемая одна и та же, то выходим.
      if (closestCard.el === draggedCard.el) return;

      // Вставляем перед ближайшей карточкой
      this.cardsList[closestCardIndex].el.before(draggedCard.el);

      // Далее нужно обновить данные в списке (this.cardsList).
      // Если перемещение происходит внутри одной колонки, нужно удалить карточку со старого места,
      // а так же нужно скоректировать индекс ближайшей карточки, так как при удалении
      // перемещаемой карточки со старого места он может измениться.
      if (isSameColumn) {
        const draggedCardIndex = this.cardsList.findIndex((card) => card.el === draggedCard.el);
        if (draggedCardIndex < closestCardIndex) closestCardIndex -= 1;
        this.deleteCardFromData(draggedCard.el);
      }

      this.cardsList.splice(closestCardIndex, 0, draggedCard);

      // Если такой карточки нет, то это значит, что либо колонка пустая, либо курсор находится
      // ниже всех карточек, а значит в обоих случаях просто добавляем карточку в конец списка.
    } else {
      this.els.cardsList.append(draggedCard.el);
      if (isSameColumn) this.deleteCardFromData(draggedCard.el);
      this.cardsList.push(draggedCard);
    }
  }

  getCardsText() {
    const cardsText = [];
    this.cardsList.forEach((card) => {
      cardsText.push(card.text);
    });
    return cardsText;
  }

  getCard(cardEl) {
    return this.cardsList.find((card) => card.el === cardEl);
  }

  deleteCardFromData(cardEl) {
    this.cardsList = this.cardsList.filter((card) => card.el !== cardEl);
  }
}
