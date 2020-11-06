/* eslint-disable max-len */
import Column from './Column';
import CardBtnDelete from './CardBtnDelete';

export default class Board {
  constructor(boardEl) {
    this.els = {
      board: boardEl,
    };

    this.entity = {
      columns: [],
      cardBtnDelete: new CardBtnDelete(),
    };

    this.selectors = {
      column: null,
      columnCard: null,
    };

    // Объект DnD содержит все необходимые данные для перемещения карточки
    this.DnD = {
      draggedCard: null, // Объект перетаскиваемой карточки со свойствами: { el, text }
      cardCloneEl: null, // Клон карточки, при перетаскивании следует за курсором мыши

      startColumn: null, // Колонка, в которой лежит карточка при начале перетаскивания
      destColumn: null, // Колонка, в которой лежит карточка в конце перетаскивания

      // Разница между координатами курсора и начальным положением перетаскиваемой карточки.
      // Используется для того, что бы перетаскивать карточку за то место, за которое она была схвачена.
      cardCloneCoordDiff: { x: null, y: null },
      cursorStartCoord: { x: null, y: null },

      isDragStarted: false,
      isCardCloneAppended: false,

      handlers: {
        onCardDrag: this.onCardDrag.bind(this),
      },
    };

    // Карточка, на которую наведен курсор мыши
    this.currentCard = { el: null };
  }

  init() {
    const dataFromLS = this.getDataFromLS();
    const columnsTitle = ['TODO', 'IN PROGRESS', 'COMPLETED'];

    // Создаем колонки и заполняем их данными из localstorage
    for (let i = 0; i < 3; i += 1) {
      const column = new Column(columnsTitle[i], dataFromLS[i]);
      column.updateLS = this.updateLS.bind(this);
      this.entity.columns.push(column);
    }
    this.entity.columns.forEach((column) => column.appendToDOM(this.els.board));

    this.selectors.column = this.entity.columns[0].selectors.column;
    this.selectors.columnCard = this.entity.columns[0].selectors.card;

    this.els.board.addEventListener('mouseover', this.onBoardMouseover.bind(this));
    this.els.board.addEventListener('mouseout', this.onBoardMouseout.bind(this));
    this.els.board.addEventListener('mousedown', this.onBoardMousedown.bind(this));
    this.els.board.addEventListener('mouseup', this.onBoardMouseup.bind(this));
  }

  // eslint-disable-next-line class-methods-use-this
  getDataFromLS() {
    const data = localStorage.getItem('data');
    if (data) return JSON.parse(data);
    return [[], [], []];
  }

  // При наведении курсора мыши на карточку, должна появлятся кнопка удаления
  // Если происходит процесс перетаскивания карточки, то, проходя через другие карточки,
  // кнопка на них не появляется.
  onBoardMouseover(event) {
    if (this.DnD.cardCloneEl) return;
    const { target } = event;
    if (this.currentCard.el) return;
    if (target.closest(this.selectors.columnCard)) {
      this.currentCard.el = target;
      const currColumnEl = target.closest(this.selectors.column);
      const currColumn = this.entity.columns.find((column) => column.els.column === currColumnEl);

      // Передаем метод onDeleteCard() из Column.js в сущность cardBtnDelete
      this.entity.cardBtnDelete.onClick = currColumn.onDeleteCard.bind(currColumn, this.currentCard);
      this.entity.cardBtnDelete.appendToDOM(target);
    }
  }

  // Если курсор мыши покидает карточку, то кнопка удаления на ней пропадает
  onBoardMouseout(event) {
    const { target } = event;
    if (target.dataset.cardsList === 'card') {
      const { relatedTarget } = event;
      if (relatedTarget.closest(this.selectors.columnCard)) return;
      this.currentCard.el = null;
      this.entity.cardBtnDelete.removeFromDOM();
    }
  }

  onBoardMousedown(event) {
    const { target } = event;
    if (target.dataset.cardsList !== 'card') return;

    this.DnD.startColumn = this.entity.columns.find((column) => column.els.column === target.closest(this.selectors.column));
    this.DnD.draggedCard = this.DnD.startColumn.getCard(target);

    this.DnD.cardCloneEl = this.DnD.draggedCard.el.cloneNode(true);
    const { width: cardWidth } = this.DnD.draggedCard.el.getBoundingClientRect();
    this.DnD.cardCloneEl.style.width = `${cardWidth}px`;

    // Задаем начальные координаты клону перетаскиваемой карточки такие как у самой перетаскиваемой карточки
    const draggedCardCoord = this.DnD.draggedCard.el.getBoundingClientRect();
    this.DnD.cardCloneEl.style.top = `${draggedCardCoord.y}px`;
    this.DnD.cardCloneEl.style.left = `${draggedCardCoord.x}px`;

    // Вычисляем разницу координат между курсором и начальным положением перетаскиваемой карточки
    this.DnD.cardCloneCoordDiff.y = event.pageY - draggedCardCoord.y;
    this.DnD.cardCloneCoordDiff.x = event.pageX - draggedCardCoord.x;

    this.DnD.cursorStartCoord.y = event.pageY;
    this.DnD.cursorStartCoord.x = event.pageX;

    this.els.board.addEventListener('mousemove', this.DnD.handlers.onCardDrag);
  }

