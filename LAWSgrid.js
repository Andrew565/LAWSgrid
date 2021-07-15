import { gridConstants, GCTypes } from "./gridConstants";

const acesUpLayout = "rd4sw";
const clearTheDungeonLayout = "r4sqr4sqr4sprd4sow";

/**
 * @typedef LAWSgridConfig
 * @prop {number} numRows
 * @prop {number} numCols
 * @prop {string} grid
 */

class LAWSgrid {
  /** @param {LAWSgridConfig} config */
  constructor(config) {
    this.numRows = config.numRows || 1;
    this.numCols = config.numCols || 1;
    this.gridString = config.grid;
    this.grid = [[]];

    this.createGrid();
  }

  createGrid() {
    const handleRowState = {
      gridRow: [],
      multiplier: 0,
      modifiers: [],
      targetContainer: null,
      remainingElements: rows.length
    };
    const rows = this.gridString.split(gridConstants.ROW);
    rows.shift(); // First row always empty
    rows.forEach((row, i) => {
      this.grid[i] = row.split("").reduce(handleRow, handleRowState).gridRow;
    });
  }

  layoutGrid() {
    this.grid.forEach((row) => {
      row.forEach((col) => {
        // apply mods
      });
    });
  }
}

/**
 * @typedef handleRowRetVal
 * @prop {any[]} gridRow
 * @prop {number} multiplier
 * @prop {string[]} modifiers
 * @prop {object} targetContainer
 * @prop {number} remainingElements
 *
 * @typedef {(retVal: handleRowRetVal, currentElement: string) => handleRowRetVal} rowSymbolHandler
 */

/**
 * @param {handleRowRetVal} retVal
 * @param {string} currentElement
 */
function handleRow(retVal, currentElement) {
  /** @type {{[x: string]: rowSymbolHandler}} */
  const processors = {
    containers: processContainer,
    content: processContent,
    modifiers: processModifier
  };

  let gridType = Object.keys(GCTypes).filter((type) =>
    type.includes(currentElement)
  )[0];
  return processors[gridType](retVal, currentElement);
}

/** @type {rowSymbolHandler} */
function processContainer(retVal, currentElement) {
  retVal.gridRow.push(retVal.targetContainer);
  // TODO: More, assign new target
}

/** @type {rowSymbolHandler} */
function processContent(retVal, currentElement) {}

/** @type {rowSymbolHandler} */
function processModifier(retVal, currentElement) {}
