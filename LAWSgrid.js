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
    const rows = this.gridString.split(gridConstants.ROW);
    rows.shift(); // First row always empty
    rows.forEach((row, i) => {
      this.grid[i] = row
        .split("")
        .reduce(handleRow, {
          gridRow: [],
          multiplier: 0,
          modifiers: [],
          targetContainer: null,
          remainingElements: rows.length,
        }).gridRow;
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
 */

/**
 * @param {handleRowRetVal} retVal
 * @param {string} currentElement
 */
function handleRow(retVal, currentElement) {
  [processIfContainer, processIfContent, processIfModifier].forEach((proc) => proc(retVal, currentElement));
  return retVal;
}

/**
 * @param {handleRowRetVal} retVal
 * @param {string} currentElement
 */
function processIfContainer(retVal, currentElement) {
  if (GCTypes.containers.includes(currentElement)) {
    retVal.gridRow.push(retVal.targetContainer);
    // TODO: More, assign new target
  }
}
function processIfContent(retVal, currentElement) {}
function processIfModifier(retVal, currentElement) {}