  // Действия выполняемые при перемещении курсора (после нажатия кнопки мыши и до ее отпускания)
  // По сути перетаскивание карточки по колонкам происходит уже в момент перемещения курсора,
  // отпускание кнопки лишь прекращает этот прцесс.
  onCardDrag(event) {
    // Убирает выделение элементов при перемещении курсора
    // (в chrome - ok, в firefox - выделение остается)
    event.preventDefault();

    const { pageY: cursorY, pageX: cursorX } = event;

    // Не начинать перетаскивание, пока курсор не сдвинется более чем на 5 пикселей.
    // Если курсор находится в пределах 5 пикселей и перетаскивание не началось
    // (this.DnD.isDragStarted === false), то выходим
    if ((Math.abs(cursorY - this.DnD.cursorStartCoord.y) <= 5)
      && (Math.abs(cursorX - this.DnD.cursorStartCoord.x) <= 5)
      && (!this.DnD.isDragStarted)) return;

    // Перетаскивание начинается после того, как курсор сдвинется более чем на 5 пикселей
    // от своей начальной позиции при нажатии кнопки мыши. После этого следует установить
    // this.DnD.isDragStarted = true, что бы при повторном попадании курсора в зону 5
    // пикселей перемещение продолжалось.
    this.DnD.isDragStarted = true;

    this.DnD.cardCloneEl.dataset.state = 'cardClone';
    this.DnD.cardCloneEl.style.top = `${cursorY - this.DnD.cardCloneCoordDiff.y}px`;
    this.DnD.cardCloneEl.style.left = `${cursorX - this.DnD.cardCloneCoordDiff.x}px`;
    this.DnD.cardCloneEl.dataset.cursor = 'grabbing';

    // Добавление клона перетаскиваемой карточки в DOM, происходит только во время перемещения мыши,
    // а не в после сыбытия 'mousedown', так как нажатие на карточке может быть не только для перетаскивания.
    // Проверка на то, что бы добавление произошло только один раз, но, возможно, в этом нет необходимости,
    // так как повторный append() не размножает элементы.
    if (!this.DnD.isCardCloneAppended) {
      this.els.board.append(this.DnD.cardCloneEl);
      this.DnD.isCardCloneAppended = true;
    }

    this.DnD.draggedCard.el.dataset.state = 'draggedCard';

    const cardCloneRect = this.DnD.cardCloneEl.getBoundingClientRect();
    // За x берем координату середины карточки по горизонтали
    const closestEls = document.elementsFromPoint(cardCloneRect.left + cardCloneRect.width / 2, event.clientY);

    // Если перетаскивание происходит не над колонкой или происходит над самой перетаскиваемой карточкой, то выходим.
    const closestColumnEl = closestEls.find((element) => element.dataset.board === 'column');
    const closestCard = closestEls.find((element) => element.dataset.state === 'draggedCard');
    if (!closestColumnEl || closestCard) return;

    // Предварительные условия пройдены, теперь точно нужно переместить карточку.
    // Определяем в какую колонку будет перемещена карточка.
    this.DnD.destColumn = this.entity.columns.find((column) => column.els.column === closestColumnEl);

    // Определяем, происходит ли перетаскивание в нутри одной колонки или нет.
    // Если карточка переносится над другой колонкой, то удалем карточку из данных в начальной колонке
    // и переназначаем начальную колонку.
    let isSameColumn = true;
    if (this.DnD.startColumn !== this.DnD.destColumn) {
      isSameColumn = false;
      this.DnD.startColumn.deleteCardFromData(this.DnD.draggedCard.el);
      this.DnD.startColumn = this.DnD.destColumn;
    }

    // Вызываем у колонки метод вставки карточки
    this.DnD.destColumn.insertDraggedCard(this.DnD.draggedCard, event.clientY, isSameColumn);
  }

  onBoardMouseup(event) {
    const { target } = event;
    if (target.dataset.cardsList !== 'card') return;
    this.els.board.removeEventListener('mousemove', this.DnD.handlers.onCardDrag);
    this.DnD.draggedCard.el.removeAttribute('data-state');
    this.DnD.cardCloneEl.remove();
    this.DnD.cardCloneEl = null;
    this.DnD.isCardCloneAppended = false;
    this.DnD.isDragStarted = false;
    this.updateLS();
  }

  // Обновляем данные по всем column в local storage
  updateLS() {
    const columnsCardsData = [];
    this.entity.columns.forEach((column) => {
      columnsCardsData.push(column.getCardsText());
    });
    localStorage.setItem('data', JSON.stringify(columnsCardsData));
  }
}
