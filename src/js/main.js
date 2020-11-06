import Board from './Board';

const boardEl = document.querySelector('[data-widget="board"]');

const board = new Board(boardEl);

board.init();
